let iluminacion = 0
let grados = 0
let F = 0
let snow = ""
let esqui = ""
let A = ""
basic.forever(function () {
    iluminacion = input.lightLevel()
    grados = F
    F = input.temperature() * 1.8 + 32
    snow = "R"
    esqui = "V"
    A = "A"
    if (F >= -22 && F < 15) {
        basic.showString("Permanece en casa, hay fuertes nevadas")
        basic.showString(snow)
    }
    if (F >= 15 && F < 24) {
        basic.showString("Toma tus esquís y diviertete")
        basic.showString(esqui)
    }
    if (F >= 24 && F < 32) {
        basic.showString("Solo podrás esquiar en las partes más altas de las montañas")
        basic.showString(A)
    }
    if (F >= 33) {
        basic.showString("Lo siento no es temporada de esquiar")
    }
})
