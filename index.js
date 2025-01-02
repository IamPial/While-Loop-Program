//Write a program to print "try again " until the user enters the correct numbers?

let correctNumber = 2;
while(true){
   let userinput = parseInt(prompt("Enter your number"));
   if(correctNumber == userinput){
      console.log("You have pressed the correct number");
      break;
   }
   else{
      console.log("Try Again");
   }
}