
    let str = "";
    const buttons = document.querySelectorAll("button");
    const inputField = document.querySelector("input");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const value = e.target.innerHTML;

            if (value === "=") {
                try {
                    str = eval(str);
                    inputField.value = str;
                } catch (error) {
                    inputField.value = "Error";
                    str = "";
                }
            } else if (value === "x") {
                str += "*";
                inputField.value = str;
            } else if (value === "AC") {
                str = "";
                inputField.value = str;
            } else if(value!="±") {
                str += value;
                inputField.value = str;
            }
            if(value==="±"){
                try{
                    let x=parseFloat(str);
                    if(x>0){
                        str=-1*x;
                        inputField.value=str;
                    }
                    else inputField.value=-1*x;
                }catch(error){
                    str = "Error";
                    inputField.value=str;
                    str = "";
                }
            }
        });
    });
