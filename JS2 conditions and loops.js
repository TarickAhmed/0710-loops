/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Conditions and Loops Lab
   FE JS2 Lab
*/

/** Key Terms:
 *  Boolean Operators
 *  Loop
 *   - for
 *   - for of
 *   - while
 *   - do while
 *  
 *  Conditional / Control Flow Statement
 *  "Equal To": == 
 *  "Strictly Equals": ===   
 *  Increment ++
 *  Decrement --
 *  Index
 *  Modulus
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
    Question 1: Driving the speed limit.. ? \n`);

/**
 * Step 1: Create two variables: speedLimit and mySpeed
 * Step 2: Set their values to numbers between 1 and 100.
 * 
 * Step 3: Conditionals:
 *             a. Using a conditional, determine if mySpeed is greater than the speedLimit
 *             b. If true, print "Slow Down! Mom is mad!" to the console
 *             c. If mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
 *             d. If mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
 * 
 * 
 * ↓ YOUR CODE HERE ↓ */
var speedLimit = 87
var mySpeed = 78

if (mySpeed > speedLimit)
    console.log("Slow Down! Mom is Mad!")
else
    (mySpeed === speedLimit)
console.log("Everyone is happy")
if (mySpeed < speedLimit)
    console.log("Speed up! Dad is mad!")




/*-------------------------------------------------------*/

console.log(`--------------------------
    Question 2: Is it time to wake up for work? \n`);

/**
 * Step 1: Create two variables, alarmSet and weekDay
 * Step 2: Set them to a boolean value
 * 
 * Step 3: Create a conditional... // if (true) {do thing} 
 *         to do something if the alarm is or isnt set & it is or isnt a week day. 
 *
 *         a. If alarm is set and it is a week day print "Sound Alarm! Time for work!" to the console
 *         b. Otherwise, print "I can sleep in!" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */
var alarmSet = Boolean
var weekDay = Boolean
if (alarmSet == weekDay)
    console.log("Sound Alarm! Time for work!")
else
    console.log("I can sleep in")

/*-------------------------------------------------------*/

console.log(`--------------------------
    Question 3: Username & Password \n`);

/**
 * Step 1: Create two variables, username and password.
 * Step 2: Create a conditional/control flow statement:
 *         - if the username is "Tommy123" and the password is "12345"
 *	          or the username is "Timmy456" and the password is "6789", 
 *		       print "Admin Login Successful" to the console
 *
 *	        - otherwise, print "Admin Access Denied"
 * 
 * ↓ YOUR CODE HERE ↓ */
var username = "Tommy123"
var password = "12345"
function login(u, p) {
    if (username === u && password === p) {
        console.log("login succesful!")
    } else {
        console.log("Admin Access Denied")
    }
}

/*
/*-------------------------------------------------------*/

console.log(`--------------------------
    Question 4: Student Class \n`);

/**
 * Step 1: Create a variable called studentClass. Don't give it a value yet.
 *         There is a variable called studentGrade. It could be any number from 0-12.
 * 
 * Step 2: Write code that will change the value of studentClass based on studentGrade
 *          - 0-6 will be Elementary
 *          - 7-8 will be Middle
 *          - 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior 
 *          
 *         Any other value should return "Error" to the console.
 * 
 * ↓ YOUR CODE HERE ↓ */
var studentClass
var studentGrade
switch(studentGrade){
    case (studentGrade<=6) : 
        return "Elementary";
        break;
    case (studentGrade <=8):
        return "Middle";
        break;
    case 9 : 
        return "Freshman";
        break;
    case 10:
        return"Sophmore";
        break;
    case 11:         
}       return "Junior";
        break;
    case 12 :
        return"Senior";   
        break;
    case 13++=: 
        return"Error"
        break:
        
    
          console.log(Error)





        /*-------------------------------------------------------*/

        console.log(`--------------------------
    Question 5: Loops! \n`);

        /**
         * Step 1: Write a "for loop" that will iterate backwards and print 10 to -10.
         * Step 2: Write a "do/while" loop that will prints 1 through 50.
         * Step 3: Modify the previous "do/while" loop.
         *         Print the iterator if the remainder (% // modulus) is 0 when divisible by 4.
         * 
         * ↓ YOUR CODE HERE ↓ */



        /*-------------------------------------------------------*/

        console.log(`--------------------------
    Question 6: Debugging an infinite loop! \n`);

    /**
     * Step 1: Read through the written code below.
     *         Figure out why it's causing an infinite loop & fix the syntax.
     * Step 2: Uncomment out to test
     * 
     * ↓ YOUR CODE HERE ↓ */

       /*                 <  
       for (let i = 11; i < 10; i++) { 
          console.log(i);   
       } 

      */
    
       Nested Statements:

        /*Create a nested if statement (the second if statement will only run if the first one evaluates to true) that does the following:
        The first if statement will check to see if num1 is greater than or equal to num2 .
        If the first if statement evaluates to true, then check to see if num3 is greater than or equal to num4.
        If both conditions are true, print: "Both statements are true."
        If the first condition is true but the second is false, print: "The first statement is true, but the second is not."
        In all cases, after the outer if statement, print "Program ended." to the console.*/


var x=num1
var y=num2
var z=num3
var zz=num4
if (x=>y)
    console.log(x || y)
if (z>=zz)
console.log (zz || zzz)

break;
console.log("Program ended.")







        console.log('-----------Finished------------')
