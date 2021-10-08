import server from "./server";

server.listen(process.env.PORT, async () => {
  console.log(
    `Server is listening on port: ${process.env.PORT} for incoming HTTP requests`
  );
});
