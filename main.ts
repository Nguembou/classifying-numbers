input.onButtonPressed(Button.A, function () {
    var1 += 1
    basic.showNumber(var1)
})
input.onButtonPressed(Button.AB, function () {
    if (var1 > 0) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        basic.showString("P")
    } else if (0 > var1) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showString("T")
    } else if (var1 == 0) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        basic.showString("L")
    }
})
input.onButtonPressed(Button.B, function () {
    var1 += -1
    basic.showNumber(var1)
})
let var1 = 0
var1 = 0
basic.forever(function () {
	
})
