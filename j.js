//=>(BMI) body mass index calulater.

var height = prompt("Enter your height in meter");
var weight = prompt("Enter your weight in kg");
var bmi = weight / (height*height);

if (bmi < 18.5){alert("Your BMI is "+Math.round(bmi)+", so you are underweight.")}

if (bmi > 18.5 && bmi < 24.9){alert("Your BMI is "+Math.round(bmi)+", so you have a normal weight.")}

if (bmi > 24.9){alert ("Your BMI is "+Math.round(bmi)+", so you are overweight.")}
