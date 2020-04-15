console.log("project1review.html loaded....");

// select all needed elements from the DOM and check selections
let confidenceField = document.querySelector("#confidenceField");
// console.log(confidenceField);
let entryField = document.querySelector("#entryField");
// console.log(entryField);
let dateField = document.querySelector("#dateField");
// console.log(dateField);
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);
let entryBlock = document.querySelector("#entryBlock")
// console.log(entryBlock);

//define an empty array to keep journal entries
let entryArray = [];

// create a callback function for on click event
let formSubmission = (event) => {
    event.preventDefault(); // keep form from reloading
    console.log("callback works"); // check that call back is being called

    // // define and object using object literal notation with form input values as property values
    // let newEntry = {
    //     confidence : confidenceField.value,
    //     entry : entryField.value,
    //     date : dateField.value,
    // }
    // // console.log(newEntry) // check that object is being created
    // entryArray.push(newEntry); // push object to array defined on line 16
    // displayEntries(entryArray); // call function to display entries and pass array
}



// call callback function when form submit button is clicked
submitBtn.addEventListener("click", formSubmission);