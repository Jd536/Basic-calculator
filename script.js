
    // Main Variables Declaration
    var historyValue = document.getElementById("history-value");
    var output =  document.getElementById("output-value");

function convertOutputValue(){
    let num = document.getElementById("output-value").innerText 
    if(num==""){
        document.getElementById("output-value").innerText=0;
    }
    else{
        document.getElementById("output-value").innerText =parseInt(document.getElementById("output-value").innerText).toLocaleString("en");}
    
}

/// pass a value of the number buttons to the output field
function handleInputNumbers(){
    let numbers = document.getElementsByClassName("number");

    for(var i=0; i<numbers.length; i++){
        numbers[i].addEventListener("click", function(){
            
            let outputValue = document.getElementById("output-value").innerText; 
        if(outputValue!=0 ){
            if(output.className ==="containResultValue"){
                output.innerText="0";
                historyValue.innerText="";
                output.removeAttribute("class");
                output.innerText =this.innerText;
            }
            else{
            document.getElementById("output-value").innerText = outputValue+this.innerText;
            }
        }
        else{
                document.getElementById("output-value").innerText =this.innerText;

        }
        })
    }
}


function handleOperators(){
    let operators = document.getElementsByClassName("operator");

    for(let i = 0; i<operators.length; i++){
            operators[i].addEventListener("click", function(){
                if(this.id=="backspace"){
                    output.innerText="0";
                }
                else if(this.id=="="){
                    historyValue.innerText = historyValue.innerText + output.innerText;
                    let result = eval(historyValue.innerText);
                    output.innerText = result;
                    output.className="containResultValue";
                }
                else if(this.id=="clear"){
                    historyValue.innerText=""
                    output.innerText="0";
                }
                else{
                    if(historyValue.innerText ==""){
                        if(this.id=="*"){
                            historyValue.innerText =output.innerText + this.id;
                            output.innerText="";
                        }
                       else if(this.id=="/"){
                            historyValue.innerText =output.innerText + this.id;
                            output.innerText="";
                        }
                        else{historyValue.innerText =output.innerText + this.innerText;
                        output.innerText="";
                        }
                    }
                    else{
                        if(this.id=="*"){
                            output.innerText="";// reset the output field value
                            let currentHitoryValue= historyValue.innerText;
                            historyValue.innerText =currentHitoryValue+ output.innerText + this.id;
                            
                        }
                       else if(this.id=="/"){
                            output.innerText=""; // reset the output field value
                            let currentHitoryValue= historyValue.innerText;
                            historyValue.innerText =currentHitoryValue+ output.innerText + this.id;
                            
                        }
                        else{
                            output.innerText="";// reset the output field value
                            let currentHitoryValue= historyValue.innerText;
                        historyValue.innerText =currentHitoryValue+ output.innerText + this.innerText;
                        
                        }
                    }
                }
        })
    }  
}


// handleBackspaceAndClear();
handleOperators();
handleInputNumbers();
convertOutputValue();