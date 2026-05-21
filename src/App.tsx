import { useRef, useState } from "react";

export default function App() {
  const songs = [
    {
      title: "BLACKOUT",
      artist: "Canon X",
      file: "/songs/blackout.mp3",
    },
    {
      title: "BLACKOUT STREET",
      artist: "Canon X",
      file: "/songs/blackoutstreet.mp3",
    },
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState("");

  const playSong = (file: string, title: string) => {
    if (audioRef.current) {
      audioRef.current.src = file;
      audioRef.current.play();
      setCurrentSong(title);
    }
  };

  return (
    <div
      style={{
        background: "#050505",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "42px" }}>
        Crimson Beat Stream
      </h1>

      <p style={{ color: "#777" }}>
        Now Playing: {currentSong || "Nothing"}
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {songs.map((song) => (
          <div
            key={song.title}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{song.title}</h2>
              <p style={{ color: "#777" }}>
                {song.artist}
              </p>
            </div>

            <button
              onClick={() =>
                playSong(song.file, song.title)
              }
              style={{
                background: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              PLAY
            </button>
          </div>
        ))}
      </div>

      <audio ref={audioRef} controls style={{ marginTop: "40px", width: "100%" }} />
    </div>
  );
}
