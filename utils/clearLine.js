/**
 * 
 * @param {number} direction - the direction represents the cursor position in respect to the line it should clear. 
 */
function clearline(direction) {
    // return new Promise(resolve => {
    //     process.stdout.clearLine(direction, () => resolve);
    // })
    process.stdout.clearLine(direction)
}

export default clearline