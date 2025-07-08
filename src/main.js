// Main application entry point
console.log('Bones on Ice - Application starting...');

// Basic application initialization
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = '<h1>Bones on Ice</h1><p>Game loading...</p>';
  }
});