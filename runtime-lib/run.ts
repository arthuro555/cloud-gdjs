import { startGameLoop, switchToScene, runtimeGame } from "./index";
import { type WebSocket, WebSocketServer } from "ws";
import { randomUUID } from "crypto";

console.log(`🤔 Starting T.H.N.K. server 🤔`);

const ws = new WebSocketServer({ port: 6969, clientTracking: true });

switchToScene(runtimeGame.getGameData().firstLayout);
const runSimulationTick = startGameLoop();

const clients = new Map<string, WebSocket>();

ws.once("listening", () => {
  console.log(`Server successfully started!`);
});

ws.on("connection", (client) => {
  const uuid = randomUUID();
  clients.set(uuid, client);
});
