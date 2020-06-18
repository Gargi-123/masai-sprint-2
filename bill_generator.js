var arr = []
localStorage.removeItem("data")
localStorage.removeItem("total")



window.onload = function () {
    var form = document.getElementById("button-submit")
    form.addEventListener("click", generateBill)


    var cart = document.getElementById("button-cart")
    cart.addEventListener("click", handleCart)
}

function generateBill() {

    if (arr.length == 0) {
        alert("Add Atleast One Item")
    }
    else {
        window.location.replace("bill_generator.html")
    }

    
        
  

}


function handleCart() {
    var item = document.getElementById("items").value
    var price = document.getElementById("price").value
    var quantity = document.getElementById("quantity").value
    // console.log()
    if (item == "") {
        alert("Enter the item")
    }
    else if (price == "") {
        alert("Enter the price")
    }
    else if (quantity == "") {
        alert("Please Enter your password")
    }
    else {
        var data = {

            title: item,
            price: price,
            quantity: quantity,
            id: arr.length + 1,
            amount: Number(price) * Number(quantity),
            // Total:((Number(elems[3].value)*Number(elems[5].value))*0.05+(Number(elems[3].value)*Number(elems[5].value)))-(Number(elems[3].value)*Number(elems[5].value))*0.02,


        };
        

        console.log(total)

        
        arr.push(data)
        console.log(arr)

        var total = arr[0].amount
        for (var i = 0; i < arr.length; i++) {

            total += Number(arr[i].amount)


        }

        var net_amount = (total * 0.05) + (total) - (total * 0.02)
        console.log(net_amount)

        var x = JSON.stringify(arr)
        localStorage.setItem("data", x)
        var y = JSON.stringify(net_amount)
        localStorage.setItem("total", y)
    }

}


