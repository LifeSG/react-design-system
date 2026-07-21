import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3010;

// Route map: subpath prefix → target dev server
const routes = {
    "/react": "http://localhost:3000",
    "/a3-svelte": "http://localhost:3001",
    "/a3-vue": "http://localhost:3002",
    "/a3-angular": "http://localhost:3003",
    "/a4-svelte": "http://localhost:3004",
    "/a4-vue": "http://localhost:3005",
    "/a4-angular": "http://localhost:3006",
};

// Create proxy middlewares (one per target)
const proxies = {};
for (const [prefix, target] of Object.entries(routes)) {
    proxies[prefix] = createProxyMiddleware({
        target,
        changeOrigin: true,
        ws: true,
    });
}

// Single handler that routes based on prefix but preserves the full path
app.use((req, res, next) => {
    for (const [prefix, proxy] of Object.entries(proxies)) {
        if (req.url.startsWith(prefix + "/") || req.url === prefix) {
            return proxy(req, res, next);
        }
    }
    next();
});

// Health check
app.get("/health", (_req, res) => {
    res.json({ status: "ok", routes });
});

// Root - list available routes
app.get("/", (_req, res) => {
    res.json({
        message: "Cross-framework E2E proxy",
        routes: Object.fromEntries(
            Object.entries(routes).map(([prefix, target]) => [
                `http://localhost:${PORT}${prefix}/components/{component}/{story}`,
                target,
            ])
        ),
    });
});

app.listen(PORT, () => {
    console.log(`E2E proxy listening on http://localhost:${PORT}`);
    console.log("Route map:");
    for (const [prefix, target] of Object.entries(routes)) {
        console.log(`  ${prefix}/* → ${target}/*`);
    }
});
