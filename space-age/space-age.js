const planets = {
    earth: 1,
    mercury: .2408467,
    venus: .61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}
const year = 31557600

export function age(planet, sec) {
    let myAge;
    const planetYear = year * planets[planet];

    myAge = +(sec / planetYear).toFixed(2);

    return myAge
}