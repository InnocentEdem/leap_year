const date = document.getElementById('date');
const output = document.getElementById('output');
let isLeapYear = '';
let year='';
 let msg1 = ' is a Leap Year';
 let msg2 = ' is not a Leap Year';

function getInput(){ //input element value processing

    let year=date.value;
    if (year.length===4){leapYear(year)}
}

function leapYear(value){
    inted = +value;
    if ((inted % 4 === 0) && (inted % 100 != 0)){
        isLeapYear=true;
    }
    else if((inted%4 === 0) && (inted % 100 === 0) && (inted % 400===0)){
        isLeapYear=true;
    }
    else{isLeapYear=false;}
    console.log(isLeapYear)
    message(isLeapYear,value)
}

function message(input,year){
    if(input ===true){
        document.getElementById('output').innerHTML= year + msg1;
        date.placeholder = "Enter Year";
    }
    else{document.getElementById('output').innerHTML = year + msg2;
    date.placeholder.innerHTML = "Enter Year";
}
}
