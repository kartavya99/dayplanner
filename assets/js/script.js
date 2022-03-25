//# 05 Third-Party APIs: Work Day Scheduler

//Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
//You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

//## User Story

//AS AN employee with a busy schedule
//I WANT to add important events to a daily planner
//SO THAT I can manage my time effectively

// Acceptance Criteria
//WHEN I open the planner- THEN the current day is displayed at the top of the calendar - Done

// WHEN I scroll down- THEN I am presented with timeblocks for standard business hours
// define current hour and compare with timeblocks to indicate past, present and future time blocks.

// WHEN I view the timeblocks for that day - THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock - THEN I can enter an event
// WHEN I click the save button for that timeblock - THEN the text for that event is saved in local storage
// WHEN I refresh the page - THEN the saved events persist


var today = moment().format("dddd, MMMM Do");
// $("#currentDay").text(today.format("dddd, MMMM Do"));
console.log(today);
$("#currentDay").append(today);

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





var timeNow = parseInt($(this).attr("tineNow"));
//debugger
// // construct a function to show different colours in textarea element
// $( "textarea" ).each(function(){
//     //debugger
//     if (timeNow < now ){
//         $(this).addClass("bg-grey");
//     }
 
//     if (timeNow > now ){
//         $(this).addClass("bg-green");
//     }
//     if (timeNow === now ){
//         $(this).addClass("bg-red");
//     }
// })


var timeNow = $("textarea").each(function(){
    if (timeNow < now ){
        $("textarea").addClass("bg-grey");
    }
 
    if (timeNow > now ){
        $(this).addClass("bg-green");
    }
    if (timeNow === now ){
        $(this).addClass("bg-red");
    }

})




// var workDay = {
//  $text9am : text9am.value,
//  $text10am : text10am.value,
//  $text11am : text11am.value,
//  $text12pm : text12pm.value,
//  $text13pm : text13pm.value,
//  $text14pm : text14pm.value,
//  $text15pm : text15pm.value,
//  $text16pm : text16pm.value,
//  $text17pm : text17pm.value,

//     // $("button").click(function() {
//     //     // set up items in the local storage
//     //     localStorage.setItem("9am" , JSON.stringify($text9am.value));
//     //     localStorage.setItem("10am" , JSON.stringify($text10am.value));
//     //     localStorage.setItem("11am" , JSON.stringify($text11am.value));
//     //     localStorage.setItem("12pm" , JSON.stringify($text12pm.value));
//     //     localStorage.setItem("13am" , JSON.stringify($text13pm.value));
//     //     localStorage.setItem("14am" , JSON.stringify($text14pm.value));
//     //   });
    
    
//     // $("#text9am").append(localStorage.getItem("9am"));
//     // $("#text10am").append(localStorage.getItem("10am"));
//     // $("#text11am").append(localStorage.getItem("11am"));
//     // $("#text12pm").append(localStorage.getItem("12pm"));
//     // $("#text13pm").append(localStorage.getItem("13pm"));

    







