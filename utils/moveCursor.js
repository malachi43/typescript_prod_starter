/**
 * 
 * @param {number} dx - the position to move the cursor along the x-axis relative to its current position. 
 * @param {number} dy - the position to move the cursor along the y-axis relative to its current position. 
 */
function moveCursor(dx, dy) {
    // return new Promise(resolve => {
    //     process.stdout.moveCursor(dx, dy, () => resolve)
    // })
    process.stdout.moveCursor(dx, dy)
}

export default moveCursor