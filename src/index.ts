import chalk from "chalk";
import server from "./server";
import invitationBroker from "./rabbitmq/INVITE/broker";

server.listen(process.env.PORT, async () => {
  console.log(
    chalk.green(
      `Server is listening on port: ${chalk.greenBright.bold(
        process.env.PORT
      )} for incoming HTTP requests`
    )
  );
});

invitationBroker.run();
