"use strict";

//Which of these alerts are going to execute?
//What will the results of the expressions be inside if(...)?

//(-1 || 0) = true: will be execute
if (-1 || 0) alert("first");
//(-1 && 0) = false: not execute
if (-1 && 0) alert("second");
//(null || -1 && 1) = true: will be execute
if (null || (-1 && 1)) alert("third");
