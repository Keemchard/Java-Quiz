let sections = document.querySelectorAll("section");

for (let i = 1; i < sections.length; i++) {
  sections[i].style.display = "none";
}

// variable of all sections
let sectionZero = document.querySelector(".section-0");
let sectionOne = document.querySelector(".section-1");
let sectionTwo = document.querySelector(".section-2");
let sectionThree = document.querySelector(".section-3");
let sectionFour = document.querySelector(".section-4");
let sectionFive = document.querySelector(".section-5");
let sectionSix = document.querySelector(".section-6");
let sectionSeven = document.querySelector(".section-7");
let sectionEight = document.querySelector(".section-8");
let sectionNine = document.querySelector(".section-9");
let sectionTen = document.querySelector(".section-10");
let lastSection = document.querySelector(".last-section");

//if the start button is clicked the section-0 will display:none and the
//section-1 will display:inline
let startBtn = document.querySelector(".start-quiz-btn");
startBtn.addEventListener("click", hideSectionZeroShowSectionOne);
function hideSectionZeroShowSectionOne() {
  setInterval(function () {
    sectionZero.style.display = "none";
  }, 1000);

  sectionOne.style.display = "inline";
}

//submitBtn variable
let submitBtnA = document.querySelector(".btn-1");
submitBtnA.value = "A";
let submitBtnB = document.querySelector(".btn-2");
submitBtnB.value = "B";
let submitBtnC = document.querySelector(".btn-3");
submitBtnC.value = "C";
let submitBtnD = document.querySelector(".btn-4");
submitBtnD.value = "D";

//display the chosen answer in the label
let userAnswer = document.querySelector(".user-answer");

submitBtnA.addEventListener("click", function () {
  userAnswer.innerText = submitBtnA.value;
  userAnswer.style.fontSize = "30px";
  userAnswer.style.fontWeight = "bold";
  userAnswer.style.color = "red";
});
submitBtnB.addEventListener("click", function () {
  userAnswer.innerText = submitBtnB.value;
  userAnswer.style.fontSize = "30px";
  userAnswer.style.fontWeight = "bold";
  userAnswer.style.color = "red";
});
submitBtnC.addEventListener("click", function () {
  userAnswer.innerText = submitBtnC.value;
  userAnswer.style.fontSize = "30px";
  userAnswer.style.fontWeight = "bold";
  userAnswer.style.color = "red";
});
submitBtnD.addEventListener("click", function () {
  userAnswer.innerText = submitBtnD.value;
  userAnswer.style.fontSize = "30px";
  userAnswer.style.fontWeight = "bold";
  userAnswer.style.color = "red";
});

let theSCORE = 0;
//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn1 = document.querySelector(".nxt-btn1");
let q1Answer; //correct answer is "A"
nxtBtn1.addEventListener("click", function () {
  if (userAnswer.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer.innerText == "A") {
    q1Answer = submitBtnA.value;

    setInterval(function () {
      sectionOne.style.display = "none";
    }, 1000);

    sectionTwo.style.display = "inline";
  } else if (userAnswer.innerText == "B") {
    q1Answer = submitBtnB.value;

    setInterval(function () {
      sectionOne.style.display = "none";
    }, 1000);
    sectionTwo.style.display = "inline";
  } else if (userAnswer.innerText == "C") {
    q1Answer = submitBtnC.value;

    setInterval(function () {
      sectionOne.style.display = "none";
    }, 1000);
    sectionTwo.style.display = "inline";
  } else if (userAnswer.innerText == "D") {
    q1Answer = submitBtnD.value;

    setInterval(function () {
      sectionOne.style.display = "none";
    }, 1000);
    sectionTwo.style.display = "inline";
  }
  let correctAnsfor1 = "A";
  if (q1Answer == correctAnsfor1) {
    theSCORE++;
  }

  // alert(theSCORE);
});

//FOR SECTION 2222222222222

//submitBtn variable
let submitBtnA2 = document.querySelector(".btn-11");
submitBtnA2.value = "A";
let submitBtnB2 = document.querySelector(".btn-22");
submitBtnB2.value = "B";
let submitBtnC2 = document.querySelector(".btn-33");
submitBtnC2.value = "C";
let submitBtnD2 = document.querySelector(".btn-44");
submitBtnD2.value = "D";

//display the chosen answer in the label
let userAnswer2 = document.querySelector(".user-answer2");

submitBtnA2.addEventListener("click", function () {
  userAnswer2.innerText = submitBtnA2.value;
  userAnswer2.style.fontSize = "30px";
  userAnswer2.style.fontWeight = "bold";
  userAnswer2.style.color = "red";
  userAnswer2.style.transition = "1s";
});
submitBtnB2.addEventListener("click", function () {
  userAnswer2.innerText = submitBtnB2.value;
  userAnswer2.style.fontSize = "30px";
  userAnswer2.style.fontWeight = "bold";
  userAnswer2.style.color = "red";
  userAnswer2.style.transition = "1s";
});
submitBtnC2.addEventListener("click", function () {
  userAnswer2.innerText = submitBtnC2.value;
  userAnswer2.style.fontSize = "30px";
  userAnswer2.style.fontWeight = "bold";
  userAnswer2.style.color = "red";
  userAnswer2.style.transition = "1s";
});
submitBtnD2.addEventListener("click", function () {
  userAnswer2.innerText = submitBtnD2.value;
  userAnswer2.style.fontSize = "30px";
  userAnswer2.style.fontWeight = "bold";
  userAnswer2.style.color = "red";
  userAnswer2.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn2 = document.querySelector(".nxt-btn2");
let q2Answer; //correct answer is "A"
nxtBtn2.addEventListener("click", function () {
  if (userAnswer2.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer2.innerText == "A") {
    q2Answer = submitBtnA2.value;

    setInterval(function () {
      sectionTwo.style.display = "none";
    }, 1000);

    sectionThree.style.display = "inline";
  } else if (userAnswer2.innerText == "B") {
    q2Answer = submitBtnB2.value;

    setInterval(function () {
      sectionTwo.style.display = "none";
    }, 1000);

    sectionThree.style.display = "inline";
  } else if (userAnswer2.innerText == "C") {
    q2Answer = submitBtnC2.value;

    setInterval(function () {
      sectionTwo.style.display = "none";
    }, 1000);

    sectionThree.style.display = "inline";
  } else if (userAnswer2.innerText == "D") {
    q2Answer = submitBtnD2.value;

    setInterval(function () {
      sectionTwo.style.display = "none";
    }, 1000);

    sectionThree.style.display = "inline";
  }
  let correctAnsfor2 = "B";
  if (q2Answer == correctAnsfor2) {
    theSCORE++;
  }
  // alert(theSCORE);
});

//FOR SECTION 3333333333333333

//submitBtn variable
let submitBtnA3 = document.querySelector(".btn-111");
submitBtnA3.value = "A";
let submitBtnB3 = document.querySelector(".btn-222");
submitBtnB3.value = "B";
let submitBtnC3 = document.querySelector(".btn-333");
submitBtnC3.value = "C";
let submitBtnD3 = document.querySelector(".btn-444");
submitBtnD3.value = "D";

//display the chosen answer in the label
let userAnswer3 = document.querySelector(".user-answer3");

submitBtnA3.addEventListener("click", function () {
  userAnswer3.innerText = submitBtnA3.value;
  userAnswer3.style.fontSize = "30px";
  userAnswer3.style.fontWeight = "bold";
  userAnswer3.style.color = "red";
  userAnswer3.style.transition = "1s";
});
submitBtnB3.addEventListener("click", function () {
  userAnswer3.innerText = submitBtnB3.value;
  userAnswer3.style.fontSize = "30px";
  userAnswer3.style.fontWeight = "bold";
  userAnswer3.style.color = "red";
  userAnswer3.style.transition = "1s";
});
submitBtnC3.addEventListener("click", function () {
  userAnswer3.innerText = submitBtnC3.value;
  userAnswer3.style.fontSize = "30px";
  userAnswer3.style.fontWeight = "bold";
  userAnswer3.style.color = "red";
  userAnswer3.style.transition = "1s";
});
submitBtnD3.addEventListener("click", function () {
  userAnswer3.innerText = submitBtnD3.value;
  userAnswer3.style.fontSize = "30px";
  userAnswer3.style.fontWeight = "bold";
  userAnswer3.style.color = "red";
  userAnswer3.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn3 = document.querySelector(".nxt-btn3");
let q3Answer; //correct answer is "A"
nxtBtn3.addEventListener("click", function () {
  if (userAnswer3.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer3.innerText == "A") {
    q3Answer = submitBtnA3.value;

    setInterval(function () {
      sectionThree.style.display = "none";
    }, 1000);

    sectionFour.style.display = "inline";
  } else if (userAnswer3.innerText == "B") {
    q3Answer = submitBtnB3.value;

    setInterval(function () {
      sectionThree.style.display = "none";
    }, 1000);

    sectionFour.style.display = "inline";
  } else if (userAnswer3.innerText == "C") {
    q3Answer = submitBtnC3.value;

    setInterval(function () {
      sectionThree.style.display = "none";
    }, 1000);

    sectionFour.style.display = "inline";
  } else if (userAnswer3.innerText == "D") {
    q3Answer = submitBtnD3.value;

    setInterval(function () {
      sectionThree.style.display = "none";
    }, 1000);

    sectionFour.style.display = "inline";
  }
  let correctAnsfor3 = "C";
  if (q3Answer == correctAnsfor3) {
    theSCORE++;
  }
  // alert(theSCORE);
});

//ditooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
//FOR SECTION 444444444444444444444

//submitBtn variable
let submitBtnA4 = document.querySelector(".btn-1111");
submitBtnA4.value = "A";
let submitBtnB4 = document.querySelector(".btn-2222");
submitBtnB4.value = "B";
let submitBtnC4 = document.querySelector(".btn-3333");
submitBtnC4.value = "C";
let submitBtnD4 = document.querySelector(".btn-4444");
submitBtnD4.value = "D";

//display the chosen answer in the label
let userAnswer4 = document.querySelector(".user-answer4");

submitBtnA4.addEventListener("click", function () {
  userAnswer4.innerText = submitBtnA4.value;
  userAnswer4.style.fontSize = "30px";
  userAnswer4.style.fontWeight = "bold";
  userAnswer4.style.color = "red";
  userAnswer4.style.transition = "1s";
});
submitBtnB4.addEventListener("click", function () {
  userAnswer4.innerText = submitBtnB4.value;
  userAnswer4.style.fontSize = "30px";
  userAnswer4.style.fontWeight = "bold";
  userAnswer4.style.color = "red";
  userAnswer4.style.transition = "1s";
});
submitBtnC4.addEventListener("click", function () {
  userAnswer4.innerText = submitBtnC4.value;
  userAnswer4.style.fontSize = "30px";
  userAnswer4.style.fontWeight = "bold";
  userAnswer4.style.color = "red";
  userAnswer4.style.transition = "1s";
});
submitBtnD4.addEventListener("click", function () {
  userAnswer4.innerText = submitBtnD4.value;
  userAnswer4.style.fontSize = "30px";
  userAnswer4.style.fontWeight = "bold";
  userAnswer4.style.color = "red";
  userAnswer4.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn4 = document.querySelector(".nxt-btn4");
let q4Answer; //correct answer is "A"
nxtBtn4.addEventListener("click", function () {
  if (userAnswer4.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer4.innerText == "A") {
    q4Answer = submitBtnA4.value;

    setInterval(function () {
      sectionFour.style.display = "none";
    }, 1000);

    sectionFive.style.display = "inline";
  } else if (userAnswer4.innerText == "B") {
    q4Answer = submitBtnB4.value;

    setInterval(function () {
      sectionFour.style.display = "none";
    }, 1000);

    sectionFive.style.display = "inline";
  } else if (userAnswer4.innerText == "C") {
    q4Answer = submitBtnC4.value;

    setInterval(function () {
      sectionFour.style.display = "none";
    }, 1000);

    sectionFive.style.display = "inline";
  } else if (userAnswer4.innerText == "D") {
    q4Answer = submitBtnD4.value;

    setInterval(function () {
      sectionFour.style.display = "none";
    }, 1000);

    sectionFive.style.display = "inline";
  }
  let correctAnsfor4 = "D";
  if (q4Answer == correctAnsfor4) {
    theSCORE++;
  }
  // alert(theSCORE);
});

//FOR SECTION 55555555555555555555

//submitBtn variable
let submitBtnA5 = document.querySelector(".btn-11111");
submitBtnA5.value = "A";
let submitBtnB5 = document.querySelector(".btn-22222");
submitBtnB5.value = "B";
let submitBtnC5 = document.querySelector(".btn-33333");
submitBtnC5.value = "C";
let submitBtnD5 = document.querySelector(".btn-44444");
submitBtnD5.value = "D";

//display the chosen answer in the label
let userAnswer5 = document.querySelector(".user-answer5");

submitBtnA5.addEventListener("click", function () {
  userAnswer5.innerText = submitBtnA5.value;
  userAnswer5.style.fontSize = "30px";
  userAnswer5.style.fontWeight = "bold";
  userAnswer5.style.color = "red";
  userAnswer5.style.transition = "1s";
});
submitBtnB5.addEventListener("click", function () {
  userAnswer5.innerText = submitBtnB5.value;
  userAnswer5.style.fontSize = "30px";
  userAnswer5.style.fontWeight = "bold";
  userAnswer5.style.color = "red";
  userAnswer5.style.transition = "1s";
});
submitBtnC5.addEventListener("click", function () {
  userAnswer5.innerText = submitBtnC5.value;
  userAnswer5.style.fontSize = "30px";
  userAnswer5.style.fontWeight = "bold";
  userAnswer5.style.color = "red";
  userAnswer5.style.transition = "1s";
});
submitBtnD5.addEventListener("click", function () {
  userAnswer5.innerText = submitBtnD5.value;
  userAnswer5.style.fontSize = "30px";
  userAnswer5.style.fontWeight = "bold";
  userAnswer5.style.color = "red";
  userAnswer5.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn5 = document.querySelector(".nxt-btn5");
let q5Answer; //correct answer is "A"
nxtBtn5.addEventListener("click", function () {
  if (userAnswer5.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer5.innerText == "A") {
    q5Answer = submitBtnA5.value;

    setInterval(function () {
      sectionFive.style.display = "none";
    }, 1000);

    sectionSix.style.display = "inline";
  } else if (userAnswer5.innerText == "B") {
    q5Answer = submitBtnB5.value;

    setInterval(function () {
      sectionFive.style.display = "none";
    }, 1000);

    sectionSix.style.display = "inline";
  } else if (userAnswer5.innerText == "C") {
    q5Answer = submitBtnC5.value;

    setInterval(function () {
      sectionFive.style.display = "none";
    }, 1000);

    sectionSix.style.display = "inline";
  } else if (userAnswer5.innerText == "D") {
    q5Answer = submitBtnD5.value;

    setInterval(function () {
      sectionFive.style.display = "none";
    }, 1000);

    sectionSix.style.display = "inline";
  }
  let correctAnsfor5 = "A";
  if (q5Answer == correctAnsfor5) {
    theSCORE++;
  }
  // alert(theSCORE);
});

//FOR SECTION 66666666666666666666

//submitBtn variable
let submitBtnA6 = document.querySelector(".btn-111111");
submitBtnA6.value = "A";
let submitBtnB6 = document.querySelector(".btn-222222");
submitBtnB6.value = "B";
let submitBtnC6 = document.querySelector(".btn-333333");
submitBtnC6.value = "C";
let submitBtnD6 = document.querySelector(".btn-444444");
submitBtnD6.value = "D";

//display the chosen answer in the label
let userAnswer6 = document.querySelector(".user-answer6");

submitBtnA6.addEventListener("click", function () {
  userAnswer6.innerText = submitBtnA6.value;
  userAnswer6.style.fontSize = "30px";
  userAnswer6.style.fontWeight = "bold";
  userAnswer6.style.color = "red";
  userAnswer6.style.transition = "1s";
});
submitBtnB6.addEventListener("click", function () {
  userAnswer6.innerText = submitBtnB6.value;
  userAnswer6.style.fontSize = "30px";
  userAnswer6.style.fontWeight = "bold";
  userAnswer6.style.color = "red";
  userAnswer6.style.transition = "1s";
});
submitBtnC6.addEventListener("click", function () {
  userAnswer6.innerText = submitBtnC6.value;
  userAnswer6.style.fontSize = "30px";
  userAnswer6.style.fontWeight = "bold";
  userAnswer6.style.color = "red";
  userAnswer6.style.transition = "1s";
});
submitBtnD6.addEventListener("click", function () {
  userAnswer6.innerText = submitBtnD6.value;
  userAnswer6.style.fontSize = "30px";
  userAnswer6.style.fontWeight = "bold";
  userAnswer6.style.color = "red";
  userAnswer6.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn6 = document.querySelector(".nxt-btn6");
let q6Answer; //correct answer is "A"
nxtBtn6.addEventListener("click", function () {
  if (userAnswer6.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer6.innerText == "A") {
    q6Answer = submitBtnA6.value;

    setInterval(function () {
      sectionSix.style.display = "none";
    }, 1000);

    sectionSeven.style.display = "inline";
  } else if (userAnswer6.innerText == "B") {
    q6Answer = submitBtnB6.value;

    setInterval(function () {
      sectionSix.style.display = "none";
    }, 1000);

    sectionSeven.style.display = "inline";
  } else if (userAnswer6.innerText == "C") {
    q6Answer = submitBtnC6.value;

    setInterval(function () {
      sectionSix.style.display = "none";
    }, 1000);
    sectionSeven.style.display = "inline";
  } else if (userAnswer6.innerText == "D") {
    q6Answer = submitBtnD6.value;

    setInterval(function () {
      sectionSix.style.display = "none";
    }, 1000);
    sectionSeven.style.display = "inline";
  }
  let correctAnsfor6 = "B";
  if (q6Answer == correctAnsfor6) {
    theSCORE++;
  }
  // alert(theSCORE);
});

//FOR SECTION 77777777777777777

//submitBtn variable
let submitBtnA7 = document.querySelector(".btn-1111111");
submitBtnA7.value = "A";
let submitBtnB7 = document.querySelector(".btn-2222222");
submitBtnB7.value = "B";
let submitBtnC7 = document.querySelector(".btn-3333333");
submitBtnC7.value = "C";
let submitBtnD7 = document.querySelector(".btn-4444444");
submitBtnD7.value = "D";

//display the chosen answer in the label
let userAnswer7 = document.querySelector(".user-answer7");

submitBtnA7.addEventListener("click", function () {
  userAnswer7.innerText = submitBtnA7.value;
  userAnswer7.style.fontSize = "30px";
  userAnswer7.style.fontWeight = "bold";
  userAnswer7.style.color = "red";
  userAnswer7.style.transition = "1s";
});
submitBtnB7.addEventListener("click", function () {
  userAnswer7.innerText = submitBtnB7.value;
  userAnswer7.style.fontSize = "30px";
  userAnswer7.style.fontWeight = "bold";
  userAnswer7.style.color = "red";
  userAnswer7.style.transition = "1s";
});
submitBtnC7.addEventListener("click", function () {
  userAnswer7.innerText = submitBtnC7.value;
  userAnswer7.style.fontSize = "30px";
  userAnswer7.style.fontWeight = "bold";
  userAnswer7.style.color = "red";
  userAnswer7.style.transition = "1s";
});
submitBtnD7.addEventListener("click", function () {
  userAnswer7.innerText = submitBtnD7.value;
  userAnswer7.style.fontSize = "30px";
  userAnswer7.style.fontWeight = "bold";
  userAnswer7.style.color = "red";
  userAnswer7.style.transition = "1s";
});

//next button
//once the nxtBtn is clicked, check if the userAnswer = Your Answer,
//then alert("Please Choose an answer"),
//then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
//then display the next section
let nxtBtn7 = document.querySelector(".nxt-btn7");
let q7Answer; //correct answer is "A"
nxtBtn7.addEventListener("click", function () {
  if (userAnswer7.innerText == "Your Answer") {
    alert("Please Choose an asnwer");
  } else if (userAnswer7.innerText == "A") {
    q7Answer = submitBtnA7.value;

    setInterval(function () {
      sectionSeven.style.display = "none";
    }, 1000);

    lastSection.style.display = "inline";
  } else if (userAnswer7.innerText == "B") {
    q7Answer = submitBtnB7.value;

    setInterval(function () {
      sectionSeven.style.display = "none";
    }, 1000);

    lastSection.style.display = "inline";
  } else if (userAnswer7.innerText == "C") {
    q7Answer = submitBtnC7.value;

    setInterval(function () {
      sectionSeven.style.display = "none";
    }, 1000);

    lastSection.style.display = "inline";
  } else if (userAnswer7.innerText == "D") {
    q7Answer = submitBtnD7.value;

    setInterval(function () {
      sectionSeven.style.display = "none";
    }, 1000);

    lastSection.style.display = "inline";
  }
  let correctAnsfor7 = "C";
  if (q7Answer == correctAnsfor7) {
    theSCORE++;
  }
  // alert(theSCORE);
});

// //FOR SECTION 88888888888888888888

// //submitBtn variable
// let submitBtnA2 = document.querySelector(".btn-11111111");
// submitBtnA2.value = "A";
// let submitBtnB2 = document.querySelector(".btn-22222222");
// submitBtnB2.value = "B";
// let submitBtnC2 = document.querySelector(".btn-33333333");
// submitBtnC2.value = "C";
// let submitBtnD2 = document.querySelector(".btn-44444444");
// submitBtnD2.value = "D";

// //display the chosen answer in the label
// let userAnswer2 = document.querySelector(".user-answer2");

// submitBtnA2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnA2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnB2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnB2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnC2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnC2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnD2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnD2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });

// //next button
// //once the nxtBtn is clicked, check if the userAnswer = Your Answer,
// //then alert("Please Choose an answer"),
// //then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
// //then display the next section
// let nxtBtn2 = document.querySelector(".nxt-btn2");
// let q2Answer; //correct answer is "A"
// nxtBtn2.addEventListener("click", function () {
//   if (userAnswer2.innerText == "Your Answer") {
//     alert("Please Choose an asnwer");
//   } else if (userAnswer2.innerText == "A") {
//     q2Answer = submitBtnA2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "B") {
//     q2Answer = submitBtnB2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "C") {
//     q2Answer = submitBtnC2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "D") {
//     q2Answer = submitBtnD2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   }
// });

// //FOR SECTION 99999999999999999

// //submitBtn variable
// let submitBtnA2 = document.querySelector(".btn-111111111");
// submitBtnA2.value = "A";
// let submitBtnB2 = document.querySelector(".btn-222222222");
// submitBtnB2.value = "B";
// let submitBtnC2 = document.querySelector(".btn-333333333");
// submitBtnC2.value = "C";
// let submitBtnD2 = document.querySelector(".btn-444444444");
// submitBtnD2.value = "D";

// //display the chosen answer in the label
// let userAnswer2 = document.querySelector(".user-answer2");

// submitBtnA2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnA2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnB2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnB2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnC2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnC2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnD2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnD2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });

// //next button
// //once the nxtBtn is clicked, check if the userAnswer = Your Answer,
// //then alert("Please Choose an answer"),
// //then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
// //then display the next section
// let nxtBtn2 = document.querySelector(".nxt-btn2");
// let q2Answer; //correct answer is "A"
// nxtBtn2.addEventListener("click", function () {
//   if (userAnswer2.innerText == "Your Answer") {
//     alert("Please Choose an asnwer");
//   } else if (userAnswer2.innerText == "A") {
//     q2Answer = submitBtnA2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "B") {
//     q2Answer = submitBtnB2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "C") {
//     q2Answer = submitBtnC2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "D") {
//     q2Answer = submitBtnD2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   }
// });

// //FOR SECTION 100000000000000000000

// //submitBtn variable
// let submitBtnA2 = document.querySelector(".btn-1111111111");
// submitBtnA2.value = "A";
// let submitBtnB2 = document.querySelector(".btn-2222222222");
// submitBtnB2.value = "B";
// let submitBtnC2 = document.querySelector(".btn-3333333333");
// submitBtnC2.value = "C";
// let submitBtnD2 = document.querySelector(".btn-4444444444");
// submitBtnD2.value = "D";

// //display the chosen answer in the label
// let userAnswer2 = document.querySelector(".user-answer2");

// submitBtnA2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnA2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnB2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnB2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnC2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnC2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });
// submitBtnD2.addEventListener("click", function () {
//   userAnswer2.innerText = submitBtnD2.value;
//   userAnswer2.style.fontSize = "30px";
//   userAnswer2.style.fontWeight = "bold";
//   userAnswer2.style.color = "red";
//   userAnswer2.style.transition = "1s";
// });

// //next button
// //once the nxtBtn is clicked, check if the userAnswer = Your Answer,
// //then alert("Please Choose an answer"),
// //then if userAnswer = A||B||C||D, then store the answer to "q1Answer",
// //then display the next section
// let nxtBtn2 = document.querySelector(".nxt-btn2");
// let q2Answer; //correct answer is "A"
// nxtBtn2.addEventListener("click", function () {
//   if (userAnswer2.innerText == "Your Answer") {
//     alert("Please Choose an asnwer");
//   } else if (userAnswer2.innerText == "A") {
//     q2Answer = submitBtnA2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "B") {
//     q2Answer = submitBtnB2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "C") {
//     q2Answer = submitBtnC2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   } else if (userAnswer2.innerText == "D") {
//     q2Answer = submitBtnD2.value;
//     alert(q2Answer);
//     sectionTwo.style.display = "none";
//     sectionThree.style.display = "inline";
//   }
// });

//FOR THE CHECKING OF ANSWER CODE COMPUTATION

let correctAnswerArray = ["A", "B", "C", "D", "A", "B", "C"];

let scorebtn = document.querySelector(".see-score");
let score = document.querySelector(".score");

scorebtn.addEventListener("click", function () {
  scorebtn.style.display = "none";
  score.style.fontSize = "50px";
  score.style.fontWeight = "bold";
  score.style.color = "red";
  score.innerText = theSCORE + "/" + correctAnswerArray.length;
  score.style.display = "inline";
});

// for instructions code
let instructionCon = document.querySelector(".instruction-con");
let instruction = document.querySelector(".instruction");
let instructionBtn = document.querySelector(".instruction-btn");

instructionBtn.addEventListener("click", function () {
  instructionCon.style.display = "flex";
});

let exitinstruction = document.querySelector(".uil-multiply");

exitinstruction.addEventListener("click", function () {
  instructionCon.style.display = "none";
});

// code for form

let theForm = document.querySelector(".the-form");
let seeFormBtn = document.querySelector(".see-form");

theForm.style.display = "none";

seeFormBtn.addEventListener("click", function () {
  theForm.style.display = "inline";
  seeFormBtn.style.display = "none";
});

// email
let email = document.querySelector(".uil-envelope-edit");
email.addEventListener("click", function () {
  alert("Personal Email: keemchardtamio@gmail.com");
});
