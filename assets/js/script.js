//# 05 Third-Party APIs: Work Day Scheduler

//Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
//You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

//## User Story

//AS AN employee with a busy schedule
//I WANT to add important events to a daily planner
//SO THAT I can manage my time effectively

// Acceptance Criteria
//WHEN I open the planner- THEN the current day is displayed at the top of the calendar - Done

// WHEN I scroll down- THEN I am presented with time blocks for standard business hours
// define current hour and compare with time blocks to indicate past, present and future time blocks.

// WHEN I view the time blocks for that day - THEN each time block is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block - THEN I can enter an event
// WHEN I click the save button for that time block - THEN the text for that event is saved in local storage
// WHEN I refresh the page - THEN the saved events persist


var today = moment().format("dddd, MMMM Do");
$("#currentDay").append(today);
console.log(today);

var now = parseInt(moment().format("HH"));
console.log(now);

// select textarea id to update with past, present and future colours
var $text9am = $("#text9am");
var $text10am = $("#text10am");
var $text11am = $("#text11am");
var $text12pm = $("#text12pm");
var $text13pm = $("#text13pm");
var $text14pm = $("#text14pm");
var $text15pm = $("#text15pm");
var $text16pm = $("#text16pm");
var $text17pm = $("#text17pm");








// // construct a function to show different colours in textarea element

$("textarea").each(function(){
    var currentTime = parseInt($(this).attr("currentTime"));
    //debugger
    if (currentTime < now ){
        $("textarea").addClass("bg-blue");
       
    }
     if (currentTime > now ){
        $(this).addClass("bg-green");
    }
    if (currentTime === now ){
        $(this).addClass("bg-red");
    }
console.log(currentTime);
});


// Delegated event handlers for the button element 
$( "button" ).on( "click", function(){
    // Web API setItem to store data into local storage and using JSON stringify method to convert it into string
    localStorage.setItem('9am' ,JSON.stringify($text9am.val()));
    localStorage.setItem('10am' ,JSON.stringify($text10am.val()));
    localStorage.setItem('11am' ,JSON.stringify($text11am.val()));
    localStorage.setItem('12pm' ,JSON.stringify($text12pm.val()));
    localStorage.setItem('1pm' ,JSON.stringify($text13pm.val()));
    localStorage.setItem('2pm' ,JSON.stringify($text14pm.val()));
    localStorage.setItem('3pm' ,JSON.stringify($text15pm.val()));
    localStorage.setItem('4pm' ,JSON.stringify($text16pm.val()));
    localStorage.setItem('5pm' ,JSON.stringify($text17pm.val()));
    
})
   

    
 // Web API getItem to read the value stored from local storage     
    $("#text9am").append(JSON.parse(localStorage.getItem("9am")));
    $("#text10am").append(JSON.parse(localStorage.getItem("10am")));
    $("#text11am").append(JSON.parse(localStorage.getItem("11am")));
    $("#text12pam").append(JSON.parse(localStorage.getItem("12pm")));
    $("#text13pm").append(JSON.parse(localStorage.getItem("1pm"))); 
    $("#text14pm").append(JSON.parse(localStorage.getItem("2pm")));
    $("#text15pm").append(JSON.parse(localStorage.getItem("3pm")));
    $("#text16pm").append(JSON.parse(localStorage.getItem("4pm")));
    $("#text17pm").append(JSON.parse(localStorage.getItem("5pm")));





