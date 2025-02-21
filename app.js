var firebaseConfig = {
    apiKey: "AIzaSyDhIIK322S_CRJxVOPI5rK5HmLnxe0oNbY",
    authDomain: "quizapplication-988d8.firebaseapp.com",
    databaseURL: "https://quizapplication-988d8-default-rtdb.firebaseio.com",
    projectId: "quizapplication-988d8",
    storageBucket: "quizapplication-988d8.firebasestorage.app",
    messagingSenderId: "56722897399",
    appId: "1:56722897399:web:669b92b4aeefc884d116f2"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);




var questions = [
    {
        question: "HTML Stands for",
        option1: "Hyper Text Markup Language",
        option2: "Hyper Tech Markup Language",
        option3: "Hyper Touch Markup Language",
        corrAnswer:"Hyper Text Markup Language",
    },
    {
        question: "CSS Stands for",
        option1: "Cascoding Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Cascating Style Sheets",
        corrAnswer: "Cascading Style Sheets",
    },
    {
        question: "Which tag is used for most large heading",
        option1: "<h6>",
        option2: "<h2>",
        option3: "<h1>",
        corrAnswer: "<h1>",
    },
    {
        question: "Which tag is used to make element unique ",
        option1: "id",
        option2: "class  ",
        option3: "label",
        corrAnswer: "id",
    },
    {
        question: "Any element assigned with id, can be get in css ",
        option1: "by # tag",
        option2: "by @ tag",
        option3: "by & tag",
        corrAnswer: "by # tag",
    },
    {
        question: "CSS can be used with ______ methods ",
        option1: "8",
        option2: "3",
        option3: "4",
        corrAnswer: "3",
    },
    {
        question: "In JS variable types are ____________ ",
        option1: "6",
        option2: "3",
        option3: "8",
        corrAnswer: "8",
    },
    {
        question: "In array we can use key name and value ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        corrAnswer: "False",
    },
    {
        question: "toFixed() is used to define length of decimal ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        corrAnswer: "True",
    },
    {
        question: "push() method is used to add element in the start of array ",
        option1: "True",
        option2: "False",
        option3: "None of above",
        corrAnswer: "False",
    },
];

var question = document.getElementById("ques");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var submitButton = document.getElementById("btn1")

var index = 0;
var score = 0;
function nextQuestion() {
var options = document.getElementsByClassName("options")

for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      var selectedOption = options[i].value;
      var getOption = questions[index - 1][`option${selectedOption}`];
      var corrAnswer = questions[index - 1]["corrAnswer"];

      if (getOption === corrAnswer) {
        score++;
      }

      console.log(getOption);
    }

    options[i].checked = false;
  }
  button.disabled =true


    if(index > questions.length - 1){
        Swal.fire({
            title: "Good job!",
            text: `Your score is ${score}`,
            icon: "success"
          });
    }
    else {
        question.innerText =questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index ++;
    }
}
    if (index < questions.length - 1) {
        question.innerText =questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
        index ++
    }
    else {
        ; console.log("QUESTIONS KHATAM");
    }


function clicked() {
    button.disabled = false;
}



  function signup() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log("User created:", user);
                window.location.href = "quizApp.html";
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log("Error:", errorMessage);
                alert("Error: " + errorMessage);
            });
    } else {
        alert("Please fill in all fields");
    }
}