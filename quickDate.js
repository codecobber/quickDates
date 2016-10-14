var d = new Date();
var dim = d.getDate();
var m = d.getMonth();
var y = d.getFullYear();
var day = d.getDay();
var dateSuffix = "";

if((dim > 3 && dim < 21) || (dim > 23 && dim < 31)){
  dateSuffix = "th";
}


switch(m){
  case 0:
   m="January";
  break;
  case 1:
   m="February";
  break;
  case 2:
   m="March";
  break;
  case 3:
   m="April";
  break;
  case 4:
   m="May";
  break;
  case 5:
   m="June";
  break;
  case 6:
   m="July";
  break;
  case 7:
   m="August";
  break;
  case 8:
   m="September";
  break;
  case 9:
   m="October";
  break;
  case 10:
   m="November";
  break;
  case 11:
   m="December";
  break;
}

switch(day){

  case 0:
   day="Sunday";
  break;
  case 1:
   day="Monday";
  break;
  case 2:
   day="Tuesday";
  break;
  case 3:
   day="Wednesday";
  break;
  case 4:
   day="Thursday";
  break;
  case 5:
   day="Friday";
  break;
  case 6:
   day="Saturday";
  break;
}

switch(dim){
  case 1:
  case 21:
  case 31:
    dateSuffix = "st";
  break;
  case 2:
  case 22:
    dateSuffix = "nd";
  break;
  case 3:
  case 23:
    dateSuffix = "rd";
  break;
  case "th":
    dateSuffix = "th";
  break;
}



var prettyDate = day + " " + dim + ""+ dateSuffix + " " + m + " " + y;
//console.log(prettyDate);
