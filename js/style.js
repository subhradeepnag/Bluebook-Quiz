$(document).ready(function() {

  var questionText = ["1. A 10 year old boy presents with a 2 week history of severe fever and profuse sweating, headache, nausea, muscle pain ,bloody stools , diarrhea, vomiting and cough. No toxin ingestion has been noted and the family denies any use of traditional medicines.",
  "2. Raj was 22 year old male presents with symptoms of itching, stinging, and burning between your toes or on soles of your feet , cracking and peeling skin on your feet, most commonly between your toes and dry skin, discolored, thick, and crumbly toenails was discovered.",
  "3. A 16 year old girl presents with a sore throat and hoarseness with enlarged lymph nodes in the  neck region .also with the difficulty in breathing or rapid breathing and Nasal discharge for about 5 days.",
  "1. For the disease MALARIA the most accurate antibiotic would be ",
  "2. Choose the suitable antibiotic for the patient suffering from the common disease ATHLETE’S FOOT ",
  "3. A serious bacterial infection which can be spread easily such as DIPHTHERIA can be treated with?",
  "Guess this structure - Doxycycline",
  "Guess this structure - Miconazole",
  "Guess this structure - Erythromycin"
   ]
  var choices = [
    ["a.  Pneumonia" ,"b.  Malaria" , "c.  Typhoid " , "d.  Hyperthermia"],
    ["a.  Hammer toe","b.  Vascular ischemia " , "c.  Perniosis", "d.  Athlete’s foot "],
    ["a.  Diphtheria","b.  Throat infection","c.  Viral fever" , "d.  Cholera"],
    ["a.  Adoxa","b.  Erythromycin","c.  Vibramycin","d.  Doxycycline"],
    ["a.  Penicillin","b.  Amoxicillin","c.  Miconazole","d.  Quinidine"],
    ["a.  Erythromycin","b.  Zestril","c.  Acetaminophen","d.  Glucophage "],
    ["a. C23H32CIN2O10","b.C25H33CIN2O11" , "c.C24H33CIN2O10","d.C24H34CIN2O11"],
    ["a.C18H14CIN2O2","b.C24H33CIN2O11","c.C21H34CIN2O11","d.C18H14Cl4N2O"],
    ["a.C37H67NO13","b.C37H57NO12","c.C34H57NO13","d.C37H64NO15"]
  ]
  var answers = [2,4,1,4,3,1,3,4,1];
  var userAnswers = [0,0,0,0,0,0,0,0,0];
  var ans = 0;
  var correct = 0;

  function hideAll() {
    $(".options").fadeOut(10);
    $(".question-box").fadeOut(10);
    $(".progressBar").fadeOut(10);
    $("option1").removeClass("btn-primary");
    $("option2").removeClass("btn-primary");
    $("option3").removeClass("btn-primary");
    $("option4").removeClass("btn-primary");
  }

  function progressBarIn() {
    $(".progressBar").fadeIn(500);
    var progress = 100;
    var progressAnim = setInterval(frame, 100);
    function frame() {
      if (progress <= 0) {
        clearInterval(progressAnim);
        progress = 100;
      } else {
        progress--;
        $(".progressBar").css("width", progress+"vw")
      }
    }

  }

  function questionBoxIn(id) {
    $(".question-box h2").text(questionText[id]);
    $(".question-box").fadeIn(1000);
    console.log(id+".png");
    $(".question-box img").attr("src", id+".png");
    $(".question-box").fadeIn(1000);
  }

  function optionsIn(id) {
    $(".options").fadeIn(500);
    $("#option1").text(choices[id][0]);
    $("#option2").text(choices[id][1]);
    $("#option3").text(choices[id][2]);
    $("#option4").text(choices[id][3]);
  }

  function questionOn(id) {
    progressBarIn();
    questionBoxIn(id);
    optionsIn(id);
    $("#option1").click(function () {
      $(this).addClass("btn-primary");
      ans=1;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option2").click(function () {
      $(this).addClass("btn-primary");
      ans=2;
      $("option1").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option3").click(function () {
      $(this).addClass("btn-primary");
      ans=3;
      $("option1").removeClass("btn-primary");
      $("option2").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option4").click(function () {
      $(this).addClass("btn-primary");
      ans=4;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option1").removeClass("btn-primary");
    });
    setTimeout(function () {
      hideAll();
      userAnswers[id] = ans;
      console.log(userAnswers);
      ans = 0;
    }, 10000);
  }


function startQuiz() {
  var count = 0;
  var id=0;
  var flag = 0;
  var flag2 = 0;
  hideAll();
  questionOn(count);
  count++;
  startQuestions = setInterval(function () {
    if(count==3){
      if(flag==0){
        $('.preQuiz').text('Round 2...');
        $('.preQuiz').fadeIn(500);
        setTimeout(function () {
        $('.preQuiz').fadeOut(500);
        }, 500);
        setTimeout(function () {
        $('.preQuiz').text('Identify antibiotics for these diseases...');
        $('.preQuiz').fadeIn(500);
        setTimeout(function () {
          $('.preQuiz').fadeOut(1000);
          }, 1000);
        }, 1000);
        flag=1;
      }
      else{
        questionOn(count);
        id++;
        count++;
      }

    }
    else if(count==6){
      if(flag2==0){
        $('.preQuiz').text('Round 3...');
        $('.preQuiz').fadeIn(500);
        setTimeout(function () {
        $('.preQuiz').fadeOut(500);
        }, 500);
        setTimeout(function () {
        $('.preQuiz').text('Identify these structures...');
        $('.preQuiz').fadeIn(500);
        setTimeout(function () {
          $('.preQuiz').fadeOut(1000);
          }, 1000);
        }, 1000);
        flag2 =1;
      }
      else{
        questionOn(count);
        id++;
        count++;
      }
    }
    else if (count==9){
      clearInterval(startQuestions);
      console.log("interval end");
      console.log("------------RESULT------------");
      showResult();
    }
      else{
        questionOn(count);
        id++;
        count++;
        }

  }, 11000);
}

$('#startQuizBtn').click(function () {
  $('.intro').css('display','none');
  $('.image').css('display','none');
  $('.preQuiz').text('Round 1...');
  $('.preQuiz').fadeIn(500);
  setTimeout(function () {
    $('.preQuiz').fadeOut(500);
  }, 500);
  setTimeout(function () {
    $('.preQuiz').text('Identify these diseases from their descriptions...');
    $('.preQuiz').fadeIn(500);
    setTimeout(function () {
      $('.preQuiz').fadeOut(1000);
    }, 1000);
  }, 2000);
  setTimeout(startQuiz, 4000);
});

function showResult() {
  correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == userAnswers[i]) {
      correct++;
    }
  }
  if(correct>5){
    $('#score').text(correct);
    $('.result').fadeIn(1000);
    $('.do').text("Congratulations!!");
  }
  else{
    $('#score').text(correct);
    $('.result').fadeIn(1000);
    $('.do').text("You can do better!!");
  }
}



});
