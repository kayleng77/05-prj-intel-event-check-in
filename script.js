// get all needed DOM elements
const form = document.getElementById("checkInForm");
const inputName = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// track attendence
let count = 0;
const maxCount = 5;

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

  // update the count on the webpage
  const totalCount = document.getElementById("attendeeCount");
  totalCount.textContent = count; // updates total checkins on webpage

  //update progress bar
  const percentage = Math.round((count / maxCount) *100) + "%"; // progress bar length
  console.log(`Progress: ${percentage}`);

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage; // updates progress bar length on webpage

  //update team counter
  const teamCounter = document.getElementById(team + "Count");
  // teamCounter.textContent edits on webpage
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1; // converts str to int

  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `🌟 Welcome, ${name} from ${teamName}! 🌟`;

  //const message = `Welcome, ${name} from ${teamName}`;
  //console.log(message);

  if(count == maxCount){
    const congratMessage = document.getElementById("congratMessage");

    const teamwater = document.getElementById("waterCount");
    let teamWaterCount = parseInt(teamwater.textContent);
    const teamzero = document.getElementById("zeroCount");
    let teamZeroCount = parseInt(teamzero.textContent);
    const teampower = document.getElementById("powerCount");
    let teamPowerCount = parseInt(teampower.textContent);

    if(teamWaterCount > teamZeroCount && teamWaterCount > teamPowerCount){
      congratMessage.textContent = "🎉 Attendee check-in goal has been reached! 🎉\n Congratulations! Team Water Wise has the most attendees!";
    } else if(teamZeroCount > teamWaterCount && teamZeroCount > teamPowerCount){
      congratMessage.textContent = "🎉 Attendee check-in goal has been reached! 🎉\n Congratulations! Team Net Zero has the most attendees!";
    } else if(teamPowerCount > teamWaterCount && teamPowerCount > teamZeroCount){
      congratMessage.textContent = "🎉 Attendee check-in goal has been reached! 🎉\n Congratulations! Team Renewables has the most attendees!";
    } else {
      congratMessage.textContent = "🎉 Attendee check-in goal has been reached! 🎉\n Congratulations! There is a tie between teams!";
    }
    

  }

  
  form.reset(); // clears all input fields in the form
});