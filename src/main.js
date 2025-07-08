// Main application entry point
console.log('Bones on Ice - Application starting...');

// Function to initialize the application
function initializeApp() {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1>Bones on Ice</h1><p>Game loaded successfully!</p>';
    console.log('Application initialized successfully');
  } else {
    console.error('App element not found');
  }
}

// Check if DOM is already loaded
if (document.readyState === 'loading') {
  // DOM is still loading, wait for it
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already loaded, initialize immediately
  initializeApp();
}