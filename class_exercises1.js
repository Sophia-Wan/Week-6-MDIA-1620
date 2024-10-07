const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

// ask them if theyre going to a bar
// start determining variable name = Age
// ask for age in function
// if age below 13 console.log leave
// ifelse teen age 14-18 console.log grow up to 19
// ifelse 19-50 "drink away"
// ifelse 50 give health warning
//ifelse 70 warn them about their life


//determine a proper parameter variable name

function CheckDrinkingAge(age){

  if(age < 13) {
    console.log('leave');
  } else if( age >= 13 && age < 19){
    console.log('grow up to 19');
  } else if (age >= 19 && age <= 50) {
    console.log('Drink away');
  } else if(age > 50 && age < 70) {
     console.log(" that is a health hazard");
  } else if (age >= 70) {
  console.log("Youre gonna die :(");
  }
}

//determine a proper question to ask and the proper variable name for user input
function startApp() {
readline.question('What is your age? ', agenum => {
CheckDrinkingAge(Number(agenum));
  
  if(agenum !== 'exit'){
    startApp();
  }
  else{
    readline.close();
  }
});
}
startApp();
//reviewed by Alyssa
//looks good, helped fix readline.question cause it wasn't running at first