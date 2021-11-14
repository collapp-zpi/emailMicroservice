import chalk from "chalk";
import server from "./server";
import inviteBroker from "./rabbitmq/INVITE/broker";
import loginBroker from "./rabbitmq/LOGIN/broker";
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

inviteBroker.run();
loginBroker.run();
successBuildBroker.run();
errorBuildBroker.run();
