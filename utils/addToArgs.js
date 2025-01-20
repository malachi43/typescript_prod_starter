/**
 * 
 * @param {string[]} args - initial args ["install", "--save-dev"]
 * @param {string[]} newArgs - new args to add to the args
 * @returns a new array containing args and new args.
 */
function addToArgs(args, newArgs) {
    args = args.concat(newArgs)
    return args
}

export default addToArgs;
