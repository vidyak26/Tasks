var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();
    };

    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    this.showMoons = function () {
        if (this.moons.length === 0) {
            console.log("Moons: None.");
        } else {
            console.log("Moons:");
            this.moons.forEach(function (moon, index) {
                console.log("  (" + index + ") " + moon);
            });
        }
    };

    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Invalid moon index.";
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

// Further Adventures

// 1) Add a new moon to each planet.
planet1.addMoon("Ganymede");
planet2.addMoon("Nereid");
planet3.addMoon("No moons"); // Mercury has no natural moons, adding a placeholder for demonstration

[planet1, planet2, planet3].forEach(function (planet) {
    planet.showPlanet();
});

// 4) Test the getMoon method
console.log(planet1.getMoon(1)); // Output: Europa
console.log(planet2.getMoon(0)); // Output: Nereid
console.log(planet3.getMoon(0)); // Output: No moons
console.log(planet1.getMoon(3)); // Output: Invalid moon index.
