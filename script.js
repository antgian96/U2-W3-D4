const API_KEY = "XEfrxzxljDAqFwzQfl6vjylOg2J01m5tQXm4PIQSau6ywA5K0pzNvGlt";
const API_URL_NATURE = "https://api.pexels.com/v1/search?query=nature";
const API_URL_PEOPLE = "https://api.pexels.com/v1/search?query=people"
const loadButton = document.getElementById("Loadbutton");
const secondaryButton = document.getElementById("Secondarybutton");
const imageContainer = document.getElementById("imageContainer");

loadButton.addEventListener("click", loadImages);

async function loadImages() {
  try {
    const response = await fetch(API_URL_NATURE, {
      headers: { Authorization: API_KEY }
    });
    const data = await response.json();
    renderImages(data.photos);
  } catch (error) {
    console.error("Errore nel recupero delle foto:", error);
    imageContainer.innerHTML = '<p>Si è verificato un errore durante il caricamento delle immagini.</p>';
  }
}

function renderImages(photos) {
  imageContainer.innerHTML = ''; 
  photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src.medium; 
    img.alt = photo.alt || 'Pexels Image';
    img.classList.add('img-thumbnail');
    imageContainer.appendChild(img);
  });
}


secondaryButton.addEventListener("click", secondaryImages);
async function secondaryImages () {
    try {
        const response = await fetch(API_URL_PEOPLE, {
            headers: {Authorization: API_KEY}
        });
        const data = await response.json();
        renderImages(data.photos);
    }catch (error){
        console.error("Errore nel recupero delle foto:", error);
        imageContainer.innerHTML = '<p>Si è verificato un errore durante il caricamento delle immagini</p>';
    }
}

function renderImage(photos){
    imageContainer.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src.medium
        img.classList.add('img-thumbnail');
        imageContainer.appendChild(img);
    });
}
