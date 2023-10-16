const favoriteColor = prompt('Please enter your favorite color:');

if (favoriteColor) {
    const body = document.body;
    const firstElementChild = body.firstElementChild;
    if (firstElementChild) {
        firstElementChild.style.backgroundColor = favoriteColor;
    } else {
        console.error('Body has no first element child.');
    }
} else {
    console.error('No color entered by the user.');
}

const myElement = document.createElement('div');
myElement.setAttribute('class', 'my-class');
myElement.setAttribute('data-info', 'some information');

const hasClassAttribute = myElement.hasAttribute('class');
const hasIdAttribute = myElement.hasAttribute('id');

const classAttributeValue = myElement.getAttribute('class');
const idAttributeValue = myElement.getAttribute('id');

const allAttributes = myElement.attributes;

const parentElement = document.createElement('div');
const childElement = document.createElement('p');

parentElement.appendChild(childElement); 
parentElement.prepend(childElement);    

const targetElement = document.createElement('div');
const newElement = document.createElement('p');

targetElement.after(newElement);

targetElement.before(newElement);

targetElement.insertAdjacentHTML('afterbegin', '<p>This is inserted at the beginning</p>');

targetElement.insertAdjacentHTML('beforebegin', '<p>This is inserted before the element</p>');

targetElement.insertAdjacentHTML('afterend', '<p>This is inserted after the element</p>');

targetElement.insertAdjacentHTML('beforeend', '<p>This is inserted at the end</p>');
