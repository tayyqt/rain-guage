basic.clearScreen()
let level = 0
let maxLevel = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        level = 1
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        level = 2
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        level = 3
    }
    if (level > maxLevel) {
        maxLevel = level
    }
    led.plotBarGraph(
    maxLevel,
    0
    )
})
