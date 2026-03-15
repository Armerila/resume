import { watch } from "node:fs";

async function build() {
  const result = await Bun.build({
    entrypoints: ["./index.html"],
    outdir: "./dist",
    target: "browser",
  });
  if (!result.success) {
    for (const log of result.logs) console.error(log);
  }
}

await build();

watch("./src", { recursive: true }, () => {
  build().catch(console.error);
});

const server = Bun.serve({
  port: 5173,
  async fetch(req) {
    const pathname = new URL(req.url).pathname;
    const file = Bun.file(`./dist${pathname === "/" ? "/index.html" : pathname}`);
    if (await file.exists()) return new Response(file);
    // SPA fallback
    return new Response(Bun.file("./dist/index.html"));
  },
});

console.log(`Dev server running at http://localhost:${server.port}`);
