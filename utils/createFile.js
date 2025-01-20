import { writeFileSync, existsSync } from "node:fs";
import { join, basename, dirname } from "node:path"

/**
 * 
 * @param {string} filename - the file you want to create in the current working directory.
 */
function createFileInRootFolder(filename) {
    const eslintConfigFilePath = join(process.cwd(), filename);

    if (!existsSync(eslintConfigFilePath)) {
        writeFileSync(eslintConfigFilePath, "");
        console.log(`\nThe file "${basename(filename)}" has been created in your current working directory (the directory you ran the just executed command)`)
    }
}

export default createFileInRootFolder