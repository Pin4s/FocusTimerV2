let darkMode = true


const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    const mode = darkMode ? 'light' : 'dark'
    

    darkMode = !darkMode
})


// mas n ta funcionando pq a pagina n ta exportada mas n sei q porra é essa
//dps eu falo