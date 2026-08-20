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
  <a href="#photos">Photos</a>
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

    <h2>Business Computing Student & Aspiring Technology Professional</h2>

    <p>
     
  Sigey Kunpage Enoch is a Business Computing student at the University
  for Business and Integrated Development Studies (UBIDS), developing
  skills in web development, databases, data fundamentals, and
  cybersecurity. His work focuses on building digital solutions that
  address practical problems.

    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View My Projects
      </a>
<section id="photos" className="section photos-section">
  <div className="container">
    <p className="section-label">PHOTOS</p>

    <h2>A Glimpse of Sigey</h2>

    <p className="photos-intro">
      A collection of selected photos and moments from Sigey Kunpage Enoch.
    </p>

    <div className="photos-grid">
      <div className="photo-card">
        <img
          src="/images/sigey-enoch-01.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-02.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-03.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-04.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-05.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-06.jpg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-07.jpeg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-08.jpeg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-09.jpeg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>

      <div className="photo-card">
        <img
          src="/images/sigey-enoch-10.jpeg"
          alt="Sigey Kunpage Enoch"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
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
      Sigey Kunpage Enoch is a Business Computing student at the University
      for Business and Integrated Development Studies (UBIDS) in Wa, Ghana.
      He is developing skills in web development, databases, data fundamentals,
      cybersecurity, and business information systems.
    </p>

    <p>
      He is interested in using technology to solve practical problems and
      develop useful digital solutions. His current work includes RentLink,
      a digital house-rental platform designed to make it easier for
      landlords to list properties and for potential tenants to discover
      available accommodation.
    </p>

    <p>
      Sigey has earned IBM certificates in Data Fundamentals and Cybersecurity
      Fundamentals as part of his ongoing technical and professional
      development.
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
        <p>SQL, Supabase and database concepts</p>
      </div>

      <div className="skill-card">
        <h3>Python Programming</h3>
        <p>Programming and problem solving</p>
      </div>

      <div className="skill-card">
        <h3>Data Fundamentals</h3>
        <p>Foundational data concepts and practices</p>
        <p>Issued: November 21, 2025</p>

        <div className="certification-links">
          <a
            href="/certificates/data-fundamentals.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>

          <a
            href="https://www.credly.com/badges/932fcaf6-6ddb-4990-bc6f-9c7db7e19537"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify Credential
          </a>
        </div>
      </div>

      <div className="skill-card">
        <h3>Cybersecurity</h3>
        <p>Cybersecurity fundamentals and security awareness</p>
      </div>

      <div className="skill-card">
        <h3>Business Information Systems</h3>
        <p>Technology, databases and business processes</p>
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
          RentLink is a digital house-rental platform currently in development.
          The project is designed to make it easier for people to discover
          available houses for rent while providing landlords with a platform
          to list property information and images.
        </p>

        <h4>Key Features</h4>

        <ul className="project-features">
          <li>Property listings with images and information</li>
          <li>Easy property discovery for potential tenants</li>
          <li>Landlord property uploads</li>
          <li>Database-backed property management</li>
        </ul>

        <h4>Technologies</h4>

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
        University for Business and Integrated Development Studies (UBIDS)
      </p>

      <p>Wa, Ghana</p>

      <p>
        Currently pursuing my degree with a focus on computing, technology,
        databases, and business information systems.
      </p>
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
        <h3>Data Fundamentals</h3>
        <p>
          Certificate demonstrating foundational knowledge of data concepts,
          data practices, and essential data skills.
        </p>

        <a
          href="/certificates/data%20fundamentals.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-button"
        >
          View Certificate
        </a>
      </div>

      <div className="certification-card">
        <p className="certification-provider">IBM</p>
        <h3>Cybersecurity Fundamentals</h3>
        <p>
          Certificate demonstrating foundational knowledge of cybersecurity
          concepts, practices, and security awareness.
        </p>

        <a
          href="/certificates/cybersecurity%20fundamentals.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-button"
        >
          View Certificate
        </a>
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
<div className="certification-card">
  <p className="certification-provider">IBM SkillsBuild</p>
  <h3>Cybersecurity Fundamentals</h3>
  <p>
    Certificate demonstrating foundational knowledge and skills in
    cybersecurity concepts.
  </p>
  <p>Issued: April 4, 2026</p>

  <div className="certification-links">
    <a
      href="/certificates/cybersecurity-fundamentals.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Certificate
    </a>

    <a
      href="https://www.credly.com/badges/6b78be16-40bb-4960-a708-c2b085ed41cb"
      target="_blank"
      rel="noopener noreferrer"
    >
      Verify Credential
    </a>
  </div>
</div>
      {/* Contact */}
     <section id="contact" className="section contact-section">
  <div className="container">
    <p className="section-label">CONTACT</p>

    <h2>Let's Connect</h2>

    <p>
      I'm always interested in learning, developing new projects, and
      connecting with people who share an interest in technology,
      innovation, and digital solutions.
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