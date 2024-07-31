// login.js

// Get the form and button elements
const form = document.querySelector('form');
const continueButton = document.querySelector('button[type="submit"]');

// Add an event listener to the continue button
continueButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password input values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#Password').value;

  // Validate the input values (you can add more validation logic here)
  if (username === '' || password === '') {
    alert('Please enter both username and password');
    return;
  }

  // Simulate a successful login (you can replace this with your actual login logic)
  setTimeout(() => {
    // Slide to the next page (you can customize the animation and page transition here)
    document.body.style.transition = 'all 0.5s ease-in-out';
    document.body.style.transform = 'translateX(100%)';

    // After the animation is complete, redirect to the next page
    setTimeout(() => {
      window.location.href = 'next-page.html';
    }, 500);
  }, 1000);
});