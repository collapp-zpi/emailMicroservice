import { Message } from "amqplib";
import chalk from "chalk";

const handle = (message: Message) => {
  console.log(chalk.blue.bold(message.content.toString()));
};

export default handle;
