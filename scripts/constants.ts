import { dirname, fromFileUrl, join } from "path/mod.ts";

export const rootDir = join(dirname(fromFileUrl(import.meta.url)), "../");
