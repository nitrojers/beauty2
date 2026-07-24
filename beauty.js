
    function shopNow(){
      alert('Welcome to GlowSkin!');
    }

    // CONTACT FORM
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e){
      e.preventDefault();

      const name = form.elements.name.value.trim();
      const email = form.elements._replyto.value.trim();
      const message = form.elements.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      const recipient = 'Zoeylightlimited@gmail.com';
      const subject = encodeURIComponent('Website message from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message
      );

      window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
    });


    // SCROLL ANIMATION
    const cards = document.querySelectorAll('.product-card, .benefit-box, .testimonial');

    window.addEventListener('scroll', () => {

      cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }

      });
    });
    function scrollToContact(){
  document.getElementById('contact').scrollIntoView({
    behavior:'smooth'
  });
}


    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = '0.6s';
    });
