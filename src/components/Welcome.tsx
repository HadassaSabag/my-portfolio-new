import comingSoonImage from '../assets/comming soon.png'
import mbClinicImage from '../assets/mb clinic.png'
import talksAndCoImage from '../assets/talksandco.png'

const projects = [
  {
    title: 'Talks & Co',
    description:
      'אתר למשחקי זוגות, חברים ומשפחה, שנבנה בעזרת React, TypeScript ו-Vite.',
    url: 'https://talksandco.com/',
    image: talksAndCoImage,
  },
  {
    title: 'MB Clinic',
    description:
      'אתר עבור זוג מטפלים, הכולל הצגת השירותים וטופס יצירת קשר נוח וברור.',
    url: 'https://mb-clinic.co.il/',
    image: mbClinicImage,
  },
  {
    title: 'כאן יכול להיות האתר שלך',
    description: 'האתר הבא יכול להיות כאן. יחד נבנה נוכחות דיגיטלית שמתאימה בדיוק לעסק שלך.',
    image: comingSoonImage,
    contact: true,
  },
]

function Welcome() {
  return (
    <main>
      <section id="home" className="welcome" aria-labelledby="welcome-title">
        <p className="welcome__eyebrow">מפתחת תוכנה · בונה אתרים</p>
        <h1 id="welcome-title">
          היי, אני <span>הדסה</span>
        </h1>
        <p className="welcome__role">
          בונה אתרים, מפתחת תוכנה, ובעיקר אוהבת ליצור דברים חדשים מאפס.
        </p>
        <p className="welcome__description">
          בין אם אתם מחפשים אתר אינטרנט מדויק לעסק שלכם, ובין אם אתם מחפשים
          מפתחת רצינית שתביא ערך לצוות שלכם — הגעתם למקום הנכון. מוזמנים להציץ
          בעבודות שלי או ליצור קשר ונכיר!
        </p>
        <blockquote className="welcome__quote">
          “Find a job you love, and you will never have to work a day in your
          life.”
        </blockquote>
        <div className="welcome__actions">
          <a className="welcome__button welcome__button--primary" href="#projects">
            לפרויקטים שלי
            <span aria-hidden="true">←</span>
          </a>
          <a className="welcome__button welcome__button--secondary" href="#contact">
            בואו נדבר
          </a>
        </div>
      </section>

      <section id="projects" className="projects" aria-labelledby="projects-title">
        <div className="projects__heading">
          <p className="welcome__eyebrow">תיק עבודות</p>
          <h2 id="projects-title">פרויקטים נבחרים</h2>
        </div>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__image">
                {'image' in project ? (
                  <img
                    src={project.image}
                    alt={`תצוגת האתר ${project.title}`}
                    loading="lazy"
                  />
                ) : (
                  <span>תמונת הפרויקט {index + 1}</span>
                )}
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={'url' in project ? project.url : '#contact'}
                  target={'url' in project ? '_blank' : undefined}
                  rel={'url' in project ? 'noopener noreferrer' : undefined}
                  aria-label={`לצפות באתר ${project.title}`}
                >
                  {'contact' in project ? 'ליצירת קשר' : 'לאתר'}
                  <span aria-hidden="true">←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Welcome
