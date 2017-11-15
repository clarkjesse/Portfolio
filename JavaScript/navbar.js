// JavaScript source code
console.log("Connected to portfolio\\JavaScript\\navbar.js");



var home = document.querySelector("#home");
var resume = document.querySelector("#resume");
var projects = document.querySelector("#projects");


//Functions
function initialize() {
    home.style.display = "block";
    resume.style.display = "none";
    projects.style.display = "none";
};

function gotoHome() {
    home.addEventListener("click", function() {
        home.style.display = "block";
        resume.style.display = "none";
        projects.style.display = "none"; 
    });
};

function gotoResume() {
    resume.addEventListener("click", function() {
        home.style.display = "none";
        resume.style.display = "block";
        projects.style.display = "none";
    });
};

function gotoProjects() {
    projects.addEventListener("click", function() {
        home.style.display = "none";
        resume.style.display = "none";
        projects.style.display = "block"; 
    });
};
