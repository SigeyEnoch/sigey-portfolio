export default function Home() {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sigey Kunpage Enoch",
      url: "https://YOUR-DOMAIN.com",
      jobTitle: "Business Computing Student",
      affiliation: {
        "@type": "EducationalOrganization",
        name: "University for Business and Integrated Development Studies",
      },
    }),
  }}
/>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Sigey Enoch</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="profile-image">
  <img
    src="/profile.jpg"
    alt="Sigey Kunpage Enoch"
  />
</div>
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY WEBSITE</p>

          <h1>
            Hi, I'm <span>Sigey Kunpage Enoch</span>
          </h1>

          <h2>Business Computing Student & Technology Enthusiast</h2>

          <p>
            I am a Business Computing student at the University for Business
            and Integrated Development Studies (UBIDS), passionate about
            technology, data, cybersecurity and building digital solutions
            that solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>

          <h2>Who I Am</h2>

          <p>
            My name is Sigey Kunpage Enoch, and I come from Piree, a village
            in the Nadowli-Kaleo Constituency of Ghana's Upper West Region.
          </p>

          <p>
            I completed my Senior High School education at St. Ignatius of
            Loyola Senior High School in the Wa West District. I am currently
            pursuing a Bachelor of Science in Business Computing at the
            University for Business and Integrated Development Studies
            (UBIDS) in Wa.
          </p>

          <p>
            I have earned certificates from IBM in areas including Data
            Analysis and Cybersecurity Fundamentals. I am continuously
            developing my technical and professional skills through academic
            work and personal projects.
          </p>

          <p>
            I am currently working on several technology projects, including
            an application designed to make it easier for people to find
            houses for rent.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <p className="section-label">MY SKILLS</p>

          <h2>What I Work With</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Web Development</h3>
              <p>HTML, CSS and JavaScript</p>
            </div>

            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>React and Next.js</p>
            </div>

            <div className="skill-card">
              <h3>Database Management</h3>
              <p>SQL and Supabase</p>
            </div>

            <div className="skill-card">
              <h3>Python Programming</h3>
              <p>Programming and problem solving</p>
            </div>

            <div className="skill-card">
              <h3>Data Analysis</h3>
              <p>Data analysis and visualization</p>
            </div>

            <div className="skill-card">
              <h3>Cybersecurity</h3>
              <p>Cybersecurity fundamentals</p>
            </div>

            <div className="skill-card">
              <h3>Business Information Systems</h3>
              <p>Technology and business processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
  <div className="container">
    <p className="section-label">PROJECTS</p>

    <h2>What I'm Building</h2>

    <div className="project-card">
      <div className="project-content">
        <p className="project-number">01 — CURRENT PROJECT</p>

        <h3>RentLink</h3>

        <p>
          RentLink is a digital house-rental platform I am developing to
          make it easier for people to discover available houses for rent.
          The platform is designed to allow landlords to upload property
          information and images while helping potential tenants find
          suitable accommodation more easily.
        </p>

        <h4>Key Features</h4>

        <ul className="project-features">
          <li>Property listings with images and information</li>
          <li>Easy property discovery for potential tenants</li>
          <li>Landlord property uploads</li>
          <li>Database-backed property management</li>
        </ul>

        <div className="project-tags">
          <span>Next.js</span>
          <span>React</span>
          <span>Supabase</span>
          <span>Database</span>
        </div>

        <p className="project-status">
          Currently in development
        </p>
      </div>
    </div>

    <p className="coming-soon">
      More projects will be added as they are completed.
    </p>
  </div>
</section>

      {/* Education */}
      <section id="education" className="section education-section">
        <div className="container">
          <p className="section-label">EDUCATION</p>

          <h2>My Education</h2>

          <div className="education-card">
            <p className="education-year">CURRENT</p>

            <h3>BSc Business Computing</h3>

            <p>
              University for Business and Integrated Development Studies
              (UBIDS)
            </p>

            <p>Wa, Ghana</p>
          </div>

          <div className="education-card">
            <p className="education-year">SENIOR HIGH SCHOOL</p>

            <h3>St. Ignatius of Loyola Senior High School</h3>

            <p>Wa West District, Ghana</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section certifications-section">
  <div className="container">
    <p className="section-label">CERTIFICATIONS</p>

    <h2>Professional Development</h2>

    <div className="certifications-grid">
      <div className="certification-card">
        <p className="certification-provider">IBM</p>
        <h3>Data Analysis</h3>
        <p>
          Certificate demonstrating training and knowledge in data analysis
          concepts and techniques.
        </p>
      </div>

      <div className="certification-card">
        <p className="certification-provider">IBM</p>
        <h3>Cybersecurity Fundamentals</h3>
        <p>
          Certificate demonstrating foundational knowledge of cybersecurity
          concepts, practices and security awareness.
        </p>
      </div>
    </div>
  </div>
      </section>
<section className="section">
  <div className="container">
    <p className="section-label">INTERESTS</p>

    <h2>Areas I'm Exploring</h2>

    <div className="skills-grid">
      <div className="skill-card">
        <h3>Technology & Business</h3>
        <p>
          Exploring how technology can improve business processes and
          decision-making.
        </p>
      </div>

      <div className="skill-card">
        <h3>Data & Analytics</h3>
        <p>
          Developing skills in data analysis and using information to
          understand real-world problems.
        </p>
      </div>

      <div className="skill-card">
        <h3>Cybersecurity</h3>
        <p>
          Building foundational knowledge of cybersecurity and responsible
          digital security practices.
        </p>
      </div>

      <div className="skill-card">
        <h3>Digital Solutions</h3>
        <p>
          Developing practical applications that address everyday problems
          and improve access to useful services.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Contact */}
      <section id="contact" className="section contact-section">
  <div className="container">
    <p className="section-label">CONTACT</p>

    <h2>Let's Connect</h2>

    <p>
      I'm always interested in learning, building new projects and
      connecting with people interested in technology and innovation.
    </p>

    <p className="email-address">
      sigeyenoch05@gmail.com
    </p>

    <a
      href="mailto:sigeyenoch05@gmail.com"
      className="primary-button"
    >
      Send Me an Email
    </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Sigey Kunpage Enoch. All rights reserved.</p>
      </footer>
    </main>
  );
}