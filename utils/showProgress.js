function showProgress(progress) {
    let realtimeReport = ""
    for (let i = 1; i <= progress; ++i) {
        realtimeReport = (i * Date.now()) / Date.now();
    }
    return realtimeReport
}

export default showProgress;
