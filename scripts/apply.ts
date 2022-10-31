// @deno-types="npm:@types/fs-extra@9"
import * as fsExtra from "fs-extra";

await fsExtra.copy("patches", "patched");
