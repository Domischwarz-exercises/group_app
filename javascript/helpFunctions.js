
export default function createContainer(target, className) {
    const element = get(target);
    const elDiv = document.createElement('div');
    element.appendChild(elDiv);
    elDiv.classList.add(className);
    
    return elDiv
  }

export async function fetchAPI(http, htmlCreator) {
  try {
    const result = await fetch(http);
    const data = await result.json();
    data.forEach((pair, index) => htmlCreator(pair, index));
  } catch (error) {
    console.error(error.message);
  }
}

export function resetPages(pages) {
  return pages.forEach(page => page.classList.add('hidden'));
}

export function getAll (selector) {
  return document.querySelectorAll(selector);
}

export function get (selector) {
  return document.querySelector(selector);
}

