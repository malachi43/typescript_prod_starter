function moveCursor(dx, dy) {
    // return new Promise(resolve => {
    //     process.stdout.moveCursor(dx, dy, () => resolve)
    // })
    process.stdout.moveCursor(dx, dy)
}

export default moveCursor