function calculateAge() {
  const dob = document.getElementById("dob").value;

  if (!dob) {
    alert("Please select date");
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;

  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("bornDay").innerText =
    "You were born on " + dayNames[birthDate.getDay()];

  const diff = today - birthDate;

  const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diff / (1000 * 60));

 
  document.getElementById("totalDays").innerText =
    totalDays.toLocaleString() + " and counting...";

  document.getElementById("totalHours").innerText =
    totalHours.toLocaleString();

  document.getElementById("totalMinutes").innerText =
    totalMinutes.toLocaleString();

  // 🎉 Confetti
  launchConfetti();
}

function launchConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 70,
      origin: { x: 0 }
    });

    confetti({
      particleCount: 6,
      angle: 120,
      spread: 70,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}