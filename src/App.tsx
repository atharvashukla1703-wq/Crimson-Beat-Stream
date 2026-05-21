export default function App() {
  const songs = [
    "BLACKOUT",
    "BLACKOUT STREET",
    "DESI CANNON",
    "TENSION",
  ];

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

      <p style={{ color: "#888" }}>
        Canon X Official Music Platform
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
        }}
      >
        {songs.map((song) => (
          <div
            key={song}
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>{song}</h2>
              <p style={{ color: "#777" }}>
                by Canon X
              </p>
            </div>

            <button
              style={{
                background: "white",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              PLAY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
