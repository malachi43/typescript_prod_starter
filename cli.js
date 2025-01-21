#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { spawn } from "node:child_process"
import init from "./utils/init.js";
import clearline from "./utils/clearLine.js";
import moveCursor from "./utils/moveCursor.js";
import extractPackages from "./utils/extractPackages.js";
import addToArgs from "./utils/addToArgs.js";
import showProgress from "./utils/showProgress.js";
import formatMessage from "./utils/formatMessage.js";

const program = new Command();

program
    .name("typescript-prod-starter")
    .description("this project helps you scaffold a production ready typescript project.")
    .version('0.0.1');

program.command("init")
    .description("initialize the project with production ready typescript configuration")
    .action(() => {
        //initialize project with the required configuration.
        scaffold();
    });

program.parse();


function scaffold() {
    const command = "npm";
    let args = ["install", "--save-dev"]

    const packages = "eslint @eslint/js typescript-eslint @stylistic/eslint-plugin @types/eslint__js typescript";

    //extract packages from string literal.
    const argsToAdd = extractPackages(packages);

    //update args array with the extractedPackage.
    args = addToArgs(args, argsToAdd)

    const cp = spawn(command, args, { stdio: "pipe", shell: true });
    const fullCommand = [command, ...args].join(" ")
    console.log(`Executing the command:\n${chalk.bgRgb(255, 255, 255).black(fullCommand)}\n\nInstalling dependencies...${formatMessage(packages)}`)

    //this makes the progress report to be on the same line.
    console.log()
    let count = 1;
    let progress = ""
    const intervalId = setInterval(() => {
        moveCursor(0, -1)
        clearline(0)
        ++count;
        progress = showProgress(count)
        console.log(chalk.green("installation time: %d second(s)"), progress)
    }, 1_000)

    cp.on("error", err => {
        console.log(chalk.red(`failed to start child process.\nError: ${err.message}`));
    })

    cp.stderr.on("data", err => {
        console.error(chalk.red("Error downloading dependency: ", err.message));
    })


    //this is called before the on "close" event.
    cp.on("exit", (code) => {
        if (code !== 0) {
            console.log(chalk.red(`process exited with code ${code}`));
        }
        const message = formatMessage(packages, " | ")
        console.log(chalk.bgRgb(255, 255, 255).black(`\nThe dependencies: ${message} were successfully installed.`))
        init();
        clearInterval(intervalId)
        process.exit(0)
    })
}







