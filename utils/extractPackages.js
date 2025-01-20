//extract packages from string literals delimited by whitespaces.
/**
 * 
 * @param {string} str - a string literal representing the packages to extract. 
 * @returns 
 */
function extractPackages(str) {
    return str.trim().split(" ");
}

export default extractPackages;
