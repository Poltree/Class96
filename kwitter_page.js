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

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         function send(){
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
            });
         
           document.getElementById("msg").value = "";
         }
      } });  }); }
getData();
function updatelike(msg_id){
      console.log("click on like button-" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = number(likes) + 1;
      
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      })
      }
      function Logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location.replace("kwitter.html")
      }
      