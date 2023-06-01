input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 8; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        led.stopAnimation()
    }
})
