
const observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.5 
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.replace('fade-out', 'fade-in');
      } else {
        entry.target.classList.replace('fade-in', 'fade-out');
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const fadeElms = document.querySelectorAll('.scroll-element');
  
  fadeElms.forEach(el => observer.observe(el));