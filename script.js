//your JS code here. If required.
window.onload = function () {
  const button = document.querySelector('input[type="button"]');
  const select = document.getElementById('colorSelect');

  button.addEventListener('click', function () {
    // Get selected index
    const selectedIndex = select.selectedIndex;

    // If a valid option is selected, remove it
    if (selectedIndex !== -1) {
      select.remove(selectedIndex);
    }
  });
};
