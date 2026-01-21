(function(){
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if(navToggle && nav){
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
  const y = document.getElementById('year');
  if(y) y.textContent = String(new Date().getFullYear());

  // Marquee duplication for seamless loop
  const track = document.querySelector('[data-logo-track]');
  if(track){
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.parentElement.appendChild(clone);
  }

  // Contact form (demo only)
  const form = document.querySelector('[data-contact-form]');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.querySelector('[data-form-msg]');
      if(msg){
        msg.textContent = "Thanks — your request is captured. Replace this demo handler with your form backend (HubSpot, Marketo, custom API, etc.).";
        msg.style.display = "block";
      }
      form.reset();
    });
  }
})();
