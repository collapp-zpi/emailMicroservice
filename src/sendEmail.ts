import path from "path";

const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

interface MailOptions {
  from?: string;
  to?: string;
  subject?: string;
  text?: string;
  cc?: string;
  bcc?: string;
  attachments?: Attachment[];
  template?: string;
  context?: Object;
}

type Attachment = {
  filename: string;
  path: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USENAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".handlebars",
      defaultLayout: false,
      layoutDir: path.join(__dirname, "../views"),
    },
    viewPath: path.join(__dirname, "../views"),
  })
);

const defaultOptions: MailOptions = {
  from: `Collapp <${process.env.EMAIL_USENAME}>`,
  to: "",
  subject: "",
  text: "",
  template: "index",
};

const sendMail = (mailOptions: MailOptions) => {
  const opt: MailOptions = { ...defaultOptions, ...mailOptions };
  transporter.sendMail(opt, (err, data) => {
    if (err) console.log(err);
    else console.log("OK");
  });
};

export default sendMail;
