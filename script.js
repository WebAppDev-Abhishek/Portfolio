// Example projects data
const projects = [
  {
    title: 'RESTful API Server',
    desc: 'A scalable REST API built with Node.js and Express, supporting CRUD operations and JWT authentication.',
    link: '#'
  },
  {
    title: 'Real-Time Chat Backend',
    desc: 'A WebSocket-powered backend for real-time messaging, built with Node.js and Socket.io.',
    link: '#'
  },
  {
    title: 'E-commerce Backend',
    desc: 'A robust backend for an e-commerce platform, featuring product management, user authentication, and payment integration.',
    link: '#'
  },
  {
    title: 'Blog API',
    desc: 'A RESTful API for a blogging platform, supporting user roles, comments, and markdown content.',
    link: '#'
  },
  {
    title: 'Authentication Microservice',
    desc: 'A microservice for user authentication and authorization, using JWT and OAuth2 standards.',
    link: '#'
  },
  {
    title: 'Data Analytics Pipeline',
    desc: 'A backend pipeline for processing and analyzing large datasets, built with Python and PostgreSQL.',
    link: '#'
  }
];

const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      <a class="project-link" href="${project.link}" target="_blank">View Project</a>
    `;
    projectsGrid.appendChild(card);
  });
}

// Contact form handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
} 
