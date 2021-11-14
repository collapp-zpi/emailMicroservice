import { Message } from "amqplib";
import sendEmail from "../../sendEmail";

const handle = (message: Message) => {
  const obj = JSON.parse(message.content.toString());
  sendEmail({ ...obj, template: "invite" });
};

export default handle;
