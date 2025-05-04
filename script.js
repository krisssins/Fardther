
// Common functions for both pages
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to all columns
  const columns = document.querySelectorAll('.column');
  columns.forEach(column => {
    column.addEventListener('mouseenter', () => {
      column.style.transform = 'scale(1.05)';
      column.style.transition = 'all 0.3s ease';
    });
    column.addEventListener('mouseleave', () => {
      column.style.transform = 'scale(1)';
    });
  });

  // Add fade-in effect for content
  const content = document.querySelector('.container');
  if (content) {
    content.style.opacity = '0';
    content.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      content.style.opacity = '1';
    }, 100);
  }

  // Smooth scroll for all links
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Gallery page specific enhancements
  const imageSpaces = document.querySelectorAll('.image-space');
  if (imageSpaces.length > 0) {
    imageSpaces.forEach((space, index) => {
      space.style.transition = 'all 0.3s ease';
      space.addEventListener('mouseenter', () => {
        space.style.backgroundColor = '#e0e0e0';
        space.style.transform = 'translateY(-5px)';
      });
      space.addEventListener('mouseleave', () => {
        space.style.backgroundColor = '#f0f0f0';
        space.style.transform = 'translateY(0)';
      });
    });
  }

  // Add animation to the login button
  const loginBtn = document.querySelector('.slegt');
  if (loginBtn) {
    loginBtn.addEventListener('mouseenter', () => {
      loginBtn.style.transform = 'translateY(-3px)';
      loginBtn.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      loginBtn.style.transition = 'all 0.3s ease';
    });
    loginBtn.addEventListener('mouseleave', () => {
      loginBtn.style.transform = 'translateY(0)';
      loginBtn.style.boxShadow = 'none';
    });
  }

  // Add smooth transition for news items
  const newsItems = document.querySelectorAll('h3');
  newsItems.forEach(item => {
    item.style.transition = 'color 0.3s ease';
    item.addEventListener('mouseenter', () => {
      item.style.color = '#ff00ff';
    });
    item.addEventListener('mouseleave', () => {
      item.style.color = '#333';
    });
  });
});
