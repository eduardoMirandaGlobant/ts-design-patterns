/**
 * Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads
 * The cluster module allows easy creation of child processes that all share server ports.
 */

/**
 
autocannon \
-m GET 'http://localhost:3000/engine/health' \
-c 200 -d 30 -t 10 \
--renderStatusCodes \
--debug 

 */
import cluster from "node:cluster";
import http from "node:http";
import { cpus } from "node:os";
import process from "node:process";
import fs from "fs";

const map = new Map();
const fsPromises = fs.promises;

if (cluster.isPrimary) {
  map.set("total", 0);
  // Keep track of http requests
  setInterval(() => {
    console.log(`Request Per Process`, map);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (map.has(msg.cmd)) {
      map.set(msg.cmd, map.get(msg.cmd) + 1);
      map.set("total", map.get("total") + 1);
    } else {
      map.set(msg.cmd, 1);
      map.set("total", map.get("total") + 1);
    }
  }

  // Start workers and listen for messages containing notifyRequest
  const numCPUs: any = process.env.PROCESSES || cpus().length;
  for (let i = 0; i < parseInt(numCPUs); i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    const workers: any = cluster.workers;
    workers[id].on("message", messageHandler);
    console.log(`Handler for worker ${id}`);
  }
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  // Worker processes have a http server.
  http
    .createServer(async (req, res) => {
      await readThenClose();
      res.writeHead(200);
      res.end("hello world\n");
      if (process) {
        const p: any = process;
        p.send({ cmd: process.pid });
      }
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}

async function readThenClose() {
  let filehandle: any = null;
  try {
    // Using the filehandle method
    filehandle = await fsPromises.open(__dirname + "/lorem_ipsum.pdf", "r+");

    await filehandle.readFile("utf8");

    // console.log(data);

    filehandle.close();
    // console.log("File Closed!");
  } catch (e) {
    console.log("Error", e);
  }
}

readThenClose().catch((error) => {
  console.log("Error", error);
});
