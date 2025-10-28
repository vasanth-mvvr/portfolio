document.getElementById("curYear").textContent = new Date().getFullYear();

// Navbar toggle for mobile
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// Avatar scroll movement — aligned with blue line
window.addEventListener("scroll", () => {
  const avatar = document.getElementById("timelineAvatar");
  const timeline = document.querySelector(".timeline");
  if (!avatar || !timeline) return;

  const rect = timeline.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const timelineTop = rect.top + scrollTop;
  const timelineHeight = rect.height;
  const avatarHeight = avatar.offsetHeight;

  // Compute avatar's Y based on scroll progress
  const scrollPos = scrollTop + window.innerHeight / 2;
  const start = timelineTop;
  const end = timelineTop + timelineHeight - avatarHeight;
  let newTop = scrollPos - start - avatarHeight / 2;

  // Clamp position within the blue line boundaries
  newTop = Math.max(0, Math.min(newTop, timelineHeight - avatarHeight));

  // Apply updated top value
  avatar.style.top = `${newTop}px`;

  // Keep avatar centered horizontally
  if (window.innerWidth <= 900) {
    avatar.style.left = "40px";
    avatar.style.transform = "translate(-50%, -2px)";
  } else {
    avatar.style.left = "50%";
    avatar.style.transform = "translate(-50%, -2px)";
  }
});
