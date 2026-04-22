// 10TH PLANET LONG ISLAND — shared site scripts

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    try { if (window.lucide) window.lucide.createIcons(); } catch (e) {}

    initCopyrightYear();
    initNav();
    initReveal();
    initLeadModal();
    if (document.body.dataset.page === 'booking') initBookingPage();
  });

  function initCopyrightYear() {
    var nodes = document.querySelectorAll('[data-year]');
    var y = new Date().getFullYear();
    nodes.forEach(function (n) { n.textContent = y; });
  }

  function initNav() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var toggle = nav.querySelector('.nav-toggle');

    var onScroll = function () {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        var isOpen = nav.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    }

    // Close on mobile link click
    nav.querySelectorAll('.nav-mobile a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        document.body.style.overflow = '';
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  // ---- Lead modal ----
  function initLeadModal() {
    var modal = document.getElementById('lead-modal');
    if (!modal) return;

    var triggers = document.querySelectorAll('[data-cta="lead-modal"]');
    var closeBtn = modal.querySelector('.lead-modal__close');
    var backdrop = modal.querySelector('.lead-modal__backdrop');
    var form = modal.querySelector('.lead-modal__form');
    var programSelect = modal.querySelector('#lead-program');

    function open(presetProgram) {
      if (presetProgram && programSelect) {
        programSelect.value = presetProgram;
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      var first = modal.querySelector('input');
      setTimeout(function () { if (first) first.focus(); }, 280);
    }
    function close() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var preset = btn.getAttribute('data-program');
        open(preset);
      });
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (backdrop) backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });

    if (form) {
      // Phone mask
      var phone = form.querySelector('input[type="tel"]');
      if (phone) {
        phone.addEventListener('input', function () {
          var v = phone.value.replace(/\D/g, '').slice(0, 10);
          if (v.length > 6) phone.value = '(' + v.slice(0, 3) + ') ' + v.slice(3, 6) + '-' + v.slice(6);
          else if (v.length > 3) phone.value = '(' + v.slice(0, 3) + ') ' + v.slice(3);
          else if (v.length > 0) phone.value = '(' + v;
        });
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = {
          firstName: form.querySelector('#lead-first').value.trim(),
          lastName: form.querySelector('#lead-last').value.trim(),
          email: form.querySelector('#lead-email').value.trim(),
          phone: form.querySelector('#lead-phone').value.trim(),
          program: form.querySelector('#lead-program').value,
          timestamp: new Date().toISOString()
        };
        try {
          sessionStorage.setItem('leadFormData', JSON.stringify(data));
        } catch (err) {}
        // TODO: wire this to a webhook or GHL form capture if backend capture is required.
        window.location.href = 'booking.html?program=' + encodeURIComponent(data.program);
      });
    }
  }

  // ---- Booking page ----
  function initBookingPage() {
    var params = new URLSearchParams(window.location.search);
    var requested = params.get('program') || 'adult-no-gi';

    var calendars = document.querySelectorAll('.booking-calendar');
    var chips = document.querySelectorAll('.program-chip');

    function activate(program) {
      calendars.forEach(function (cal) {
        if (cal.dataset.program === program) cal.classList.add('active');
        else cal.classList.remove('active');
      });
      chips.forEach(function (chip) {
        if (chip.dataset.program === program) chip.classList.add('active');
        else chip.classList.remove('active');
      });
      var qs = new URLSearchParams(window.location.search);
      qs.set('program', program);
      history.replaceState(null, '', '?' + qs.toString());
    }

    // Try the requested program, fall back to the first one available
    var requestedExists = !!document.querySelector('.booking-calendar[data-program="' + requested + '"]');
    if (requestedExists) activate(requested);
    else if (calendars.length) activate(calendars[0].dataset.program);

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activate(chip.dataset.program);
        var scrollTarget = document.querySelector('.booking-calendars');
        if (scrollTarget) scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Display lead name if captured
    var greeting = document.getElementById('booking-greeting');
    if (greeting) {
      try {
        var raw = sessionStorage.getItem('leadFormData');
        if (raw) {
          var data = JSON.parse(raw);
          if (data.firstName) greeting.textContent = data.firstName + ', you’re almost done —';
        }
      } catch (e) {}
    }
  }
})();
