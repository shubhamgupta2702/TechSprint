import React from 'react'
import {NavLink} from "react-router-dom";
import mandalaimg from '../assets/mandalaimg.jpg'
import puzzleimg from '../assets/puzzleimg.jpg'
import bubbleimg from '../assets/bubbleimg.jpg'
const GamesCategory = () => {
  return (
    <>
    <div className='flex flex-wrap pt-28 pb-9 items-center justify-center gap-8'>

      <NavLink to="mandala">
      <div className="p-4 bg-white rounded-lg border shadow-sm max-w-80 ">
    <p className="text-gray-900 text-xl font-semibold uppercase">Mandala</p>
    
    <img className="rounded-md" src={mandalaimg} alt="girlWithHeadphone"/>
</div>
</NavLink>
<NavLink to="puzzle">
      <div className="px-4 py-14 bg-white rounded-lg border shadow-sm max-w-80">
    <p className="text-gray-900 text-xl font-semibold uppercase">Puzzle</p>
    
    <img className="rounded-md" src={puzzleimg} alt="girlWithHeadphone"/>
</div>
</NavLink>
<NavLink to="bubble">
      <div className="px-4 py-28 bg-white rounded-lg border shadow-sm max-w-80">
    <p className="text-gray-900 text-xl font-semibold uppercase">Bubble</p>
    
    <img className="rounded-md" src={bubbleimg} alt="girlWithHeadphone"/>
</div>
</NavLink>
</div>
    </>
  )
}

export default GamesCategory
