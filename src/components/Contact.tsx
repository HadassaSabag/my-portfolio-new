import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error'

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const emailJsConfigured = Boolean(
  emailJsServiceId && emailJsTemplateId && emailJsPublicKey,
)

function Contact() {
  const [status, setStatus] = useState<SubmissionStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!emailJsConfigured) {
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus('sending')

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: formData.get('from_name'),
          reply_to: formData.get('reply_to'),
          subject: formData.get('subject'),
          message: formData.get('message'),
          to_email: 'hadassa313@gmail.com',
        },
        { publicKey: emailJsPublicKey },
      )
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form submission failed', error)
      setStatus('error')
    }
  }

  return (
    <main className="page contact">
      <p className="welcome__eyebrow">אשמח לשמוע מכם</p>
      <h1>בואו נדבר</h1>
      <p className="contact__intro">
        יש לכם רעיון לאתר, שאלה או הצעה מעניינת? אפשר לפנות אליי בדרך שנוחה לכם.
      </p>
      <div className="contact__options">
        <a className="contact__option contact__option--email" href="mailto:hadassa313@gmail.com">
          <span className="contact__option-icon" aria-hidden="true">@</span>
          <span className="contact__option-copy">
            <strong>שליחת מייל</strong>
            <span>hadassa313@gmail.com</span>
          </span>
          <span className="contact__option-arrow" aria-hidden="true">←</span>
        </a>
        <a
          className="contact__option contact__option--whatsapp"
          href="https://wa.me/972545220442"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact__option-icon" aria-hidden="true">W</span>
          <span className="contact__option-copy">
            <strong>התכתבות ב-WhatsApp</strong>
            <span dir="ltr">054-522-0442</span>
          </span>
          <span className="contact__option-arrow" aria-hidden="true">←</span>
        </a>
        <a className="contact__option contact__option--phone" href="tel:+972545220442">
          <span className="contact__option-icon" aria-hidden="true">☎</span>
          <span className="contact__option-copy">
            <strong>שיחת טלפון</strong>
            <span dir="ltr">054-522-0442</span>
          </span>
          <span className="contact__option-arrow" aria-hidden="true">←</span>
        </a>
      </div>
      <section className="contact__form-section" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title">או השאירו לי הודעה</h2>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <label>
              שם מלא
              <input
                autoComplete="name"
                maxLength={100}
                name="from_name"
                placeholder="איך קוראים לכם?"
                required
              />
            </label>
            <label>
              כתובת מייל
              <input
                autoComplete="email"
                maxLength={254}
                name="reply_to"
                placeholder="name@example.com"
                required
                type="email"
              />
            </label>
          </div>
          <label>
            נושא הפנייה
            <input
              maxLength={150}
              name="subject"
              placeholder="במה אוכל לעזור?"
              required
            />
          </label>
          <label>
            הודעה
            <textarea
              maxLength={5000}
              name="message"
              placeholder="כתבו כאן את ההודעה שלכם..."
              required
              rows={5}
            />
          </label>
          {!emailJsConfigured && (
            <p className="contact__form-notice" role="status">
              הטופס עדיין לא חובר לשירות שליחת מייל. בינתיים אפשר לשלוח הודעה
              ישירות ל{' '}
              <a href="mailto:hadassa313@gmail.com">hadassa313@gmail.com</a>.
            </p>
          )}
          {status === 'success' && (
            <p className="contact__form-status" role="status">
              תודה! ההודעה נשלחה בהצלחה.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__form-error" role="alert">
              שליחת ההודעה נכשלה. אפשר לנסות שוב או לשלוח לי מייל ישירות.
            </p>
          )}
          <button
            className="contact__submit"
            disabled={!emailJsConfigured || status === 'sending'}
            type="submit"
          >
            {status === 'sending' ? 'שולחת...' : 'שליחת ההודעה'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Contact
