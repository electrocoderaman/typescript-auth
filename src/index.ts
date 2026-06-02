import http from "node:http";
import { createApplication } from "./app/index.js";

async function main() {
  try {
    const server = http.createServer(createApplication());
    const PORT: number = 8080;

    server.listen(PORT, () => {
      console.log(`Http server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`error starting http server`);
    throw error;
  }
}

main()