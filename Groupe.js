 const bands = [
    { 
        name: "Black Sabbath", 
        origin: "Birmingham, Royaume-Uni", 
        year: 1968,
        yearEnd: 2017,
        genre: "Heavy Metal",
        anecdote: "Le nom du groupe vient d'un film d'horreur italien de 1963. Ils ont inventé le heavy metal avec leur premier album.",
        membres: ["Ozzy Osbourne", "Tony Iommi", "Geezer Butler", "Bill Ward"]
    },
    { 
        name: "Metallica", 
        origin: "Los Angeles, USA", 
        year: 1981,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Le Black Album (1991) s'est vendu à plus de 30 millions d'exemplaires dans le monde.",
        membres: ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]
    },
    { 
        name: "Slipknot", 
        origin: "Des Moines, USA", 
        year: 1995,
        yearEnd: null,
        genre: "Nu Metal",
        anecdote: "Chaque membre porte un masque unique et un numéro de 0 à 8. Ils peuvent avoir jusqu'à 9 membres sur scène.",
        membres: ["Corey Taylor", "Shawn Crahan", "Mick Thomson", "Jim Root", "Craig Jones", "Sid Wilson", "Jay Weinberg", "Alessandro Venturella", "Michael Pfaff"]
    },
    { 
        name: "Iron Maiden", 
        origin: "Londres, Royaume-Uni", 
        year: 1975,
        yearEnd: null,
        genre: "Heavy Metal",
        anecdote: "Leur mascotte Eddie apparaît sur toutes leurs pochettes d'album depuis 1980. Bruce Dickinson est aussi pilote d'avion !",
        membres: ["Bruce Dickinson", "Steve Harris", "Dave Murray", "Adrian Smith", "Janick Gers", "Nicko McBrain"]
    },
    { 
        name: "Judas Priest", 
        origin: "Birmingham, Royaume-Uni", 
        year: 1969,
        yearEnd: null,
        genre: "Heavy Metal",
        anecdote: "Rob Halford a popularisé le look cuir et clous dans le metal. Ils ont influencé presque tous les groupes de metal modernes.",
        membres: ["Rob Halford", "Glenn Tipton", "Richie Faulkner", "Ian Hill", "Scott Travis"]
    },
    { 
        name: "Megadeth", 
        origin: "Los Angeles, USA", 
        year: 1983,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Formé par Dave Mustaine après son renvoi de Metallica. Rust in Peace est considéré comme un chef-d'œuvre du thrash.",
        membres: ["Dave Mustaine", "Kiko Loureiro", "James LoMenzo", "Dirk Verbeuren"]
    },
    { 
        name: "Slayer", 
        origin: "Huntington Park, USA", 
        year: 1981,
        yearEnd: 2019,
        genre: "Thrash Metal",
        anecdote: "Connus pour leur vitesse extrême et leurs thèmes controversés. Reign in Blood dure seulement 29 minutes !",
        membres: ["Tom Araya", "Kerry King", "Gary Holt", "Paul Bostaph"]
    },
    { 
        name: "Pantera", 
        origin: "Arlington, USA", 
        year: 1981,
        yearEnd: 2003,
        genre: "Groove Metal",
        anecdote: "Cowboys from Hell a défini le groove metal. Dimebag Darrell est considéré comme l'un des meilleurs guitaristes metal.",
        membres: ["Phil Anselmo", "Dimebag Darrell", "Vinnie Paul", "Rex Brown"]
    },
    { 
        name: "Opeth", 
        origin: "Stockholm, Suède", 
        year: 1990,
        yearEnd: null,
        genre: "Progressive Death Metal",
        anecdote: "Mélangent death metal et passages acoustiques progressifs. Leurs concerts alternent entre brutalité et douceur.",
        membres: ["Mikael Åkerfeldt", "Fredrik Åkesson", "Martin Mendez", "Waltteri Väyrynen", "Joey Tempesta"]
    },
    { 
        name: "Gojira", 
        origin: "Ondres, France", 
        year: 1996,
        yearEnd: null,
        genre: "Progressive Metal",
        anecdote: "Groupe français à succès international. Engagés pour l'environnement, ils ont joué aux JO de Paris 2024.",
        membres: ["Joe Duplantier", "Mario Duplantier", "Christian Andreu", "Jean-Michel Labadie"]
    },
    { 
        name: "Meshuggah", 
        origin: "Umeå, Suède", 
        year: 1987,
        yearEnd: null,
        genre: "Djent",
        anecdote: "Pionniers du djent avec leurs riffs mathématiques complexes. Ils utilisent des guitares à 8 cordes.",
        membres: ["Jens Kidman", "Fredrik Thordendal", "Mårten Hagström", "Dick Lövgren", "Tomas Haake"]
    },
    { 
        name: "Mayhem", 
        origin: "Oslo, Norvège", 
        year: 1984,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "Pionniers du black metal norvégien. Leur histoire tragique inclut meurtre et incendies d'églises.",
        membres: ["Attila Csihar", "Necrobutcher", "Hellhammer", "Teloch", "Ghul"]
    },
    { 
        name: "Burzum", 
        origin: "Bergen, Norvège", 
        year: 1991,
        yearEnd: null,
        genre: "Atmospheric Black Metal",
        anecdote: "Projet solo de Varg Vikernes. A enregistré plusieurs albums depuis sa cellule de prison.",
        membres: ["Varg Vikernes"]
    },
    { 
        name: "Emperor", 
        origin: "Notodden, Norvège", 
        year: 1991,
        yearEnd: 2001,
        genre: "Symphonic Black Metal",
        anecdote: "Ont ajouté des éléments symphoniques au black metal brut. In the Nightside Eclipse est un classique du genre.",
        membres: ["Ihsahn", "Samoth", "Faust", "Tchort"]
    },
    { 
        name: "Cannibal Corpse", 
        origin: "Buffalo, USA", 
        year: 1988,
        yearEnd: null,
        genre: "Death Metal",
        anecdote: "L'un des groupes de death metal les plus vendus. Leurs pochettes sont souvent censurées pour violence graphique.",
        membres: ["George Fisher", "Pat O'Brien", "Rob Barrett", "Alex Webster", "Paul Mazurkiewicz"]
    },
    { 
        name: "Death", 
        origin: "Orlando, USA", 
        year: 1983,
        yearEnd: 2001,
        genre: "Death Metal",
        anecdote: "Chuck Schuldiner est considéré comme le père du death metal. Le groupe a évolué vers le progressive.",
        membres: ["Chuck Schuldiner", "Shannon Hamm", "Scott Clendenin", "Richard Christy"]
    },
    { 
        name: "Morbid Angel", 
        origin: "Tampa, USA", 
        year: 1983,
        yearEnd: null,
        genre: "Death Metal",
        anecdote: "Pionniers du death metal technique. Connus pour leurs thèmes occultes et sumériens.",
        membres: ["Steve Tucker", "Trey Azagthoth", "Dan Vadim Von", "Scott Fuller"]
    },
    { 
        name: "Behemoth", 
        origin: "Gdańsk, Pologne", 
        year: 1991,
        yearEnd: null,
        genre: "Blackened Death Metal",
        anecdote: "Nergal, le leader, a survécu à une leucémie grâce à une greffe de moelle osseuse.",
        membres: ["Nergal", "Inferno", "Orion"]
    },
    { 
        name: "Amon Amarth", 
        origin: "Tumba, Suède", 
        year: 1992,
        yearEnd: null,
        genre: "Melodic Death Metal",
        anecdote: "Spécialisés dans la mythologie viking. Leur nom vient du Seigneur des Anneaux (Montagne du Destin).",
        membres: ["Johan Hegg", "Olavi Mikkonen", "Ted Lundström", "Johan Söderberg", "Jocke Wallgren"]
    },
    { 
        name: "At The Gates", 
        origin: "Göteborg, Suède", 
        year: 1990,
        yearEnd: null,
        genre: "Melodic Death Metal",
        anecdote: "Slaughter of the Soul a influencé tout le metalcore moderne. Ils ont lancé le son de Göteborg.",
        membres: ["Tomas Lindberg", "Martin Larsson", "Jonas Björler", "Anders Björler", "Adrian Erlandsson"]
    },
    { 
        name: "Dark Tranquillity", 
        origin: "Göteborg, Suède", 
        year: 1989,
        yearEnd: null,
        genre: "Melodic Death Metal",
        anecdote: "L'un des trois géants du melodic death metal de Göteborg avec In Flames et At The Gates.",
        membres: ["Mikael Stanne", "Johan Reinholdz", "Christopher Amott", "Anders Iwers", "Anders Jivarp"]
    },
    { 
        name: "Arch Enemy", 
        origin: "Halmstad, Suède", 
        year: 1995,
        yearEnd: null,
        genre: "Melodic Death Metal",
        anecdote: "Alissa White-Gluz est l'une des chanteuses de death metal les plus reconnaissables.",
        membres: ["Alissa White-Gluz", "Michael Amott", "Jeff Loomis", "Sharlee D'Angelo", "Daniel Erlandsson"]
    },
    { 
        name: "Lamb of God", 
        origin: "Richmond, USA", 
        year: 1994,
        yearEnd: null,
        genre: "Groove Metal",
        anecdote: "Leaders de la New Wave of American Heavy Metal. Ashes of the Wake dénonce la guerre en Irak.",
        membres: ["Randy Blythe", "Mark Morton", "Willie Adler", "John Campbell", "Art Cruz"]
    },
    { 
        name: "Mastodon", 
        origin: "Atlanta, USA", 
        year: 2000,
        yearEnd: null,
        genre: "Progressive Metal",
        anecdote: "Leurs albums sont des concepts complexes. Leviathan est basé sur Moby Dick.",
        membres: ["Troy Sanders", "Brent Hinds", "Bill Kelliher", "Brann Dailor"]
    },
    { 
        name: "Tool", 
        origin: "Los Angeles, USA", 
        year: 1990,
        yearEnd: null,
        genre: "Progressive Metal",
        anecdote: "Connus pour leurs rythmiques complexes et leurs visuels hypnotiques. 13 ans entre deux albums !",
        membres: ["Maynard James Keenan", "Adam Jones", "Justin Chancellor", "Danny Carey"]
    },
    { 
        name: "Dream Theater", 
        origin: "Boston, USA", 
        year: 1985,
        yearEnd: null,
        genre: "Progressive Metal",
        anecdote: "Virtuoses techniques du metal progressif. Leurs morceaux dépassent souvent 20 minutes.",
        membres: ["James LaBrie", "John Petrucci", "John Myung", "Jordan Rudess", "Mike Portnoy"]
    },
    { 
        name: "System of a Down", 
        origin: "Glendale, USA", 
        year: 1994,
        yearEnd: null,
        genre: "Alternative Metal",
        anecdote: "Origines arméniennes, engagés politiquement. Toxicity a été un énorme succès commercial.",
        membres: ["Serj Tankian", "Daron Malakian", "Shavo Odadjian", "John Dolmayan"]
    },
    { 
        name: "Korn", 
        origin: "Bakersfield, USA", 
        year: 1993,
        yearEnd: null,
        genre: "Nu Metal",
        anecdote: "Pionniers du nu metal avec leur guitare à 7 cordes. Jonathan Davis utilise la cornemuse sur scène !",
        membres: ["Jonathan Davis", "James Munky Shaffer", "Brian Head Welch", "Reginald Fieldy Arvizu", "Ray Luzier"]
    },
    { 
        name: "Limp Bizkit", 
        origin: "Jacksonville, USA", 
        year: 1994,
        yearEnd: null,
        genre: "Nu Metal",
        anecdote: "Ont popularisé le mélange rap-metal à la fin des années 90. Fred Durst est devenu une icône pop culture.",
        membres: ["Fred Durst", "Wes Borland", "Sam Rivers", "John Otto", "DJ Lethal"]
    },
    { 
        name: "Deftones", 
        origin: "Sacramento, USA", 
        year: 1988,
        yearEnd: null,
        genre: "Alternative Metal",
        anecdote: "Mélangent agressivité et atmosphères rêveuses. White Pony est leur album le plus acclamé.",
        membres: ["Chino Moreno", "Stephen Carpenter", "Frank Delgado", "Abe Cunningham", "Sergio Vega"]
    },
    { 
        name: "Rammstein", 
        origin: "Berlin, Allemagne", 
        year: 1994,
        yearEnd: null,
        genre: "Industrial Metal",
        anecdote: "Connus pour leurs shows pyrotechniques spectaculaires. Tous leurs textes sont en allemand.",
        membres: ["Till Lindemann", "Richard Kruspe", "Paul Landers", "Oliver Riedel", "Christoph Schneider", "Christian Lorenz"]
    },
    { 
        name: "Nine Inch Nails", 
        origin: "Cleveland, USA", 
        year: 1988,
        yearEnd: null,
        genre: "Industrial Metal",
        anecdote: "Projet solo de Trent Reznor. A composé la BO de films comme The Social Network.",
        membres: ["Trent Reznor", "Atticus Ross"]
    },
    { 
        name: "Ministry", 
        origin: "Chicago, USA", 
        year: 1981,
        yearEnd: null,
        genre: "Industrial Metal",
        anecdote: "Pionniers du metal industriel. Al Jourgensen a transformé le groupe du synthpop au metal agressif.",
        membres: ["Al Jourgensen", "Sin Quirin", "Cesar Soto", "London May", "Roy Mayorga"]
    },
    { 
        name: "Nightwish", 
        origin: "Kitee, Finlande", 
        year: 1996,
        yearEnd: null,
        genre: "Symphonic Metal",
        anecdote: "Pionniers du metal symphonique avec voix d'opéra. Floor Jansen a une tessiture vocale impressionnante.",
        membres: ["Floor Jansen", "Tuomas Holopainen", "Emppu Vuorinen", "Troy Donockley", "Kai Hahto", "Jukka Koskinen"]
    },
    { 
        name: "Epica", 
        origin: "Reuver, Pays-Bas", 
        year: 2002,
        yearEnd: null,
        genre: "Symphonic Metal",
        anecdote: "Mélangent metal symphonique, chants d'opéra et growls. Utilisent un orchestre et une chorale.",
        membres: ["Simone Simons", "Mark Jansen", "Coen Janssen", "Isaac Delahaye", "Rob van der Loo", "Ariën van Weesenbeek"]
    },
    { 
        name: "Within Temptation", 
        origin: "Waddinxveen, Pays-Bas", 
        year: 1996,
        yearEnd: null,
        genre: "Symphonic Metal",
        anecdote: "Sharon den Adel possède une des voix les plus reconnaissables du metal symphonique.",
        membres: ["Sharon den Adel", "Robert Westerholt", "Ruud Jolie", "Jeroen van Veen", "Mike Coolen"]
    },
    { 
        name: "DragonForce", 
        origin: "Londres, Royaume-Uni", 
        year: 1999,
        yearEnd: null,
        genre: "Power Metal",
        anecdote: "Through the Fire and Flames est devenu culte grâce à Guitar Hero. Connus pour leur vitesse extrême.",
        membres: ["Marc Hudson", "Herman Li", "Sam Totman", "Frédéric Leclercq", "Gee Anzalone"]
    },
    { 
        name: "Helloween", 
        origin: "Hamburg, Allemagne", 
        year: 1984,
        yearEnd: null,
        genre: "Power Metal",
        anecdote: "Ont créé le power metal européen avec Keeper of the Seven Keys. Leur mascotte est une citrouille.",
        membres: ["Andi Deris", "Michael Kiske", "Kai Hansen", "Michael Weikath", "Markus Grosskopf", "Sascha Gerstner", "Dani Löble"]
    },
    { 
        name: "Blind Guardian", 
        origin: "Krefeld, Allemagne", 
        year: 1984,
        yearEnd: null,
        genre: "Power Metal",
        anecdote: "Inspirés par Tolkien et la fantasy. Nightfall in Middle-Earth raconte le Silmarillion.",
        membres: ["Hansi Kürsch", "André Olbrich", "Marcus Siepen", "Frederik Ehmke"]
    },
    { 
        name: "Stratovarius", 
        origin: "Helsinki, Finlande", 
        year: 1984,
        yearEnd: null,
        genre: "Power Metal",
        anecdote: "Pionniers du power metal néoclassique. Jens Johansson est un virtuose du clavier.",
        membres: ["Timo Kotipelto", "Matias Kupiainen", "Jens Johansson", "Lauri Porra", "Rolf Pilve"]
    },
    { 
        name: "Sabaton", 
        origin: "Falun, Suède", 
        year: 1999,
        yearEnd: null,
        genre: "Power Metal",
        anecdote: "Tous leurs textes parlent d'histoire militaire et de batailles. Très populaires chez les amateurs d'histoire.",
        membres: ["Joakim Brodén", "Pär Sundström", "Chris Rörland", "Hannes van Dahl", "Tommy Johansson"]
    },
    { 
        name: "Rhapsody of Fire", 
        origin: "Trieste, Italie", 
        year: 1993,
        yearEnd: null,
        genre: "Symphonic Power Metal",
        anecdote: "Créateurs du 'metal cinématique'. Leurs albums racontent une saga fantasy épique sur plusieurs disques.",
        membres: ["Giacomo Voli", "Alex Staropoli", "Roberto De Micheli", "Alessandro Sala", "Manuel Lotter"]
    },
    { 
        name: "Electric Wizard", 
        origin: "Dorset, Royaume-Uni", 
        year: 1993,
        yearEnd: null,
        genre: "Stoner Doom",
        anecdote: "Dopethrone est considéré comme l'album de stoner doom le plus lourd jamais créé.",
        membres: ["Jus Oborn", "Clayton Burgess", "Simon Poole"]
    },
    { 
        name: "Sleep", 
        origin: "San José, USA", 
        year: 1990,
        yearEnd: null,
        genre: "Stoner Metal",
        anecdote: "Dopesmoker est un seul morceau de 63 minutes sur le cannabis et les déserts. Culte absolu du stoner.",
        membres: ["Matt Pike", "Al Cisneros", "Jason Roeder"]
    },
    { 
        name: "Kyuss", 
        origin: "Palm Desert, USA", 
        year: 1987,
        yearEnd: 1995,
        genre: "Stoner Metal",
        anecdote: "Ont créé le 'desert rock'. Josh Homme a ensuite formé Queens of the Stone Age.",
        membres: ["John Garcia", "Josh Homme", "Brant Bjork", "Scott Reeder"]
    },
    { 
        name: "Candlemass", 
        origin: "Stockholm, Suède", 
        year: 1984,
        yearEnd: null,
        genre: "Doom Metal",
        anecdote: "Pionniers du doom metal épique. Epicus Doomicus Metallicus porte bien son nom !",
        membres: ["Johan Längqvist", "Mats Björkman", "Mappe Björkman", "Leif Edling", "Jan Lindh"]
    },
    { 
        name: "My Dying Bride", 
        origin: "Halifax, Royaume-Uni", 
        year: 1990,
        yearEnd: null,
        genre: "Doom Metal",
        anecdote: "Pionniers du doom-death. Utilisent le violon pour créer des atmosphères funèbres.",
        membres: ["Aaron Stainthorpe", "Andrew Craighan", "Lena Abé", "Shaun MacGowan", "Jeff Singer"]
    },
    { 
        name: "Paradise Lost", 
        origin: "Halifax, Royaume-Uni", 
        year: 1988,
        yearEnd: null,
        genre: "Gothic Metal",
        anecdote: "Ont créé le doom-death et influencé le metal gothique. Gothic est un album fondateur.",
        membres: ["Nick Holmes", "Greg Mackintosh", "Aaron Aedy", "Steve Edmondson", "Waltteri Väyrynen"]
    },
    { 
        name: "Type O Negative", 
        origin: "Brooklyn, USA", 
        year: 1989,
        yearEnd: 2010,
        genre: "Gothic Metal",
        anecdote: "Peter Steele mesurait 2m03 et avait une voix de basse profonde unique. Humour noir omniprésent.",
        membres: ["Peter Steele", "Kenny Hickey", "Josh Silver", "Johnny Kelly"]
    },
    { 
        name: "Cradle of Filth", 
        origin: "Suffolk, Royaume-Uni", 
        year: 1991,
        yearEnd: null,
        genre: "Symphonic Black Metal",
        anecdote: "Mélangent black metal, gothique et horror. Dani Filth a une des voix les plus aiguës du metal.",
        membres: ["Dani Filth", "Richard Shaw", "Marek Ashok", "Daniel Firth", "Martin Škaroupka"]
    },
    { 
        name: "Dimmu Borgir", 
        origin: "Oslo, Norvège", 
        year: 1993,
        yearEnd: null,
        genre: "Symphonic Black Metal",
        anecdote: "Ont popularisé le black metal symphonique accessible. Utilisent un orchestre complet en concert.",
        membres: ["Shagrath", "Silenoz", "Galder", "Daray"]
    },
    { 
        name: "Darkthrone", 
        origin: "Kolbotn, Norvège", 
        year: 1986,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "Duo légendaire du black metal. Refusent de jouer en live et gardent une esthétique lo-fi volontaire.",
        membres: ["Fenriz", "Nocturno Culto"]
    },
    { 
        name: "Immortal", 
        origin: "Bergen, Norvège", 
        year: 1991,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "Connus pour leur maquillage extrême et leurs textes sur Blashyrkh, un royaume gelé imaginaire.",
        membres: ["Demonaz", "Peter Tägtgren"]
    },
    { 
        name: "Satyricon", 
        origin: "Oslo, Norvège", 
        year: 1991,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "Ont évolué du black metal brut vers un son plus groove. Frost est un batteur exceptionnel.",
        membres: ["Satyr", "Frost"]
    },
    { 
        name: "Gorgoroth", 
        origin: "Bergen, Norvège", 
        year: 1992,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "L'un des groupes de black metal les plus extrêmes. Leurs concerts incluaient des têtes de mouton empalées.",
        membres: ["Infernus", "Atterigner", "Bøddel", "Tomas Asklund"]
    },
    { 
        name: "Bathory", 
        origin: "Vällingby, Suède", 
        year: 1983,
        yearEnd: 2004,
        genre: "Black Metal",
        anecdote: "Quorthon a créé le black metal et le viking metal. Projet solo ultra-influent.",
        membres: ["Quorthon"]
    },
    { 
        name: "Venom", 
        origin: "Newcastle, Royaume-Uni", 
        year: 1978,
        yearEnd: null,
        genre: "Black Metal",
        anecdote: "Ont donné son nom au black metal avec leur album 'Black Metal' (1982). Proto-black metal fondateur.",
        membres: ["Cronos", "Rage", "Danté"]
    },
    { 
        name: "Celtic Frost", 
        origin: "Zurich, Suisse", 
        year: 1984,
        yearEnd: 2008,
        genre: "Avant-Garde Metal",
        anecdote: "Expérimentateurs extrêmes, ont influencé le black, death et doom metal. Into the Pandemonium était visionnaire.",
        membres: ["Tom Gabriel Warrior", "Martin Eric Ain", "Reed St. Mark"]
    },
    { 
        name: "Mercyful Fate", 
        origin: "Copenhague, Danemark", 
        year: 1981,
        yearEnd: null,
        genre: "Heavy Metal",
        anecdote: "King Diamond utilise un maquillage de squelette et chante sur l'occulte. Tessiture vocale impressionnante.",
        membres: ["King Diamond", "Hank Shermann", "Mike Wead", "Joey Vera", "Bjarne T. Holm"]
    },
    { 
        name: "King Diamond", 
        origin: "Copenhague, Danemark", 
        year: 1985,
        yearEnd: null,
        genre: "Heavy Metal",
        anecdote: "Projet solo de King Diamond. Chaque album est un concept horror. Il chante avec une poupée sur scène !",
        membres: ["King Diamond", "Andy LaRocque", "Mike Wead", "Pontus Egberg", "Matt Thompson"]
    },
    { 
        name: "Motörhead", 
        origin: "Londres, Royaume-Uni", 
        year: 1975,
        yearEnd: 2015,
        genre: "Speed Metal",
        anecdote: "Lemmy Kilmister est une légende. Motörhead était trop rapide pour le rock, trop rock pour le metal !",
        membres: ["Lemmy Kilmister", "Phil Campbell", "Mikkey Dee"]
    },
    { 
        name: "Anthrax", 
        origin: "New York, USA", 
        year: 1981,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Seul groupe du Big 4 de la côte est. Ont collaboré avec Public Enemy sur 'Bring the Noize'.",
        membres: ["Joey Belladonna", "Scott Ian", "Charlie Benante", "Frank Bello", "Jonathan Donais"]
    },
    { 
        name: "Testament", 
        origin: "Berkeley, USA", 
        year: 1983,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Souvent considérés comme le 5ème groupe du Big 4. The Legacy est un classique du thrash de la Bay Area.",
        membres: ["Chuck Billy", "Eric Peterson", "Alex Skolnick", "Steve Di Giorgio", "Dave Lombardo"]
    },
    { 
        name: "Exodus", 
        origin: "Richmond, USA", 
        year: 1979,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Kirk Hammett en faisait partie avant Metallica. Bonded by Blood est un pilier du thrash.",
        membres: ["Steve Souza", "Gary Holt", "Lee Altus", "Jack Gibson", "Tom Hunting"]
    },
    { 
        name: "Kreator", 
        origin: "Essen, Allemagne", 
        year: 1982,
        yearEnd: null,
        genre: "Thrash Metal",
        anecdote: "Pionniers du thrash européen. Plus agressifs que leurs homologues américains.",
        membres: ["Mille Petrozza", "Sami Yli-Sirniö", "Frédéric Leclercq", "Jürgen Reil"]
    },
    { 
    name: "Bullet for My Valentine", 
    origin: "Bridgend, Pays de Galles", 
    year: 1998,
    yearEnd: null,
    genre: "Metalcore",
    anecdote: "Ont débuté sous le nom de Jeff Killed John. The Poison (2005) les a propulsés sur la scène metalcore mondiale.",
    membres: ["Matt Tuck", "Michael Paget", "Jamie Mathias", "Jason Bowld"]
},
{ 
    name: "Murderdolls", 
    origin: "Des Moines, USA", 
    year: 2002,
    yearEnd: 2013,
    genre: ["Shock Rock", "Horror punk"],
    anecdote: "Projet parallèle de Joey Jordison (Slipknot). Mélangent horror punk et glam metal avec une esthétique gore.",
    membres: ["Wednesday 13", "Joey Jordison", "Acey Slade", "Eric Griffin", "Racci Shay"]
},
{ 
    name: "Ghost", 
    origin: "Linköping, Suède", 
    year: 2006,
    yearEnd: null,
    genre: "Non Qualifiable",
    anecdote: "Le chanteur se présente comme Papa Emeritus (ou Cardinal Copia). Identités secrètes et esthétique satanique théâtrale.",
    membres: ["Tobias Forge", "Nameless Ghouls"]
},
{ 
    name: "Kim Dracula", 
    origin: "Hobart, Australie", 
    year: 2020,
    yearEnd: null,
    genre: ["Non Qualifiable", "Metalcore", "Nu Metal", "Harajuku-core"],
    anecdote: "Le nom de Kim Dracula est une référence à la chanson de Deftones Kimdracula de leur album Saturday Night Wrist.",
    membres: ["Samuel Wellings"]
},
    { 
    name: "Avenged Sevenfold", 
    origin: "Huntington Beach, USA", 
    year: 1999,
    yearEnd: null,
    genre: ["Metalcore", "Heavy Metal"],
    anecdote: "Nightmare est devenu disque d'or. Le batteur The Rev est décédé en 2009, un événement marquant pour le groupe.",
    membres: ["M. Shadows", "Synyster Gates", "Zacky Vengeance", "Johnny Christ", "Brooks Wackerman"]
},
{ 
    name: "Trivium", 
    origin: "Orlando, USA", 
    year: 1999,
    yearEnd: null,
    genre: ["Metalcore", "Thrash Metal"],
    anecdote: "Matt Heafy avait seulement 17 ans lors de la sortie d'Ember to Inferno. Influencés par Metallica et In Flames.",
    membres: ["Matt Heafy", "Corey Beaulieu", "Paolo Gregoletto", "Alex Bent"]
},
{ 
    name: "Babymetal", 
    origin: "Tokyo, Japon", 
    year: 2010,
    yearEnd: null,
    genre: ["Kawaii Metal", "Non Qualifiable"],
    anecdote: "Mélangent J-Pop et metal extrême. Ont ouvert pour Metallica et Red Hot Chili Peppers. Phénomène mondial unique.",
    membres: ["Su-metal", "Moametal"]
},
{ 
    name: "Bring Me The Horizon", 
    origin: "Sheffield, Royaume-Uni", 
    year: 2004,
    yearEnd: null,
    genre: ["Metalcore", "Alternative Metal", "Non Qualifiable"],
    anecdote: "Ont évolué du deathcore vers un son électronique/alternatif. Sempiternal a marqué leur transformation.",
    membres: ["Oliver Sykes", "Lee Malia", "Matt Kean", "Matt Nicholls", "Jordan Fish"]
},
{ 
    name: "Parkway Drive", 
    origin: "Byron Bay, Australie", 
    year: 2003,
    yearEnd: null,
    genre: "Metalcore",
    anecdote: "Originaires d'une petite ville côtière australienne. Horizons est considéré comme un classique du metalcore moderne.",
    membres: ["Winston McCall", "Jeff Ling", "Luke Kilpatrick", "Jia O'Connor", "Ben Gordon"]
},
{ 
    name: "Alestorm", 
    origin: "Perth, Écosse", 
    year: 2004,
    yearEnd: null,
    genre: "Pirate Metal",
    anecdote: "Seul vrai groupe de pirate metal. Tous leurs textes parlent de pirates, de rhum et d'aventures en mer !",
    membres: ["Christopher Bowes", "Máté Bodor", "Gareth Murdock", "Peter Alcorn"]
},
{ 
    name: "Devin Townsend Project", 
    origin: "Vancouver, Canada", 
    year: 2008,
    yearEnd: 2018,
    genre: ["Progressive Metal", "Avant-Garde Metal"],
    anecdote: "Devin Townsend est un génie musical expérimental. A travaillé avec Steve Vai à 19 ans. Discographie immense et variée.",
    membres: ["Devin Townsend", "Dave Young", "Brian Waddell", "Ryan Van Poederooyen", "Mike St-Jean"]
},
{ 
    name: "Animals As Leaders", 
    origin: "Washington D.C., USA", 
    year: 2007,
    yearEnd: null,
    genre: ["Djent", "Progressive Metal"],
    anecdote: "Groupe instrumental de djent progressif. Tosin Abasi est considéré comme l'un des meilleurs guitaristes actuels.",
    membres: ["Tosin Abasi", "Javier Reyes", "Matt Garstka"]
},
{ 
    name: "Alcest", 
    origin: "Bagnols-sur-Cèze, France", 
    year: 2000,
    yearEnd: null,
    genre: ["Blackgaze", "Post-Black Metal"],
    anecdote: "Pionniers du blackgaze, mélange de black metal et shoegaze. Neige crée des paysages sonores oniriques.",
    membres: ["Neige", "Winterhalter", "Indria Saray"]
},
{ 
    name: "Deafheaven", 
    origin: "San Francisco, USA", 
    year: 2010,
    yearEnd: null,
    genre: ["Blackgaze", "Post-Black Metal"],
    anecdote: "Sunbather a révolutionné le black metal avec des influences shoegaze et post-rock. Pochette rose controversée !",
    membres: ["George Clarke", "Kerry McCoy", "Daniel Tracy", "Shiv Mehra", "Chris Johnson"]
},
{ 
    name: "Converge", 
    origin: "Salem, USA", 
    year: 1990,
    yearEnd: null,
    genre: ["Mathcore", "Metalcore"],
    anecdote: "Pionniers du mathcore et du metalcore chaotique. Jane Doe est un album culte du genre.",
    membres: ["Jacob Bannon", "Kurt Ballou", "Nate Newton", "Ben Koller"]
},
{ 
    name: "The Dillinger Escape Plan", 
    origin: "Morris Plains, USA", 
    year: 1997,
    yearEnd: 2017,
    genre: ["Mathcore", "Progressive Metal"],
    anecdote: "Mathcore technique extrême. Leurs concerts étaient chaotiques avec des acrobaties dangereuses. Séparés en 2017.",
    membres: ["Greg Puciato", "Ben Weinman", "Liam Wilson", "Billy Rymer", "James Love"]
},
{ 
    name: "Killswitch Engage", 
    origin: "Westfield, USA", 
    year: 1999,
    yearEnd: null,
    genre: "Melodic Metalcore",
    anecdote: "Ont popularisé le metalcore mélodique. Alive or Just Breathing est un classique. Howard Jones puis Jesse Leach au chant.",
    membres: ["Jesse Leach", "Adam Dutkiewicz", "Joel Stroetzel", "Mike D'Antonio", "Justin Foley"]
},
{ 
    name: "As I Lay Dying", 
    origin: "San Diego, USA", 
    year: 2000,
    yearEnd: null,
    genre: "Metalcore",
    anecdote: "An Ocean Between Us a atteint le top 10 du Billboard. Histoire controversée avec l'emprisonnement du chanteur.",
    membres: ["Tim Lambesis", "Phil Sgrosso", "Nick Hipa", "Josh Gilbert", "Jordan Mancino"]
},
{ 
    name: "Architects", 
    origin: "Brighton, Royaume-Uni", 
    year: 2004,
    yearEnd: null,
    genre: ["Metalcore", "Progressive Metalcore"],
    anecdote: "Tom Searle, guitariste fondateur, est décédé d'un cancer en 2016. Holy Hell est un hommage poignant.",
    membres: ["Sam Carter", "Dan Searle", "Alex Dean", "Adam Christianson", "Josh Middleton"]
},
{ 
    name: "Periphery", 
    origin: "Washington D.C., USA", 
    year: 2005,
    yearEnd: null,
    genre: ["Djent", "Progressive Metal"],
    anecdote: "Misha Mansoor a créé le terme 'djent'. Groupe instrumental technique avec 3 guitaristes.",
    membres: ["Spencer Sotelo", "Misha Mansoor", "Jake Bowen", "Mark Holcomb", "Matt Halpern"]
},
{ 
    name: "Leprous", 
    origin: "Notodden, Norvège", 
    year: 2001,
    yearEnd: null,
    genre: ["Progressive Metal", "Avant-Garde Metal"],
    anecdote: "Einar Solberg a une voix unique. Évoluent constamment, du prog metal vers des sons plus expérimentaux.",
    membres: ["Einar Solberg", "Tor Oddmund Suhrke", "Robin Ognedal", "Simen Børven", "Baard Kolstad"]
},
{ 
    name: "Ne Obliviscaris", 
    origin: "Melbourne, Australie", 
    year: 2003,
    yearEnd: null,
    genre: ["Progressive Death Metal", "Symphonic Metal"],
    anecdote: "Utilisent un violon dans du death metal progressif. Morceaux de 10-15 minutes avec une complexité extrême.",
    membres: ["Xenoyr", "Tim Charles", "Matt Klavins", "Martino Garattoni", "Dan Presland"]
},
{ 
    name: "Godflesh", 
    origin: "Birmingham, Royaume-Uni", 
    year: 1988,
    yearEnd: null,
    genre: ["Industrial Metal", "Post-Metal"],
    anecdote: "Pionniers du metal industriel avec drum machines. Streetcleaner est un album fondateur ultra-lourd.",
    membres: ["Justin Broadrick", "Ben Green"]
},
{ 
    name: "Neurosis", 
    origin: "Oakland, USA", 
    year: 1985,
    yearEnd: null,
    genre: ["Post-Metal", "Sludge Metal"],
    anecdote: "Créateurs du post-metal atmosphérique. Times of Grace a défini leur son apocalyptique et contemplatif.",
    membres: ["Scott Kelly", "Steve Von Till", "Noah Landis", "Dave Edwardson", "Jason Roeder"]
},
{ 
    name: "Isis", 
    origin: "Boston, USA", 
    year: 1997,
    yearEnd: 2010,
    genre: ["Post-Metal", "Sludge Metal"],
    anecdote: "Oceanic est un chef-d'œuvre du post-metal. Séparés en 2010 après une carrière influente.",
    membres: ["Aaron Turner", "Michael Gallagher", "Bryant Clifford Meyer", "Jeff Caxide", "Aaron Harris"]
},
{ 
    name: "Cult of Luna", 
    origin: "Umeå, Suède", 
    year: 1998,
    yearEnd: null,
    genre: ["Post-Metal", "Sludge Metal"],
    anecdote: "Post-metal atmosphérique suédois. Mariner avec Julie Christmas est un album concept sur l'espace.",
    membres: ["Johannes Persson", "Fredrik Kihlberg", "Thomas Hedlund", "Andreas Johansson", "Magnus Lindberg"]
},
{ 
    name: "Agalloch", 
    origin: "Portland, USA", 
    year: 1995,
    yearEnd: 2016,
    genre: ["Folk Metal", "Post-Black Metal", "Doom Metal"],
    anecdote: "Mélange unique de folk, doom et black metal atmosphérique. The Mantle est un album culte. Séparés en 2016.",
    membres: ["John Haughm", "Don Anderson", "Jason Walton", "Aesop Dekker"]
},
{ 
    name: "Therion", 
    origin: "Upplands Väsby, Suède", 
    year: 1987,
    yearEnd: null,
    genre: ["Symphonic Metal", "Opera Metal"],
    anecdote: "Pionniers du metal symphonique avec chœurs opératiques. Ont introduit l'opéra dans le death metal.",
    membres: ["Christofer Johnsson", "Thomas Vikström", "Lori Lewis", "Christian Vidal", "Nalle Påhlsson"]
},
{ 
    name: "Sepultura", 
    origin: "Belo Horizonte, Brésil", 
    year: 1984,
    yearEnd: null,
    genre: ["Thrash Metal", "Groove Metal"],
    anecdote: "Roots a incorporé des percussions tribales brésiliennes. Départ de Max Cavalera en 1996 a créé Soulfly.",
    membres: ["Derrick Green", "Andreas Kisser", "Paulo Jr.", "Eloy Casagrande"]
},
{ 
    name: "Soulfly", 
    origin: "Phoenix, USA", 
    year: 1997,
    yearEnd: null,
    genre: ["Groove Metal", "Nu Metal"],
    anecdote: "Créé par Max Cavalera après Sepultura. Mélange thrash, groove et influences tribales du monde entier.",
    membres: ["Max Cavalera", "Marc Rizzo", "Mike Leon", "Zyon Cavalera"]
},
{ 
    name: "Machine Head", 
    origin: "Oakland, USA", 
    year: 1991,
    yearEnd: null,
    genre: ["Groove Metal", "Thrash Metal"],
    anecdote: "Burn My Eyes s'est vendu à 400 000 exemplaires. The Blackening est considéré comme leur chef-d'œuvre.",
    membres: ["Robb Flynn", "Wacław Kiełtyka", "Jared MacEachern", "Matt Alston"]
},
{ 
    name: "Children of Bodom", 
    origin: "Espoo, Finlande", 
    year: 1993,
    yearEnd: 2019,
    genre: ["Melodic Death Metal", "Power Metal"],
    anecdote: "Alexi Laiho était un virtuose. Mélange unique de death mélodique et power metal. Séparés en 2019, Alexi décédé en 2020.",
    membres: ["Alexi Laiho", "Jaska Raatikainen", "Henkka Seppälä", "Janne Wirman", "Daniel Freyberg"]
},
{ 
    name: "In Flames", 
    origin: "Göteborg, Suède", 
    year: 1990,
    yearEnd: null,
    genre: ["Melodic Death Metal", "Alternative Metal"],
    anecdote: "Pionniers du son de Göteborg. Ont évolué vers un son plus moderne et alternatif, divisant les fans.",
    membres: ["Anders Fridén", "Björn Gelotte", "Chris Broderick", "Bryce Paul", "Tanner Wayne"]
},
{ 
    name: "Carcass", 
    origin: "Liverpool, Royaume-Uni", 
    year: 1985,
    yearEnd: null,
    genre: ["Melodic Death Metal", "Grindcore"],
    anecdote: "Pionniers du goregrind puis du melodic death. Heartwork a défini le melodic death metal en 1993.",
    membres: ["Jeff Walker", "Bill Steer", "Daniel Wilding", "Tom Draper"]
},
{ 
    name: "Summoning", 
    origin: "Vienne, Autriche", 
    year: 1993,
    yearEnd: null,
    genre: ["Atmospheric Black Metal", "Epic Metal"],
    anecdote: "100% inspiré par Tolkien. Black metal atmosphérique épique avec synthés. Pas de concerts live.",
    membres: ["Silenius", "Protector"]
},
{ 
    name: "Wolves in the Throne Room", 
    origin: "Olympia, USA", 
    year: 2002,
    yearEnd: null,
    genre: ["Atmospheric Black Metal", "Post-Black Metal"],
    anecdote: "Black metal écologique et atmosphérique. Vivent dans une ferme isolée de l'État de Washington.",
    membres: ["Aaron Weaver", "Nathan Weaver", "Kody Keyworth"]
},
{ 
    name: "Mgła", 
    origin: "Cracovie, Pologne", 
    year: 2000,
    yearEnd: null,
    genre: "Black Metal",
    anecdote: "Black metal polonais nihiliste. Identités secrètes, pas d'interviews. Exercises in Futility est un chef-d'œuvre moderne.",
    membres: ["M.", "Darkside"]
},
{ 
    name: "Marduk", 
    origin: "Norrköping, Suède", 
    year: 1990,
    yearEnd: null,
    genre: "Black Metal",
    anecdote: "Black metal suédois ultra-rapide et agressif. Thèmes de guerre, satanisme et anti-christianisme.",
    membres: ["Mortuus", "Morgan Håkansson", "Devo", "Simon Schilling"]
},
{ 
    name: "1349", 
    origin: "Oslo, Norvège", 
    year: 1997,
    yearEnd: null,
    genre: "Black Metal",
    anecdote: "Nommés d'après l'année de la peste noire en Norvège. Black metal norvégien rapide et technique.",
    membres: ["Ravn", "Archaon", "Seidemann", "Tor Risdal Stavenes"]
},
{ 
    name: "Dying Fetus", 
    origin: "Upper Marlboro, USA", 
    year: 1991,
    yearEnd: null,
    genre: ["Brutal Death Metal", "Grindcore"],
    anecdote: "Death metal technique brutal avec des breakdowns. Destroy the Opposition est un classique du genre.",
    membres: ["John Gallagher", "Sean Beasley", "Trey Williams"]
},
{ 
    name: "Nile", 
    origin: "Greenville, USA", 
    year: 1993,
    yearEnd: null,
    genre: ["Technical Death Metal", "Brutal Death Metal"],
    anecdote: "Thèmes égyptologiques. Death metal technique ultra-rapide. Utilisent des instruments du Moyen-Orient.",
    membres: ["Karl Sanders", "Brian Kingsland", "Dan Vadim Von", "George Kollias"]
},
{ 
    name: "Suffocation", 
    origin: "Long Island, USA", 
    year: 1988,
    yearEnd: null,
    genre: ["Brutal Death Metal", "Technical Death Metal"],
    anecdote: "Pionniers du brutal death et du slam. Effigy of the Forgotten a défini le genre en 1991.",
    membres: ["Frank Mullen", "Terrance Hobbs", "Charlie Errigo", "Derek Boyer", "Eric Morotti"]
},
{ 
    name: "Anaal Nathrakh", 
    origin: "Birmingham, Royaume-Uni", 
    year: 1999,
    yearEnd: 2022,
    genre: ["Extreme Metal", "Industrial Black Metal", "Grindcore"],
    anecdote: "Mélange chaotique de black, grind et indus. Nom tiré d'Excalibur. Séparés en 2022.",
    membres: ["V.I.T.R.I.O.L.", "Irrumator"]
},
{ 
    name: "Sodom", 
    origin: "Gelsenkirchen, Allemagne", 
    year: 1981,
    yearEnd: null,
    genre: "Thrash Metal",
    anecdote: "Troisième pilier du thrash teutonique avec Kreator et Destruction. Agent Orange est un classique du genre.",
    membres: ["Tom Angelripper", "Frank Blackfire", "Yorck Segatz", "Toni Merkel"]
},
{ 
    name: "Destruction", 
    origin: "Lörrach, Allemagne", 
    year: 1982,
    yearEnd: null,
    genre: "Thrash Metal",
    anecdote: "Complètent le trio du thrash allemand. Eternal Devastation (1986) est un pilier du genre.",
    membres: ["Schmier", "Mike Sifringer", "Damir Eskić", "Randy Black"]
},
{ 
    name: "Overkill", 
    origin: "New Jersey, USA", 
    year: 1980,
    yearEnd: null,
    genre: "Thrash Metal",
    anecdote: "L'un des groupes de thrash les plus constants. 20 albums studio et toujours actifs après 40 ans !",
    membres: ["Bobby Blitz", "Dave Linsk", "Derek Tailer", "D.D. Verni", "Jason Bittner"]
},
{ 
    name: "Accept", 
    origin: "Solingen, Allemagne", 
    year: 1976,
    yearEnd: null,
    genre: "Heavy Metal",
    anecdote: "Pionniers du heavy metal allemand. Balls to the Wall est un hymne metal. Udo Dirkschneider a une voix unique.",
    membres: ["Mark Tornillo", "Wolf Hoffmann", "Uwe Lulis", "Christopher Williams", "Martin Motnik"]
},
{ 
    name: "Saxon", 
    origin: "Barnsley, Royaume-Uni", 
    year: 1977,
    yearEnd: null,
    genre: ["Heavy Metal", "NWOBHM"],
    anecdote: "Géants de la NWOBHM. Wheels of Steel et Denim and Leather sont des classiques intemporels.",
    membres: ["Biff Byford", "Doug Scarratt", "Paul Quinn", "Nigel Glockler", "Nibbs Carter"]
},
{ 
    name: "Diamond Head", 
    origin: "Stourbridge, Royaume-Uni", 
    year: 1976,
    yearEnd: null,
    genre: ["Heavy Metal", "NWOBHM"],
    anecdote: "Ont énormément influencé Metallica qui a repris plusieurs de leurs morceaux. Am I Evil? est légendaire.",
    membres: ["Rasmus Bom Andersen", "Brian Tatler", "Karl Wilcox", "Dean Ashton"]
},
{ 
    name: "Suicidal Tendencies", 
    origin: "Venice, USA", 
    year: 1980,
    yearEnd: null,
    genre: ["Crossover Thrash", "Hardcore Punk"],
    anecdote: "Pionniers du crossover thrash. Institutionalized est un hymne. Le bandana de Mike Muir est iconique.",
    membres: ["Mike Muir", "Dean Pleasants", "Ben Weinman", "Ra Díaz", "Greyson Nekrutman"]
},
{ 
    name: "Corrosion of Conformity", 
    origin: "Raleigh, USA", 
    year: 1982,
    yearEnd: null,
    genre: ["Sludge Metal", "Stoner Metal"],
    anecdote: "Du hardcore punk au stoner metal. Deliverance et Wiseblood sont des albums cultes.",
    membres: ["Pepper Keenan", "Woody Weatherman", "Mike Dean", "Reed Mullin"]
},
{ 
    name: "Clutch", 
    origin: "Germantown, USA", 
    year: 1991,
    yearEnd: null,
    genre: ["Stoner Rock", "Groove Metal"],
    anecdote: "Groove unique mêlant stoner, blues et funk. Neil Fallon a une voix et un flow inimitables.",
    membres: ["Neil Fallon", "Tim Sult", "Dan Maines", "Jean-Paul Gaster"]
},
{ 
    name: "Monster Magnet", 
    origin: "Red Bank, USA", 
    year: 1989,
    yearEnd: null,
    genre: ["Stoner Rock", "Psychedelic Rock"],
    anecdote: "Space Lord est leur hit culte. Mélangent stoner rock et psychédélisme cosmique.",
    membres: ["Dave Wyndorf", "Garrett Sweeny", "Chris Kosnik", "Bob Pantella"]
},
{ 
    name: "Orange Goblin", 
    origin: "Londres, Royaume-Uni", 
    year: 1995,
    yearEnd: null,
    genre: ["Stoner Metal", "Doom Metal"],
    anecdote: "Stoner doom britannique massif. Coup de Grâce et The Big Black sont des références.",
    membres: ["Ben Ward", "Joe Hoare", "Martyn Millard", "Chris Turner"]
},
{ 
    name: "Watain", 
    origin: "Uppsala, Suède", 
    year: 1998,
    yearEnd: null,
    genre: "Black Metal",
    anecdote: "Black metal suédois orthodoxe et ritualiste. Concerts avec sang d'animaux et atmosphère occulte intense.",
    membres: ["Erik Danielsson", "Pelle Forsberg", "Alvaro Lillo", "Emil Svensson"]
},
{ 
    name: "Taake", 
    origin: "Bergen, Norvège", 
    year: 1993,
    yearEnd: null,
    genre: "Black Metal",
    anecdote: "Projet solo de Hoest. Black metal norvégien avec influences folk. Controverses pour symboles nazis.",
    membres: ["Hoest"]
},
{ 
    name: "Rotting Christ", 
    origin: "Athènes, Grèce", 
    year: 1987,
    yearEnd: null,
    genre: ["Black Metal", "Gothic Metal"],
    anecdote: "Pionniers du black metal grec. The Heretics est un album mature mêlant BM et ambiances mystiques.",
    membres: ["Sakis Tolis", "Themis Tolis", "George Emmanuel"]
},
{ 
    name: "Dissection", 
    origin: "Strömstad, Suède", 
    year: 1989,
    yearEnd: 2006,
    genre: ["Melodic Black Metal", "Death Metal"],
    anecdote: "Storm of the Light's Bane est un chef-d'œuvre. Jon Nödtveidt s'est suicidé en 2006.",
    membres: ["Jon Nödtveidt", "Set Teitan", "Tomas Asklund", "Brice Leclercq"]
},
{ 
    name: "Enslaved", 
    origin: "Haugesund, Norvège", 
    year: 1991,
    yearEnd: null,
    genre: ["Viking Metal", "Progressive Black Metal"],
    anecdote: "Ont évolué du viking metal vers le prog black. Utilisent des synthés et des voix claires.",
    membres: ["Grutle Kjellson", "Ivar Bjørnson", "Arve Isdal", "Håkon Vinje", "Iver Sandøy"]
},
{ 
    name: "Moonsorrow", 
    origin: "Helsinki, Finlande", 
    year: 1995,
    yearEnd: null,
    genre: ["Viking Metal", "Folk Metal"],
    anecdote: "Folk/viking metal épique finlandais. Morceaux de 20-30 minutes avec orchestrations massives.",
    membres: ["Ville Sorvali", "Henri Sorvali", "Mitja Harvilahti", "Marko Tarvonen"]
},
{ 
    name: "Finntroll", 
    origin: "Helsinki, Finlande", 
    year: 1997,
    yearEnd: null,
    genre: ["Folk Metal", "Black Metal"],
    anecdote: "Mélangent black metal et humppa (polka finlandaise). Thèmes de trolls et folklore finnois.",
    membres: ["Mathias Lillmåns", "Skrymer", "Routa", "Trollhorn", "Tundra", "Virta"]
},
{ 
    name: "Korpiklaani", 
    origin: "Lahti, Finlande", 
    year: 1993,
    yearEnd: null,
    genre: "Folk Metal",
    anecdote: "Folk metal festif finlandais. Chantent beaucoup sur la bière et les fêtes. Utilisent accordéon et violon.",
    membres: ["Jonne Järvelä", "Kalle Savijärvi", "Jarkko Aaltonen", "Sami Perttula", "Samuli Mikkonen"]
},
{ 
    name: "Eluveitie", 
    origin: "Winterthur, Suisse", 
    year: 2002,
    yearEnd: null,
    genre: ["Folk Metal", "Melodic Death Metal"],
    anecdote: "Folk metal celtique suisse. Utilisent cornemuse, flûte et instruments traditionnels. Chantent en gaulois !",
    membres: ["Chrigel Glanzmann", "Kay Brem", "Rafael Salzmann", "Matteo Sisti", "Jonas Wolf", "Alain Ackermann"]
},
{ 
    name: "Ensiferum", 
    origin: "Helsinki, Finlande", 
    year: 1995,
    yearEnd: null,
    genre: ["Folk Metal", "Viking Metal"],
    anecdote: "Folk metal épique finlandais. Iron est un hymne du genre. Mélodies accrocheuses et ambiances héroïques.",
    membres: ["Petri Lindroos", "Markus Toivonen", "Sami Hinkka", "Janne Parviainen", "Netta Skog"]
},
{ 
    name: "Turisas", 
    origin: "Hämeenlinna, Finlande", 
    year: 1997,
    yearEnd: null,
    genre: ["Folk Metal", "Viking Metal"],
    anecdote: "Viking metal théâtral avec peinture de guerre rouge. The Varangian Way raconte l'épopée des Vikings vers Byzance.",
    membres: ["Mathias Nygård", "Netta Skog", "Olli Vänskä", "Tude Lehtonen", "Jesper Anastasiadis"]
},
{ 
    name: "Iced Earth", 
    origin: "Tampa, USA", 
    year: 1984,
    yearEnd: null,
    genre: ["Power Metal", "Thrash Metal"],
    anecdote: "Power/thrash épique américain. Something Wicked trilogy est une saga conceptuelle. Jon Schaffer controversé.",
    membres: ["Jon Schaffer", "Jake Dreyer", "Brent Smedley"]
},
{ 
    name: "Gamma Ray", 
    origin: "Hamburg, Allemagne", 
    year: 1989,
    yearEnd: null,
    genre: "Power Metal",
    anecdote: "Créé par Kai Hansen après Helloween. Land of the Free est un classique du power metal allemand.",
    membres: ["Kai Hansen", "Henjo Richter", "Dirk Schlächter", "Frank Beck", "Michael Ehré"]
},
{ 
    name: "Edguy", 
    origin: "Fulda, Allemagne", 
    year: 1992,
    yearEnd: null,
    genre: "Power Metal",
    anecdote: "Power metal allemand mélodique. Tobias Sammet a créé Avantasia en parallèle.",
    membres: ["Tobias Sammet", "Jens Ludwig", "Dirk Sauer", "Tobias Exxel", "Felix Bohnke"]
},
{ 
    name: "Avantasia", 
    origin: "Fulda, Allemagne", 
    year: 1999,
    yearEnd: null,
    genre: ["Symphonic Metal", "Power Metal"],
    anecdote: "Projet metal opera de Tobias Sammet. Collaborations avec des dizaines de chanteurs metal célèbres.",
    membres: ["Tobias Sammet", "Sascha Paeth", "Miro Rodenberg", "Felix Bohnke", "plus invités"]
},
{ 
    name: "Kamelot", 
    origin: "Tampa, USA", 
    year: 1987,
    yearEnd: null,
    genre: ["Symphonic Metal", "Power Metal"],
    anecdote: "Power metal symphonique progressif. Tommy Karevik a remplacé Roy Khan en 2012.",
    membres: ["Tommy Karevik", "Thomas Youngblood", "Sean Tibbetts", "Alex Landenburg", "Oliver Palotai"]
},
{ 
    name: "Symphony X", 
    origin: "New Jersey, USA", 
    year: 1994,
    yearEnd: null,
    genre: ["Progressive Metal", "Power Metal"],
    anecdote: "Prog/power metal néoclassique. Michael Romeo est un guitariste virtuose. Paradise Lost est leur album le plus heavy.",
    membres: ["Michael Romeo", "Michael Pinella", "Michael LePond", "Jason Rullo", "Russell Allen"]
},
{ 
    name: "Queensrÿche", 
    origin: "Bellevue, USA", 
    year: 1980,
    yearEnd: null,
    genre: ["Progressive Metal", "Heavy Metal"],
    anecdote: "Operation: Mindcrime est un album concept culte. Précurseurs du metal progressif américain.",
    membres: ["Todd La Torre", "Michael Wilton", "Eddie Jackson", "Casey Grillo"]
},
{ 
    name: "Fates Warning", 
    origin: "Hartford, USA", 
    year: 1982,
    yearEnd: null,
    genre: "Progressive Metal",
    anecdote: "Pionniers du metal progressif avec Awaken the Guardian. Ray Alder a une voix émotionnelle unique.",
    membres: ["Ray Alder", "Jim Matheos", "Joey Vera", "Bobby Jarzombek"]
},
{ 
    name: "Porcupine Tree", 
    origin: "Hemel Hempstead, Royaume-Uni", 
    year: 1987,
    yearEnd: null,
    genre: ["Progressive Rock", "Progressive Metal"],
    anecdote: "Prog rock/metal atmosphérique. Steven Wilson est un génie de la production. In Absentia est leur percée commerciale.",
    membres: ["Steven Wilson", "Richard Barbieri", "Gavin Harrison"]
},
{ 
    name: "Katatonia", 
    origin: "Stockholm, Suède", 
    year: 1991,
    yearEnd: null,
    genre: ["Gothic Metal", "Progressive Metal"],
    anecdote: "Ont évolué du doom/death vers un rock mélancolique et progressif. The Great Cold Distance est magnifique.",
    membres: ["Jonas Renkse", "Anders Nyström", "Roger Öjersson", "Niklas Sandin", "Daniel Moilanen"]
},
{ 
    name: "Anathema", 
    origin: "Liverpool, Royaume-Uni", 
    year: 1990,
    yearEnd: 2020,
    genre: ["Progressive Rock", "Doom Metal"],
    anecdote: "Évolution du doom/death vers le prog rock atmosphérique. Weather Systems est émotionnellement puissant. Séparés en 2020.",
    membres: ["Vincent Cavanagh", "Daniel Cavanagh", "Jamie Cavanagh", "Lee Douglas", "John Douglas"]
},
{ 
    name: "Rise of the Northstar", 
    origin: "Paris, France", 
    year: 2008,
    yearEnd: null,
    genre: ["Hardcore", "Nu Metal", "Metalcore"],
    anecdote: "Mélangent hardcore et culture hip-hop/manga japonaise. Leur esthétique unique mêle streetwear et hardcore.",
    membres: ["Vithia", "Eva-G", "Nq'ntaq", "Showtek"]
},
{ 
    name: "My Pollux", 
    origin: "Besançon, France", 
    year: 2011,
    yearEnd: null,
    genre: "Metalcore",
    anecdote: "Metalcore français mélodique. Lost in the Desert est leur album le plus abouti.",
    membres: ["Clément Barin", "Timothé Bongard", "Samuel Ratel", "Valentin Prat", "Florent Duployer"]
},
{ 
    name: "Landmvrks", 
    origin: "Marseille, France", 
    year: 2014,
    yearEnd: null,
    genre: ["Metalcore", "Progressive Metalcore"],
    anecdote: "Metalcore moderne français à succès international. Lost in the Waves a explosé sur les réseaux sociaux.",
    membres: ["Florent Salfati", "Nicolas Exposito", "Paul C. Wilson", "Kévin D'Agostino", "Rudy Purkart"]
},
{ 
    name: "Dagoba", 
    origin: "Marseille, France", 
    year: 1997,
    yearEnd: null,
    genre: ["Groove Metal", "Industrial Metal"],
    anecdote: "Groove metal français influencé par Gojira et Meshuggah. Shawn a une voix puissante reconnaissable.",
    membres: ["Shawn", "iZa", "Werther", "Franky", "Reynz"]
},
{ 
    name: "Betraying the Martyrs", 
    origin: "Paris, France", 
    year: 2008,
    yearEnd: 2023,
    genre: ["Deathcore", "Metalcore"],
    anecdote: "Deathcore symphonique français. Let It Go (reprise de Frozen) en version metal a explosé sur YouTube. Séparés en 2023.",
    membres: ["Rui Martins", "Lucas D'Angelo", "Baptiste Vigier", "Steeves Hostin", "Boris Le Gal"]
},
{ 
    name: "Mass Hysteria", 
    origin: "Paris, France", 
    year: 1993,
    yearEnd: null,
    genre: ["Nu Metal", "Rap Metal"],
    anecdote: "Pionniers du metal français moderne. Chantent en français. Contraddiction est un classique du nu metal français.",
    membres: ["Mouss", "Nicolas Sarrouy", "Raphaël Mercier", "Vincent Mercier", "Yann Heurtaux"]
},
{ 
    name: "Eths", 
    origin: "Marseille, France", 
    year: 1999,
    yearEnd: null,
    genre: "Nu Metal",
    anecdote: "Nu metal français avec Candice Clot au chant. Textes en français. Autopsie est leur album emblématique.",
    membres: ["Rachel Aspe", "Staif Bihr", "Guillaume Dupré", "Damien Arnoux"]
},
{ 
    name: "Chip-fu", 
    origin: "Paris, France", 
    year: 1999,
    yearEnd: 2008,
    genre: "Metalcore",
    anecdote: "Précurseurs du metalcore français. Ont ouvert la voie à la scène metalcore hexagonale. Séparés en 2008.",
    membres: ["Louis Lambert", "Matthieu Guyot", "Paul Semoroz", "Sylvain Bégot"]
},
{ 
    name: "Uneven Structure", 
    origin: "Metz, France", 
    year: 2008,
    yearEnd: null,
    genre: ["Djent", "Progressive Metal"],
    anecdote: "Djent progressif atmosphérique français. Februus est un album concept ambitieux et immersif.",
    membres: ["Matthieu Romarin", "Igor Omodei", "Aurélien Pereira", "Jérôme Colombelli"]
},
{ 
    name: "Gorod", 
    origin: "Bordeaux, France", 
    year: 1997,
    yearEnd: null,
    genre: ["Technical Death Metal", "Progressive Death Metal"],
    anecdote: "Death metal technique français de très haut niveau. Process of a New Decline est un chef-d'œuvre technique.",
    membres: ["Julien Deyres", "Mathieu Pascal", "Nicolas Alberny", "Karol Diers", "Ben Chèvreaux"]
},
{ 
    name: "Benighted", 
    origin: "Saint-Étienne, France", 
    year: 1998,
    yearEnd: null,
    genre: ["Brutal Death Metal", "Grindcore"],
    anecdote: "Brutal death/grind français extrême. L'un des groupes français les plus violents et techniques.",
    membres: ["Julien Truchan", "Fabien Desgardins", "Emmanuel Dalle", "Pierre Arnoux", "Kévin Paradis"]
},
{ 
    name: "Loudblast", 
    origin: "Lille, France", 
    year: 1986,
    yearEnd: null,
    genre: "Death Metal",
    anecdote: "Pionniers du death metal français. Actifs depuis les années 80, ils ont influencé toute la scène française.",
    membres: ["Stéphane Buriez", "Hervé Coquerel", "Frédéric Leclercq", "Drakh"]
},
{ 
    name: "Nightmare", 
    origin: "Grenoble, France", 
    year: 1979,
    yearEnd: null,
    genre: ["Heavy Metal", "Power Metal"],
    anecdote: "Vétérans du metal français. Plus de 40 ans de carrière. The Dominion Gate est leur trilogie conceptuelle.",
    membres: ["Maggy Luyckx", "Matt Asselberghs", "Yves Campion", "Mike Coquet"]
},
{ 
    name: "ADX", 
    origin: "Paris, France", 
    year: 1982,
    yearEnd: null,
    genre: "Heavy Metal",
    anecdote: "Légendes du heavy metal français. Execution est un classique de 1985. Phil Graillon est une figure du metal français.",
    membres: ["Phil Graillon", "Eric Louvart", "Jean-Luc Dumont", "Patrick Martin"]
},
{ 
    name: "Lofofora", 
    origin: "Paris, France", 
    year: 1989,
    yearEnd: null,
    genre: ["Nu Metal", "Alternative Metal"],
    anecdote: "Metal alternatif engagé politiquement. Chantent en français. Peuple de l'herbe est leur album culte.",
    membres: ["Reuno", "Phil", "Fab", "Tom"]
},
{ 
    name: "Smash Hit Combo", 
    origin: "Rennes, France", 
    year: 2008,
    yearEnd: null,
    genre: ["Metalcore", "Nintendocore"],
    anecdote: "Mélangent metalcore et samples de jeux vidéo 8-bit. Chiptunes et breakdowns. Concept unique en France.",
    membres: ["Yann", "Manu", "Kévin", "Julien", "Arnaud"]
},
{ 
    name: "Manimal", 
    origin: "Paris, France", 
    year: 2006,
    yearEnd: 2016,
    genre: "Deathcore",
    anecdote: "Deathcore français brutal. Ont marqué la scène française du genre. Séparés en 2016.",
    membres: ["Julien Deyres", "Thomas Collin", "Fred Bergeron", "Tom Norris"]
},
{ 
    name: "Novelists", 
    origin: "Paris, France", 
    year: 2013,
    yearEnd: null,
    genre: ["Metalcore", "Progressive Metalcore"],
    anecdote: "Metalcore progressif français moderne. Noir est un album mature et technique.",
    membres: ["Tobias Rische", "Florestan Durand", "Nicolas Delestrade", "Amael Durand", "Charles Blondeau"]
},
{ 
    name: "Hypno5e", 
    origin: "Montpellier, France", 
    year: 2003,
    yearEnd: null,
    genre: ["Post-Metal", "Experimental Metal"],
    anecdote: "Post-metal expérimental français. Mêlent metal, électronique et ambiances cinématiques. Très visuels en live.",
    membres: ["Emmanuel Jessua", "Thibault Dupont", "Grégoire Fray", "Sébastien Chouard"]
},
{ 
    name: "The Algorithm", 
    origin: "Perpignan, France", 
    year: 2009,
    yearEnd: null,
    genre: ["Djent", "Electronic Metal"],
    anecdote: "Projet solo de Rémi Gallego. Mélange djent, metal progressif et musique électronique. Entièrement instrumental.",
    membres: ["Rémi Gallego"]
},
{ 
    name: "Igorrr", 
    origin: "Paris, France", 
    year: 2005,
    yearEnd: null,
    genre: ["Avant-Garde Metal", "Experimental Metal", "Non Qualifiable"],
    anecdote: "Projet de Gautier Serre. Mélange death metal, baroque, breakcore et électro. Totalement inclassable et génial.",
    membres: ["Gautier Serre", "Laure Le Prunenec", "Laurent Lunoir", "Sylvain Bouvier"]
},
{ 
    name: "Klone", 
    origin: "Poitiers, France", 
    year: 1999,
    yearEnd: null,
    genre: ["Progressive Metal", "Alternative Metal"],
    anecdote: "Metal progressif atmosphérique. Le Grand Voyage est leur album le plus abouti. Influencés par Tool et Porcupine Tree.",
    membres: ["Yann Ligner", "Guillaume Bernard", "Aldrick Guadagnino", "Florent Marcadet", "Matthieu Le Roch"]
},
{ 
    name: "Hacride", 
    origin: "Poitiers, France", 
    year: 2001,
    yearEnd: 2018,
    genre: ["Death Metal", "Progressive Metal"],
    anecdote: "Death metal progressif technique. Amoeba est un album culte de la scène française. Séparés en 2018.",
    membres: ["Adrien Grousset", "Benoist Danneville", "Olivier Laffond", "Samuel Bourreau"]
},
{ 
    name: "Trepalium", 
    origin: "Toulouse, France", 
    year: 1991,
    yearEnd: null,
    genre: "Death Metal",
    anecdote: "Death metal français old-school. Voodoo Moonshine est considéré comme un classique du death français.",
    membres: ["Mathieu Galara", "David Kess", "Fred Viala", "Jon H."]
},
{ 
    name: "Sangdragon", 
    origin: "Paris, France", 
    year: 1985,
    yearEnd: null,
    genre: "Heavy Metal",
    anecdote: "Vétérans du heavy metal français. Première génération du metal hexagonal avec ADX et Trust.",
    membres: ["Didier Chateau", "Stéphane Marson", "Thierry Mattel", "Boris Kurylo"]
},
{ 
    name: "Carnival in Coal", 
    origin: "Amiens, France", 
    year: 1995,
    yearEnd: 2007,
    genre: ["Avant-Garde Metal", "Non Qualifiable"],
    anecdote: "Metal avant-gardiste totalement déjanté. Mélangeaient tous les genres possibles. Arno Strobl était un génie fou.",
    membres: ["Arno Strobl"]
},
{ 
    name: "Pleymo", 
    origin: "Paris, France", 
    year: 1997,
    yearEnd: 2007,
    genre: ["Nu Metal", "Rap Metal"],
    anecdote: "Nu metal français populaire dans les années 2000. Chantaient en français. Episode 2: Medecine Cake est leur succès.",
    membres: ["Mark Maggiori", "Benoit Julliard", "Fred Ceraudo", "Davy Portela", "Erik Devilloutreys"]
},
{ 
    name: "Phazm", 
    origin: "Strasbourg, France", 
    year: 2002,
    yearEnd: 2018,
    genre: ["Death Metal", "Industrial Metal"],
    anecdote: "Death metal industriel français cinématique. Scornful of Icons est un album conceptuel ambitieux. Séparés en 2018.",
    membres: ["Karl Sanders", "Vulture", "Kriss Morta", "Willy Vang"]
},
{ 
    name: "Evanescence", 
    origin: "Little Rock, USA", 
    year: 1995,
    yearEnd: null,
    genre: ["Gothic Metal", "Alternative Metal"],
    anecdote: "Bring Me to Life a été un énorme succès mondial. Amy Lee a une voix puissante et classique. Fallen s'est vendu à 17 millions.",
    membres: ["Amy Lee", "Tim McCord", "Troy McLawhorn", "Will Hunt", "Emma Anzai"]
},
{ 
    name: "Halestorm", 
    origin: "Red Lion, USA", 
    year: 1997,
    yearEnd: null,
    genre: ["Hard Rock", "Heavy Metal"],
    anecdote: "Lzzy Hale est une des meilleures rockeuses actuelles. I Miss the Misery a gagné un Grammy. Énergie de scène explosive.",
    membres: ["Lzzy Hale", "Arejay Hale", "Joe Hottinger", "Josh Smith"]
},
{ 
    name: "Alli Nicholas", 
    origin: "USA", 
    year: 2010,
    yearEnd: null,
    genre: ["Alternative Metal", "Post-Hardcore"],
    anecdote: "Chanteuse/guitariste du groupe Eyes Set to Kill. Voix puissante mêlant clean et screams.",
    membres: ["Alli Nicholas"]
},
{ 
    name: "Kami Kehoe", 
    origin: "USA", 
    year: 2015,
    yearEnd: null,
    genre: ["Metalcore", "Alternative Metal"],
    anecdote: "Chanteuse metalcore reconnue pour sa polyvalence vocale. A collaboré avec plusieurs groupes de la scène.",
    membres: ["Kami Kehoe"]
},
{ 
    name: "Chelsea Grin", 
    origin: "Salt Lake City, USA", 
    year: 2007,
    yearEnd: null,
    genre: "Deathcore",
    anecdote: "Deathcore brutal américain. Eternal Nightmare est un album référence du genre. Tom Barber a remplacé Alex Koehler.",
    membres: ["Tom Barber", "Stephen Rutishauser", "Jacob Harmond", "Pablo Viveros"]
},
{ 
    name: "Ice Nine Kills", 
    origin: "Boston, USA", 
    year: 2000,
    yearEnd: null,
    genre: ["Metalcore", "Horror Metal"],
    anecdote: "Metalcore théâtral inspiré par les films d'horreur. Chaque chanson est basée sur un film culte. Spencer Charnas est charismatique.",
    membres: ["Spencer Charnas", "Ricky Armellino", "Dan Sugarman", "Joe Occhiuti", "Patrick Galante"]
},
{ 
    name: "Lorna Shore", 
    origin: "New Jersey, USA", 
    year: 2009,
    yearEnd: null,
    genre: ["Deathcore", "Symphonic Deathcore"],
    anecdote: "Deathcore symphonique viral. To the Hellfire avec Will Ramos a explosé sur TikTok. Breakdowns monumentaux.",
    membres: ["Will Ramos", "Adam De Micco", "Andrew O'Connor", "Austin Archey"]
},
{ 
    name: "Amira Elfeky", 
    origin: "Égypte", 
    year: 2015,
    yearEnd: null,
    genre: ["Metalcore", "Death Metal", "Girl Metal"],
    anecdote: "Première chanteuse metal égyptienne. Connue pour ses reprises metal de chansons arabes. Growls puissants.",
    membres: ["Amira Elfeky"]
},
{ 
    name: "The Pretty Reckless", 
    origin: "New York, USA", 
    year: 2009,
    yearEnd: null,
    genre: ["Hard Rock", "Alternative Rock"],
    anecdote: "Taylor Momsen (Gossip Girl) au chant. Going to Hell est un album rock puissant. Son grunge avec attitude.",
    membres: ["Taylor Momsen", "Ben Phillips", "Mark Damon", "Jamie Perkins"]
},
{ 
    name: "Motionless In White", 
    origin: "Scranton, USA", 
    year: 2004,
    yearEnd: null,
    genre: ["Metalcore", "Gothic Metal"],
    anecdote: "Metalcore gothique théâtral. Esthétique horror et maquillage. Disguise a propulsé leur carrière.",
    membres: ["Chris Motionless", "Ricky Horror", "Ryan Sitkowski", "Vinny Mauro", "Justin Morrow"]
},
{ 
    name: "Deadlands", 
    origin: "Royaume-Uni", 
    year: 2015,
    yearEnd: null,
    genre: ["Metalcore", "Deathcore"],
    anecdote: "Metalcore/deathcore britannique moderne. Connus pour leurs breakdowns lourds et leur énergie scénique.",
    membres: ["Dan Aris", "Jona Weinhofen", "Craig Reynolds", "Alex Cressey", "Joe Williams"]
},
{ 
    name: "Bleed From Within", 
    origin: "Glasgow, Écosse", 
    year: 2005,
    yearEnd: null,
    genre: "Metalcore",
    anecdote: "Metalcore écossais puissant. Fracture a marqué leur retour. Mélangent groove et brutalité avec maîtrise.",
    membres: ["Scott Kennedy", "Craig Gowans", "Steven Jones", "Davie Provan", "Ali Richardson"]
},
{ 
    name: "Hanabie.", 
    origin: "Tokyo, Japon", 
    year: 2015,
    yearEnd: null,
    genre: ["Metalcore", "Kawaii Metal", "Nu Metal"],
    anecdote: "Le groupe a été formé par quatre amies du lycée en raison de leur admiration commune pour Maximum the Hormone, dans le cadre des activités de leur club de musique légère.",
    membres: ["Yukina", "Matsuri", "Hettsu"]
},
    ];
