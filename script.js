// get all needed DOM elements
const form = document.getElementById("checkInForm");
const inputName = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// track attendence
let count = 0;
const maxCount = 50;

// handle form submission, event handler
form.addEventListener("submit", function(event){
  event.preventDefault();

  //get form values
  const name = inputName.value; // .value gets whatever is inside input field
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // increment count
  count++;
  console.log("Total checkins: ", count);

  //update progress bar
  const percentage = Math.round((count / maxCount) *100) + "%"; // progress bar length
  console.log(`Progress: ${percentage}`);

  //update team counter
  const teamCounter = document.getElementById(team + "Count");
  // teamCounter.textContent edits on webpage
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1; // converts str to int

  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `🌟 Welcome, ${name} from ${teamName}! 🌟`;

  //const message = `Welcome, ${name} from ${teamName}`;
  //console.log(message);

  
  form.reset(); // clears all input fields in the form
});