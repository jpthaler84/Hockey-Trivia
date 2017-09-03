// Create an array for questions

var questions = [{
        question: "What is it called when a player swings their stick at an opposing player or breaks their stick with theirs?",
        choices: ["Clubbing", "Whacking", "Slashing", "Trimming"],
        answer: 2
    },

    {
        question: "What is the name of the team that will play in Las Vegas starting in 2017?",
        choices: ["Golden Knights", "Strippers", "Desert Vipers", "Blackjacks"],
        answer: 0
    },

    {
        question: "What are ice-resurfacing machines more commonly known as?",
        choices: ["Zambonis", "Strombolis", "Pepperonis", "Icemakers"],
        answer: 0
    },


    {
        question: "What normally civilized city rioted after losing the 2011 Stanley Cup finals?",
        choices: ["Chicago", "Tampa Bay", "Dallas", "Vancouver"],
        answer: 3
    },

    {
        question: "How fast is the fastest slap shot taken by an NHL player?",
        choices: ["98.6mph", "110.3mph", "88mph", "145.9mph"],
        answer: 1
    },

    {
        question: "How many Canadian teams are in the NHL?",
        choices: ["12", "4", "20", "7"],
        answer: 3
    },

    {
        question: "When a hockey player scores three goals in one game, what is it called?",
        choices: ["Trifecta", "Hat Trick", "l33t p0wn", "Triple Dog"],
        answer: 1
    },

    {
        question: "Besides a goal and an assist, what does a player need to get a Gordie Howe hat trick?",
        choices: ["Fight", "Penalty", "A Positive Attitude", "Broken Stick"],
        answer: 0
    },

    {
        question: "The last player in the league to play without a helmet was Craig MacTavish in what year?",
        choices: ["1979", "2012", "1997", "1950"],
        answer: 2
    },

    {
        question: "The 1919 Stanley Cup Finals was the only game where no winner was declared due to what?",
        choices: ["The Great Fire of 1919", "Flooded Arena", "Blackout", "The Flu"],
        answer: 3
    },


];

// Create elements for each question
for (var i = 0; i < questions.length; i++) {
    var question = questions[i].question;
    $("#quiz").append(question);
    var options = questions[i].choices;
    $("#quiz").append(document.createElement("br"));
    var name = "radio" + i;
    for (var opt in options) {

        var radioEle = document.createElement("input");
        radioEle.type = "radio";
        radioEle.value = options[opt];
        radioEle.name = name;
        $("#quiz").append(radioEle);
        var label = document.createElement("Label");
        label.innerHTML = options[opt];
        $("#quiz").append(label);

        $("#quiz").append(document.createElement("br"));
    }

    $("#quiz").append(document.createElement("br"));

// Hide quiz until Start button clicked
    $("#quiz").hide();
    $("#submit").hide();
    $("#remain").hide();
}



$(document).ready(function() {

// Timer
    $("#start").click(function() {

        function startTimer(duration, display) {
            var timer = duration,
                minutes, seconds;
            setInterval(function() {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        jQuery(function($) {
            var twoMinutes = 60 * 2,
                display = $("#timer");
            startTimer(twoMinutes, display);
        });

        $("#quiz").show();
        $("#submit").show();
        $("#start").hide();
        $("#remain").show();
    });

    $("#submit").click(function() {
        var right = [0];
        var wrong = [0];

        if (radioEle.value === questions.answer) {
            right++;
        } else {
            wrong++;
        }

        var totalRight = right;

        // $("#score").append("<h1>"Correct: + right + "</h1>");
        // $("#score").append("<h2>"Incorrect: + wrong + "</h2>");

        $("#quiz").hide();
        $("#submit").hide();
        $("#remain").hide();
        $("#timer").hide();
    })
});