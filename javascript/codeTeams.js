import createContainer from './helpFunctions.js';

export default function teamsSection (inputAPI, index) {
    const elDiv = createContainer('.teams__container', 'buddy')
    elDiv.innerHTML += `<h2 class="buddy__content--title heading-2">Team ${index+1}</h2>`
    
    //creating HTML for teams 
    inputAPI.forEach(function forEachPerson(input, i) {
      switch (true) {
        case (i === 0): 
          elDiv.innerHTML += `
              <div class="buddy__content one bookmark">
                <h3 class="heading-3">${input}</h3>
              </div>`;
          break;
        case (i === inputAPI.length-1): 
          elDiv.innerHTML += `
              <div class="buddy__content two bookmark">
                <h3 class="heading-3">${input}</h3>
              </div>`;
          break;
        default:
          elDiv.innerHTML += `
              <div class="buddy__content b-style bookmark">
                <h3 class="heading-3">${input}</h3>
              </div>`;
        }
      })
  }