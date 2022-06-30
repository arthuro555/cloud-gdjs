#! /usr/bin/env node
import prompt from "inquirer";
import { readFile, writeFile, mkdir, rm } from "fs/promises";
import chalk from "chalk";
import { isObject, isString, isOneOf, isLiteral } from "typanion";
import { generateFromHTMLExport } from "./generate";
import gdevelopBuild from "gdexporter";
import { join } from "path";

const CONFIG_FILE_NAME = "./.cloud-gdjs.json";

const doExport = async (
  inputFile: string,
  outputDirectory: string,
  runner: Runner
) => {
  try {
    await rm(outputDirectory, { recursive: true });
  } catch {}
  await mkdir(outputDirectory);

  const htmlBuildPath = join(outputDirectory, "htmlBuild");

  try {
    await gdevelopBuild(inputFile, htmlBuildPath);
    await generateFromHTMLExport(htmlBuildPath, outputDirectory, runner);
  } catch (e) {
    console.error(`An error has occured while trying to build the server! `, e);
  }

  try {
    await rm(htmlBuildPath, { recursive: true });
  } catch {}
};

try {
  // By default assume there is a configuration file
  const config = JSON.parse((await readFile(CONFIG_FILE_NAME)).toString());

  // Verify the JSON shape is the expected one
  const validator = isObject({
    inputFile: isString(),
    outputDirectory: isString(),
    runner: isOneOf([isLiteral("basic"), isLiteral("thnk")]),
  });
  if (!validator(config)) {
    console.error(
      chalk.redBright(
        `Found configuration (.cloud-gdjs.json), but it was invalid! Ignoring it.`
      )
    );
    // Trigger the catch to generate a new configuration
    throw new Error();
  }

  await doExport(config.inputFile, config.outputDirectory, config.runner);
} catch {
  // There was an error while trying to load the configuration file :/
  // Let's create (a new) one then!
  // TODO
  console.log(chalk.blue(`No configuration file found, creating one!`));
  const config = await prompt.prompt([
    {
      type: "input",
      message: "What is the name of your project file?",
      default: "game.json",
      name: "inputFile",
    },
    {
      type: "input",
      message: "To what directory should the server be exported to?",
      default: "./dist/",
      name: "outputDirectory",
    },
    {
      type: "list",
      message: "What type of server do you want to build?",
      choices: [
        { value: "basic", name: "Basic server (recommended)" },
        {
          value: "thnk",
          name: "T.H.N.K. Framework server",
          disabled: true,
        },
      ],
      name: "runner",
    },
  ]);

  await writeFile(CONFIG_FILE_NAME, JSON.stringify(config));
  console.info(chalk.green(`Saved the configuration for later builds 👍`));

  await doExport(config.inputFile, config.outputDirectory, config.runner);
}
