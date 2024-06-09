//String operation in JS
//1. finding the length of the string 
const str="JavaScript";
console.log(str.length);//10
//2. string concatenation using + operator
const str1="Java";
const str2="Script";
console.log(str1+str2)//JavaScript
//3.Explore about escape characters
const str3="I\'m learning Js to develop \"dynamic website\"";
console.log(str3)
//4.breaking the long string by using the \ backslash and + operator
const str4="Practice makes \
man perfect";
console.log(str4);
const str5="Practice makes"
+"man perfect";
console.log(str5);
//5.finding the substring within in string by using substring() method
const str6="Learing JS in GFG";
console.log(str6.substring(5,9));
//usage to toUpperCase() and toLowerCase()
console.log(str6.toUpperCase());
console.log(str6.toLowerCase());
//trim() method in js
let s1="              JS            "
console.log(s1.trim())//Js
//replace(oldStr,newStr)
let s2="Learing HTML in GFG";
console.log(s2.replace("HTML","JS"));
//indexOf() method return index value of searching string
console.log(s2.indexOf("in"));
//accessing the characters in the string
//by using the indexing concept
//by using charAt()method
const s3="JavaScript";
console.log(s3[5]);//c
console.log(s3.charAt(5));//c
//string comparision in js
//== equality operator used to check the values are equal or not
//=== used to check the whether the datatypes of the variables are eqaul are not
const s4="Js";
const s5=new String("Js");//object
console.log(s4 == s5);//true
console.log(s4 === s5);//false
//localeCompare() used to compare the string and return the difference between the strings based on the ascii values
console.log(s4.localeCompare(s5));//0

 
/*
output
----------
10
JavaScript
I'm learning Js to develop "dynamic website"
Practice makes man perfect
Practice makesman perfect
ng J
LEARING JS IN GFG
learing js in gfg
JS
Learing JS in GFG
4
c
c
true
false
0 */
