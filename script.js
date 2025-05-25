document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('usernameLogin').value;
  const password = document.getElementById('passwordLogin').value;

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();
  alert(result.message || result.error);

  if (response.ok) {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
  }
});

document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const username = document.getElementById('usernameRegister').value;
  const password = document.getElementById('passwordRegister').value;

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();
  alert(result.message || result.error);

  if (response.ok) {
    document.getElementById('registerForm').reset();
  }
});

// Beispielhafte Quizfrage anzeigen
function renderQuizQuestion(questionObj) {
  const quizSection = document.getElementById('quiz');
  quizSection.innerHTML = '';

  const questionEl = document.createElement('h3');
  questionEl.textContent = questionObj.question;
  quizSection.appendChild(questionEl);

  questionObj.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      if (index === questionObj.correctIndex) {
        alert('Richtig!');
      } else {
        alert('Falsch!');
      }
      // Nächste Frage laden oder abschließen
    });
    quizSection.appendChild(btn);
  });
}

// Beispielquizfrage laden
const exampleQuestion = {
  question: 'Was ist das Ergebnis von 2 + 2?',
  options: ['3', '4', '5', '6'],
  correctIndex: 1
};

// Frage anzeigen nach erfolgreichem Login
if (document.getElementById('quiz').style.display === 'block') {
  renderQuizQuestion(exampleQuestion);
}
