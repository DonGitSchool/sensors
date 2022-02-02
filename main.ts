// basic.forever(on_forever2)
function TestP0 () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
}
input.onButtonPressed(Button.AB, function () {
    Ghosts = GBK
})
function TestP1 () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . # . . .
            # . . . .
            `)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
}
let GBK: Image = null
let Ghosts: Image = null
let pac = images.createBigImage(`
    . # # # . . . . . .
    # # # # # . . . . .
    . . . # # . . . . .
    # # # # # . . . . .
    . # # # . . . . . .
    `)
let pacbac = images.createBigImage(`
    . # # # . . . . . .
    # # # # # . . . . .
    # # . . . . . . . .
    # # # # # . . . . .
    . # # # . . . . . .
    `)
let pellet = images.createBigImage(`
    . # # # . . . . . .
    # # # # # . . . . .
    # # # # # . . . . .
    # # # # # . . . . .
    . # # # . . . . . .
    `)
Ghosts = images.createBigImage(`
    . # # # . . . . . .
    # . # . # . . . . .
    # # # # # . . . . .
    # # # # # . . . . .
    # . # . # . . . . .
    `)
GBK = images.createBigImage(`
    . # # # . . . . . .
    # . # . # . . . . .
    # # # # # . . . . .
    # # # # # . . . . .
    # . # . # . . . . .
    `)
let Sus = images.createBigImage(`
    . # # . . . . . . .
    # . # # . . . . . .
    # # # # . . . . . .
    # # # # . . . . . .
    # . # . . . . . . .
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        while (pins.analogReadPin(AnalogPin.P2) > 900) {
            pellet.scrollImage(2, 200)
            pac.scrollImage(1, 200)
            break;
        }
        while (pins.analogReadPin(AnalogPin.P2) <= 900) {
            Ghosts.scrollImage(1, 200)
            pac.scrollImage(1, 200)
            break;
        }
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        Ghosts = Sus
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
