// Arithmetic operators
// let a = 10;
// let b = 5;
// console.log("value of a=", a, "& b= ", b);
// console.log("a + b =", a + b);
// console.log("b - a =", b - a);
// console.log("b * a =", b * a);
// console.log("b / a =", b / a);
// console.log("b % a =", b % a);  
// console.log("b ** a =", a ** b);

//unary operators

// let a = 10;
// let b = 2;
// console.log("a = ",a, "& b = ",b);
// // a++;
// console.log(a++);
// console.log(a--);
// console.log(--a);

// Assignment operators
// let a = 10;
// let b = 5;
// a+=9;
// console.log(a);
// a-=3;
// console.log(a);
// a*=2;
// console.log(a);
// a/=4;
// console.log(a);
// let a=15;
// let b=15;
// console.log("a>=b", a>=b);
// let a= 10;
// let b= 15;
// let cond1= a>b;
// let cond2= a<=b;
// // console.log ("cond1 && cond2=", cond1 && cond2);
//  console.log ("!(a>b)=", !(a>b));
// let age= 18;
// if (age >=18){console.log("You are eligible to vote");
// }
// if (age <=18){console.log("You are not eligible to vote");
// }
// let age=9;
// if (age>=18){
//     console.log("you are eligible to vote");
// }
// else{
//     console.log("you are not eligible to vote");
// }
// let num=10;
// if (num%2 ==0){
//     console.log("The number is even");
// }
// else{
//     console.log("The number is odd");
// }
// let mode="bingloo";
// let color;
// if (mode=="dark"){
//     color="black";
// }
// else if(mode=="bingloo"){
//     color="blue";
// }
// else if (mode=="yellow"){
//     color="yellow";
// }
// else{
//     color="white";
// }
// console.log("The color is ", color);
// let age= 4;
// let result= age>=18 ? "adult":"minor";
// console.log("The result is ", result);
// alert ("Hello! Welcome to the website.");
// let input= prompt("Input number: ");
// if (input%5==0){jjjjjjj
//     console.log(input ,"is divisible by 5");
// } 
// else{
//     console.log(input, "is not divisible by 5");
// }
let marks=prompt ("Enter yout marks:")
let grade;
if (marks>=90 && marks <=100){
    grade="Grade A";
}
else if(marks>=70 && marks<90){
    grade="Grade B";
}
else if (marks>=60 && marks<70){
    grade="Grade C";
}
else if(marks>=50 && marks<60){
    grade="Grade D";
}
else if(marks>=0 && marks <50){
    grade="Grade F";
}
else{
    grade="Invalid marks entered";
}
console.log("Your grade is ", grade);
