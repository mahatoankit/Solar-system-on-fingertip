const planet_image = document.querySelector(".info-container .leftBox img")
const description = document.querySelector(".info-container .rightBox p")
const textTitle = document.querySelector(".planet-title")
const body = document.querySelector("body")
const distance = document.querySelector(".stats-container .leftBox .text")
const travel = document.querySelector(".stats-container .rightBox .text")
const titleDistance = document.querySelector(".stats-container .leftBox .title")
const infoContainer = document.querySelector(".info-container")
const tableContainer = document.querySelector("#gasInfo");

const mercury = document.querySelector(".ball-btn-mercury")
const venus = document.querySelector(".ball-btn-venus")
const earth = document.querySelector(".ball-btn-earth")
const mars = document.querySelector(".ball-btn-mars")
const jupiter = document.querySelector(".ball-btn-jupiter")
const saturn = document.querySelector(".ball-btn-saturn")
const uranus = document.querySelector(".ball-btn-uranus")
const neptune = document.querySelector(".ball-btn-neptune")

function planetMercury() {
    const newImageUrl = "planet/me.png"
    resetAnimation()
    textTitle.textContent = "Mercury"
    textTitle.textContent = "Planetary Atmosphere"

    //   description.textContent =
    //     "Mercury is the first planet from the Sun and the smallest planet in the Solar System. It is a terrestrial planet with a heavily cratered surface due to the planet having no geological activity and an extremely tenuous atmosphere."
    //   titleDistance.textContent = "Distance from earth"
    //   distance.textContent = "77 million kilometers"
    //   travel.textContent = "40 days"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
}
mercury.addEventListener("click", planetMercury)

function planetVenus() {
    console.log("planet venus clicked.")
    const newImageUrl = "planet/ve.png"
    resetAnimation()
    textTitle.textContent = "Venus"
    // description.textContent =
        // "Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth."
        // titlegas.textContent = "Carbon Dioxide Nitrogen"
    // distance.textContent = "61 million kilometers"s
    // travel.textContent = "32 days"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Carbon Dioxide</th>
    <th>Nitrogen</th>
    </tr>
    <tr>
        <td>96%</td>
        <td>4%</td>
        
    </tr>`
}
venus.addEventListener("click", planetVenus)

function planetEarth() {
    const newImageUrl = "planet/ea.png"
    resetAnimation()
    textTitle.textContent = "Earth"
    // description.textContent =
    //     "Earth is the third planet from the Sun and the only astronomical object known where life developed and found habitability. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water."
    // titleDistance.textContent = "Distance from earth to moon"
    // distance.textContent = "77 million kilometers"
    // travel.textContent = "10 hours"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Nitrogen</th>
    <th>Oxygen</th>
    <th>Argon</th>
    <th>Other</th>
    </tr>
    <tr>
        <td>78%</td>
        <td>21%</td>
        <td>1%</td>
        <td><1%</td>
        
    </tr>`
}
earth.addEventListener("click", planetEarth)

function planetMars() {
    const newImageUrl = "planet/ma.png"
    resetAnimation()
    textTitle.textContent = "Mars"
    // description.textContent =
    //     'Mars is the fourth planet and the furthest terrestrial planet from the Sun. The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil, giving it the nickname "the Red Planet".'
    // titleDistance.textContent = "Distance from earth"
    // distance.textContent = "55 758 006 kilometers"
    // travel.textContent = "9 months"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Carbon Dioxide</th>
    <th>Nitrogen</th>
    <th>Argon</th>
    <th>Other</th>
    </tr>
    <tr>
        <td>95%</td>
        <td>2.7%</td>
        <td>1.6%</td>
        <td>0.7%</td>
        
    </tr>`
}
mars.addEventListener("click", planetMars)

function planetJupiter() {
    const newImageUrl = "planet/sa.png"
    resetAnimation()
    textTitle.textContent = "Jupiter"
    // description.textContent =
    //     "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter is the third brightest natural object in the Earth night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion."
    // titleDistance.textContent = "Distance from earth"
    // distance.textContent = "590.6 million kilometers"
    // travel.textContent = "306 days"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Hydrogen</th>
    <th>Hekium</th>
    
    </tr>
    <tr>
        <td>89.8%</td>
        <td>10.2%</td>
        
        
    </tr>`
}
jupiter.addEventListener("click", planetJupiter)

function planetSaturn() {
    const newImageUrl = "planet/ju.png"
    resetAnimation()
    textTitle.textContent = "Saturn"
    // description.textContent =
    //     "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth, but is over 95 times more massive."
    // titleDistance.textContent = "Distance from earth"
    // distance.textContent = "1.2 billion kilometers"
    // travel.textContent = "622 days"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Hydrogen</th>
    <th>Helium</th>
    <th>Other</th>
    </tr>
    <tr>
        <td>96.3%</td>
        <td>3.2%</td>
        <td>0.5%</td>
        
    </tr>`
}
saturn.addEventListener("click", planetSaturn)

function planetUranus() {
    const newImageUrl = "planet/ur.png"
    resetAnimation()
    textTitle.textContent = "Uranus"
    // description.textContent =
    //     'Uranus is the seventh planet from the Sun and is a gaseous cyan ice giant. Most of the planet is made out of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called "ice" or volatiles. The planet atmosphere has a complex layered cloud structure and has the lowest minimum temperature of 49 K (−224 °C; −371 °F) out of all Solar Systems planets.'
    // titleDistance.textContent = "Distance from earth"
    // distance.textContent = "2.7 billion kilometers"
    // travel.textContent = "1416 days"
    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Methane</th>
    <th>Hydrogen</th>
    <th>Helium</th>
    </tr>
    <tr>
        <td>2.3%</td>
        <td>82.5%</td>
        <td>15.2%</td>
        
        
    </tr>`
}
uranus.addEventListener("click", planetUranus)

function planetNeptune() {
    const newImageUrl = "planet/ne.png"
    resetAnimation()
    textTitle.textContent = "Neptune"
    // description.textContent =
    //     "Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. Being composed primarily of gases and liquids, it has no well-defined solid surface."
    // titleDistance.textContent = "Distance from earth"
    // distance.textContent = "4 billion kilometers"
    // travel.textContent = "2250 days"

    planet_image.src = newImageUrl
    planet_image.style.animation = "beginAnimationImg 1s ease forwards"
    infoContainer.style.animation = "beginAnimationImg 1s ease forwards"
    tableContainer.innerHTML = `<tr >
    <th>Methane</th>
    <th>Hydrogen</th>
    <th>Helium</th>
    </tr>
    <tr>
        <td>1.0%</td>
        <td>80%</td>
        <td>19%</td>
        
    </tr>`
}
neptune.addEventListener("click", planetNeptune)

function resetAnimation() {
    planet_image.style.animation = "none"
    void planet_image.offsetWidth
    planet_image.style.animation = null

    infoContainer.style.animation = "none"
    void infoContainer.offsetWidth
    infoContainer.style.animation = null
}