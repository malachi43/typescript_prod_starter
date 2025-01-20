import { writeFileSync } from "node:fs";
import { join } from "node:path";

const fileToWriteTo = "eslint.config.mjs";

const destination = join(process.cwd(), fileToWriteTo);

function writeDataToFile(data) {
    writeFileSync(destination, data, { encoding: "utf-8" });
}


export default writeDataToFile;