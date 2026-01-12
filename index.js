// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("active");
    }
  });
});

// Typing Effect
const text = "Frontend Web Developer | Animation Lover";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 90);
  }
}
typing.textContent = "";
type();
const username = "Darshan04-max"; // 👈 apna GitHub username daal

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("github-projects");

    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
        <a href="${repo.html_url}" target="_blank">Code</a>
        ${repo.homepage ? `<a href="${repo.homepage}" target="_blank">Live</a>` : ""}
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.log("GitHub Error:", err));
