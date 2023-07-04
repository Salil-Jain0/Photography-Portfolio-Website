  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDeg5Ak8arzdt_PQF_HnLtZYPSrB9NmHF0",
    authDomain: "portfoliowebsite-2fd57.firebaseapp.com",
    projectId: "portfoliowebsite-2fd57",
    storageBucket: "portfoliowebsite-2fd57.appspot.com",
    messagingSenderId: "530029304513",
    appId: "1:530029304513:web:de5b067ef2aa4088d3d240"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get Ref to database service
  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click', function(e){


    set(ref(db, 'user/' + document.getElementById("name").value), {

        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Contact: document.getElementById("phonenumber").value,
        Querry: document.getElementById("message").value, 

    })

    alert("Message Sent Successfully!")
  })