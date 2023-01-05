let item = 0
basic.clearScreen()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("value", item)
})
