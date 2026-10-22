/**
 * Aditya N Poojari — Portfolio Website Scripts
 * Clean, lightweight, dependency-free vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formFeedback = document.getElementById('formFeedback');
  const toast = document.getElementById('toast');
  const copyBtns = document.querySelectorAll('.copy-btn');
  const currentYearSpan = document.getElementById('currentYear');

  // Set current year in footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------------
     1. Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside or clicking any nav link
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Header Elevation on Scroll & Back to Top Button
     ------------------------------------------------------------------------ */
  const handleScrollEvents = () => {
    const scrollY = window.scrollY;

    // Header shadow
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active navigation state on scroll
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('active');
        } else {
          targetNavLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollEvents, { passive: true });
  handleScrollEvents(); // Trigger on initial load

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Scroll Reveal Animation using IntersectionObserver
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach((el) => el.classList.add('active'));
  }

  /* ------------------------------------------------------------------------
     4. Toast Notification Utility
     ------------------------------------------------------------------------ */
  let toastTimeout;
  const showToast = (message, icon = 'fa-check') => {
    if (!toast) return;

    clearTimeout(toastTimeout);
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  };

  /* ------------------------------------------------------------------------
     5. Copy to Clipboard (Email & Phone)
     ------------------------------------------------------------------------ */
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`, 'fa-clipboard-check');
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });

  const fallbackCopyText = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      showToast(`Copied to clipboard!`, 'fa-clipboard-check');
    } catch (err) {
      showToast('Could not copy automatically. Please select manually.', 'fa-triangle-exclamation');
    }
    document.body.removeChild(textArea);
  };

  /* ------------------------------------------------------------------------
     6. Contact Form Submission Handling
     ------------------------------------------------------------------------ */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !subject || !message) {
        if (formFeedback) {
          formFeedback.className = 'form-feedback error';
          formFeedback.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      // Simulate sending state
      if (submitBtn) {
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        if (btnText && btnLoading) {
          btnText.classList.add('d-none');
          btnLoading.classList.remove('d-none');
        }
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        // Construct mailto link as direct action
        const mailtoUri = `mailto:adityanpoojari9@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Contact] ${subject} - from ${name}`
        )}&body=${encodeURIComponent(
          `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`
        )}`;

        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <strong>Thank you, ${name}!</strong> Your message has been prepared. If your mail client didn't open automatically, 
            <a href="${mailtoUri}" style="text-decoration: underline; font-weight: 600;">click here to send via email client</a>.
          `;
        }

        // Open mail client
        window.location.href = mailtoUri;

        // Reset form
        contactForm.reset();

        // Restore button
        if (submitBtn) {
          const btnText = submitBtn.querySelector('.btn-text');
          const btnLoading = submitBtn.querySelector('.btn-loading');
          if (btnText && btnLoading) {
            btnText.classList.remove('d-none');
            btnLoading.classList.add('d-none');
          }
          submitBtn.disabled = false;
        }

        showToast('Message ready! Opening your email client...', 'fa-paper-plane');
      }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     7. Resume Link Fallback Check
     ------------------------------------------------------------------------ */
  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      // Check if resume.pdf exists or opens, and show a helpful prompt
      showToast('Opening Resume (PDF)...', 'fa-file-lines');
    });
  }
});
