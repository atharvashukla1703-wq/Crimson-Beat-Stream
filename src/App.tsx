import { useRef } from "react";
import "./index.css";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = async (song: string) => {
    if (audioRef.current) {
      audioRef.current.src = song;

      try {
        await audioRef.current.play();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const songs = [
    {
      title: "BLACKOUT",
      artist: "Canon X",
      file: "/blackout.mp3",
    },
    {
      title: "BLACKOUT STREET",
      artist: "Canon X",
      file: "/blackoutstreet.mp3.mp3",
    },
    {
      title: "DESI CANNON RELOADED",
      artist: "Canon X",
      file: "/desicannonreloaded.mp3",
    },
    {
      title: "CANON X OVERDRIVE",
      artist: "Canon X",
      file: "/canonxoverdrive.mp3",
    },
    {
      title: "CANON X OVERDRIVE REVERB",
      artist: "Canon X",
      file: "/canonxoverdrivereverb.mp3",
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

      <audio
        ref={audioRef}
        controls
        style={{
          width: "100%",
          marginTop: "40px",
        }}
      />
    </div>
  );
}
