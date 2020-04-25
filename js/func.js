alert('Wilkommen');

const example = () => {
    const fromInput = document.getElementById('example').value;
    document.getElementById('text').innerText = `Wpisany tekst to: ${fromInput}`;
    document.getElementById('text').classList.remove('text-placeholder')
    }
    document.getElementById('action').addEventListener('click', example)

const clear = () => {
    document.getElementById('text').innerText = 'tu pojawi się tekst';
    document.getElementById('text').classList.add('text-placeholder')
    }
    document.getElementById('clear').addEventListener('click', clear)