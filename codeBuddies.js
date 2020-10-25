///////////////////
///CODE BUDDES API
const codeBuddiesAPI = 'https://muc-2020-w1-student-api.vercel.app/api/buddies'

export default function codeBuddiesSection (inputAPI) {
  const elDiv = createContainer('.buddies__container', 'buddy')

  //creating HTML structure for buddies
  inputAPI.forEach(function forEachPerson(input, i) {
    switch (true) {
    case (i === 0) :
      elDiv.innerHTML += `
          <div class="buddy__content one bookmark">
            <h3 class="heading-3">${input}</h3>
          </div>
          <img class="buddy-imagedash" src="/img/Plus.svg" alt="" />
          `;
      break;
    default :
      elDiv.innerHTML += `
          <div class="buddy__content two bookmark">
            <h3 class="heading-3">${input}</h3>
          </div>
          `;
    }
  });
}