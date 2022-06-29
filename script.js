/*Add your JavaScript here*/
var asitwasScore = 0; // Store the asitwas score
var daydreamingScore = 0; // Store the daydreaming score

var questionCount = 0; // Store the number of answers clicked on

var result = document.getElementById ("result");
  
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", asitwas);
q1a2.addEventListener("click", daydreaming);
q2a1.addEventListener("click", asitwas);
q2a2.addEventListener("click", daydreaming);
q3a1.addEventListener("click", asitwas);
q3a2.addEventListener("click", daydreaming);

function asitwas() {
 asitwasScore += 1;
  questionCount += 1;

  console.log("questionCount= "+ questionCount + "/t" +"asitwasScore = " + asitwasScore);

  if (questionCount==3){
 console.log("The quiz is done!")
    updateResult ();
  
    }

  }
 

function daydreaming() {
 daydreamingScore += 1;
  questionCount += 1;

  console.log("questionCount= "+ questionCount + "/t"+ "daydreamingScore =" + daydreamingScore);
  
if (questionCount==3){
 console.log("The quiz is done!")
  updateResult ();
}
}

function updateResult() {
  if (asitwasScore >=2){
    result.innerHTML = "You got As it Was!";
   console.log("You got As it Was!")
  } else if (daydreamingScore >=2){
    result.innerHTML = "You got Daydreaming!";
   console.log("You got Daydreaming!") 
    }
}

