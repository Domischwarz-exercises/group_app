/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = get('.js-home');
const codeBuddy = get('.js-buddy');
const team = get('.js-team');
const energy = get('.js-energy');
const journal = get('.js-journal');
const detail = get('.js-detail')

// Detail formular
const rateTodayForm = get(".journaldetail")

// Head-Title
const headTitle = get(".head__title")
// Nav Buttons
const homeButton = get('.home-btn');
const buddyButton = get('.buddy-btn');
const teamButton = get('.team-btn');
const energyButton = get('.energy-btn');
const journalButton = get('.journal-btn');
// Button to Journal Detail
const detailButton = get('.detail-btn');
// Save formular button
const detailSaveButton = get(".journaldetail__savebutton")


const allBigBtns = getAll('.btn__big');
const allMediumBtns = getAll('.btn__medium');
const allSmallBtns = getAll('.btn__small');
const allExtrasBtns = getAll('.btn__extrasmall')
const starContainer = getAll(".journaldetail__starcontainer > img")


const rectangleContainer = getAll(".journaldetail__rectanglecontainer > img")
const navigationList = getAll(".nav-bar > a")
const pagesList = getAll("body > section")





// Nav Logic
navigationList.forEach((anchor, index) => {
  anchor.addEventListener("click", () => {
    resetPages(pagesList);
    // To Home
    if(index === 0){
      home.classList.remove("hidden");
      headTitle.innerText="Dashboard";
    }
    // To Code Buddy
    else if(index === 1){
      codeBuddy.classList.remove("hidden");
      headTitle.innerText="Code Buddy"
    }
    // To Team
    else if(index === 2){
      team.classList.remove("hidden");
      headTitle.innerText="Teams"
    }
    // To Energy
    else if(index === 3){
      energy.classList.remove("hidden");
      headTitle.innerText="Energy"
    }
    // To Journal
    else if(index === 4){
      journal.classList.remove("hidden");
      headTitle.innerText="Journal"
    }
  })
})


// To Journal Detail

detailButton.addEventListener('click', () => {
  resetPages(pagesList);
  detail.classList.remove('hidden');
})


// Journal Detail Star Logic

starContainer.forEach((img, index) =>{
  img.addEventListener("click", () => {
    starContainer.forEach(star => star.src = "img/starGrey.png");
    for (let i = 0; i <= index; i++){
      starContainer[i].src="img/starBlue.png"; 
    }
  })
})


// Journal Detail Rectangle Logic

rectangleContainer.forEach((img, index) =>{
  img.addEventListener("click", () => {
    rectangleContainer.forEach(rectangle => rectangle.src = "img/rectangleGrey.png");
    for (let i = 0; i <= index; i++){
      rectangleContainer[i].src="img/rectangleBlue.png"; 
    }
  })
})


// Reset the formular on Journal Detail

detailSaveButton.addEventListener("click", () => {
  rateTodayForm.reset();
})


// FUNCTIONS

function resetPages(pages) {
  return pages.forEach(page => page.classList.add('hidden'));
}

function getAll (selector) {
  return document.querySelectorAll(selector);
}

function get (selector) {
  return document.querySelector(selector);
}