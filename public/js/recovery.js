function recoverPass(event) {
  event.preventDefault();

  const email = document.getElementById("recoveryEmail").value.trim();
  const msg = document.getElementById("recoveryMsg");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.email === email);

  if (!user) {
    msg.style.display = "block";
    msg.textContent = "Correo no encontrado";
    return;
  }

  msg.style.display = "block";
  msg.style.color = "green";
  msg.textContent = "Tu contraseña es: " + user.pass;
}
