const ELEMENTS = {
  main: document.querySelector(`#main`),
  introasterisk: null,
  greetingcontinue: null,
  rulesbutton: null,
  rulesinput: null,
};

const targetNode = ELEMENTS.main;

const addElementToCollection = (collection, keyname, element) => {
  if (collection[keyname] || !document.querySelector(element)) {
    return;
  } else {
    collection[keyname] = document.querySelector(element);
    const elementAdded = new Event(`elementAdded`);
    document.dispatchEvent(elementAdded);
  }
};

// Options for the observer (which mutations to observe)
const config = {attributes: true, childList: true, subtree: true};

// Callback function to execute when mutations are observed
const callback = (mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === `childList`) {
      addElementToCollection(ELEMENTS, `introasterisk`, `.intro__asterisk`);
      addElementToCollection(ELEMENTS, `greetingcontinue`, `.greeting__continue`);
      addElementToCollection(ELEMENTS, `rulesbutton`, `.rules__button`);
      addElementToCollection(ELEMENTS, `rulesinput`, `.rules__input`);
    } else if (mutation.type === `attributes`) {
      window.console.log(`The + ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);


export default ELEMENTS;
