// Typing animation using JS (if needed dynamically)
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typing-text");
    const text = "I'm a Web Developer & Aspiring Data Scientist Lilian Imma";
    let index = 0;
  
    if (textElement) {
      textElement.textContent = ""; // Clear initial content before typing
  
      function type() {
        if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100);
        }
      }
  
      type();
    }
  
    // Contact form validation
    const form = document.querySelector(".contact-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        const name = form.querySelector("input[name='name']");
        const email = form.querySelector("input[name='email']");
        const phone = form.querySelector("input[name='phone']");
  
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
  
        // Name should contain only letters and two words
        const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
        if (!nameRegex.test(nameValue)) {
          alert("Please enter your full name (first and last) using only letters.");
          e.preventDefault();
          return;
        }
  
        // Email must contain @
        if (!emailValue.includes("@")) {
          alert("Please enter a valid email address.");
          e.preventDefault();
          return;
        }
  
        // Phone should be numbers only
        if (!/^\d+$/.test(phoneValue)) {
          alert("Phone number must contain digits only.");
          e.preventDefault();
          return;
        }
      });
    }
  });
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

  
