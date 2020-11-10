basic.forever(function () {
    while (input.temperature() < 25) {
        basic.showNumber(input.temperature())
        basic.pause(100)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # . . . .
            `)
        basic.pause(2000)
    }
    while (input.temperature() >= 25) {
        basic.showNumber(input.temperature())
        basic.pause(100)
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    }
    while (input.temperature() > 34) {
        basic.showNumber(input.temperature())
        basic.pause(100)
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        basic.pause(2000)
    }
})
