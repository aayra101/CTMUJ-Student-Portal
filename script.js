// ── Section Navigation ────────────────────────────────────────────────────────
function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// ── Dark Mode Toggle ──────────────────────────────────────────────────────────
function toggleDark() {
  document.body.classList.toggle("dark");
}

// ── Quiz ──────────────────────────────────────────────────────────────────────
function submitQuiz() {
  document.getElementById("quizResult").innerText = "Quiz submitted successfully!";
}

// ── Assignment Upload ─────────────────────────────────────────────────────────
function submitAssignment() {
  document.getElementById("assignMsg").innerText = "Assignment uploaded!";
}

// ── Chatbot ───────────────────────────────────────────────────────────────────
function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  const chat = document.getElementById("chatbox");
  chat.innerHTML += `<div><b>You:</b> ${input}</div>`;

  let reply = "I'm not sure. Try asking about quiz, assignments, or timetable.";

  const msg = input.toLowerCase();

  if (msg.includes("quiz"))
    reply = "Go to the Quiz section to attempt tests. 📝";
  else if (msg.includes("assignment"))
    reply = "Upload your assignments in the Assignments tab. 📂";
  else if (msg.includes("timetable") || msg.includes("schedule") || msg.includes("class"))
    reply = "Check the Timetable section for your weekly class schedule. 📚";
  else if (msg.includes("announcement") || msg.includes("news") || msg.includes("event"))
    reply = "Visit the Announcements section for the latest updates. 📢";
  else if (msg.includes("calendar") || msg.includes("exam") || msg.includes("date"))
    reply = "Check the Calendar section for important academic dates. 📅";
  else if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey"))
    reply = "Hey there! 👋 How can I assist you today?";
  else if (msg.includes("help"))
    reply = "I can help with: quiz, assignments, timetable, announcements, and calendar! 😊";

  chat.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
  document.getElementById("userInput").value = "";
}

// Send message on Enter key
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });
});

// ── Anti Tab-Switch (Quiz Protection) ────────────────────────────────────────
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    alert("⚠ Tab switching detected during quiz!");
  }
});
