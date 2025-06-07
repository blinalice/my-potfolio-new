document.addEventListener("DOMContentLoaded", () => {
  // === ГЛАВНАЯ СТРАНИЦА ===
  const toProjectsBtn = document.getElementById("to-projects");
  if (toProjectsBtn) {
    toProjectsBtn.addEventListener("click", () => {
      window.location.href = "projects.html";
    });

    // === АНИМАЦИЯ ПРИВЕТСТВИЯ ===
    const intro = document.getElementById("intro-text");
    if (intro) {
      const text = "Привет! Я Карина 💗";
      let index = 0;

      function type() {
        if (index < text.length) {
          intro.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100);
        }
      }

      type();
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        window.location.href = "projects.html";
      }
    });
  }

  const toContactBtn = document.getElementById("to-contact");
  if (toContactBtn) {
    toContactBtn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }

  const toAboutBtn = document.getElementById("to-about");
  if (toAboutBtn) {
    toAboutBtn.addEventListener("click", () => {
      window.location.href = "about.html"; // теперь переход на отдельную страницу
    });
  }

  // === СТРАНИЦА ПРОЕКТОВ ===
  const backBtn = document.getElementById("back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  const projectData = [
    {
      title: "Homemade Restaurant",
      desc: "Сайт ресторана домашней кухни. Красивый дизайн и адаптивная вёрстка.",
      img: "img/project1.png"
    },
    {
      title: "Unique Craft Cafe",
      desc: "Современный сайт кофейни с меню и возможностью заказа.",
      img: "img/project2.png"
    },
    {
      title: "Teaching Center",
      desc: "Сайт учебного центра с описанием курсов и формой связи.",
      img: "img/project3.png"
    }
  ];

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalClose = document.getElementById("modal-close");
  const projectElements = document.querySelectorAll(".project");

  if (modal && modalClose && modalImg && modalTitle && modalDesc && projectElements.length > 0) {
    projectElements.forEach((el, index) => {
      el.addEventListener("click", () => {
        modalImg.src = projectData[index].img;
        modalTitle.textContent = projectData[index].title;
        modalDesc.textContent = projectData[index].desc;
        modal.classList.remove("hidden");
      });
    });

    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  // === СТРАНИЦА КОНТАКТОВ ===
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо за сообщение! 💌");
      contactForm.reset();
    });
  }

  // === ФОНОВЫЕ СЕРДЕЧКИ ===
  const heartContainer = document.getElementById("heart-container");

  if (heartContainer) {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-20px";
      heart.style.animationDuration = (3 + Math.random() * 2) + "s";
      heartContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 300);
  }
  const galleryImages = [
  {
    src: "img/my-cat.png",
    caption: "Мася — мой любимый котик 😻"
  },
  {
    src: "img/sakura.jpg",
    caption: "Моя первая сакура 🌸"
  },
  {
    src: "img/workspace.jpg",
    caption: "Моё рабочее место 💻"
  }
];

let currentIndex = 0;
const galleryImg = document.getElementById("gallery-image");
const galleryCap = document.getElementById("gallery-caption");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

function updateGallery() {
  galleryImg.style.opacity = 0;
  setTimeout(() => {
    galleryImg.src = galleryImages[currentIndex].src;
    galleryCap.textContent = galleryImages[currentIndex].caption;
    galleryImg.style.opacity = 1;
  }, 200);
}

if (leftBtn && rightBtn && galleryImg && galleryCap) {
  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery();
  });
}
// === АНИМИРОВАННЫЙ ТАЙМЕР ДО 390 ДНЕЙ ===
const dayCount = document.getElementById("day-count");
if (dayCount) {
  let current = 0;
  const target = 390;

  const interval = setInterval(() => {
    current++;
    dayCount.textContent = current;

    if (current >= target) {
      clearInterval(interval);
    }
  }, 30); // скорость (меньше = быстрее)
}

});
