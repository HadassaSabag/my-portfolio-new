import { useState } from 'react'
import englishCertificate from '../assets/Degree of practical engineer.pdf'
import englishResume from '../assets/Hadassa Sabag Full Stack Cv .pdf'
import hebrewCertificate from '../assets/תעודת הנדסאית תוכנה.pdf'
import hebrewResume from '../assets/הדסה סבג Full Stack קורות חיים.pdf'

type Language = 'he' | 'en'

const resumeContent = {
  he: {
    title: 'קורות חיים',
    subtitle: 'ניסיון מקצועי, השכלה וכישורים',
    experienceTitle: 'ניסיון מקצועי',
    educationTitle: 'השכלה',
    certificatesTitle: 'תעודות',
    skillsTitle: 'כישורים טכנולוגיים',
    languagesTitle: 'שפות',
    hebrew: 'עברית',
    english: 'אנגלית',
    hebrewResume: 'הורדת קורות חיים בעברית',
    englishResume: 'הורדת קורות חיים באנגלית',
    hebrewCertificate: 'פתיחת התעודה בעברית',
    englishCertificate: 'פתיחת התעודה באנגלית',
    diploma: 'הנדסאית תוכנה',
    college: 'המכללה למינהל',
    certificateNote: 'תעודת הנדסאית תוכנה · המכללה למינהל',
    highHonors: 'בהצטיינות יתרה',
    degree: 'תואר ראשון (B.Ed) בחינוך למתמטיקה',
    herzog: 'מכללת הרצוג',
    nativeLanguage: 'שפת אם',
    professionalLevel: 'רמה מקצועית',
    experience: [
      {
        role: 'מפתחת Full-Stack ויזמית',
        company: 'Talks & Co',
        period: '2026–היום',
        details: [
          'תכנון חוויית המשתמש ועיצוב הממשק, לצד פיתוח מלא של אפליקציית Web.',
          'פיתוח צד לקוח רספונסיבי באמצעות React, Vite ו-Tailwind CSS, כולל שילוב EmailJS.',
          'ניהול מחזור חיי הפיתוח, ניהול גרסאות עם Git ופריסה ל-Vercel.',
        ],
      },
      {
        role: 'מפתחת Full-Stack',
        company: 'Psagot Up',
        period: '2024–2025',
        details: [
          'פיתוח אפליקציות Full-Stack באמצעות C#, .NET ו-React.',
          'בניית ממשקי משתמש דינמיים וחיבור ל-SQL Server באמצעות Entity Framework.',
          'עבודה בצוות Agile עם Trello, Swagger, Figma ו-Slack.',
        ],
      },
      {
        role: 'נציגת גבייה',
        company: 'חברת החשמל לישראל',
        period: '2017–2026',
        details: [
          'עבודה בסביבה ארגונית רחבת היקף ועמידה עקבית ביעדים.',
          'ניהול משימות, פתרון בעיות ותקשורת בין-אישית.',
        ],
      },
    ],
    skills: [
      { title: 'שפות תכנות', skills: 'C#, Java, JavaScript, SQL' },
      {
        title: 'טכנולוגיות',
        skills: '.NET, React, Redux, Entity Framework',
      },
      { title: 'מסדי נתונים', skills: 'SQL Server' },
      {
        title: 'כלים ושיטות עבודה',
        skills: 'HTML5, CSS3, Git, GitHub Copilot, Swagger, Figma, Agile',
      },
    ],
  },
  en: {
    title: 'Resume',
    subtitle: 'Professional experience, education, and skills',
    experienceTitle: 'Professional Experience',
    educationTitle: 'Education',
    certificatesTitle: 'Certificates',
    skillsTitle: 'Technical Skills',
    languagesTitle: 'Languages',
    hebrew: 'Hebrew',
    english: 'English',
    hebrewResume: 'Download resume in Hebrew',
    englishResume: 'Download resume in English',
    hebrewCertificate: 'View certificate in Hebrew',
    englishCertificate: 'View certificate in English',
    diploma: 'Practical Software Engineering Diploma',
    college: 'The College of Management',
    certificateNote: 'Practical Software Engineering Diploma · The College of Management',
    highHonors: 'Highest honors',
    degree: 'B.Ed. in Mathematics Education',
    herzog: 'Herzog College',
    nativeLanguage: 'Native',
    professionalLevel: 'Professional proficiency',
    experience: [
      {
        role: 'Full-Stack Developer & Entrepreneur',
        company: 'Talks & Co',
        period: '2026–Present',
        details: [
          'Led user experience design and UI/UX, alongside end-to-end web application development.',
          'Built a responsive frontend with React, Vite, and Tailwind CSS, including EmailJS integration.',
          'Managed the software development lifecycle, Git version control, and Vercel deployment.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: 'Psagot Up',
        period: '2024–2025',
        details: [
          'Developed full-stack applications using C#, .NET, and React.',
          'Built dynamic user interfaces and integrated with SQL Server using Entity Framework.',
          'Collaborated in an Agile team using Trello, Swagger, Figma, and Slack.',
        ],
      },
      {
        role: 'Collections Specialist',
        company: 'Israel Electric Corporation',
        period: '2017–2026',
        details: [
          'Worked in a large-scale organization and consistently met performance targets.',
          'Built strong task-management, problem-solving, and interpersonal communication skills.',
        ],
      },
    ],
    skills: [
      { title: 'Programming Languages', skills: 'C#, Java, JavaScript, SQL' },
      {
        title: 'Frameworks & Libraries',
        skills: '.NET, React, Redux, Entity Framework',
      },
      { title: 'Databases', skills: 'SQL Server' },
      {
        title: 'Tools & Methodologies',
        skills: 'HTML5, CSS3, Git, GitHub Copilot, Swagger, Figma, Agile',
      },
    ],
  },
} as const

function Resume() {
  const [language, setLanguage] = useState<Language>('he')
  const content = resumeContent[language]
  const isHebrew = language === 'he'

  return (
    <main
      className={`page resume${isHebrew ? '' : ' resume--english'}`}
      lang={language === 'he' ? 'he' : 'en'}
      dir={isHebrew ? 'rtl' : 'ltr'}
    >
      <header className="resume__header">
        <div>
          <h1>{content.title}</h1>
          <p>{content.subtitle}</p>
        </div>
        <div className="resume__language" aria-label="Resume language">
          <button
            type="button"
            aria-pressed={isHebrew}
            className={isHebrew ? 'is-active' : undefined}
            onClick={() => setLanguage('he')}
          >
            עברית
          </button>
          <button
            type="button"
            aria-pressed={!isHebrew}
            className={!isHebrew ? 'is-active' : undefined}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>
      </header>

      <div className="resume__downloads">
        <a
          className="resume__download"
          href={hebrewResume}
          download="Hadassa-Sabag-CV-HE.pdf"
          lang="he"
          dir="rtl"
        >
          {content.hebrewResume}
          <span aria-hidden="true">↓</span>
        </a>
        <a
          className="resume__download"
          href={englishResume}
          download="Hadassa-Sabag-CV-EN.pdf"
          lang="en"
          dir="ltr"
        >
          {content.englishResume}
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <section
        className="resume__section"
        aria-labelledby="resume-experience"
      >
        <h2 id="resume-experience">{content.experienceTitle}</h2>
        <div className="resume__timeline">
          {content.experience.map((item) => (
            <article className="resume__item" key={item.company}>
              <div className="resume__item-heading">
                <h3>{item.role}</h3>
                <span dir="ltr">{item.period}</span>
              </div>
              <p className="resume__company">{item.company}</p>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume__section" aria-labelledby="resume-education">
        <h2 id="resume-education">{content.educationTitle}</h2>
        <div className="resume__education">
          <article className="resume__item">
            <div className="resume__item-heading">
              <h3>{content.diploma}</h3>
              <span dir="ltr">2023–2025</span>
            </div>
            <p className="resume__company">
              {content.college} · {content.highHonors}
            </p>
          </article>
          <article className="resume__item">
            <div className="resume__item-heading">
              <h3>{content.degree}</h3>
              <span dir="ltr">2018–2022</span>
            </div>
            <p className="resume__company">{content.herzog}</p>
          </article>
        </div>
      </section>

      <section
        className="resume__section"
        aria-labelledby="resume-certificates"
      >
        <h2 id="resume-certificates">{content.certificatesTitle}</h2>
        <article className="resume__certificate">
          <div>
            <h3>{content.diploma}</h3>
            <p>{content.certificateNote}</p>
          </div>
          <div className="resume__certificate-links">
            <a
              href={hebrewCertificate}
              target="_blank"
              rel="noopener noreferrer"
              lang="he"
            >
              {content.hebrewCertificate}
            </a>
            <a
              href={englishCertificate}
              target="_blank"
              rel="noopener noreferrer"
              lang="en"
            >
              {content.englishCertificate}
            </a>
          </div>
        </article>
      </section>

      <section className="resume__section" aria-labelledby="resume-skills">
        <h2 id="resume-skills">{content.skillsTitle}</h2>
        <dl className="resume__skills">
          {content.skills.map((group) => (
            <div className="resume__skill-group" key={group.title}>
              <dt>{group.title}</dt>
              <dd>{group.skills}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="resume__section" aria-labelledby="resume-languages">
        <h2 id="resume-languages">{content.languagesTitle}</h2>
        <p>
          {content.hebrew} – {content.nativeLanguage} · {content.english} –{' '}
          {content.professionalLevel}
        </p>
      </section>
    </main>
  )
}

export default Resume
