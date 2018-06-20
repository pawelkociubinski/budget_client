import chalk from "chalk";

export const logger = (url: string, isTunneled?: boolean): void => (
  console.log(`
    Server started ! ${chalk.green('✓')}
    Tunnel initialised ${chalk.green('✓')}\n
    ${chalk.bold("Access URLs:")}
    ${chalk.gray("-----------------------------------")}
    LOCALHOST: ${chalk.magenta(url)}
    ${isTunneled ? `NGROK: ${chalk.magenta("http://127.0.0.1:4040/")}` : ""}
    ${chalk.gray("-----------------------------------")}
    ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
  `)
);
