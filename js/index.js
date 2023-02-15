const isConfirmed = confirm("O'yinga tayyormisiz ?");
let score = 0;

if (isConfirmed) displayQuestion();
else alert("Ok Fine Bro!");

function displayQuestion() {
  for (const question of questions) {
    const questionMessage = `${question.question}
A) ${question.answers.a}
B) ${question.answers.b}
C) ${question.answers.c}
D) ${question.answers.d}`;

    const result = prompt(questionMessage);
    calculateScore(result, question.answer);
  }

  showResult();
}

function calculateScore(answer, realAnswer) {
  if (
    answer == realAnswer ||
    answer.toUpperCase() === realAnswer.toUpperCase()
  ) {
    alert("Correct answer");
    score++;
  } else alert(`Wrong answer: Truthy value:  ${realAnswer}`);
}

function showResult() {
  alert(`${score} of ${questions.length} correct answers`);
}
