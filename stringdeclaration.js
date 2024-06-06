//Declaration of strings in Js
//1.Using the single quotes('')
let str1='JS string using single quotes';
console.log(str1);
//2.Using the double quotes("")
let str2="JS String using double quotes";
console.log(str2)
//3.Using the String Constructor
let str3=new String("Created String using String Constructor");
console.log(str3);
//4.Using the Template literals
let str="Mahadeva Sneha";
let str4=`Hiii ${str}`;
console.log(str4);
//Empty String
//we can create an empty string by using the single quotes or double quote
let s1="";
let s2='';
console.log("Empty String:"+s1);
console.log("Empty String:"+s2);
//Multiline String --We can create multiline string using the template literals(``)
let mulString=`
	This is a
	multiline 
	string creation.`;
console.log(mulString);



//output
JS string using single quotes
JS String using double quotes
[String: 'Created String using String Constructor']
Hiii Mahadeva Sneha
Empty String:
Empty String:

	This is a
	multiline 
	string creation.

