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
    var honeypot = modal.querySelector('input[name="website"]');
    var openedAt = 0;
    var MIN_FILL_MS = 2500;

    function open(presetProgram) {
      if (presetProgram && programSelect) {
        programSelect.value = presetProgram;
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      openedAt = Date.now();
      var first = modal.querySelector('.lead-modal__field input:not([tabindex="-1"])');
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
        if (honeypot && honeypot.value) return;
        if (openedAt && Date.now() - openedAt < MIN_FILL_MS) return;
        var firstName = form.querySelector('#lead-first').value.trim();
        var lastName = form.querySelector('#lead-last').value.trim();
        var email = form.querySelector('#lead-email').value.trim();
        var phone = form.querySelector('#lead-phone').value.trim();
        var program = form.querySelector('#lead-program').value;

        var payload = {
          first_name: firstName,
          last_name: lastName,
          full_name: (firstName + ' ' + lastName).trim(),
          email: email,
          phone: phone,
          program: program,
          source: 'website-lead-modal',
          source_page: location.pathname,
          page_url: location.href,
          referrer: document.referrer || '',
          timestamp: new Date().toISOString()
        };

        try {
          sessionStorage.setItem('leadFormData', JSON.stringify({
            firstName: firstName, lastName: lastName, email: email,
            phone: phone, program: program, timestamp: payload.timestamp
          }));
        } catch (err) {}

        // Pick GHL webhooks by program family — adult vs. kids
        var ADULT_WEBHOOKS = [
          'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/c2c09a65-cd99-40d2-a6d1-ebbad2293596',
          'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/b6f2ecfa-6163-448c-b27d-0d1ba7d9e001'
        ];
        var KIDS_WEBHOOKS = [
          'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/26d5c4a4-befa-4aca-9252-d7d8078fdbf0',
          'https://services.leadconnectorhq.com/hooks/UrcblURsSj7egEPfYXhH/webhook-trigger/302de1d1-849a-4f42-9c1e-8d897ae1df7b'
        ];
        var webhooks = [];
        if (program === 'adult-no-gi') webhooks = ADULT_WEBHOOKS;
        else if (program === 'kids-8-12' || program === 'kids-5-7') webhooks = KIDS_WEBHOOKS;

        // Use mode:cors (the default) so the Content-Type: application/json header is preserved.
        // GHL's preflight returns access-control-allow-origin:* and access-control-allow-headers:*,
        // so no preflight failure. keepalive:true lets the POST survive the redirect.
        // (Previously used mode:no-cors, which silently stripped Content-Type and made GHL
        //  receive text/plain — workflows never triggered.)
        var body = JSON.stringify(payload);
        webhooks.forEach(function (url) {
          try {
            fetch(url, {
              method: 'POST',
              mode: 'cors',
              credentials: 'omit',
              keepalive: true,
              headers: { 'Content-Type': 'application/json' },
              body: body
            });
          } catch (err) {}
        });

        // Brief grace window so the keepalive fetches register before navigation
        var redirect = function () {
          window.location.href = 'booking.html?program=' + encodeURIComponent(program);
        };
        if (webhooks.length) setTimeout(redirect, 200);
        else redirect();
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
