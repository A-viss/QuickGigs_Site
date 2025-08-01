function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

document.querySelectorAll('.gig').forEach(gig => {
  gig.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault(); // Prevents default link behavior

    const title = gig.querySelector('h2').innerText;
    const deadline = gig.querySelector('.date').innerText;
    const price = gig.querySelector('h1').innerText;

    const pickedGigs = JSON.parse(localStorage.getItem('pickedGigs') || '[]');
    pickedGigs.push({ title, deadline, price });
    localStorage.setItem('pickedGigs', JSON.stringify(pickedGigs));

    window.location.href = 'tasks.html'; // Go to tasks page
  });
});
