const numberSpans = document.querySelectorAll(".number[data-count]");

numberSpans.forEach((span) => {
  if (span.hasAttribute("data-animated")) return;

  span.setAttribute("data-animated", "true");

  const target = parseInt(span.getAttribute("data-count"), 10);
  let current = 0;

  const duration = 4000;

  const stepTime = Math.max(1, Math.floor(duration / target / 2));

  const increment = Math.max(1, Math.floor(target / (duration / stepTime)));

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    span.textContent = current;
  }, stepTime);

  observer.observe(span);
});
