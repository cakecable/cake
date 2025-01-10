function toggleProjects() {
  const mainContent = document.querySelector('.main-content');
  const projectsContent = document.querySelector('.projects-content');
            
  mainContent.classList.toggle('hidden');
  projectsContent.classList.toggle('active');
}
