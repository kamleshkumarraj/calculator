const inputField = document.querySelector(".input-screen");
let operation = "";
function setValue(value){
    inputField.value = value;
}



const buttonList = document.querySelectorAll(".btn");
buttonList.forEach((btn) =>{
    btn.addEventListener("click" , () =>{
        if(btn.innerText == "DEL" || btn.innerText == "=" || btn.innerText == "AC"){
            if(btn.innerText == "DEL"){
                operation= inputField.value;
                operation = operation.substring(0,operation.length-1);
                setValue(operation);
            }
            if(btn.innerText == "AC"){
                operation = "";
                setValue(operation);
            }
            if(btn.innerText == "="){
                operation = inputField.value;
                try{
                    if(operation.includes("%")){
                        operation = eval(operation.substring(0 , operation.length-1))/100;
                        setValue(operation);
                    }
                    operation = eval(operation);
                    setValue(operation)
                }
                catch(err){
                    alert("Please Enter valid operation")
                }
                
            }
        }
        else{
            operation += btn.innerText;
                setValue(operation)
        }
        
    })
})