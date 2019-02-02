const getClosestSibling = (element, classSelector = '', direction = '') => {
  const siblingMethod = direction.toLowerCase() === 'previous' ? 'previousSibling' : 'nextSibling';
  const siblingClass = classSelector.toLowerCase().replace(/^\./, '');
  let sibling = null;


  if (element) {
    let siblingElement = element;

    do {
      siblingElement = siblingElement[siblingMethod];
    } while (siblingClass && siblingElement && !siblingElement.classList.contains(siblingClass));

    sibling = siblingElement;
  }

  return sibling;
};

export const getPreviousSibling = (element, classSelector) => getClosestSibling(element, classSelector, 'previous');

export const getNextSibling = (element, classSelector) => getClosestSibling(element, classSelector);

export const getPosition = (el) => {
  let element = el;
  const position = { top: 0, left: 0 };

  if (element) {
    do {
      position.top += element.offsetTop || 0;
      position.left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
  }

  return position;
};

export const getSize = (el) => {
  let size = null;

  if (el) {
    size = {
      height: el.offsetHeight,
      width: el.offsetWidth,
    };
  }

  return size;
};

export default {
  getClosestSibling,
  getPreviousSibling,
  getNextSibling,
  getPosition,
  getSize,
};
