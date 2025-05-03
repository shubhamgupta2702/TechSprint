import { useState, useRef } from 'react';
import './Music.css';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  const songs = [
    {
        title: "Ocean Waves",
        description: "Calming ocean sounds for relaxation",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Replace with actual ocean waves audio
      },
      {
        title: "Forest Ambience",
        description: "Gentle forest sounds with birds",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // Replace with actual forest audio
      },
      {
        title: "Rainfall",
        description: "Soothing rain sounds",
        audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" // Replace with actual rain audio
      }
  ];

  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <h2>Healing & Meditation Music Player</h2>
      
      <div className="now-playing">
        <p>Now Playing:</p>
        <h3>{currentSong.title}</h3>
        <p>{currentSong.description}</p>
      </div>

      <div className="controls">
        <button onClick={playPrevious}>Previous</button>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={playNext}>Next</button>
      </div>

      <div className="playlist">
        <h4>Playlist:</h4>
        <ul>
          {songs.map((song, index) => (
            <li 
              key={index} 
              className={index === currentSongIndex ? 'active' : ''}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
            >
              {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onEnded={playNext}
        autoPlay={isPlaying}
      />
    </div>
  );
};

export default Music;