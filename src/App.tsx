import { useRef } from "react";
import "./index.css";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = (song: string) => {
    if (audioRef.current) {
      audioRef.current.src = song;
      audioRef.current.play();
    }
  };

  const songs = [
    {
      title: "BLACKOUT",
      artist: "Canon X",
      file: "/songs/Blackout.mp3",
    },
    {
      title: "BLACKOUT STREET",
      artist: "Canon X",
      file: "/songs/blackoutstreet.mp3.mp3",
    },
    {
      title: "DESI CANNON RELOADED",
      artist: "Canon X",
      file: "/songs/Desi Cannon Reloaded.mp3",
    },
    {
      title: "CANON X OVERDRIVE",
      artist: "Canon X",
      file: "/songs/Canon X Overdrive.mp3",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>Crimson Beat Stream</h1>

      <p style={{ color: "gray", marginBottom: "40px" }}>
        Canon X Official Music Platform
      </p>

      {songs.map((song, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#0f0f0f",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        >
          <h2>{song.title}</h2>

          <p style={{ color: "gray" }}>by {song.artist}</p>

          <button
            onClick={() => playSong(song.file)}
            style={{
              marginTop: "15px",
              padding: "12px 25px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            PLAY
          </button>
        </div>
      ))}

      <audio ref={audioRef} controls style={{ width: "100%" }} />
    </div>
  );
}
