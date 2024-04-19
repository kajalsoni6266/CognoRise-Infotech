let height = document.getElementById("height");
let weight = document.getElementById("weight");
let bmiShow = document.getElementById("bmi");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function(){
    let meter = height.value*0.3048;
    let squareMeter = meter*meter;
    let bmiCal = (weight.value/squareMeter).toFixed(2);
    console.log(bmiCal);
    
bmiShow.innerHTML="your BMI is:" +bmiCal;
if(bmiCal<18){
    document.getElementById("category").innerHTML="you are Underweight";
}
    else if(bmiCal>=18 && bmiCal<24){
        document.getElementById("category").innerHTML="you are normal weight";
    }
    else if(bmiCal<=24 && bmiCal<30){
        document.getElementById("category").innerHTML="you are Above weight";
    }
   else  if(bmiCal>=30 ){
        document.getElementById("category").innerHTML=" you are obese";
    }

    
     
    
        
    

})