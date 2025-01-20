import createFileInRootFolder from "./createFile.js";
import writeDataToFile from "./writeDataToFile.js";
import addToPackage from "./addToPackage.js";
import { existsSync } from "node:fs";

//scripts to add to the package.json file.
const scripts = [{ key: "tsc", value: "tsc" }, { key: "lint", value: "eslint ." }]

const lintConfig = `
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config({
    files: ['**/*.ts'],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    plugins: {
        "@stylistic": stylistic,
    },
    ignores: ["build/*"],
    rules: {
        '@stylistic/semi': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { 'argsIgnorePattern': '^_' }
        ],
    },
});
`

const tsConfig = `
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "./build/",
    "module": "commonjs",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
`

/**
 * this function is used to create the necessary files and populate the created file(s) with the required configuration.
 */
function init() {
    try {
        const eslintConfigFilename = "eslint.config.mjs";
        const tsConfigFilename = "tsconfig.json";

        createFileInRootFolder(eslintConfigFilename);
        createFileInRootFolder(tsConfigFilename);

        writeDataToFile(lintConfig.trim(), eslintConfigFilename);
        writeDataToFile(tsConfig.trim(), tsConfigFilename);

        //create test file
        const testFile = "index.ts";
        const testData = `console.log("you have a production ready typescript project.");`
        createFileInRootFolder(testFile);
        writeDataToFile(testData, testFile);

        const filename = "package.json"
        if (existsSync(filename)) {
            scripts.forEach(script => addToPackage(script, filename))
        }

    } catch (error) {
        console.error("Error: ", error.message)
    }
}

export default init;