import { useEffect, useRef } from "react";

export function useDesktopShare(sessionId: string | null) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!sessionId) return;

    const ws = new WebSocket("ws://localhost:3001");
    wsRef.current = ws;

    ws.onopen = () => {
      // join session as HOST
      ws.send(
        JSON.stringify({
          type: "HOST",
          sessionId,
        })
      );
    };

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);

      if (data.type === "DESKTOP_UPDATE") {
        console.log("📡 Remote desktop update:", data.payload);

        // later: update OS state here (wallpaper, windows, etc.)
      }
    };

    return () => ws.close();
  }, [sessionId]);

  const sendDesktopState = (payload: any) => {
    wsRef.current?.send(
      JSON.stringify({
        type: "DESKTOP_STATE",
        payload,
      })
    );
  };

  return { sendDesktopState };
}
