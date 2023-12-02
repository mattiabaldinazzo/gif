document.addEventListener('DOMContentLoaded', function() {
    const gifImage = document.getElementById('gifImage');
    const changeButton = document.getElementById('changeButton');

    // Funzione per caricare una gif casuale
    function loadRandomGif() {
        const gifDirectory = 'https://github.com/mattiabaldinazzo/gif/tree/main/gif-directory/';
        const gifList = ['giphy1.gif', 'giphy2.gig']; // Aggiungi i nomi dei tuoi file gif qui
        const randomIndex = Math.floor(Math.random() * gifList.length);
        const randomGif = gifList[randomIndex];
        const gifUrl = gifDirectory + randomGif;

        // Creare un nuovo oggetto immagine e gestire l'evento di caricamento
        const newImage = new Image();
        newImage.onload = function() {
            gifImage.src = gifUrl;
        };
        newImage.src = gifUrl;
    }

    // Caricare una gif casuale quando la pagina si carica
    loadRandomGif();

    // Cambiare la gif quando il pulsante viene cliccato
    changeButton.addEventListener('click', loadRandomGif);
});
