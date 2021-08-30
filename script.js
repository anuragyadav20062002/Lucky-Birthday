var dateOfBirth = document.querySelector("#birth-date")
var luckyNumber = document.querySelector("#lucky-number")
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box")


function compareValues(sum, luckyNumber){
if(sum%luckyNumber===0){
    outputBox.innerText="Your Number is actually lucky!!!🥳";
}else{
    outputBox.innerText="Your number is not that lucky🥺";
}
}

function checkLuckyNumber(){
var dob= dateOfBirth.value;
var sum= calculateSum(dob);
compareValues(sum, luckyNumber.value)
}

function calculateSum(dob){
dob=dob.replaceAll("-","");

var sum=0;

for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i));
    return sum;
}

}


checkButton.addEventListener('click', checkLuckyNumber);