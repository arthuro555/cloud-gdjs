import { startGameLoop, runtimeGame } from "../run-game";
import chalk from "chalk";

setInterval(startGameLoop(), 10);
const { properties } = runtimeGame.getGameData();
console.info(
  chalk.bold.blue(
    `🤩 Successfully started the server for ${properties.name} v${
      properties.version
    } in ${process.uptime().toFixed(2)} seconds!`
  )
);
