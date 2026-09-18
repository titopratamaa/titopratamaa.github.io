import './App.css'

const navItems = [
  'Home',
  'About',
  'Experience',
  'Education',
  'Projects',
  'Skills',
  'Certifications',
  'Contact',
]

const skillGroups = [
  {
    title: 'Technical Skills',
    items: [
      'Reservoir Analysis',
      'Production Data Processing',
      'Material Balance',
      'Technical Reporting',
      'HSE',
    ],
  },
  {
    title: 'Software',
    items: ['IPM-MBAL', 'Microsoft Office'],
  },
  {
    title: 'Soft Skills',
    items: [
      'Analytical Thinking',
      'Problem Solving',
      'Teamwork',
      'Communication',
      'Adaptability',
    ],
  },
]

const projects = [
  {
    title: 'Reservoir Material Balance',
    subtitle: 'Reservoir “Tiprata” – Material Balance Analysis',
    description:
      'Project tugas akhir mengenai penentuan cadangan minyak dan mekanisme pendorong menggunakan metode Material Balance untuk mendukung perencanaan pengembangan lapangan.',
    tools: ['Material Balance', 'Reservoir Analysis', 'IPM-MBAL', 'Production Data Analysis'],
  },
  {
    title: 'Reservoir & Production Analysis',
    subtitle: 'Reservoir & Production Data Evaluation',
    description:
      'Pengolahan dan analisis data reservoir serta data produksi untuk evaluasi kinerja lapangan menggunakan IPM-MBAL.',
    tools: ['IPM-MBAL'],
  },
]

const certifications = [
  {
    name: 'Microsoft Office',
    issuer: 'Trust Training Partners',
    tag: 'Productivity',
  },
  {
    name: 'IWCF Level 1 Programme',
    issuer: 'Language: English',
    tag: 'Energy',
  },
  {
    name: 'EF SET English Certificate',
    issuer: 'English Proficiency',
    tag: 'Communication',
  },
]

const strengths = [
  'Analytical Thinking',
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Adaptability',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand" aria-label="Tito Pratama Kurnala Dewa">
          Tito <span>Pratama</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Contact Me
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Petroleum Engineering Graduate</p>
            <h1>Tito Pratama Kurnala Dewa</h1>
            <p className="lede">
              Lulusan Teknik Perminyakan dengan kemampuan analisis data produksi dan evaluasi
              reservoir menggunakan IPM-MBAL. Memiliki pemahaman dalam analisis teknis dan
              interpretasi data untuk mendukung operasional migas.
            </p>

            <div className="hero-actions">
              <a href="#experience" className="primary-btn">
                View My Experience
              </a>
              <a href="/Tito-Pratama-Kurnala-Dewa-CV.txt" className="secondary-btn" download>
                Download CV
              </a>
              <a href="mailto:pratamatito9@gmail.com" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <span>Education</span>
                <strong>S1 Teknik Perminyakan</strong>
              </div>
              <div>
                <span>Graduation</span>
                <strong>2024</strong>
              </div>
              <div>
                <span>GPA</span>
                <strong>3.05 / 4.00</strong>
              </div>
            </div>
          </div>

          <div className="hero-panel" aria-label="Professional profile overview">
            <div className="panel-badge">Available for opportunities</div>
            <h2>Energy Industry Focus</h2>
            <ul>
              <li>Field</li>
              <li>Operation</li>
              <li>Production Support</li>
              <li>Reservoir & Production</li>
            </ul>
            <div className="mini-metrics">
              <div>
                <strong>2023 – 2024</strong>
                <span>Internship</span>
              </div>
              <div>
                <strong>IPM-MBAL</strong>
                <span>Core tool</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">About</p>
            <h2>Professional profile shaped by technical analysis and field-oriented thinking.</h2>
          </div>

          <div className="about-grid">
            <div className="info-card">
              <p>
                Saya adalah lulusan Teknik Perminyakan Universitas Proklamasi 45 Yogyakarta dengan
                fokus pada analisis reservoir dan evaluasi kinerja produksi. Melalui pengalaman
                magang di IATMI, saya terlibat dalam pengolahan data produksi, evaluasi performa
                lapangan, serta estimasi cadangan dan mekanisme pendorong.
              </p>
              <div className="detail-list">
                <div>
                  <span>University</span>
                  <strong>Universitas Proklamasi 45 Yogyakarta</strong>
                </div>
                <div>
                  <span>Study</span>
                  <strong>S1 Teknik Perminyakan</strong>
                </div>
                <div>
                  <span>Career Interest</span>
                  <strong>Field, Operation, Production Support, Energy Industry</strong>
                </div>
              </div>
            </div>

            <div className="soft-card">
              <h3>Core strengths</h3>
              <div className="tag-list">
                {strengths.map((strength) => (
                  <span key={strength} className="tag-item">
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2>Hands-on internship experience in reservoir and production performance evaluation.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <p className="company">IATMI – Ikatan Ahli Teknik Perminyakan Indonesia</p>
                    <h3>Magang – Reservoir &amp; Production</h3>
                  </div>
                  <span className="date">Jan 2023 – Jul 2024</span>
                </div>

                <ul className="responsibility-list">
                  <li>
                    Menganalisis dan mengolah data reservoir serta data produksi menggunakan software
                    IPM-MBAL untuk evaluasi kinerja lapangan.
                  </li>
                  <li>
                    Menentukan mekanisme pendorong dan estimasi cadangan awal minyak (OOIP) sebagai
                    hasil inti studi kasus.
                  </li>
                  <li>
                    Menyusun laporan teknis komprehensif untuk presentasi hasil analisis.
                  </li>
                </ul>

                <div className="tool-row">
                  <span>Tools</span>
                  <div className="tool-tags">
                    <span>IPM-MBAL</span>
                    <span>Production Data</span>
                    <span>Reservoir Evaluation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Education</p>
            <h2>Academic foundation in petroleum engineering with a focus on reservoir development.</h2>
          </div>

          <div className="education-box">
            <div className="education-meta">
              <p className="school">Universitas Proklamasi 45 – Yogyakarta</p>
              <h3>Sarjana Teknik Perminyakan</h3>
              <p className="school-period">2018 – 2024</p>
              <p className="gpa">IPK: 3.05 / 4.00</p>
            </div>

            <div className="thesis-card">
              <p className="section-kicker small">Final Project</p>
              <h4>
                Penentuan Cadangan Minyak dan Mekanisme Pendorong Menggunakan Metode Material
                Balance pada Reservoir “Tiprata” untuk Perencanaan Pengembangan Lapangan “TPK”.
              </h4>
              <div className="project-actions">
                <a href="#projects" className="secondary-btn small-btn">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Selected technical work demonstrating reservoir and production analysis capability.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-index">0{projects.indexOf(project) + 1}</div>
                <p className="project-title">{project.title}</p>
                <h3>{project.subtitle}</h3>
                <p>{project.description}</p>
                <div className="tool-tags project-tags">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <a href="#contact" className="secondary-btn small-btn">
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Technical and interpersonal capabilities relevant to petroleum operations.</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <span key={item} className="skill-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Certifications</p>
            <h2>Formal training and professional certifications supporting technical communication.</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.name} className="cert-card">
                <span className="cert-tag">{cert.tag}</span>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <a href="/Tito-Pratama-Kurnala-Dewa-CV.txt" className="secondary-btn small-btn" download>
                  View Certificate
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-text">
            <p className="section-kicker">Contact</p>
            <h2>Let’s Connect</h2>
            <p>
              Interested in discussing opportunities, projects, or collaboration in the energy
              industry? Feel free to get in touch.
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-item">
              <span>Email</span>
              <a href="mailto:pratamatito9@gmail.com">pratamatito9@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>Phone</span>
              <a href="tel:+6285786586673">(+62) 857-8658-6673</a>
            </div>
            <a href="mailto:pratamatito9@gmail.com" className="primary-btn contact-btn">
              Send Email
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2024 Tito Pratama Kurnala Dewa</p>
      </footer>
    </div>
  )
}

export default App
