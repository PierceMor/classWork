
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB167e8oxQ0qdHXdnp67Vbl2uw_yNL9PIg",
    authDomain: "saturday3-10.firebaseapp.com",
    databaseURL: "https://saturday3-10.firebaseio.com",
    projectId: "saturday3-10",
    storageBucket: "",
    messagingSenderId: "273017951553"
  };
  firebase.initializeApp(config);


var database = firebase.database();

//Initial values
var name = "";
var email = "";
var age = 0;
var comment = "";

//Capture Button Click
$("button").on("click", function(event){
   event.preventDefault();
   //Grab values from text boxes
   name = $("#employeeName").val().trim();
   role = $("#employeeRole").val().trim();
   startDate = $("#employeeDate").val().trim();
   monthlyRate = $("#employeeRate").val().trim();

   //Code for Pushing
   database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
       dateAdded: firebase.database.ServerValue.TIMESTAMP
   });

});

//Firebase watcher
database.ref()
   .orderByChild("dateAdded")
   .limitToLast(1)
   .on("child_added", function(snapshot){
       var sv = snapshot.val();

       //console.log
       console.log(sv.name);
       console.log(sv.role);
       console.log(sv.startDate);
       console.log(sv.monthlyRate);

          // Change the HTML to reflect
          $("#name-display").text(sv.name);
          $("#role-display").text(sv.role);
          $("#startDate-display").text(sv.startDate);
          $("#montlyRate-display").text(sv.monthlyRate);

          // Handle the errors
        }, function(errorObject) {
          console.log("Errors handled: " + errorObject.code);
   });

