
const anchor = document.querySelector('a')!;// the exclamation mark eliminate the error and allow us to access to all the properties

// the example bellow does the same as the example above
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);


const formAll = document.querySelector('form')!; // With this we grab all the forms

const form = document.querySelector('.new-item-form') as HTMLFormElement; // We need to add "as HTMLFormElement" at the end of the querySelector so we can access to all the properties of this particular form. Since we grab it by the "class", we need to especified that is an HTMLFormElement
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement; // Same explanation as above. Just "as HTMLInputElement"  instead og "as HTMLFormElement"
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



// Add eventListener to submit the input data and show it the DOM- console.log
form.addEventListener('submit', (e: Event) => { //specify the "e" is an event, like this: e: Event
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber // MAke sure that the input data is a number
  );
});