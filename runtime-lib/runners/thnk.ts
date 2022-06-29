import { startGameLoop, runtimeGame } from "../run-game";
import { type WebSocket, WebSocketServer } from "ws";
import { randomUUID } from "crypto";
import chalk from "chalk";

console.log(`🤔 Starting T.H.N.K. server 🤔`);

const ws = new WebSocketServer({ port: 6969, clientTracking: true });

const runSimulationTick = startGameLoop();

const clients = new Map<string, WebSocket>();

ws.once("listening", () => {
  const { properties } = runtimeGame.getGameData();
  console.info(
    chalk.bold.blue(
      `🤩 Successfully started the T.H.N.K. server for ${properties.name} v${
        properties.version
      } in ${process.uptime().toFixed(2)} seconds!`
    )
  );
});

ws.on("connection", (client) => {
  const uuid = randomUUID();
  clients.set(uuid, client);
});
