/**
 * Vanteko & Associates - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenuDrawer && mobileBackdrop) {
      mobileBackdrop.classList.remove('hidden');
      setTimeout(() => {
        mobileBackdrop.classList.remove('opacity-0');
        mobileMenuDrawer.classList.remove('translate-x-full');
      }, 10);
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer && mobileBackdrop) {
      mobileMenuDrawer.classList.add('translate-x-full');
      mobileBackdrop.classList.add('opacity-0');
      setTimeout(() => {
        mobileBackdrop.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 2. Header Scroll Effect
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-slate-950/95', 'shadow-xl', 'backdrop-blur-md', 'py-3');
        navbar.classList.remove('bg-transparent', 'py-5');
      } else {
        navbar.classList.remove('bg-slate-950/95', 'shadow-xl', 'backdrop-blur-md', 'py-3');
        navbar.classList.add('bg-transparent', 'py-5');
      }
    }
  });

  // 3. Consultation Modal Logic
  const modal = document.getElementById('consultation-modal');
  const modalTriggers = document.querySelectorAll('[data-open-modal="consultation"]');
  const modalCloses = document.querySelectorAll('[data-close-modal="consultation"]');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');

  function openModal() {
    if (modal) {
      modal.classList.remove('hidden');
      setTimeout(() => {
        if (modalBackdrop) modalBackdrop.classList.remove('opacity-0');
        if (modalContainer) {
          modalContainer.classList.remove('opacity-0', 'scale-95');
          modalContainer.classList.add('opacity-100', 'scale-100');
        }
      }, 20);
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      if (modalBackdrop) modalBackdrop.classList.add('opacity-0');
      if (modalContainer) {
        modalContainer.classList.remove('opacity-100', 'scale-100');
        modalContainer.classList.add('opacity-0', 'scale-95');
      }
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 250);
    }
  }

  modalTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  modalCloses.forEach(btn => btn.addEventListener('click', closeModal));
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // 4. Practice Areas Filter / Tab Interaction
  const practiceFilterBtns = document.querySelectorAll('.practice-filter-btn');
  const practiceCards = document.querySelectorAll('.practice-card');

  practiceFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update button styles
      practiceFilterBtns.forEach(b => {
        b.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
        b.classList.add('bg-slate-900', 'text-slate-300', 'border-slate-800');
      });
      btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
      btn.classList.remove('bg-slate-900', 'text-slate-300', 'border-slate-800');

      // Filter cards
      practiceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });

  // 5. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');

        // Close all first
        faqItems.forEach(otherItem => {
          const otherAns = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAns) otherAns.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current
        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 6. Form Submission Handling with Toast
  const consultationForms = document.querySelectorAll('form[data-form="consultation"]');
  consultationForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing Consultation Request...
        `;
      }

      // Simulate API call
      setTimeout(() => {
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
        closeModal();
        showToast('Thank you! Your consultation request has been received. Our senior legal team will contact you within 24 business hours.');
      }, 1200);
    });
  });

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterForm.reset();
      showToast('Thank you for subscribing to Vanteko Legal Briefings!');
    });
  }

  // Toast Function
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    let toastMsg = document.getElementById('toast-message');

    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'fixed bottom-6 right-6 max-w-md bg-slate-900 border border-amber-500/40 text-white px-5 py-4 rounded-xl shadow-2xl flex items-start space-x-3 z-50 transform translate-y-24 opacity-0 transition-all duration-300';
      toast.innerHTML = `
        <div class="p-1 rounded-full bg-amber-500/20 text-amber-400 flex-shrink-0 mt-0.5">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <div class="flex-1">
          <h4 class="text-sm font-semibold text-amber-300">Request Confirmed</h4>
          <p id="toast-message" class="text-xs text-slate-300 mt-0.5 leading-relaxed"></p>
        </div>
        <button id="toast-close" class="text-slate-400 hover:text-white transition">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      `;
      document.body.appendChild(toast);

      toast.querySelector('#toast-close').addEventListener('click', () => {
        toast.classList.add('translate-y-24', 'opacity-0');
      });
      toastMsg = toast.querySelector('#toast-message');
    }

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
    }, 6000);
  }

  // 7. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('text-amber-400', 'active');
          navLink.classList.remove('text-slate-300');
        } else {
          navLink.classList.remove('text-amber-400', 'active');
          navLink.classList.add('text-slate-300');
        }
      }
    });
  });
});
