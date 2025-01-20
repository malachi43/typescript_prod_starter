//extract packages from string literals delimited by whitespaces.
function extractPackages(str) {
    return str.trim().split(" ");
}

export default extractPackages;
