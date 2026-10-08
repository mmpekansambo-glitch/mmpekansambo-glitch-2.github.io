import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ArrowDownRight, ArrowRight, Leaf, Mail, Moon, Sun } from 'lucide-react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Mwengwe Mpekansambo — Finance, stories & possibility',
    description: 'Meet Mwengwe Mpekansambo, an MBA candidate at Berkeley Haas and former TMT investment banking associate.',
  },
  '/about': {
    title: 'About — Mwengwe Mpekansambo',
    description: 'Mwengwe’s background, education, and interests across finance, literature, agriculture, and women’s opportunity.',
  },
  '/experience': {
    title: 'Experience — Mwengwe Mpekansambo',
    description: 'Professional experience in technology, media and telecom investment banking, corporate development, and asset management.',
  },
  '/contact': {
    title: 'Contact — Mwengwe Mpekansambo',
    description: 'Get in touch with Mwengwe Mpekansambo via her approved public Stanford alumni email.',
  },
  '404': {
    title: 'Page not found — Mwengwe Mpekansambo',
    description: 'The page you are looking for could not be found.',
  },
};

function PageMeta({ route }: { route: string }) {
  useEffect(() => {
    const content = pageMeta[route] ?? pageMeta['404'];
    document.title = content.title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) element.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] ?? '');
        else element.name = selector.match(/name="([^"]+)"/)?.[1] ?? '';
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', content.description);
    setMeta('meta[property="og:title"]', 'content', content.title);
    setMeta('meta[property="og:description"]', 'content', content.description);
    setMeta('meta[property="og:type"]', 'content', 'website');
  }, [route]);
  return null;
}

function Header({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const [location] = useLocation();
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Mwengwe Mpekansambo, home" data-testid="link-home-brand">
        <span className="brand-mark" aria-hidden="true">MM</span>
        <span>Mwengwe Mpekansambo</span>
      </Link>
      <nav className="nav-cluster" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            aria-current={location === item.href ? 'page' : undefined}
            data-testid={`link-nav-${item.label.toLowerCase()}`}
          >
            {item.label}
          </Link>
        ))}
        <button
          className="theme-button"
          type="button"
          aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
          title={`Switch to ${dark ? 'light' : 'dark'} theme`}
          onClick={onToggle}
          data-testid="button-toggle-theme"
        >
          {dark ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-note"><Leaf size={14} strokeWidth={1.6} /> Rooted in Zambia, growing everywhere.</span>
      <span>© {new Date().getFullYear()} Mwengwe Mpekansambo</span>
    </footer>
  );
}

function LeafIllustration({ className }: { className: string }) {
  return (
    <svg className={`art-leaf ${className}`} viewBox="0 0 120 150" fill="none" aria-hidden="true">
      <path d="M59 141C58 98 62 59 80 17" stroke="currentColor" strokeWidth="1.5" />
      <path d="M62 105C29 103 13 82 14 54C41 55 62 70 62 105Z" fill="#78906E" stroke="#526B50" strokeWidth="1.2" />
      <path d="M62 105L20 61M66 81C92 77 105 57 104 33C81 35 66 53 66 81Z" fill="#96A77A" stroke="#526B50" strokeWidth="1.2" />
      <path d="M66 81L99 40M59 126C36 127 23 117 18 99C39 95 55 106 59 126Z" fill="#6F8969" stroke="#526B50" strokeWidth="1.2" />
    </svg>
  );
}

function HomePage() {
  return (
    <>
      <PageMeta route="/" />
      <main className="page-content" id="page-content">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="reveal">
            <div className="eyebrow">A little about what moves me</div>
            <h1 className="hero-title" id="home-title">Finance, stories<br />&amp; <em>possibility.</em></h1>
            <p className="hero-copy">
              I’m Mwengwe Mpekansambo: a Stanford-trained economist, former TMT investment banker, and MBA candidate at Berkeley Haas. I’m drawn to the places where capital, creativity, and people’s everyday lives meet.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="button-primary" data-testid="link-hero-about">A bit about me <ArrowRight size={16} /></Link>
              <Link href="/experience" className="text-link" data-testid="link-hero-experience">See my experience</Link>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay" aria-hidden="true">
            <LeafIllustration className="left" />
            <LeafIllustration className="right" />
            <div className="portrait-paper">
              <div className="portrait-scene">
                <div className="sun-disc" />
              </div>
            </div>
            <div className="paper-caption">curiosity, always <ArrowDownRight size={13} /></div>
          </div>
        </section>

        <section className="home-note" aria-labelledby="home-note-title">
          <div>
            <div className="section-label">The through line</div>
            <h2 id="home-note-title">Good questions<br />make room.</h2>
          </div>
          <p>
            My work has taken me from financial advisory and capital-raising across Technology, Media and Telecom to questions of growth, technology, and partnership. Away from the deal room, I keep returning to stories, agriculture, and the possibility of making finance more accessible—especially for women in Zambia.
          </p>
        </section>

        <section className="quick-facts" aria-labelledby="quick-facts-title">
          <div className="quick-facts-top">
            <div>
              <div className="section-label">A few chapters</div>
              <h2 id="quick-facts-title" className="content-heading">Where I’m coming from</h2>
            </div>
            <p>Economics to finance to the next question.</p>
          </div>
          <div className="fact-strip">
            <article className="fact-card">
              <div className="fact-kicker">Now · Berkeley</div>
              <h3>Learning to lead</h3>
              <p>MBA candidate at UC Berkeley Haas, expected May 2027.</p>
            </article>
            <article className="fact-card">
              <div className="fact-kicker">Before · Stanford</div>
              <h3>Numbers &amp; narrative</h3>
              <p>BA in Economics with a minor in Creative Writing, June 2022.</p>
            </article>
            <article className="fact-card">
              <div className="fact-kicker">Always · Zambia</div>
              <h3>Grounded in place</h3>
              <p>Co-founded an agriculture company focused on local sourcing and ethical management.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

function AboutPage() {
  const interests = [
    'Women’s financial education', 'Women in STEM', 'Agriculture', 'Literature',
    'African politics', 'Reading', 'Writing & editing stories', 'Photography',
    'Plants', 'Sewing', 'Crochet',
  ];
  return (
    <>
      <PageMeta route="/about" />
      <main className="page-content" id="page-content">
        <section className="page-intro">
          <div className="eyebrow">A life in more than one register</div>
          <h1 className="content-heading">About me</h1>
          <p>I’m interested in how people build a life, a livelihood, and a future—and in the ideas and institutions that can help them do it.</p>
        </section>
        <div className="two-column">
          <section className="content-section">
            <div className="section-label">A little context</div>
            <h2>Markets, meaning, and making things.</h2>
            <p className="body-copy">
              I studied Economics at Stanford, alongside a minor in Creative Writing. That combination still feels like a good description of how I think: I like understanding how systems work, and I care about how we tell the stories inside them.
            </p>
            <p className="body-copy">
              After Stanford, I worked in TMT investment banking at Jefferies, advising on financial transactions and capital-raising. I’m now an MBA candidate at UC Berkeley Haas. My interests also reach beyond finance: I’m passionate about women’s financial education, particularly in Zambia, women’s participation in STEM, and ethical agriculture.
            </p>
          </section>
          <section className="content-section">
            <div className="section-label">Learning, ongoing</div>
            <h2>Education</h2>
            <div className="education-list">
              <article className="education-item">
                <div><h3>UC Berkeley Haas</h3><p>MBA candidate</p></div>
                <div className="education-date">Expected<br />May 2027</div>
              </article>
              <article className="education-item">
                <div><h3>Stanford University</h3><p>BA Economics · Minor in Creative Writing</p></div>
                <div className="education-date">June<br />2022</div>
              </article>
            </div>
          </section>
        </div>
        <section className="content-section" aria-labelledby="interests-heading">
          <div className="section-label">Outside the spreadsheet</div>
          <h2 id="interests-heading">Things I make time for</h2>
          <p className="body-copy">Some are causes, some are crafts, and some are simply ways of paying attention.</p>
          <div className="interest-list">
            {interests.map((interest) => <span className="interest-chip" key={interest} data-testid={`interest-${interest.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>{interest}</span>)}
          </div>
        </section>
      </main>
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <PageMeta route="/experience" />
      <main className="page-content" id="page-content">
        <section className="page-intro">
          <div className="eyebrow">Work, in chapters</div>
          <h1 className="content-heading">Experience</h1>
          <p>A path through investing, advisory, and company building—grounded in a long-running curiosity about how organizations grow.</p>
        </section>
        <section className="experience-list" aria-label="Professional experience">
          <article className="experience-entry">
            <div className="experience-date">June – August 2026</div>
            <div>
              <h2>Gen Digital</h2>
              <div className="experience-role">Associate Intern · Corporate Development &amp; Strategic Partnerships</div>
              <p>Worked on fintech target merger analysis and a capstone exploring Agentic AI chat aggregation.</p>
            </div>
          </article>
          <article className="experience-entry">
            <div className="experience-date">July 2022 –<br />June 2025</div>
            <div>
              <h2>Jefferies LLC</h2>
              <div className="experience-role">TMT Investment Banking · Analyst, July 2022–May 2024; Associate, June 2024–June 2025</div>
              <p>Financial advisory and capital-raising work across Technology, Media and Telecom.</p>
              <ul>
                <li>Closed 10 M&amp;A, debt, and public equity transactions totaling $60B+ in deal value.</li>
                <li>Led Women in Finance lunches with 25+ women executives.</li>
              </ul>
            </div>
          </article>
          <article className="experience-entry">
            <div className="experience-date">June – August 2021</div>
            <div>
              <h2>Hotchkis &amp; Wiley</h2>
              <div className="experience-role">Asset Management Intern</div>
            </div>
          </article>
          <article className="experience-entry">
            <div className="experience-date">Company building</div>
            <div>
              <h2>Mwedi Innovations Limited</h2>
              <div className="experience-role">Director and co-founder</div>
              <p>An agriculture company in Zambia focused on local sourcing and ethical management of plant and animal produce.</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageMeta route="/contact" />
      <main className="page-content" id="page-content">
        <section className="page-intro">
          <div className="eyebrow">A note is always welcome</div>
          <h1 className="content-heading">Let’s talk.</h1>
          <p>For thoughtful conversations about finance, technology, women’s opportunity, agriculture, or a particularly good book.</p>
        </section>
        <section className="contact-panel" aria-labelledby="contact-heading">
          <div className="section-label">Write to me</div>
          <h2 id="contact-heading">The best conversations start somewhere.</h2>
          <p>You can reach me at my public Stanford alumni address.</p>
          <p>This address is public. Selecting the link opens your email app to start a message.</p>
          <a className="email-link" href="mailto:mmpekansambo@alumni.stanford.edu" data-testid="link-public-email">
            <Mail size={17} /> mmpekansambo@alumni.stanford.edu <ArrowRight size={16} />
          </a>
          <p className="contact-social"><a href="https://www.linkedin.com/in/mmpekansambo" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowRight size={14} /></a></p>
        </section>
      </main>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageMeta route="404" />
      <main className="page-content not-found" id="page-content">
        <div>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>A small wrong turn</div>
          <h1>Not this page.</h1>
          <p>The page you’re looking for isn’t here.</p>
          <Link href="/" className="button-primary" data-testid="link-not-found-home">Back to the beginning <ArrowRight size={16} /></Link>
        </div>
      </main>
    </>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#page-content">Skip to main content</a>
      <Header dark={dark} onToggle={onToggle} />
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </RoutedErrorBoundary>
      <Footer />
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('mwen-theme') === 'dark'; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('mwen-theme', dark ? 'dark' : 'light'); } catch { /* Storage can be unavailable in private contexts. */ }
  }, [dark]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router dark={dark} onToggle={() => setDark((current) => !current)} />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
