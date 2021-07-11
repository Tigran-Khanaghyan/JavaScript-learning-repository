"use strict";

//What will the result be?

/*result 2:The OR || operator 
    1.Evaluates operands from left to right
    2.For each operand, converts it to boolean. If the result is true,
     stops and returns the original value of that operand.
    3.If all operands have been evaluated (i.e. all were false),
     returns the last operand.*/
alert(null || 2 || undefined);
//result 1 then 2: alert returns undefined. so alert(1) executed then 2
//is true and outer alert will show 2.
alert(alert(1) || 2 || alert(3));
//result null:
/*AND && operator does the following
    1.Evaluates operands from left to right.
    2.For each operand, converts it to a boolean. If the result is false,
     stops and returns the original value of that operand. 
    3.If all operands have been evaluated (i.e. all were truthy), 
      returns the last operand.*/
alert(1 && null && 2);
//result 1 than undefined
alert(alert(1) && alert(2));
//result 3: 2 && 3 => 3, null || 3 || 4 => 4.
alert(null || (2 && 3) || 4);
