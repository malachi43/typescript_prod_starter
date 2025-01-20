import { writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * 
 * @param {string} data - the data to write to the file. 
 * @param {string} fileToWriteTo - the file the data will be written to. 
 */
function writeDataToFile(data, fileToWriteTo) {
    const destination = join(process.cwd(), fileToWriteTo);
    writeFileSync(destination, data, { encoding: "utf-8" });
}


export default writeDataToFile;