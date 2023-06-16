console.log("main.js loaded!");

myProfile = {
    username: "Man-Fai",
    biography: "A student for software engineer.",
    skills: ["Javascript", "HTML/CSS", "Bootstrap"]  
};

fetch('/json/projects.json')
.then(myData => myData.json())
.then(jsonData => showinconsole(jsonData));

function showinconsole(data) {

    console.log(data);
    
}

const myProfileName = document.querySelector('.myProfileName');
const myProfileBio = document.querySelector('.myProfileBio');

myProfileName.textContent = myProfile.username
myProfileBio.textContent = myProfile.biography

console.log(myProfile);