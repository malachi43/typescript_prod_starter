/**
 * 
 * @param {number} progress - this determines the number of seconds that has elasped since the installation started. 
 * @returns 
 */
function showProgress(progress) {
    let realtimeReport = ""
    for (let i = 1; i <= progress; ++i) {
        realtimeReport = (i * Date.now()) / Date.now();
    }
    return realtimeReport
}

export default showProgress;
