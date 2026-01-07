// Lightweight email helper with progressive enhancement
// Tries EmailJS via official browser CDN if keys are provided, else falls back to mailto

const EMAILJS_CDN = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

function loadEmailJs() {
  return new Promise((resolve, reject) => {
    if (window.emailjs) return resolve(window.emailjs);
    const script = document.createElement('script');
    script.src = EMAILJS_CDN;
    script.async = true;
    script.onload = () => resolve(window.emailjs);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export async function sendContactEmail({ name, email, message }) {
  const serviceId = import.meta?.env?.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta?.env?.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta?.env?.VITE_EMAILJS_PUBLIC_KEY;

  // If EmailJS env vars are present, try to send via EmailJS
  if (serviceId && templateId && publicKey) {
    try {
      const emailjs = await loadEmailJs();
      emailjs.init(publicKey);
      const result = await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        reply_to: email,
        to_name: 'Tushar Patil',
        to_email: 'tusharpatil21324@gmail.com',
        to: 'tusharpatil21324@gmail.com',
        subject: `Portfolio contact from ${name}`,
        message,
      });
      // EmailJS returns { status: 200, text: 'OK' } on success
      if (result?.status === 200) {
        console.info('[EmailJS] Sent successfully:', result);
        return { ok: true, via: 'emailjs', result };
      }
      console.warn('[EmailJS] Unexpected response:', result);
      throw new Error('EmailJS returned non-200 status');
    } catch (err) {
      // fall through to mailto
      console.warn('EmailJS failed, falling back to mailto:', err);
    }
  }

  // Fallback: open mail client pre-filled
  const to = 'tusharpatil21324@gmail.com';
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;
  window.location.href = mailtoUrl;
  return { ok: true, via: 'mailto' };
}
