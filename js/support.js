document.addEventListener("DOMContentLoaded", () => {
  const notifBtn = document.getElementById("notif");
  const notifBar = document.getElementById("notif-bar");

  notifBtn.addEventListener("click", (e) => {
    e.preventDefault();
    notifBar.classList.toggle("active");

    // Load notifications when clicked
    fetch("notifications.json")
      .then(res => res.json())
      .then(data => {
        notifBar.innerHTML = ""; // Clear existing content
        data.forEach(n => {
          const p = document.createElement("p");
          p.textContent = n.message;
          notifBar.appendChild(p);
        });
      })
      .catch(() => {
        notifBar.innerHTML = "<p>Error loading notifications</p>";
      });
  });

  document.addEventListener("click", (e) => {
    if (!notifBtn.contains(e.target) && !notifBar.contains(e.target)) {
      notifBar.classList.remove("active");
    }
  });
});


// Trigger animations when page loads
window.addEventListener('load', function () {
  // Add a small delay to make the animation more noticeable
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-left, .fade-right');
    elements.forEach(element => {
      element.classList.add('appear');
    });
  }, 200);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }