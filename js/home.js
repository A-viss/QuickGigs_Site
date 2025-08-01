document.addEventListener("DOMContentLoaded", () => {
  const notifBtn = document.getElementById("notif");
  const notifBar = document.getElementById("notif-bar");

  notifBtn.addEventListener("click", (e) => {
    e.preventDefault();
    notifBar.classList.toggle("active");
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
    const elements = document.querySelectorAll('.fade-up, .slide-in');
    elements.forEach(element => {
      element.classList.add('appear');
    });
  }, 200);
});