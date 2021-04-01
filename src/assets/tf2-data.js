var classes = {
    0 : "Scout",
    1 : "Soldier",
    2 : "Pyro",
    3 : "Demoman",
    4 : "Heavy",
    5 : "Engineer",
    6 : "Medic",
    7 : "Sniper",
    8 : "Spy"
  };

var firstWeapon = {
    0 : [
        "Scattergun",
        "Force-A-Nature",
        "Shortstop",
        "Soda Popper",
        "Baby Face's Blaster",
        "Back Scatter"
    ],
    1 : [
        "Rocket Launcher / Original",
        "Direct Hit",
        "Black Box",
        "Rocket Jumper",
        "Liberty Launcher",
        "Cow Mangler 5000",
        "Beggar's Bazooka",
        "Air Strike"
    ],
    2 : [
        "Flame Thrower / Rainblower / Nostromo Napalmer",
        "Backburner",
        "Degreaser",
        "Phlogistinator",
        "Dragon's Fury"
    ],
    3 : [
        "Grenade Launcher",
        "Loch-n-Load",
        "Ali Baba's Wee Booties",
        "Bootlegger",
        "Loose Cannon",
        "B.A.S.E. Jumper",
        "Iron Bomber"
    ],
    4 : [
        "Minigun / Iron Curtain",
        "Natascha",
        "Brass Beast",
        "Tomislav",
        "Huo-Long Heater"
    ],
    5 : [
        "Shotgun",
        "Frontier Justice",
        "Widowmaker",
        "Pomson 6000",
        "Rescue Ranger",
        "Panic Attack"
    ],
    6 : [
        "Syringe Gun",
        "Blutsauger",
        "Crusader's Crossbow",
        "Overdose"
    ],
    7 : [
        "Sniper Rifle / AWPer Hand",
        "Huntsman / Fortified Compound",
        "Sydney Sleeper",
        "Bazaar Bargain",
        "Machina / Shooting Star",
        "Hitman's Heatmaker",
        "Classic"
    ],
    8 : [
        "Revolver / Big Kill",
        "Ambassador",
        "L'Etranger",
        "Enforcer",
        "Diamondback"
    ]
}

var secondWeapon = {
    0 : [
        "Pistol / Lugermorph / C.A.P.P.E.R",
        "Winger",
        "Pretty Boy's Pocket Pistol",
        "Flying Guillotine",
        "Bonk! Atomic Punch",
        "Crit-a-Cola",
        "Mad Milk / Mutated Milk"
    ],
    1 : [
        "Shotgun",
        "Reserve Shooter",
        "Buff Banner",
        "Gunboats",
        "Battalion's Backup",
        "Concheror",
        "Mantreads",
        "Righteous Bison",
        "B.A.S.E. Jumper",
        "Panic Attack"
    ],
    2 : [
        "Shotgun",
        "Reserve Shooter",
        "Flare Gun",
        "Detonator",
        "Manmelter",
        "Scorch Shot",
        "Panic Attack",
        "Thermal Thruster",
        "Gas Passer"
    ],
    3 : [
        "Demoman Stickybomb Launcher",
        "Scottish Resistance",
        "Chargin' Targe",
        "Sticky Jumper",
        "Splendid Screen",
        "Tide Turner",
        "Quickiebomb Launcher"
    ],
    4 : [
        "Shotgun",
        "Family Business",
        "Sandvich / Second Banana",
        "Dalokohs Bar / Fishcake",
        "Buffalo Steak Sandvich",
        "Panic Attack"
    ],
    5 : [
        "Pistol / Lugermorph / C.A.P.P.E.R",
        "Wrangler / Giger Counter",
        "Short Circuit"
    ],
    6 : [
        "Medi Gun",
        "Kritzkrieg",
        "Quick-Fix",
        "Vaccinator"
    ],
    7 : [
        "Submachine Gun",
        "Cleaner's Carbine",
        "Jarate / Self-Aware Beauty Mark",
        "Razorback",
        "Darwin's Danger Shield",
        "Cozy Camper"
    ],
    8 : [
        "Knife / Sharp Dresser / Black Rose",
        "Your Eternal Reward / Wanga Prick",
        "Conniver's Kunai",
        "Big Earner",
        "Spy-cicle"
    ]
}

var thirdWeapon = {
    0 : [
        "Bat / Holy Mackerel / Unarmed Combat / Batsaber",
        "Sandman",
        "Candy Cane",
        "Boston Basher / Three-Rune Blade",
        "Sun-on-a-Stick",
        "Fan O'War",
        "Atomizer",
        "Wrap Assassin"
    ],
    1 : [
        "Shovel",
        "Equalizer",
        "Pain Train",
        "Half-Zatoichi",
        "Disciplinary Action",
        "Market Gardener",
        "Escape Plan"
    ],
    2 : [
        "Fire Axe / Lollichop",
        "Axtinguisher / Postal Pummeler",
        "Homewrecker / Maul",
        "Powerjack",
        "Back Scratcher",
        "Sharpened Volcano Fragment",
        "Third Degree",
        "Neon Annihilator",
        "Hot Hand"
    ],
    3 : [
        "Bottle / Scottish Handshake",
        "Eyelander / Horseless Headless Horsemann's Headtaker / Nessie's Nine Iron",
        "Scotsman's Skullcutter",
        "Pain Train",
        "Ullapool Caber",
        "Claidheamh MÚr",
        "Half-Zatoichi",
        "Persian Persuader"
    ],
    4 : [
        "Fists / Apoco-Fists",
        "Killing Gloves of Boxing",
        "Gloves of Running Urgently / Bread Bite",
        "Warrior's Spirit",
        "Fists of Steel",
        "Eviction Notice",
        "Holiday Punch"
    ],
    5 : [
        "Wrench",
        "Gunslinger",
        "Southern Hospitality",
        "Jag",
        "Eureka Effect"
    ],
    6 : [
        "Bonesaw",
        "Ubersaw",
        "Vita-Saw",
        "Amputator",
        "Solemn Vow",
    ],
    7 : [
        "Kukri",
        "Tribalman's Shiv",
        "Bushwacka",
        "Shahanshah",
    ],
    8 : [
        "Invis Watch / Enthusiast's Timepiece / Quäckenbirdt",
        "Cloak and Dagger",
        "Dead Ringer"
    ]
}

var forthWeapon = {
    8 : [
        "Sapper / Ap-Sap / Snack Attack",
        "Red-Tape Recorder"
    ]
}

  export { classes, firstWeapon, secondWeapon, thirdWeapon, forthWeapon };