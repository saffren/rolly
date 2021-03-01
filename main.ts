basic.forever(function () {
    serial.writeLine("" + (input.lightLevel()))
    serial.writeLine("" + (input.magneticForce(Dimension.Y)))
    serial.writeLine("" + (input.rotation(Rotation.Roll)))
})
