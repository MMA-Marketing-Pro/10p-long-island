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
      var submitBtn = form.querySelector('.lead-modal__submit');

      // Safe DOM construction only (no innerHTML). `message` is plain text; an
      // optional phone link is appended at the end as a real <a> element.
      function showLeadError(message, telLabel, telHref) {
        var el = form.querySelector('.lead-modal__error');
        if (!el) {
          el = document.createElement('p');
          el.className = 'lead-modal__error';
          el.setAttribute('role', 'alert');
          if (submitBtn && submitBtn.parentNode) submitBtn.parentNode.insertBefore(el, submitBtn.nextSibling);
          else form.appendChild(el);
        }
        el.textContent = message;
        if (telLabel && telHref) {
          el.appendChild(document.createTextNode(' '));
          var a = document.createElement('a');
          a.href = telHref;
          a.textContent = telLabel;
          el.appendChild(a);
        }
        el.classList.add('is-visible');
      }
      function hideLeadError() {
        var el = form.querySelector('.lead-modal__error');
        if (el) el.classList.remove('is-visible');
      }
      function setSubmitting(on) {
        form.dataset.submitting = on ? '1' : '';
        if (submitBtn) {
          submitBtn.disabled = !!on;
          submitBtn.classList.toggle('is-loading', !!on);
        }
      }

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
        if (form.dataset.submitting === '1') return;
        if (honeypot && honeypot.value) return;
        if (openedAt && Date.now() - openedAt < MIN_FILL_MS) return;
        var firstName = form.querySelector('#lead-first').value.trim();
        var lastName = form.querySelector('#lead-last').value.trim();
        var email = form.querySelector('#lead-email').value.trim();
        var phoneEl = form.querySelector('#lead-phone');
        var phone = phoneEl.value.trim();
        var program = form.querySelector('#lead-program').value;
        var smsTxnEl = form.querySelector('#lead-sms-transactional');
        var smsMktEl = form.querySelector('#lead-sms-marketing');
        var smsTransactional = smsTxnEl ? smsTxnEl.checked : false;
        var smsMarketing = smsMktEl ? smsMktEl.checked : false;

        // Phone is required — confirm it's a complete 10-digit number.
        if (phone.replace(/\D/g, '').length < 10) {
          showLeadError('Please enter a valid 10-digit phone number so we can confirm your free class.');
          if (phoneEl) phoneEl.focus();
          return;
        }

        var payload = {
          first_name: firstName,
          last_name: lastName,
          full_name: (firstName + ' ' + lastName).trim(),
          email: email,
          phone: phone,
          program: program,
          sms_consent_transactional: smsTransactional,
          sms_consent_marketing: smsMarketing,
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

        // Meta Pixel — Lead conversion (fires only for free-trial / lead-modal submits)
        try {
          if (typeof window.fbq === 'function') {
            window.fbq('track', 'Lead', {
              content_name: program,
              content_category: program.indexOf('kids') === 0 ? 'kids' : 'adult',
              source_page: location.pathname
            });
          }
        } catch (err) {}

        // Deliver server-side through our same-origin endpoint, then redirect
        // only once delivery is confirmed. The browser no longer posts to GHL/SPOS
        // directly — that silently dropped mobile leads when the redirect cancelled
        // the in-flight request. /api/lead forwards to every webhook server-side.
        var body = JSON.stringify(payload);
        setSubmitting(true);
        hideLeadError();

        var redirect = function () {
          window.location.href = 'booking.html?program=' + encodeURIComponent(program);
        };
        var fail = function () {
          setSubmitting(false);
          showLeadError(
            'Sorry — we couldn’t submit that just now. Call or text us and we’ll get you booked right away:',
            '(631) 848-5851',
            'tel:+16318485851'
          );
        };

        var controller = new AbortController();
        var timer = setTimeout(function () { controller.abort(); }, 12000);

        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: body,
          signal: controller.signal
        })
          .then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (data) {
              return { httpOk: res.ok, data: data };
            });
          })
          .then(function (result) {
            clearTimeout(timer);
            if (result.httpOk && result.data && result.data.ok) redirect();
            else fail();
          })
          .catch(function () {
            clearTimeout(timer);
            fail();
          });
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
