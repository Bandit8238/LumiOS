import { useEffect, useState } from "react";

export default function Desktop() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.desktop}>
      <TopBar time={time} />
      <MainArea />
    </div>
  );
}

function TopBar({ time }: { time: string }) {
  return (
    <div style={styles.topbar}>
      <div>🔥 Helios OS</div>
      <div>{time}</div>
    </div>
  );
}

function MainArea() {
  return (
    <div style={styles.center}>
      <h1>Desktop</h1>
      <p>Helios OS is running.</p>
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
    background: "#0b1020",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#111827",
    borderBottom: "1px solid #1f2937",
  },

  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
