function formatNumber(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return `R$ ${value}`
}

function formatSplit(value) {
    if (value == 1) return `${value} pessoa`
    return `${value} pessoas`
}

function upload() {
    let bill = Number(document.querySelector('#yourBill').value)
    let tip = document.querySelector('#tipInput').value
    let split = document.querySelector('#splitInput').value
    
    let tipValue = bill * (tip / 100)
    let totalValue = bill + tipValue
    let totalSplit = totalValue / split

    document.querySelector('#tipPercent').innerHTML = `${tip}%`
    document.querySelector('#tipValue').innerHTML = formatNumber(tipValue)
    document.querySelector('#totalWithTip').innerHTML = formatNumber(totalValue)
    document.querySelector('#splitValue').innerHTML = formatSplit(split)
    document.querySelector('#billEach').innerHTML = formatNumber(totalSplit)
}