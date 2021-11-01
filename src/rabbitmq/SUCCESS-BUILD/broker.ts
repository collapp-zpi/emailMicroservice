import amqplib, { Channel, Connection, Message } from "amqplib/callback_api";
import chalk from "chalk";
import handle from "./handler";
import isAFreindlyMessage from "../../secret";

const queue = "SUCCESS-BUILD";
const url = process.env.RABBIT_URL;

const successBuildBroker = {
  run: () => {
    amqplib.connect(url, (error, conn: Connection) => {
      if (error) {
        console.log(chalk.red(error));
        throw error;
      }
      console.log(chalk.green("Connected to RabbitMQ..."));
      conn.createChannel((error, channel: Channel) => {
        if (error) {
          console.log(chalk.red(error));
          throw error;
        }
        channel.assertQueue(queue, { durable: true });
        console.log(
          chalk.gray("Listening to the " + chalk.blue(queue) + " queue")
        );
        channel.consume(queue, (msg: Message) => {
          if (isAFreindlyMessage(msg.content.toString())) {
            handle(msg);
          }
          channel.ack(msg);
        });
      });
    });
  },
};

export default successBuildBroker;
