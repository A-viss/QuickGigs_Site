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

const taskList = document.getElementById('taskList');
let gigs = JSON.parse(localStorage.getItem('pickedGigs') || '[]');

function renderTasks() {
    taskList.innerHTML = '';
    if (gigs.length === 0) {
        taskList.innerHTML = '<p id="none">No gigs picked.</p>';
        return;
    }

    gigs.forEach((gig, index) => {
        const div = document.createElement('div');
        div.className = 'task';
        div.innerHTML = `
      <h2>${gig.title}</h2>
      <h3>Deadline:</h3><p>${gig.deadline}</p>
      <h1> ${gig.price}<h1>
      <button onclick="submitTask(${index})">Submit</button>
    `;
        taskList.appendChild(div);
    });
}

function submitTask(index) {
    gigs.splice(index, 1);
    localStorage.setItem('pickedGigs', JSON.stringify(gigs));
    renderTasks();
}

renderTasks();

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

