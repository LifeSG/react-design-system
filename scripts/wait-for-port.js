const net = require("node:net");

const host = process.argv[2] ?? "127.0.0.1";
const port = Number(process.argv[3] ?? "3011");
const timeoutMs = Number(process.argv[4] ?? "6000");

if (!Number.isFinite(port) || port <= 0) {
    console.error("Invalid port", process.argv[3]);
    process.exit(1);
}

if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    console.error("Invalid timeoutMs", process.argv[4]);
    process.exit(1);
}

const deadline = Date.now() + timeoutMs;

const check = () => {
    const socket = net.createConnection({ host, port }, () => {
        socket.end();
        process.exit(0);
    });

    socket.on("error", () => {
        socket.destroy();

        if (Date.now() > deadline) {
            console.error(
                `Timed out waiting for ${host}:${port} after ${timeoutMs}ms`
            );
            process.exit(1);
        }

        setTimeout(check, 500);
    });
};

check();
