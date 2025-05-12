// ===== Toggle navigation for small screens =====
document.querySelector(".menu label").addEventListener("click", function () {
  document.getElementById("chk1").checked = !document.getElementById("chk1").checked;
});

// ===== Prevent empty search submission =====
document.querySelector(".search-box form").addEventListener("submit", function (e) {
  const searchInput = document.getElementById("srch").value.trim();
  if (searchInput === "") {
    e.preventDefault();
    alert("Please enter a search term.");
  }
});

// ===== Scroll to top button =====
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.backgroundColor = "#007bff";
scrollBtn.style.color = "#fff";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// ===== Login Modal Logic =====
document.querySelectorAll('a[href="#"]').forEach(link => {
  if (link.textContent.trim().toLowerCase() === "login") {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("loginModal").style.display = "block";
    });
  }
});

document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("loginModal").style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === document.getElementById("loginModal")) {
    document.getElementById("loginModal").style.display = "none";
  }
});

// ===== Book Preview Modal =====
document.querySelectorAll(".preview-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("previewTitle").textContent = btn.getAttribute("data-title");
    document.getElementById("previewDescription").textContent = btn.getAttribute("data-description");
    document.getElementById("previewModal").style.display = "block";
  });
});

document.getElementById("closePreview").addEventListener("click", () => {
  document.getElementById("previewModal").style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === document.getElementById("previewModal")) {
    document.getElementById("previewModal").style.display = "none";
  }
});
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault(); // optional, in case it's inside a link
    alert("✅ The book has been added to your cart!");
  });
});

