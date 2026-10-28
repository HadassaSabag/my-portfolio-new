import { useEffect, useState } from 'react'
import '../App.css'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Welcome from './Welcome'

type Page = 'home' | 'about' | 'resume' | 'contact'

const navigationItems = [
  { label: 'עמוד הבית', href: '#home' },
  { label: 'מי אני', href: '#about' },
  { label: 'קורות חיים', href: '#resume' },
  { label: 'צור קשר', href: '#contact' },
]

function getPageFromHash(): Page {
  const page = window.location.hash.slice(1)
  return page === 'about' || page === 'resume' || page === 'contact'
    ? page
    : 'home'
}

function Navbar({ page }: { page: Page }) {
  return (
    <nav className="navbar" aria-label="ניווט ראשי">
      <a className="navbar__brand" href="#top" aria-label="חזרה למעלה">
        <span className="navbar__brand-mark" aria-hidden="true">H</span>
        My Portfolio
      </a>
      <ul className="navbar__links">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a
              className={item.href === `#${page}` ? 'is-active' : undefined}
              href={item.href}
              aria-current={item.href === `#${page}` ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const pages = {
    home: <Welcome />,
    about: <About />,
    resume: <Resume />,
    contact: <Contact />,
  }

  return (
    <>
      <header id="top">
        <Navbar page={page} />
      </header>
      {pages[page]}
    </>
  )
}

export default App
