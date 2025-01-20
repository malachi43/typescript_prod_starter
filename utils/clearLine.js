function clearline(direction) {
    // return new Promise(resolve => {
    //     process.stdout.clearLine(direction, () => resolve);
    // })
    process.stdout.clearLine(direction)
}

export default clearline