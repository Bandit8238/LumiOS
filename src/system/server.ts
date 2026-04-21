import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3001 });

console.log("🚀 Helios Desktop Share Server running on ws://localhost:3001");

type Client = {
  ws: any;
  sessionId?: string;
  role?: "host" | "viewer";
};

const clients: Client[] = [];

wss.on("connection", (ws) => {
  const client: Client = { ws };
  clients.push(client);

  ws.on("message", (message) => {
    const data = JSON.parse(message.toString());

    // HOST registers a session
    if (data.type === "HOST") {
      client.role = "host";
      client.sessionId = data.sessionId;

      console.log(`Host started session: ${data.sessionId}`);
    }

    // VIEWERS join session
    if (data.type === "JOIN") {
      client.role = "viewer";
      client.sessionId = data.sessionId;

      console.log(`Viewer joined session: ${data.sessionId}`);
    }

    // Broadcast desktop state from host → viewers
    if (data.type === "DESKTOP_STATE") {
      clients.forEach((c) => {
        if (
          c.role === "viewer" &&
          c.sessionId === client.sessionId
        ) {
          c.ws.send(
            JSON.stringify({
              type: "DESKTOP_UPDATE",
              payload: data.payload,
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    const index = clients.indexOf(client);
    if (index !== -1) clients.splice(index, 1);
  });
});
