// Services Data
const services = [
  { id: 1, name: "خدمات الترجمة", icon: "fas fa-language" },
  { id: 2, name: "خدمة التدقيق اللغوي", icon: "fas fa-spell-check" },
  { id: 3, name: "خدمات دراسات الجدوى", icon: "fas fa-chart-line" },
  { id: 4, name: "خدمات اعداد عروض البوربوينت", icon: "fas fa-desktop" },
  { id: 5, name: "الكتابة والتنسيق على الوورد", icon: "fas fa-file-word" },
  { id: 6, name: "خدمات الاكسل", icon: "fas fa-file-excel" },
  { id: 7, name: "البحوث العلمية", icon: "fas fa-search" },
  {
    id: 8,
    name: "مشاريع التخرج تصميم الحقائب التدريبية",
    icon: "fas fa-graduation-cap",
  },
  { id: 9, name: "حل الاختبارات", icon: "fas fa-question-circle" },
  { id: 10, name: "تحويل ملفات PDF", icon: "fas fa-file-pdf" },
  { id: 11, name: "التنسيق والاخراج", icon: "fas fa-paint-brush" },
  { id: 12, name: "كتابة المقالات", icon: "fas fa-edit" },
  { id: 13, name: "تصاميم الجرافيك", icon: "fas fa-palette" },
  { id: 14, name: "تصميم السير الذاتية", icon: "fas fa-id-card" },
  { id: 15, name: "كتابة المحتوى", icon: "fas fa-pen-fancy" },
  { id: 16, name: "حل الواجبات", icon: "fas fa-tasks" },
  { id: 17, name: "خدمات المدربين", icon: "fas fa-chalkboard-teacher" },
  { id: 18, name: "موشن جرافيك", icon: "fas fa-video" },
];

// Generate services grid
const servicesGrid = document.querySelector(".services-grid");

services.forEach((service) => {
  const serviceCard = document.createElement("div");
  serviceCard.className = "service-card";
  serviceCard.innerHTML = `
                <div class="service-number">${service.id}</div>
                <i class="${service.icon} service-icon"></i>
                <h3>${service.name}</h3>
                <p>نقدم ${service.name.toLowerCase()} بأعلى مستويات الجودة والاحترافية.</p>
            `;
  servicesGrid.appendChild(serviceCard);
});

// Chat functionality
const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");

chatToggle.addEventListener("click", function () {
  if (chatBox.style.display === "block") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "block";
  }
});

// Close chat when clicking outside
document.addEventListener("click", function (event) {
  if (!chatBox.contains(event.target) && !chatToggle.contains(event.target)) {
    chatBox.style.display = "none";
  }
});

// Send message functionality
const chatSend = document.querySelector(".chat-send");
const chatInput = document.querySelector(".chat-input");

chatSend.addEventListener("click", function () {
  if (chatInput.value.trim() !== "") {
    alert("تم إرسال رسالتك: " + chatInput.value);
    chatInput.value = "";
  }
});

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    chatSend.click();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
