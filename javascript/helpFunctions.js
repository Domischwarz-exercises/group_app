import get from '../index'

export default function createContainer(target, className) {
    const element = get(target);
    const elDiv = document.createElement('div');
    element.appendChild(elDiv);
    elDiv.classList.add(className);
    
    return elDiv
  }

