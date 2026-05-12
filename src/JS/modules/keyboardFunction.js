function keyboardFunction() {

// add buttons from the keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === '=') {
    document.getElementById('result').click();
  }
  else if (e.key === 'Escape') {
    document.getElementById('AC').click();
  }
});
}

export default keyboardFunction;