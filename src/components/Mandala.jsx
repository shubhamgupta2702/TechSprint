import { useEffect, useRef } from 'react';

const Mandala = () => {
  const canvasRef = useRef(null);
  const tempCanvasRef = useRef(null);
  const backgroundRef = useRef(null);
  
  // Constants and state
  let ctx, tempCtx;
  let isPainting = false;
  const sectors = 16;
  const angle = (360 * Math.PI) / 180 / sectors;
  let start = { x: null, y: null };
  let r;
  let cx, cy;
  let mandalaBoundary, pieSliceBoundary, inversePieSliceBoundary;
  const backgroundColor = '#eee';

  useEffect(() => {
    // Initialize canvas and context
    const canvas = canvasRef.current;
    const tempCanvas = tempCanvasRef.current;
    
    ctx = canvas.getContext('2d');
    tempCtx = tempCanvas.getContext('2d');
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      
      cx = Math.round(canvas.width / 2);
      cy = Math.round(canvas.height / 2);
      r = Math.min(cx, cy) - 40;
      
      reset();
      addText();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Event listeners
    const handleMouseDown = (e) => startDraw(e);
    const handleMouseUp = (e) => endDraw(e);
    const handleMouseMove = (e) => draw(e);
    const handleTouchStart = (e) => startDraw(e.touches[0]);
    const handleTouchEnd = (e) => endDraw(e.changedTouches[0]);
    const handleTouchMove = (e) => {
      e.preventDefault();
      draw(e.touches[0]);
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const reset = () => {
    mandalaBoundary = new Path2D();
    mandalaBoundary.arc(cx, cy, r, 0, 2 * Math.PI);

    pieSliceBoundary = new Path2D();
    pieSliceBoundary.arc(cx, cy, r, 0, (2 * Math.PI) / sectors);
    pieSliceBoundary.lineTo(cx, cy);
    pieSliceBoundary.closePath();

    inversePieSliceBoundary = new Path2D();
    inversePieSliceBoundary.arc(cx, cy, r, (2 * Math.PI) / sectors, 2 * Math.PI);
    inversePieSliceBoundary.lineTo(cx, cy);
    inversePieSliceBoundary.closePath();

    backgroundRef.current.style.backgroundColor = backgroundColor;
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = '#fff';
    ctx.fill(mandalaBoundary);
  };

  const startDraw = (event) => {
    if (event.button && event.button !== 0) {
      return;
    }

    ctx.resetTransform();
    tempCtx.resetTransform();
    reset();
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(50, 50, 50, 1.0)';
    isPainting = true;
  };

  const endDraw = (event) => {
    ctx.resetTransform();
    tempCtx.resetTransform();
    isPainting = false;
    start.x = start.y = null;
    let startTime = performance.now();
    fillWhites();
    let endTime = performance.now();
    console.log(`Fill took ${Math.round(endTime - startTime)} ms`);
  };

  const draw = (e) => {
    if (!isPainting) {
      return;
    }

    let x = e.clientX;
    let y = e.clientY;

    if (!ctx.isPointInPath(mandalaBoundary, x, y)) {
      return;
    }

    if (start.x !== null) {
      for (let i = 0; i < sectors; i++) {
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(x, y);
        ctx.moveTo(cx * 2 - start.x, start.y);
        ctx.lineTo(cx * 2 - x, y);
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        ctx.translate(-cx, -cy);
      }
      ctx.stroke();
    }
    ctx.rotate(0);
    ctx.resetTransform();
    start.x = x;
    start.y = y;
  };

  class Color {
    constructor(r, g, b, a) {
      if (typeof r === 'string') {
        this.r = Number(`0x${r[0]}${r[1]}`);
        this.g = Number(`0x${r[2]}${r[3]}`);
        this.b = Number(`0x${r[4]}${r[5]}`);
        this.a = 255;
      } else {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
      }
    }

    equals(other) {
      return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
    }

    isWhite() {
      return this.r === 255 && this.g === 255 && this.b === 255 && this.a === 255;
    }
  }

  const getColorIndicesForCoord = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };

  const getColorFromCoord = (x, y, image, width) => {
    const [redIndex, greenIndex, blueIndex, alphaIndex] = getColorIndicesForCoord(x, y, width);
    const red = image.data[redIndex];
    const green = image.data[greenIndex];
    const blue = image.data[blueIndex];
    const alpha = image.data[alphaIndex];
    return new Color(red, green, blue, alpha);
  };

  const floodFill = (image, x, y, fillColor, width, height) => {
    const thisPixelColor = getColorFromCoord(x, y, image, width);
    if (thisPixelColor.equals(fillColor)) {
      return;
    }
    fill(image, x, y, fillColor, thisPixelColor, width, height);
  };

  const fill = (image, x, y, fillColor, previousColor, width, height) => {
    if (x < 0 || y < 0 || x > width || y > height) {
      return;
    }

    const [redIndex, greenIndex, blueIndex, alphaIndex] = getColorIndicesForCoord(x, y, width);
    const red = image.data[redIndex];
    const green = image.data[greenIndex];
    const blue = image.data[blueIndex];
    const alpha = image.data[alphaIndex];
    const thisPixel = new Color(red, green, blue, alpha);

    if (!thisPixel.equals(previousColor)) {
      return;
    }

    image.data[redIndex] = fillColor.r;
    image.data[greenIndex] = fillColor.g;
    image.data[blueIndex] = fillColor.b;
    image.data[alphaIndex] = fillColor.a;

    try {
      fill(image, x - 1, y, fillColor, previousColor, width, height);
      fill(image, x + 1, y, fillColor, previousColor, width, height);
      fill(image, x, y - 1, fillColor, previousColor, width, height);
      fill(image, x, y + 1, fillColor, previousColor, width, height);
    } catch (e) {
      console.log('Area too large. Skipping');
    }
  };

  const duplicateFillToOtherSectors = (image, width) => {
    for (let y = 0; y < canvasRef.current.height; y++) {
      for (let x = 0; x < canvasRef.current.width; x++) {
        if (!ctx.isPointInPath(pieSliceBoundary, x, y)) {
          const [redIndex, greenIndex, blueIndex, alphaIndex] = getColorIndicesForCoord(x, y, width);
          image.data[redIndex] = 0;
          image.data[greenIndex] = 0;
          image.data[blueIndex] = 0;
          image.data[alphaIndex] = 0;
        }
      }
    }
    ctx.putImageData(image, 0, 0);

    tempCtx.drawImage(ctx.canvas, 0, 0);
    tempCtx.globalCompositeOperation = 'source-over';
    tempCtx.translate(cx, cy);
    tempCtx.scale(1, -1);
    tempCtx.translate(-cx, -cy);
    tempCtx.drawImage(tempCtx.canvas, 0, 0);
    tempCtx.globalCompositeOperation = 'copy';

    backgroundRef.current.style.backgroundColor = '#fff';

    for (let i = 0; i < sectors; i++) {
      ctx.translate(cx, cy);
      ctx.rotate(2 * angle);
      ctx.translate(-cx, -cy);
      ctx.drawImage(tempCtx.canvas, 0, 0);
    }
  };

  const makeColorIterator = () => {
    let iterationCount = 0;
    const palettes = [
      [new Color('cb997e'), new Color('ddbea9'), new Color('ffe8d6'), new Color('b7b7a4'), new Color('a5a58d'), new Color('6b705c')],
      [new Color('005f73'), new Color('0a9396'), new Color('94d2bd'), new Color('e9d8a6'), new Color('ee9b00'), new Color('ca6702'), new Color('bb3e03'), new Color('ae2012')],
      [new Color('6a040f'), new Color('9d0208'), new Color('d00000'), new Color('dc2f02'), new Color('e85d04'), new Color('f48c06'), new Color('faa307'), new Color('ffba08')],
      [new Color('10451d'), new Color('155d27'), new Color('1a7431'), new Color('208b3a'), new Color('25a244'), new Color('2dc653'), new Color('4ad66d'), new Color('92e6a7')],
      [new Color('03045e'), new Color('023e8a'), new Color('0077b6'), new Color('0096c7'), new Color('00b4d8'), new Color('48cae4'), new Color('90e0ef'), new Color('ade8f4')],
      [new Color('d8f3dc'), new Color('b7e4c7'), new Color('95d5b2'), new Color('74c69d'), new Color('52b788'), new Color('40916c'), new Color('2d6a4f'), new Color('1b4332')],
    ];

    const colors = palettes[Math.floor(Math.random() * palettes.length)];

    const rangeIterator = {
      next: function () {
        iterationCount++;
        return colors[iterationCount % colors.length];
      },
    };
    return rangeIterator;
  };

  const fillWhites = async () => {
    console.log('Filling...');
    const colorIterator = makeColorIterator();
    let imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

    for (let y = cy; y <= canvasRef.current.height; y++) {
      for (let x = cx; x <= canvasRef.current.width; x++) {
        if (ctx.isPointInPath(pieSliceBoundary, x, y)) {
          const thisPixelColor = getColorFromCoord(x, y, imageData, canvasRef.current.width);
          if (thisPixelColor.isWhite()) {
            floodFill(imageData, x, y, colorIterator.next(), canvasRef.current.width, canvasRef.current.height);
          }
        }
      }
    }
    ctx.putImageData(imageData, 0, 0);
    duplicateFillToOtherSectors(imageData, canvasRef.current.width);
  };

  const addText = () => {
    ctx.font = '60px Verdana';
    ctx.fillStyle = backgroundColor;
    ctx.textAlign = 'center';
    ctx.fillText('Draw', cx, cy - 70);
    ctx.fillText('Wait', cx, cy);
    ctx.fillText('Watch', cx, cy + 70);
  };

  return (
    <div className="container" id="background" ref={backgroundRef}>
      <div className="drawing-board mt-12 w-max">
        <canvas id="mandala" ref={canvasRef}></canvas>
        <canvas id="temp-mandala" ref={tempCanvasRef} style={{ display: 'none' }}></canvas>
      </div>
    </div>
  );
};

export default Mandala;