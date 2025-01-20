import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path"

/**
 * 
 * @param {{key: string, value: string}} { key, value } -  the key represents the property to be added to the script and the value represents the value of the property. The value is executed when the script command (the key) is run.
 * @param {string} filename - this represents the file we want to read its contents. e.g package.json 
 * @returns 
 */
function addToPackageJson({ key, value } = {}, filename) {
    if (!key || !value) return;
    let package_json = JSON.parse(readFileSync(join(process.cwd(), filename)));

    package_json["scripts"][key] = value
    package_json = JSON.stringify(package_json, null, 2);

    writeFileSync(join(process.cwd(), filename), package_json, { encoding: "utf-8" })
}

export default addToPackageJson;