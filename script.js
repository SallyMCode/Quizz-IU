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
