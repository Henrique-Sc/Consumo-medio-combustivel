function consumoMedio() {
    var km = parseFloat(document.getElementById('km').value)
    var l = parseFloat(document.getElementById('l').value)

    var consumoMedio = km / l

    document.getElementById('result').style.visibility = 'visible'
    document.getElementById('mostrarConsumo').innerHTML = consumoMedio.toFixed(2)
}