let msec = 0
let sec = 0
let min = 0
function start() {
    document.getElementById("clock").textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}:${String(msec).padStart(2, "0")}`
    go = setTimeout("start()", 1)
    msec++
    if (msec == 100) {
        msec = 0
        sec++
    }
    if (sec == 60) {
        sec = 0
        min++
    }
}

function stop() {
    clearTimeout(go)
}

function reset() {
    window.location.reload()
}
