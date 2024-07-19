// Including a moons array in our Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + (this.moons.length > 0 ? this.moons.join(', ') : "None") + ".");
    };

    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        if (this.moons.length > 0) {
            return this.moons.pop();
        } else {
            console.log("No moons to remove.");
            return null;
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet(); // Output: Jupiter: planet 5 - Gas Giant
                      // Moons: Io, Europa.

// Further Adventures

// 1) Create a second planet. Make one up if you like.
var planet2 = new Planet("Neptune", 8, "Ice Giant");

// 2) Add three moons to the second planet.
planet2.addMoon("Triton");
planet2.addMoon("Proteus");
planet2.addMoon("Nereid");

// 3) Call the showPlanet method on the second planet.
planet2.showPlanet(); // Output: Neptune: planet 8 - Ice Giant
                      // Moons: Triton, Proteus, Nereid.

// 4) Add a removeMoon method that removes the last moon from the moons array.
// This was already included in the Planet constructor.

planet2.removeMoon(); // Removes "Nereid"
planet2.showPlanet(); // Output: Neptune: planet 8 - Ice Giant
                      // Moons: Triton, Proteus.

planet2.removeMoon(); // Removes "Proteus"
planet2.showPlanet(); // Output: Neptune: planet 8 - Ice Giant
                      // Moons: Triton.

planet2.removeMoon(); // Removes "Triton"
planet2.showPlanet(); // Output: Neptune: planet 8 - Ice Giant
                      // Moons: None.

planet2.removeMoon(); // No moons to remove.
