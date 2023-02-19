function Quizz(isConfirmed) {
  let score = 0;
  this.isConfirmed = confirm(isConfirmed);
  this.showResult = function () {
    alert(`${score} of ${questions.length} correct answers`);
  }
  this.calculateScore = function (answer, realAnswer) {
    if (
      answer == realAnswer
    ) {
      alert("Correct answer");
      score++;
    } else alert(`Wrong answer: Truthy value:  ${realAnswer}`);
  }
  this.displayQuestion = function () {
    for (const question of questions) {
      const questionMessage = `${question.question}
  A) ${question.answers.a}
  B) ${question.answers.b}
  C) ${question.answers.c}
  D) ${question.answers.d}`;

      const result = prompt(questionMessage).toLowerCase();
      this.calculateScore(result, question.answer);
    }

    this.showResult();
  }
}

const quizzApp = new Quizz("O'yinga tayyormisiz ?");

const isConfirmed = quizzApp.isConfirmed;

if (isConfirmed) quizzApp.displayQuestion();
else alert("Ok Fine Bro!");