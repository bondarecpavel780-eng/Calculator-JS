function exit () {
  // button exit
  const end = document.querySelector('.exit');
  const display = document.querySelector('.text');
  
  end.addEventListener('click', () => {
    display.value = "Bye!";
    setTimeout(() => {
      display.value = "";
      close();
    }, 2000);
  });
}

export default exit;