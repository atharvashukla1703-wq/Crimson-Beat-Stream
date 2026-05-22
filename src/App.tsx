import { useRef, useState } from "react";
import "./index.css";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState("");

  const playSong = async (song: string, title: string) => {
  if (audioRef.current) {
    try {
      audioRef.current.src = song;
      await audioRef.current.play();
      setCurrentSong(title);
    } catch (error) {
      console.error("Audio playback failed:", error);
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
    file: "/blackoutstreet.mp3",
  },

  {
    title: "DESI CANNON",
    artist: "Canon X",
    file: "/desicannon.mp3",
  },

  {
    title: "DESI CANNON RELOADED",
    artist: "Canon X",
    file: "/desicannonreloaded.mp3",
  },

  {
    title: "CANON X OVERDRIVE",
    artist: "Canon X",
    file: "/cannonxoverdrive.mp3",
  },

  {
    title: "CANNON X OVERDRIVE REVERB",
    artist: "Canon X",
    file: "/cannonxoverdrivereverb.mp3",
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
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "10px",
        }}
      >
        Crimson Beat Stream
      </h1>

      <p
        style={{
          color: "gray",
          marginBottom: "40px",
          fontSize: "20px",
        }}
      >
        Canon X Official Music Platform
      </p>

      {songs.map((song, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#0f0f0f",
            padding: "30px",
            borderRadius: "25px",
            marginBottom: "25px",
            border: "1px solid #1f1f1f",
          }}
        >
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            {song.title}
          </h2>

          <p
            style={{
              color: "gray",
              fontSize: "18px",
            }}
          >
            by {song.artist}
          </p>

          <button
            onClick={() => playSong(song.file, song.title)}
            style={{
              marginTop: "20px",
              padding: "14px 28px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            PLAY
          </button>
        </div>
      ))}

      <div
        style={{
          position: "sticky",
          bottom: "0",
          backgroundColor: "#111",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>
          Now Playing: {currentSong || "Nothing Playing"}
        </h3>

        <audio
          ref={audioRef}
          controls
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}
