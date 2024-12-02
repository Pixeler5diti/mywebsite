document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  