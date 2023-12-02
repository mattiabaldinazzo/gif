document.addEventListener('DOMContentLoaded', function() {
    const gifImage = document.getElementById('gifImage');
    const changeButton = document.getElementById('changeButton');

    // Function to load a random gif
    function loadRandomGif() {
        const gifDirectory = '/Users/mattia/Desktop/workspace/websites/gif/gif-directory';
        const gifList = ['giphy1.gif', 'giphy2.gif']; // Add your gif filenames here
        const randomIndex = Math.floor(Math.random() * gifList.length);
        const randomGif = gifList[randomIndex];
        const gifUrl = gifDirectory + randomGif;

        gifImage.src = gifUrl;
    }

    // Load a random gif when the page loads
    loadRandomGif();

    // Change the gif when the button is clicked
    changeButton.addEventListener('click', loadRandomGif);
});
