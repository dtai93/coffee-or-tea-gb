// One letter for the judge: A is coffee, B is tea. No newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "A";

const n = [...LINE].length;
if (n < 1 || n > 1 || LINE.trim() === "") {
  throw new Error(`entry must be 1-1 non-blank characters, got ${n}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
