var firebaseConfig = {
      apiKey: "AIzaSyBhkgbfUiPvWJemIjynR_WN9JSK6TA7How",
      authDomain: "kwitter-6708b.firebaseapp.com",
      databaseURL: "https://kwitter-6708b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6708b",
      storageBucket: "kwitter-6708b.appspot.com",
      messagingSenderId: "814784792088",
      appId: "1:814784792088:web:152d2d0b064b54b05b656d",
      measurementId: "G-9YZMS8HMG9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"<div><hr>"
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}