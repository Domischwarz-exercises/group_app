/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = document.querySelector('.js-home');
const codeBuddy = document.querySelector('.js-buddy');
const team = document.querySelector('.js-team');
const energy = document.querySelector('.js-energy');
const journal = document.querySelector('.js-journal');
const detail = document.querySelector('.js-detail');

const homeButton = document.querySelector('.home-btn');
const buddyButton = document.querySelector('.buddy-btn');
const teamButton = document.querySelector('.team-btn');
const energyButton = document.querySelector('.energy-btn');
const journalButton = document.querySelector('.journal-btn');
const detailButton = document.querySelector('.detail-btn');


homeButton.addEventListener('click', () => {
  home.classList.remove('hidden');
  codeBuddy.classList.add('hidden');
  team.classList.add('hidden');
  energy.classList.add('hidden');
  journal.classList.add('hidden');
  detail.classList.add('hidden');
});

buddyButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.remove('hidden');
    team.classList.add('hidden');
    energy.classList.add('hidden');
    journal.classList.add('hidden');
    detail.classList.add('hidden');
  });

  teamButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.remove('hidden');
    energy.classList.add('hidden');
    journal.classList.add('hidden');
    detail.classList.add('hidden');
  });

  energyButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.add('hidden');
    energy.classList.remove('hidden');
    journal.classList.add('hidden');
    detail.classList.add('hidden');
  });

  journalButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.add('hidden');
    energy.classList.add('hidden');
    journal.classList.remove('hidden');
    detail.classList.add('hidden');
  });

  detailButton.addEventListener('click', () => {
    home.classList.add('hidden');
    codeBuddy.classList.add('hidden');
    team.classList.add('hidden');
    energy.classList.add('hidden');
    journal.classList.add('hidden');
    detail.classList.remove('hidden');
  });

  