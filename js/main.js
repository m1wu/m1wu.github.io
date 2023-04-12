myProfile = {
    username: "m1wu",
    biography: "Just some display text for the time being.",
    skills: ["Javascript", "HTML/CSS", "Bootstrap"],
    projects: [
        hogerLager {
            teammates: ['Zidane', 'Amine']
        },      
    ]    
}

const myProfileName = document.querySelector('.myProfileName');
const myProfileBio = document.querySelector('.myProfileBio');

myProfileName.textContent = myProfile.username
myProfileBio.textContent = myProfile.biography

console.log(myProfile);