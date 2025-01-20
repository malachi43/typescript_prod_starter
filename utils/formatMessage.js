function formatMessage(message, delimiter = "\n") {
    let tokens = message.trim().split(" ")
    tokens = tokens.map((token, index) => token);
    tokens = tokens.join(delimiter);
    return delimiter + tokens + delimiter
}

export default formatMessage