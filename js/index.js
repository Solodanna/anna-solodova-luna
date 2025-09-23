const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© Anna Solodova ${thisYear}`;
footer.appendChild(copyright);

// Skills section

const skills = [
  "✔ JavaScript",
  "✔ Python",
  "✔ HTML & CSS",
  "✔ GitHub",
  "✔ Responsive Design",
  "✔ Adobe Photoshop",
];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
