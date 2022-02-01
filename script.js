const myQuestions = [
    {
        question: "What is the full form of JS ?",
        a: "Javascore",
        b: "Justscript",
        c: "Javascript",
        d: "Javascene",
        ans: "ans3"
    },
    {
      question: "Who invented JS ?",
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Albert Einstein",
      ans: "ans3"
    },
    {
      question: "Which one of these is an ternary operator ?",
      a: "?",
      b: ":",
      c: "-",
      d: "+",
      ans: "ans1"
    },
    {
        question: "Which one of the following is not a keyword ?",
        a: "if",
        b: "with",
        c: "debugger",
        d: "use strict",
        ans: "ans4"
    }
  ];

  const question=document.querySelector('.question');
  const option1=document.querySelector('#option1');
  const option2=document.querySelector('#option2');
  const option3=document.querySelector('#option3');
  const option4=document.querySelector('#option4');
  const submit=document.querySelector('#submit');

  const answers=document.querySelectorAll('.answer');
  
  const showScore=document.querySelector('#showScore');

  let questionCount=0;

  const loadQuestion = () => {
      const questionlist = myQuestions[questionCount];

      question.innerText = questionlist.question;

      option1.innerText = questionlist.a;
      option2.innerText = questionlist.b;
      option3.innerText = questionlist.c;
      option4.innerText = questionlist.d;
  } 

  loadQuestion();

  const getcheckAnswer = () => {
      let answer;
      
      answers.forEach((curAnsElement) => {
          if(curAnsElement.checked){
              answer=curAnsElement.id;
          }
      });
      return answer;
  };

  let score=0;

  const deselectAll = () =>{
      answers.forEach((curAnsElement) => curAnsElement.checked = false );
  }
  submit.addEventListener('click', () => {
      const checkedAnswer = getcheckAnswer();
      if(checkedAnswer == myQuestions[questionCount].ans){
          score++;
      };

      questionCount++;

      deselectAll();

      if(questionCount<myQuestions.length){
          loadQuestion();
      }
      else{
          showScore.innerHTML = `
          <h3>YOUR FINAL SCORE IS ${score}/${myQuestions.length} !</h3>
          <button class="btn" onclick="location.reload()" > PLAY AGAIN </button>
          `;
          showScore.classList.remover('scoreArea');
      }
  });
