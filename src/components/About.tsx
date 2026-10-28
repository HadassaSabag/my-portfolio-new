const strengths = [
  'לקיחת אחריות על פרויקט משלב הרעיון ועד הפריסה',
  'למידה מהירה ופתרון בעיות',
  'עבודת צוות, תקשורת טובה ועמידה ביעדים',
]

function About() {
  return (
    <main className="page about">
      <p className="welcome__eyebrow">נעים להכיר</p>
      <h1>מי אני</h1>
      <div className="about__intro">
        <p>
          אני הדסה סבג, מפתחת Full-Stack שאוהבת להפוך רעיונות למוצרים דיגיטליים
          שימושיים. אני בונה אפליקציות ואתרים מקצה לקצה, ומשלבת בין חשיבה על
          חוויית המשתמש לבין פיתוח יסודי של הממשק והמערכת.
        </p>
        <p>
          אני הנדסאית תוכנה, בוגרת המכללה למינהל בהצטיינות יתרה, וצברתי ניסיון
          בפיתוח עם React, JavaScript, C#, .NET ו-SQL. בפרויקטים שלי אני נהנית
          לקחת אחריות מלאה — מתכנון ועיצוב, דרך הפיתוח ועד ההשקה.
        </p>
        <p>
          שנות העבודה בסביבה ארגונית גדולה לימדו אותי לנהל משימות, לעבוד מול
          יעדים ולשתף פעולה. אני מביאה איתי סקרנות, למידה מהירה ויכולת לעבוד
          בצוות, לצד יוזמה ועצמאות.
        </p>
      </div>
      <section className="about__strengths" aria-labelledby="about-strengths">
        <h2 id="about-strengths">מה אני מביאה איתי</h2>
        <ul>
          {strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default About
