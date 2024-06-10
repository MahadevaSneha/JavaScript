//undefined Datatype in JavaScript
//undefined value in variables
let myvar;
console.log(myvar);//undefined
console.log(typeof myvar);//undefined
//undefined value in functions
function myFunc(name){
  console.log(`Hii, ${name}!`);
}
x=myFunc("Sneha");
console.log(x)//undefined --because the function doesn't have any return value .
//undefined value in object properties
const personDetails={
  name:"Sneha",
  age:"21",
  email:"snehamahadeva510@gmail.com"
}
console.log(personDetails.email);//snehamahadeva510@gmail.com
console.log(personDetails.phno);//undefined

