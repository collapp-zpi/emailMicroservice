import chalk from "chalk";
import server from "./server";
import invitationBroker from "./rabbitmq/INVITE/broker";
import resetBroker from "./rabbitmq/RESET/broker";
import successBuildBroker from "./rabbitmq/SUCCESS-BUILD/broker";
import errorBuildBroker from "./rabbitmq/ERROR-BUILD/broker";

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
resetBroker.run();
successBuildBroker.run();
errorBuildBroker.run();
