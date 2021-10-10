import chalk from "chalk";

export default function isAFreindlyMessage(message: string): Boolean {
  const obj = JSON.parse(message);
  if (obj["secret"] == undefined) {
    console.log(chalk.red("Missing secret in a message"));
    return false;
  } else {
    if (obj["secret"] != process.env.SECRET) {
      console.log(chalk.red("Unknown secret, do better next time"));
      return false;
    }
    return true;
  }
}
