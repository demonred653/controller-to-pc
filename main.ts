enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
})
basic.forever(function () {
    radio.setGroup(5256)
})
