function locationSuccess (location) {
    console.log("Käyttäjä paikannettu.", location);
}

function locationError (error) {
    console.log("Käyttäjän paikannus epäonnistui!", error)
}

const locationOptions = {
    timeout: 1000
}
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);

console.log("moro")

// DOM-kikkailu

const section2 = document.querySelectorAll('section')[1];
const pElement = section2.querySelector('p');
pElement.textContent = 'muokattu';

const newP = document.createElement('p');
section2.append(newP);