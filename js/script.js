const words = ["Needles", "Pain", "Drilling", "Mess", "Stress"];
const delay = 100; // Delay between phrases in milliseconds

const typeText = (element, words, delay) => {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const text = currentWord.substring(0, charIndex + 1);

    document.getElementById("typewriter").textContent = text;

    if (!isDeleting && text === currentWord) {
      isDeleting = true;
      setTimeout(() => {
        charIndex--;
        if (charIndex === -1) {
          isDeleting = false;
          setTimeout(type, delay);
        } else {
          setTimeout(type, 100);
        }
      }, 500); // Delay before backspacing
    } else if (isDeleting && text === "") {
      isDeleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, delay);
    } else if (isDeleting) {
      charIndex--;
      setTimeout(type, 100);
    } else {
      charIndex++;
      setTimeout(type, 100);
    }
  }

  setTimeout(type, delay);
};

typeText(document.getElementById("typewriter"), words, delay);
