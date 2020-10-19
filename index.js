/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = document.querySelector('.js-home');
const codeBuddy = document.querySelector('.js-buddy');
const team = document.querySelector('.js-team');
const energy = document.querySelector('.js-energy');
const journal = document.querySelector('.js-journal');

const homeButton = document.querySelector('.home-btn');
const buddyButton = document.querySelector('.buddy-btn');
const teamButton = document.querySelector('.team-btn');
const energyButton = document.querySelector('.energy-btn');
const journalButton = document.querySelector('.journal-btn');


homeButton.addEventListener('click', () => {
  home.classList.remove('hidden');
  codeBuddy.classList.add('hidden');
  team.classList.add('hidden');
  energy.classList.add('hidden');
  journal.classList.add('hidden');
  document.querySelector(".head__title").innerText = "Dashboard";
});

buddyButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.remove('hidden');
    team.classList.add('hidden');
    energy.classList.add('hidden');
    journal.classList.add('hidden');
    document.querySelector(".head__title").innerText = "Code Buddy";
  });

  teamButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.remove('hidden');
    energy.classList.add('hidden');
    journal.classList.add('hidden');
    document.querySelector(".head__title").innerText = "Teams";
  });

  energyButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.add('hidden');
    energy.classList.remove('hidden');
    journal.classList.add('hidden');
    document.querySelector(".head__title").innerText = "Energy";
  });

  journalButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.add('hidden');
    energy.classList.add('hidden');
    journal.classList.remove('hidden');
    document.querySelector(".head__title").innerText = "Journal";
  });