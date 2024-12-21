// Function to disable right-click
const disableRightClick = () => {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
};

// Function to disable text copying
const disableCopy = () => {
  document.addEventListener('copy', (event) => {
    event.preventDefault();
  });
};

// Call the functions to disable right-click and text copying
disableRightClick();
disableCopy();
