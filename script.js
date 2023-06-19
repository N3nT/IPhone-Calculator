var operator = "";
var memory_content = "";

function startTime() {
    const date = new Date();
    document.getElementById("calc_date").innerHTML = date.toLocaleTimeString([], {timeStyle: 'short'});
    setTimeout(function() {startTime()}, 1000);
}

function Clear(){
    document.getElementById('screen_value').innerHTML = "0";
}
function Change(){
    if(document.getElementById('screen_value').innerHTML == "0"){
        //pass
    }
    else{
        if(document.getElementById('screen_value').innerHTML.indexOf("-")){
            document.getElementById('screen_value').innerHTML = "-" + document.getElementById('screen_value').innerHTML;
        }
        else{
            document.getElementById('screen_value').innerHTML = document.getElementById('screen_value').innerHTML.substring(1);
        }
    }
}
function Percent(){
    var number = document.getElementById('screen_value').innerHTML.replaceAll(' ','');
    number = number/100;
    if (isNaN(number)){
        document.getElementById('screen_value').innerHTML = 0;
    }
    else{
        document.getElementById('screen_value').innerHTML = number;
    }
}

const buttons = document.getElementsByTagName("button");
const buttonPressed = e => {
    if(e.target.classList.contains("light_gray")){
        //pass
    }
    else if(e.target.classList.contains("orange")){
        var str = document.getElementById('screen_value').innerHTML;
        var char = str.charAt(str.length -1);
        console.log(char);
        if(char == "/" || char == "*" || char == "-" || char == "+"){
            //pass
        }
        else if(e.target.value == "="){
            console.log("chujow sto");
            document.getElementById('screen_value').innerHTML = eval(str.replaceAll(' ',''));
        }
        else{
            document.getElementById('screen_value').innerHTML = str.replaceAll(' ','') + e.target.value;
        }
    }
    else{
        if(document.getElementById('screen_value').innerHTML == "0")
        {
            if(e.target.value == "."){
                document.getElementById('screen_value').innerHTML += e.target.value;
            }
            else{
                document.getElementById('screen_value').innerHTML = e.target.value;
            }
        }
        else{
            if(e.target.value == "."){
                var screen_content = document.getElementById('screen_value').innerHTML;
                if(screen_content.length == 11){
                    //pass
                }
                else{
                    if(document.getElementById('screen_value').innerHTML.indexOf(".") == -1){
                        var whitespaces = document.getElementById('screen_value').innerHTML.replaceAll(' ','');
                        document.getElementById('screen_value').innerHTML = whitespaces;
                        document.getElementById('screen_value').innerHTML += e.target.value;
                    }
                    else{
                        //pass
                    }
                }
            }
            else{
                    var screen_content = document.getElementById('screen_value').innerHTML;
                    if (operator != ''){
                        if(screen_content.indexOf("/") || screen_content.indexOf("*") || screen_content.indexOf("-") || screen_content.indexOf("+")){
                            console.log('jest')
                            document.getElementById('screen_value').innerHTML = e.target.value;
                            //operator = "";
                        }
                        else{
                            document.getElementById('screen_value').innerHTML = e.target.value;
                        }
                    }
                    else{
                        var screen_content = document.getElementById('screen_value').innerHTML;
                        if(operator != ''){

                        }
                        else{
                            if(document.getElementById('screen_value').innerHTML.length > 25)
                            {
                                alert("Za dużo znaków");
                            }
                            else{
                                document.getElementById('screen_value').innerHTML += e.target.value;
                            }
                        }
                    }   
                }
            }
        }
    }   

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}
console.log("Losowy: " + operator);
