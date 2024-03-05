const QuizQuestion = [
    {
        question: "What does HTML stands for?",
        option: ["Hyper Text Markup Language", "Cascading Style Sheets", "JavaScript Object Notation", "Markup Language Tags"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stands for?",
        option: ["Cascading Style Page", "Cascading Style Sheet", "Creative Style Specification", "Custom Style Sheet"],
        answer: "Cascading Style Sheet",
    },
    {
        question: "Which of the following is not a valid HTML tag?",
        option: ["<header>", "<div>", "<span>", "<paragraph>"],
        answer: "<paragraph>",
    },
    {
        question: "What is the correct way to include an external JavaScript file in HTML?",
        option: ["<script src=script.js>", "<javascript href=script.js>", "<script link=script.js>", "<link rel=script href=script.js>"],
        answer: "<script src=script.js>",
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        option: ["text-color", "color", "font-color", "text-style"],
        answer: "color",
    },
    {
        question: "In JavaScript, how do you declare a variable?",
        option: ["v myVar;", "var myVar;", "variable myVar;", "let myVar;"],
        answer: "var myVar;",
    },
    {
        question: "Which of the following is not a valid way to comment in JavaScript?",
        option: ["/* This is a comment /", "// This is a comment", "<!-- This is a comment -->", "/ This is another way of commenting */"],
        answer: "<!-- This is a comment -->",
    },
    {
        question: "What does the DOM stand for in web development?",
        option: ["Document Object Model", "Design Object Model", "Development Oriented Model", "Data Object Management"],
        answer: "Document Object Model",
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        option: ["<ul>", "<list>", "<ol>", "<unordered>"],
        answer: "<ul>",
    },
    {
        question: "What is the correct syntax for a function declaration in JavaScript?",
        option: ["function = myFunction() {}", "function myFunction() {}", "var myFunction = function() {}", "myFunction = function() {}"],
        answer: "function myFunction() {}",
    },
]
let currentquestion = 0;
let score = 0;




document.getElementById("quizpage").style.display = "none"
document.getElementById("qpo").style.display = "none"
document.getElementById("qpn").style.display = "none"
document.getElementById("rph").style.display = "none"
document.getElementById("rps").style.display = "none"



function startquiz() {

    let startbutton = hpc_3.value;

    if (startbutton == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You didn't enter your name!",
        });
    } else {
        document.getElementById("homepage").style.display = "none";
        document.getElementById("hpc-1").style.display = "none";
        document.getElementById("hpc_3").style.display = "none";
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("quizpage").style.display = "block"
        document.getElementById("qpo").style.display = "block"
        document.getElementById("qpn").style.display = "block"

        loadquestion()
    }
}

function loadquestion() {
    const questionpara = document.getElementById("question");
    const optionanswers = document.getElementById("options");
    const currentquestionbyobject = QuizQuestion[currentquestion];
    optionanswers.innerHTML = "";
    questionpara.innerText = currentquestionbyobject.question;

    for (let i = 0; i < currentquestionbyobject.option.length; i++) {

        const div = document.createElement("div");
        div.setAttribute('class', 'opt');

        const input = document.createElement("input");
        input.type = 'radio';
        input.name = 'option';
        input.value = currentquestionbyobject.option[i];

        const label = document.createElement("label");
        label.innerText = currentquestionbyobject.option[i]

        const br = document.createElement("br");

        optionanswers.appendChild(div)
        div.appendChild(input)
        div.appendChild(label)
        optionanswers.appendChild(br)

        console.log(input)
    }
}

function nextquestion() {
    const selectedanswer = document.querySelector('input[name="option"]:checked')
    // console.log(selectedanswer)
    if (selectedanswer.value == QuizQuestion[currentquestion].answer) {
        score++;
    }
    currentquestion++;

    if (currentquestion < QuizQuestion.length) {
        loadquestion()
    } else {
        result();
    }
    // console.log(score)
}

function result() {
    document.getElementById("quizpage").style.display = "none"
    document.getElementById("qpo").style.display = "none"
    document.getElementById("qpn").style.display = "none"
    document.getElementById("rph").style.display = "block"
    document.getElementById("rps").style.display = "block"

    document.getElementById("coments").innerText = `${document.getElementById('hpc_3').value}, You have completed the Quiz and below is your score.`
    document.getElementById("score").innerText =  `Score : ${score}/${QuizQuestion.length}`;


    if (score <= 0 ) {
        document.getElementById("remarks").innerText = "LEAVE PROGRAMMING"
    } else if(score < 1 ){
        document.getElementById("remarks").innerText = "TRY AGAIN !!"
    }else if(score < 2 ){
        document.getElementById("remarks").innerText = "IMPROVE YOUR KNOWLEGE!"
    }else if(score < 3 ){
        document.getElementById("remarks").innerText = "STUDY HARD !!"
    }else if(score < 4 ){
        document.getElementById("remarks").innerText = "STUDY AGAIN !!"
    }else if(score < 5 ){
        document.getElementById("remarks").innerText = "PLEASE BE CAREFULL !"
    }else if(score < 6 ){
        document.getElementById("remarks").innerText = "GOOD 👍"
    }else if(score < 7 ){
        document.getElementById("remarks").innerText = "DOING GOOD !"
    }else if(score < 8 ){
        document.getElementById("remarks").innerText = "NICE WORK 👏"
    }else if(score < 9 ){
        document.getElementById("remarks").innerText = "GOOD WORK 😍"
    }else if(score < 10 ){
        document.getElementById("remarks").innerText = "MAGNIFICENT !"
    }else{
        document.getElementById("remarks").innerText = "EXCELLENT WORK 🔥🔥"
    }
}

function reset(){
    location.reload();
}

