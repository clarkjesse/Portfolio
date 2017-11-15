// JavaScript source code 
console.log("Connected to portfolio\\JavaScript\\home.js");

//Body content
var home = document.querySelector("#home");
var resume = document.querySelector("#resume");
var projects = document.querySelector("#projects");
//Nav links
var navHome = document.querySelector("#navHome");
var navResume = document.querySelector("#navResume");
var navProjects = document.querySelector("#navProjects");
//Sets display of DOM elements on intial page load
home.style.display = "block";
resume.style.display = "none";
projects.style.display = "none";


//Click listeners for nav bar
navHome.addEventListener("click", function() {
    console.log("home was clicked.");
    home.style.display = "block";
    resume.style.display = "none";
    projects.style.display = "none";
});
navResume.addEventListener("click", function() {
    console.log("Resume was clicked");
    home.style.display = "none";
    resume.style.display = "block";
    projects.style.display = "none";
});
navProjects.addEventListener("click", function () {
    console.log("Projects was clicked");
    home.style.display = "none";
    resume.style.display = "none";
    projects.style.display = "block";
});