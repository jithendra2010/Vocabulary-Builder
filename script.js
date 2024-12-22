// Navigation button event listeners
document.addEventListener("DOMContentLoaded", () => {
  initializeDarkMode();
  initializeKeyboardNav();
  initializeNavigationButtons();
});

function initializeNavigationButtons() {
  document.querySelectorAll("nav button").forEach((button) => {
    button.addEventListener("click", () => {
      handleNavigation(button.id);
    });
  });
}

function handleNavigation(buttonId) {
  const content = document.getElementById("content");
  switch (buttonId) {
    case "problem-statement":
      content.innerHTML = `
              <h2>Problem Statement for Vocabulary Builder</h2>
              <h3>Chapter 1: Choose Topic</h3>
              <ul>
                  <li>Importance of categorizing vocabulary by topics.</li>
                  <li>Challenges in finding relevant words for specific subjects.</li>
                  <li>Need for an easy-to-use interface to select topics of interest.</li>
              </ul>
              <h3>Chapter 2: Word List</h3>
              <ul>
                  <li>Difficulty in accessing curated and comprehensive word lists.</li>
                  <li>Lack of structured presentation for quick learning.</li>
                  <li>Necessity for definitions, examples, and context for better understanding.</li>
              </ul>
              <h3>Chapter 3: Flashcards</h3>
              <ul>
                  <li>Inefficiency of traditional memorization methods.</li>
                  <li>Demand for engaging, interactive tools to learn words.</li>
                  <li>Role of flashcards in improving retention and recall.</li>
              </ul>
              <h3>Chapter 4: Test Knowledge</h3>
              <ul>
                  <li>Importance of self-assessment in vocabulary building.</li>
                  <li>Challenges in finding effective methods to test vocabulary knowledge.</li>
                  <li>Benefits of quizzes and tests in reinforcing learning.</li>
              </ul>`;
      break;

    case "choose-topic":
      content.innerHTML = `
              <h2>Choose Topic</h2>
              <p>Select a topic to get words related to it:</p>
              <select id="topic-select">
                  <option value="" disabled selected>Select a topic</option>
                  <option value="technology">Technology</option>
                  <option value="science">Science</option>
                  <option value="literature">Literature</option>
                  <option value="business">Business</option>
                  <option value="history">History</option>
                  <option value="art">Art</option>
                  <option value="music">Music</option>
              </select>
              <div id="topic-output"></div>`;

      document
        .getElementById("topic-select")
        .addEventListener("change", (e) => {
          const topicOutput = document.getElementById("topic-output");
          const topics = {
            technology:
              "Algorithm, Protocol, Debugging, Cloud, Encryption, Network...",
            science: "Atom, Molecule, Ecosystem, DNA, Energy, Gravity...",
            literature:
              "Protagonist, Allegory, Metaphor, Sonnet, Irony, Hyperbole...",
            business: "Market, Revenue, Strategy, Profit, Investment, Risk...",
            history:
              "Revolution, Empire, Civilization, Treaty, Monarchy, Legacy...",
            art: "Abstract, Canvas, Sculpture, Palette, Perspective, Brushstroke...",
            music: "Melody, Harmony, Chord, Scale, Rhythm, Composition...",
          };
          topicOutput.innerHTML = `<p>${
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          } words: ${topics[e.target.value]}</p>`;
        });
      break;

    case "wordlist":
      content.innerHTML = `
              <h2>Wordlist</h2>
              <ul>
                  <li><strong>Technology:</strong> Algorithm, Protocol, Debugging, Cloud, Encryption, Network</li>
                  <li><strong>Science:</strong> Atom, Molecule, Ecosystem, DNA, Energy, Gravity</li>
                  <li><strong>Literature:</strong> Protagonist, Allegory, Metaphor, Sonnet, Irony, Hyperbole</li>
                  <li><strong>Business:</strong> Market, Revenue, Strategy, Profit, Investment, Risk</li>
                  <li><strong>History:</strong> Revolution, Empire, Civilization, Treaty, Monarchy, Legacy</li>
                  <li><strong>Art:</strong> Abstract, Canvas, Sculpture, Palette, Perspective, Brushstroke</li>
                  <li><strong>Music:</strong> Melody, Harmony, Chord, Scale, Rhythm, Composition</li>
              </ul>`;
      break;

    case "flashcards":
      content.innerHTML = `
              <h2>Flashcards</h2>
              <p>Click a card to see the definition:</p>
              <div class="flashcard-container">
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Algorithm</div>
                      <div class="back">A process or set of rules to be followed in problem-solving or calculation operations.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Ecosystem</div>
                      <div class="back">A biological community of interacting organisms and their physical environment.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Metaphor</div>
                      <div class="back">A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Revenue</div>
                      <div class="back">Income generated from normal business operations.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Revolution</div>
                      <div class="back">A forcible overthrow of a government or social order in favor of a new system.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Abstract</div>
                      <div class="back">Art that does not attempt to represent an accurate depiction of visual reality.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Melody</div>
                      <div class="back">A sequence of single notes that is musically satisfying; a tune.</div>
                  </div>
                  <div class="flashcard" onclick="this.classList.toggle('flipped')">
                      <div class="front">Protocol</div>
                      <div class="back">A system of rules that explain the correct conduct and procedures to follow in formal situations.</div>
                  </div>
              </div>`;
      break;

    case "test-knowledge":
      content.innerHTML = `
              <h2>Test Your Knowledge</h2>
              <form id="quiz-form">
                  <p><strong>1. What is an 'Algorithm'?</strong></p>
                  <label><input type="radio" name="q1" value="A"> A set of rules for problem-solving</label><br>
                  <label><input type="radio" name="q1" value="B"> A type of flower</label><br>
                  <label><input type="radio" name="q1" value="C"> A method of writing poems</label><br>
                  <p><strong>2. What is an 'Ecosystem'?</strong></p>
                  <label><input type="radio" name="q2" value="A"> A group of planets</label><br>
                  <label><input type="radio" name="q2" value="B"> A biological community of organisms and their environment</label><br>
                  <label><input type="radio" name="q2" value="C"> A computer network</label><br>
                  <p><strong>3. What is 'Metaphor'?</strong></p>
                  <label><input type="radio" name="q3" value="A"> A type of food</label><br>
                  <label><input type="radio" name="q3" value="B"> A figure of speech comparing two things without using "like" or "as"</label><br>
                  <label><input type="radio" name="q3" value="C"> A method of cooking</label><br>
                  <button type="button" onclick="submitQuiz()">Submit Quiz</button>
              </form>
              <div id="quiz-result"></div>`;
      break;

    default:
      content.innerHTML =
        "<p>Select an option from the navigation bar to get started.</p>";
  }
}

// Enhanced Quiz Submission
function submitQuiz() {
  const form = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("quiz-result");
  let score = 0;

  const answers = {
    q1: "A",
    q2: "B",
    q3: "B",
  };

  Object.keys(answers).forEach((question) => {
    const selected = form[question]?.value;
    if (!selected) return;

    if (selected === answers[question]) {
      score++;
      form.querySelector(
        `input[name="${question}"][value="${selected}"]`
      ).parentElement.style.backgroundColor = "rgba(34, 197, 94, 0.2)";
    } else {
      form.querySelector(
        `input[name="${question}"][value="${selected}"]`
      ).parentElement.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
    }
  });

  resultDiv.innerHTML = `
      <div class="score-display">
          <h3>Your Score: ${score} out of 3</h3>
          <div class="progress-bar">
              <div class="progress" style="width: ${(score / 3) * 100}%"></div>
          </div>
          <p>${
            score === 3
              ? "Excellent! You've mastered these terms."
              : score === 2
              ? "Good job! You're almost there."
              : "Keep practicing! You'll improve with more study."
          }</p>
      </div>
  `;

  if (score === 3) {
    showConfetti();
  }
}

// Confetti Animation
function showConfetti() {
  const colors = ["#6366f1", "#8b5cf6", "#ec4899"];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    confetti.style.opacity = Math.random();
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Dark Mode Toggle
function initializeDarkMode() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Determine the current theme based on localStorage or system preference
  const currentTheme =
    localStorage.getItem("theme") ||
    (prefersDarkScheme.matches ? "dark" : "light");

  // Set the initial theme based on the saved preference or system preference
  document.documentElement.setAttribute("data-theme", currentTheme);
  console.log(`Initial theme set: ${currentTheme}`); // Debugging log
  updateThemeToggleButton(darkModeToggle, currentTheme);

  darkModeToggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    // Toggle the theme and save the new preference
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    console.log(`Theme changed to: ${newTheme}`); // Debugging log
    updateThemeToggleButton(darkModeToggle, newTheme);
  });
}

// Initialize dark mode on page load
document.addEventListener("DOMContentLoaded", initializeDarkMode);
function updateThemeToggleButton(button, theme) {
  if (theme === "dark") {
    button.textContent = "☀️"; // Change to sun icon for light mode
  } else {
    button.textContent = "🌙"; // Change to moon icon for dark mode
  }
  console.log("Button text updated to:", button.textContent); // Debugging
}

// Keyboard Navigation
function initializeKeyboardNav() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const buttons = Array.from(document.querySelectorAll("nav button"));
      const currentIndex = buttons.findIndex(
        (button) => document.activeElement === button
      );

      let nextIndex;
      if (e.key === "ArrowLeft") {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
      } else {
        nextIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
      }

      buttons[nextIndex].focus();
    }
  });
}

// Initialize enhancements
document.addEventListener("DOMContentLoaded", () => {
  initializeDarkMode();
  initializeKeyboardNav();
  initializeNavigationButtons();
});
