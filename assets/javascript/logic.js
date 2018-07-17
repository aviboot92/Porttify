// Initialize Firebase
var config = {
    apiKey: "AIzaSyDO3B0pdw187dANMOa_gUHb-nJ4WDXyQJM",
    authDomain: "contactformbasic.firebaseapp.com",
    databaseURL: "https://contactformbasic.firebaseio.com",
    projectId: "contactformbasic",
    storageBucket: "",
    messagingSenderId: "944996336328"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // 2. Button for adding New Contact in database
$("#submitBtn").on("click", function(event) {
  //prevent submission 
  event.preventDefault();
  // Grabs user input
  //try to validate inputs 
  var firstName = $("#firstNameInput").val().trim();
  var lastName = $("#lastNameInput").val().trim();
  var email = $("#emailInput").val().trim();
  var mobileNum = $("#phone_no").val().trim();
  // Input from Radio Button
  var gender = $('input[name="gender"]:checked').val();
  var comments = $("#commentSuggestion").val().trim();
  
  // Creates local "temporary" object for holding train data
  var newContact = {
    Name: firstName+" "+lastName,
    Email: email,
    Phone: mobileNum,
    Gender: gender,
    Comments: comments 
  };
  // Uploads train data to the database
  database.ref().push(newContact);
  // Logs everything to console
  console.log(newContact.Name);
  console.log(newContact.Email);
  console.log(newContact.Phone);
  console.log(newContact.Gender);
  console.log(newContact.Comments);
  // // Clears all of the text-boxes
  $("#firstNameInput").val("");
  $("#lastNameInput").val("");
  $("#emailInput").val("");
  $("#commentSuggestion").val("");
  $("#phone_no").val("");
  // $('input[name="gender"]:checked').val();
  $('input[name="gender"]:checked').removeAttr("checked");  
  // $(this).removeAttr('checked')
});