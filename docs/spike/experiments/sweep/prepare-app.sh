#!/usr/bin/env bash
# Spike 01 / visual sweep: a private copy of e2e/nextjs-app that can be built against any
# library variant without touching the repo's e2e app. Copies src/ and public/, writes a
# minimal Next config, and builds app/node_modules as a directory of symlinks to
# e2e/nextjs-app/node_modules (so installs are shared) with @lifesg/react-design-system
# swapped per build by build-sweep.sh.
set -euo pipefail
ROOT="$(cd ../../../.. && pwd)"
SRC="$ROOT/e2e/nextjs-app"
APP="$PWD/app"
rm -rf "$APP"; mkdir -p "$APP/node_modules/@lifesg"
cp -R "$SRC/src" "$APP/src"
cp -R "$SRC/public" "$APP/public"
for entry in "$SRC"/node_modules/* "$SRC"/node_modules/.bin; do
    name="$(basename "$entry")"
    [ "$name" = "@lifesg" ] && continue
    ln -s "$entry" "$APP/node_modules/$name"
done
ln -s "$SRC/node_modules/@lifesg/react-icons" "$APP/node_modules/@lifesg/react-icons"
cat > "$APP/package.json" <<'JSON'
{ "name": "spike-sweep-app", "private": true, "version": "0.0.0" }
JSON
cat > "$APP/tsconfig.json" <<'JSON'
{
    "compilerOptions": {
        "target": "ES2017", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true,
        "skipLibCheck": true, "strict": false, "noEmit": true, "esModuleInterop": true,
        "module": "esnext", "moduleResolution": "bundler", "resolveJsonModule": true,
        "isolatedModules": true, "jsx": "react-jsx", "incremental": true,
        "plugins": [{ "name": "next" }], "paths": { "@/*": ["./src/*"] }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}
JSON
cat > "$APP/next.config.mjs" <<'JS'
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pin = (n) => path.join(here, "node_modules", n);

export default {
    distDir: process.env.DIST ?? ".next",
    outputFileTracingRoot: path.join(here, "../../../../.."),
    typescript: { ignoreBuildErrors: true },
    // dist/ resolves react and friends from the repo root (React 17) unless pinned here
    webpack(config) {
        for (const n of ["@floating-ui/react", "@lifesg/react-icons"]) config.resolve.alias[n] = pin(n);
        return config;
    },
};
JS
echo "app ready: $(find "$APP/src" -name '*.e2e.tsx' | wc -l | tr -d ' ') story pages"
