function switcher() {

    // switcher 
    const switcher = document.querySelector('.theme');

    // checking 
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }

    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark');


        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark'); // add theme in localStorage
        } else {
            localStorage.removeItem('theme');
        }
    });
}

export default switcher; 