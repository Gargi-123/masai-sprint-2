
window.addEventListener("load",renderDom)


var arr = JSON.parse(localStorage.getItem("data")) || []
var total = JSON.parse(localStorage.getItem("total"))


function renderDom() {
    var target = document.querySelector("#bill")
    console.log(target)
    for (var i = 0; i < arr.length; i++) {
        var row = createRow(arr[i])
        console.log(row)
        target.append(row)
    }
    
    var total1 = document.getElementById("total")
    total1.textContent = "The Total Amount is : " + total
}


function createRow(data) {
    var name = data.title
    var qty = data.quantity
    var unit_amount = data.price
    var amount = data.amount


    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    td1.textContent = name
    var td2 = document.createElement("td")
    td2.textContent = qty
    var td3 = document.createElement("td")
    td3.textContent = unit_amount
    var td4 = document.createElement("td")
    td4.textContent = amount




    tr.append(td1, td2, td3, td4)
    // table.append(tr)

    // var target = document.getElementById("table")
    // target.append(tr)

    return (tr)

}