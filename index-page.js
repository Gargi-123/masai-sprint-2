var arr=[]
window.onload=function(){
    var form=document.getElementById("form")
    form.addEventListener("submit",handleform)
}

 function handleform(elems){
    elems.preventDefault()
    console.log("logged")
    var elems=event.target.children
    console.log(elems)
    var data = {
        status: false,  //status
        name: elems[0].value,
        email: elems[1].value,
        password: elems[2].value,
        id: arr.length + 1,
    };

    
    arr.push(data)
    console.log(arr)
    if(elems[0].value=="" && elems[1].value=="" &&  elems[2].value==""){
        alert("Please Enter Your Details")
    }
    else if(elems[0].value==""){
        alert("Please Enter your name")
    }
    else if(elems[1].value==""){
        alert("Please Enter your email")
    }
    else if(elems[2].value==""){
        alert("Please Enter your password")
    }
    else{
        window.location.replace("page1.html")
    }

    
}
     
 