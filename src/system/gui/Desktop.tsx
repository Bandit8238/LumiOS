import Wallpaper from "../gui/wallpaper/Wallpaper";
import { useEffect, useState } from "react";

export default function Desktop() {
  return (
    <div style={styles.desktop}>
      
      {/* BACKGROUND LAYER */}
      <Wallpaper
        src="/wallpapers/helios.gif"
        darken={0.35}
        blur={0}
      />

      {/* UI LAYER */}
      <div style={styles.ui}>
        <TopBar />
        <Main />
      </div>

    </div>
  );
}

function TopBar() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.topbar}>
      <div>🔥 Helios OS</div>
      <div>{time}</div>
    </div>
  );
}

function Main() {
  return (
    <div style={styles.center}>
      <h1>Desktop</h1>
      <p>Helios system running smoothly.</p>
    </div>
  );
}

function getTime() {
  return new Date().toLocaleTimeString();
}

const styles: Record<string, React.CSSProperties> = {
  desktop: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial",
  },

  ui: {
    position: "relative",
    zIndex: 1,
    color: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "rgba(17, 24, 39, 0.7)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
