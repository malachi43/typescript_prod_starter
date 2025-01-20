/**
 * 
 * @param {string} message - the message we intend to foramt.
 * @param {string} delimiter - a separator to be used to join each string token extracted from the message. 
 * @returns 
 */
function formatMessage(message, delimiter = "\n") {
    let tokens = message.trim().split(" ")
    tokens = tokens.map((token, index) => token);
    tokens = tokens.join(delimiter);
    return delimiter + tokens + delimiter
}

export default formatMessage