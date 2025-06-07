//switch statement
let dayNumber = parseInt(prompt("enter a number"));
let day;

switch (dayNumber) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
        case 7:
        day = "Sunday";
        break;
    default:
        day = "invalid entry";
        break;
}
console.log(day);
// ///exercise 
// let marks = parseInt(prompt("enter your marks"));
// let grade;

// switch (marks) {
//     case marks >41 && marks<=50 :
//         grade = "A" ;
//         break;
//   case marks >31 && marks<=40 :
//         grade = "B" ;
//         break;
    
//   case marks >21 && marks<=30 :
//         grade = "C" ;
//         break;
    
//   case marks >11 && marks<=20 :
//         grade = "D" ;
//         break;
    
//   case marks >0 && marks<=10 :
//         grade = "E" ;
//         break;
    
//     default:
//         grade = "invalid entry";
//         break;
// }
// console.log(grade);