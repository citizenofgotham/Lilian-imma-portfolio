// DARK MODE + TYPING EFFECT + FORM VALIDATION

document.addEventListener("DOMContentLoaded", () => {
  // ========================
  // TYPING EFFECT
  // ========================
  const textElement = document.querySelector(".typing-text");
  const text = "I'm Web Developer Lilian Imma & Aspiring Data Scientist";
  let index = 0;

  if (textElement) {
    textElement.textContent = "";
    const type = () => {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };
    type();
  }

  // ========================
  // CONTACT FORM VALIDATION
  // ========================
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const phone = form.querySelector("input[name='phone']").value.trim();

      const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
      const phoneRegex = /^\d+$/;

      if (!nameRegex.test(name)) {
        alert("Please enter your full name (first and last name). Letters only.");
        e.preventDefault();
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }

      if (!phoneRegex.test(phone)) {
        alert("Phone number must contain digits only.");
        e.preventDefault();
        return;
      }
    });
  }

  // ========================
  // DARK MODE TOGGLE
  // ========================
  const toggleBtn = document.querySelector(".toggle-switch");
  const icon = toggleBtn?.querySelector("i");

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#111";
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#fceef4";
    if (icon) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  };

  if (toggleBtn && icon) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      isDark ? enableDarkMode() : disableDarkMode();
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
