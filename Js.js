document.addEventListener("DOMContentLoaded", () => {
    console.log("Script chargé avec succès");

bands.sort((a, b) => a.name.localeCompare(b.name));

    const list = document.getElementById("list");
    const genreFilter = document.getElementById("genreFilter");
    const searchBar = document.getElementById("searchBar");
    let currentIndex = 0;

    // Extraire tous les genres uniques depuis les groupes
    const allGenresSet = new Set();
    bands.forEach(band => {
        if (Array.isArray(band.genre)) {
            band.genre.forEach(g => allGenresSet.add(g));
        } else {
            allGenresSet.add(band.genre);
        }
    });
    const allGenres = [...allGenresSet].sort();

    // Remplir le filtre des genres
    console.log("Ajout des genres dans le select...");
    allGenres.forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.textContent = g;
        genreFilter.appendChild(option);
    });
    console.log("Nombre total d'options:", genreFilter.options.length);

    // Extraire tous les pays uniques et remplir le filtre
    const paysFilter = document.getElementById("paysFilter");
    const allPays = [...new Set(bands.map(b => b.origin.split(',').pop().trim()))].sort();
    allPays.forEach(p => {
        const option = document.createElement('option');
        option.value = p;
        option.textContent = p;
        paysFilter.appendChild(option);
    });

    // Extraire toutes les années uniques et remplir le filtre
    const anneeFilter = document.getElementById("anneeFilter");
    const allYears = [...new Set(bands.map(b => b.year))].sort((a, b) => a - b);
    allYears.forEach(y => {
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        anneeFilter.appendChild(option);
    });

    const statusFilter = document.getElementById("statusFilter");

    // Calendrier Stranger Things - Du 25 décembre au 1er janvier
    const strangerDays = [
        { day: 25, type: "intro", message: "Bienvenue dans le compte à rebours de la Saison 5 !" },
        { day: 26, type: "announce", message: "🎬 ANNONCE OFFICIELLE 🎬\n\nLa Saison 5 de Stranger Things sortira en 2025 !\n\nNetflix a confirmé que ce sera la saison finale de la série culte." },
        { day: 27, type: "anecdote", message: "Le Demogorgon original était joué par deux acteurs en costume. Ses mouvements étaient chorégraphiés comme une danse pour rendre la créature plus fluide." },
        { day: 28, type: "anecdote", message: "Millie Bobby Brown se rasait vraiment la tête pour la saison 1. Elle a porté une perruque pour les saisons suivantes." },
        { day: 29, type: "anecdote", message: "Le générique d'introduction s'inspire directement des romans de Stephen King des années 80, notamment l'adaptation de 'Christine' (1983)." },
        { day: 30, type: "anecdote", message: "Hawkins National Laboratory a été filmé dans une vraie centrale désaffectée en Géorgie. L'atmosphère terrifiante était naturelle !" },
        { day: 31, type: "anecdote", message: "La chanson 'Running Up That Hill' de Kate Bush a connu une renaissance massive grâce à la saison 4, atteignant le top des charts 37 ans après sa sortie." },
        { day: 1, type: "announce", message: "🎉 BONNE ANNÉE 2025 ! 🎉\n\nCette année marque le grand final de Stranger Things !\n\nLa Saison 5 arrive bientôt... Préparez-vous pour l'ultime bataille contre le Monde à l'Envers." }
    ];

    const strangerEmojis = ["🔦", "🎭", "🚲", "⚡", "🍔", "🎮", "📻", "🌲"];

    // Initialiser le calendrier Stranger Things
    function initStrangerCalendar() {
        const strangerGrid = document.getElementById('strangerGrid');
        if (!strangerGrid) return;

        const today = new Date();
        const currentMonth = today.getMonth(); // 11 = décembre, 0 = janvier
        const currentDay = today.getDate();
        
        // MODE PRODUCTION : Les cases s'ouvrent selon les dates réelles
        const testMode = false; // NE PAS MODIFIER - Mode production activé
        
        // Charger les cases ouvertes
        let openedDays = [];
        try {
            const saved = localStorage.getItem('strangerOpened');
            if (saved) openedDays = JSON.parse(saved);
        } catch(e) {
            console.log("Erreur chargement calendrier Stranger Things");
        }

        strangerDays.forEach((item, index) => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'stranger-day';
            dayDiv.dataset.day = item.day;
            dayDiv.dataset.emoji = strangerEmojis[index % strangerEmojis.length];
            
            // Logique pour décembre (mois 11) et janvier (mois 0)
            let canOpen = false;
            if (testMode) {
                // MODE TEST : Tout est déverrouillé
                canOpen = true;
            } else {
                // MODE PRODUCTION : Vérifier les dates réelles
                if (item.day >= 25) {
                    // Jours de décembre (25-31)
                    canOpen = currentMonth === 11 && currentDay >= item.day;
                } else {
                    // Jour de janvier (1er)
                    canOpen = (currentMonth === 0 && currentDay >= item.day) || (currentMonth === 11 && currentDay === 31);
                }
            }
            
            const isOpened = openedDays.includes(item.day);
            const isToday = (item.day >= 25 && currentMonth === 11 && currentDay === item.day) || 
                           (item.day === 1 && currentMonth === 0 && currentDay === 1);
            
            if (!canOpen) {
                dayDiv.classList.add('locked');
            }
            
            if (isOpened) {
                dayDiv.classList.add('opened');
            }
            
            if (isToday && !isOpened) {
                dayDiv.classList.add('today');
            }
            
            const displayDay = item.day === 1 ? "1er" : item.day;
            dayDiv.innerHTML = `<span class="day-number">${displayDay}</span>`;
            
            dayDiv.addEventListener('click', () => {
                if (!canOpen) {
                    const monthName = item.day >= 25 ? "décembre" : "janvier";
                    alert(`🔦 Patience ! Cette case s'ouvrira le ${item.day} ${monthName} ! 🔦`);
                    return;
                }
                
                // Marquer comme ouvert
                if (!openedDays.includes(item.day)) {
                    openedDays.push(item.day);
                    try {
                        localStorage.setItem('strangerOpened', JSON.stringify(openedDays));
                    } catch(e) {
                        console.log("Erreur sauvegarde calendrier");
                    }
                    dayDiv.classList.add('opened');
                }
                
                // Fermer le calendrier
                const strangerCalendar = document.getElementById('strangerCalendar');
                const overlay = document.querySelector('.advent-overlay');
                strangerCalendar.classList.remove('open');
                overlay.classList.remove('show');
                
                // Afficher le message
                showStrangerMessage(item);
            });
            
            strangerGrid.appendChild(dayDiv);
        });
    }

    // Afficher le message Stranger Things
    function showStrangerMessage(item) {
        const dayText = item.day === 1 ? "1er janvier" : `${item.day} décembre`;
        
        if (item.type === "announce") {
            alert(`🔦 ${dayText} 🔦\n\n${item.message}`);
        } else if (item.type === "anecdote") {
            alert(`🔦 Le saviez-vous ? (${dayText}) 🔦\n\n${item.message}`);
        } else {
            alert(`🔦 ${dayText} 🔦\n\n${item.message}`);
        }
    }

    // Initialiser le calendrier Stranger Things
    initStrangerCalendar();

    // Calendrier de l'Avent - Groupes par jour avec styles différents
    const adventBands = [
        { day: 1, band: "Black Sabbath", genre: "Heavy Metal" },
        { day: 2, band: "Mayhem", genre: "Black Metal" },
        { day: 3, band: "Meshuggah", genre: "Djent" },
        { day: 4, band: "Nightwish", genre: "Symphonic Metal" },
        { day: 5, band: "Cannibal Corpse", genre: "Death Metal" },
        { day: 6, band: "Metallica", genre: "Thrash Metal" },
        { day: 7, band: "Sleep", genre: "Stoner Metal" },
        { day: 8, band: "Korn", genre: "Nu Metal" },
        { day: 9, band: "Opeth", genre: "Progressive Death Metal" },
        { day: 10, band: "Rammstein", genre: "Industrial Metal" },
        { day: 11, band: "Lamb of God", genre: "Groove Metal" },
        { day: 12, band: "DragonForce", genre: "Power Metal" },
        { day: 13, band: "Burzum", genre: "Atmospheric Black Metal" },
        { day: 14, band: "Deftones", genre: "Alternative Metal" },
        { day: 15, band: "Ghost", genre: "Non Qualifiable" },
        { day: 16, band: "Alcest", genre: "Blackgaze" },
        { day: 17, band: "Eluveitie", genre: "Folk Metal" },
        { day: 18, band: "Gojira", genre: "Progressive Metal" },
        { day: 19, band: "Slipknot", genre: "Nu Metal" },
        { day: 20, band: "Architects", genre: "Metalcore" },
        { day: 21, band: "Type O Negative", genre: "Gothic Metal" },
        { day: 22, band: "Sabaton", genre: "Power Metal" },
        { day: 23, band: "Tool", genre: "Progressive Metal" },
        { day: 24, band: "Iron Maiden", genre: "Heavy Metal" }
    ];

    const adventEmojis = ["🎁", "⭐", "🔔", "🕯️", "❄️", "🎄", "🎅", "🦌", "⛄", "🎀", "🌟", "🎊"];

    // Initialiser le calendrier de l'Avent
    function initAdventCalendar() {
        const adventGrid = document.getElementById('adventGrid');
        if (!adventGrid) return;

        const today = new Date();
        const currentMonth = today.getMonth(); // 0 = janvier, 11 = décembre
        const currentDay = today.getDate();
        
        // Charger les cases ouvertes
        let openedDays = [];
        try {
            const saved = localStorage.getItem('adventOpened');
            if (saved) openedDays = JSON.parse(saved);
        } catch(e) {
            console.log("Erreur chargement calendrier");
        }

        adventBands.forEach((item, index) => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'advent-day';
            dayDiv.dataset.day = item.day;
            dayDiv.dataset.emoji = adventEmojis[index % adventEmojis.length];
            
            // Vérifier si la case peut être ouverte
            const canOpen = currentMonth === 11 && currentDay >= item.day; // Décembre = mois 11
            const isOpened = openedDays.includes(item.day);
            const isToday = currentMonth === 11 && currentDay === item.day;
            
            if (!canOpen) {
                dayDiv.classList.add('locked');
            }
            
            if (isOpened) {
                dayDiv.classList.add('opened');
            }
            
            if (isToday && !isOpened) {
                dayDiv.classList.add('today');
            }
            
            dayDiv.innerHTML = `<span class="day-number">${item.day}</span>`;
            
            dayDiv.addEventListener('click', () => {
                if (!canOpen) {
                    alert(`🎄 Patience ! Cette case s'ouvrira le ${item.day} décembre ! 🎄`);
                    return;
                }
                
                // Marquer comme ouvert
                if (!openedDays.includes(item.day)) {
                    openedDays.push(item.day);
                    try {
                        localStorage.setItem('adventOpened', JSON.stringify(openedDays));
                    } catch(e) {
                        console.log("Erreur sauvegarde calendrier");
                    }
                    dayDiv.classList.add('opened');
                }
                
                // Fermer le calendrier
                adventCalendar.classList.remove('open');
                overlay.classList.remove('show');
                
                // Afficher le groupe du jour
                showAdventBand(item.band, item.genre, item.day);
            });
            
            adventGrid.appendChild(dayDiv);
        });
    }

    // Afficher le groupe du jour
    function showAdventBand(bandName, genreName, day) {
        const band = bands.find(b => b.name === bandName);
        if (!band) return;
        
        // Réinitialiser les filtres
        searchBar.value = '';
        genreFilter.value = 'allGenres';
        paysFilter.value = 'allPays';
        anneeFilter.value = 'allAnnees';
        statusFilter.value = 'allStatus';
        
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        
        // Afficher tous les groupes
        displayBands();
        
        // Trouver et scroller vers le groupe
        setTimeout(() => {
            const bandDivs = document.querySelectorAll('.band');
            for (let i = 0; i < bandDivs.length; i++) {
                if (bandDivs[i].querySelector('strong').textContent === bandName) {
                    bandDivs[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const info = bandDivs[i].querySelector('.info');
                    info.style.display = 'block';
                    
                    // Effet de highlight
                    bandDivs[i].style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.9)';
                    bandDivs[i].style.transform = 'scale(1.05)';
                    
                    setTimeout(() => {
                        bandDivs[i].style.boxShadow = '';
                        bandDivs[i].style.transform = '';
                    }, 2000);
                    
                    break;
                }
            }
        }, 100);
        
        // Message personnalisé
        alert(`🎄 Jour ${day} : Découvrez ${bandName} ! 🎄\n\nGenre : ${genreName}\n\nBonne écoute ! 🎅🤘`);
    }

    // Initialiser le calendrier
    initAdventCalendar();

    // Gestion ouverture/fermeture du calendrier
    const adventBtn = document.getElementById('adventBtn');
    const adventCalendar = document.getElementById('adventCalendar');
    const closeAdvent = document.getElementById('closeAdvent');
    
    const strangerBtn = document.getElementById('strangerBtn');
    const strangerCalendar = document.getElementById('strangerCalendar');
    const closeStranger = document.getElementById('closeStranger');
    
    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.className = 'advent-overlay';
    document.body.appendChild(overlay);
    
    if (adventBtn) {
        adventBtn.addEventListener('click', () => {
            adventCalendar.classList.add('open');
            overlay.classList.add('show');
        });
    }
    
    if (closeAdvent) {
        closeAdvent.addEventListener('click', () => {
            adventCalendar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }
    
    if (strangerBtn) {
        strangerBtn.addEventListener('click', () => {
            strangerCalendar.classList.add('open');
            overlay.classList.add('show');
        });
    }
    
    if (closeStranger) {
        closeStranger.addEventListener('click', () => {
            strangerCalendar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }
    
    // Fermer en cliquant sur l'overlay
    overlay.addEventListener('click', () => {
        adventCalendar.classList.remove('open');
        strangerCalendar.classList.remove('open');
        overlay.classList.remove('show');
    });

    // Système de favoris
    let favorites = [];
    
    // Charger les favoris sauvegardés
    try {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
        }
    } catch(e) {
        console.log("Impossible de charger les favoris");
    }

    // Compteur de groupes
    function updateCounter(count) {
        const countElement = document.getElementById('countNumber');
        if (countElement) {
            countElement.textContent = count;
        }
    }

    function displayBands(filter = "", genre = "allGenres", pays = "allPays", annee = "allAnnees", status = "allStatus") {
        list.innerHTML = "";
        const filtered = bands.filter(b => {
            const matchesName = b.name.toLowerCase().includes(filter.toLowerCase());
            const matchesGenre = genre === "allGenres" || 
                (Array.isArray(b.genre) ? b.genre.includes(genre) : b.genre === genre);
            const matchesPays = pays === "allPays" || b.origin.includes(pays);
            const matchesAnnee = annee === "allAnnees" || b.year == annee;
            const matchesStatus = status === "allStatus" || 
                (status === "actif" && b.yearEnd === null) ||
                (status === "separe" && b.yearEnd !== null);
            
            return matchesName && matchesGenre && matchesPays && matchesAnnee && matchesStatus;
        });
        
        console.log(`Affichage de ${filtered.length} groupe(s)`);
        updateCounter(filtered.length);
        
        filtered.forEach((band, index) => {
            const container = document.createElement("div");
            container.className = "band";
            const genreDisplay = Array.isArray(band.genre) ? band.genre.join(", ") : band.genre;
            const isFavorite = favorites.includes(band.name);
            
            const detailBtn = band.detailPage
                ? `<a href="${band.detailPage}" class="detail-btn" onclick="event.stopPropagation()">Détails</a>`
                : '';

            container.innerHTML = `
                <div class="band-header">
                    <strong>${band.name}</strong>
                    <span class="favorite-btn ${isFavorite ? 'active' : ''}" data-band="${band.name}">⭐</span>
                </div>
                <div class="info">
                    <p><strong>Origine :</strong> ${band.origin}</p>
                    <p><strong>Période d'activité :</strong> ${band.year}${band.yearEnd ? ` - ${band.yearEnd}` : ' - Aujourd\'hui'}</p>
                    <p><strong>Genre(s) :</strong> ${genreDisplay}</p>
                    <p><strong>Anecdote :</strong> ${band.anecdote}</p>
                    <p><strong>Membres actuels :</strong> ${band.membres.join(", ")}</p>
                    ${detailBtn}
                </div>
            `;
            
            container.addEventListener("click", (e) => {
                if (!e.target.classList.contains('favorite-btn')) {
                    const info = container.querySelector(".info");
                    info.style.display = info.style.display === "block" ? "none" : "block";
                }
            });
            
            list.appendChild(container);
        });
    }

    // Gérer les clics sur les étoiles
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-btn')) {
            e.stopPropagation();
            
            const bandName = e.target.dataset.band;
            
            if (favorites.includes(bandName)) {
                favorites = favorites.filter(name => name !== bandName);
                e.target.classList.remove('active');
            } else {
                favorites.push(bandName);
                e.target.classList.add('active');
            }
            
            try {
                localStorage.setItem('favorites', JSON.stringify(favorites));
            } catch(err) {
                console.log("Impossible de sauvegarder les favoris");
            }
        }
    });

    // Bouton pour afficher les favoris
    let showingFavorites = false;
    const favoritesBtn = document.getElementById('favoritesBtn');
    
    if (favoritesBtn) {
        favoritesBtn.addEventListener('click', () => {
            showingFavorites = !showingFavorites;
            
            if (showingFavorites) {
                favoritesBtn.textContent = '🔙 Tous les groupes';
                favoritesBtn.style.background = '#4CAF50';
                
                list.innerHTML = "";
                const favoriteBands = bands.filter(b => favorites.includes(b.name));
                
                if (favoriteBands.length === 0) {
                    list.innerHTML = '<div class="band"><strong>Aucun favori pour le moment</strong><p style="margin-top:10px;">Cliquez sur l\'étoile ⭐ à côté d\'un groupe pour l\'ajouter à vos favoris !</p></div>';
                    updateCounter(0);
                    return;
                }
                
                updateCounter(favoriteBands.length);
                favoriteBands.forEach(band => {
                    const container = document.createElement("div");
                    container.className = "band";
                    const genreDisplay = Array.isArray(band.genre) ? band.genre.join(", ") : band.genre;
                    const detailBtnFav = band.detailPage
                        ? `<a href="${band.detailPage}" class="detail-btn" onclick="event.stopPropagation()">Détails</a>`
                        : '';

                    container.innerHTML = `
                        <div class="band-header">
                            <strong>${band.name}</strong>
                            <span class="favorite-btn active" data-band="${band.name}">⭐</span>
                        </div>
                        <div class="info">
                            <p><strong>Origine :</strong> ${band.origin}</p>
                            <p><strong>Période d'activité :</strong> ${band.year}${band.yearEnd ? ` - ${band.yearEnd}` : ' - Aujourd\'hui'}</p>
                            <p><strong>Genre(s) :</strong> ${genreDisplay}</p>
                            <p><strong>Anecdote :</strong> ${band.anecdote}</p>
                            <p><strong>Membres actuels :</strong> ${band.membres.join(", ")}</p>
                            ${detailBtnFav}
                        </div>
                    `;
                    
                    container.addEventListener("click", (e) => {
                        if (!e.target.classList.contains('favorite-btn')) {
                            const info = container.querySelector(".info");
                            info.style.display = info.style.display === "block" ? "none" : "block";
                        }
                    });
                    
                    list.appendChild(container);
                });
            } else {
                favoritesBtn.textContent = '⭐ Mes favoris';
                favoritesBtn.style.background = '';
                displayBands(searchBar.value, genreFilter.value, paysFilter.value, anneeFilter.value, statusFilter.value);
            }
        });
    }

    searchBar.addEventListener("input", e => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        displayBands(e.target.value, genreFilter.value, paysFilter.value, anneeFilter.value, statusFilter.value);
    });

    genreFilter.addEventListener("change", e => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        console.log("Genre sélectionné:", e.target.value);
        displayBands(searchBar.value, e.target.value, paysFilter.value, anneeFilter.value, statusFilter.value);
    });

    paysFilter.addEventListener("change", e => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        console.log("Pays sélectionné:", e.target.value);
        displayBands(searchBar.value, genreFilter.value, e.target.value, anneeFilter.value, statusFilter.value);
    });

    anneeFilter.addEventListener("change", e => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        console.log("Année sélectionnée:", e.target.value);
        displayBands(searchBar.value, genreFilter.value, paysFilter.value, e.target.value, statusFilter.value);
    });

    statusFilter.addEventListener("change", e => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        console.log("Statut sélectionné:", e.target.value);
        displayBands(searchBar.value, genreFilter.value, paysFilter.value, anneeFilter.value, e.target.value);
    });

    document.getElementById("randomBtn").addEventListener("click", () => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        
        const currentGenre = genreFilter.value;
        const currentPays = paysFilter.value;
        const currentAnnee = anneeFilter.value;
        const currentStatus = statusFilter.value;
        
        const filteredBands = bands.filter(b => {
            const matchesGenre = currentGenre === "allGenres" || 
                (Array.isArray(b.genre) ? b.genre.includes(currentGenre) : b.genre === currentGenre);
            const matchesPays = currentPays === "allPays" || b.origin.includes(currentPays);
            const matchesAnnee = currentAnnee === "allAnnees" || b.year == currentAnnee;
            const matchesStatus = currentStatus === "allStatus" || 
                (currentStatus === "actif" && b.yearEnd === null) ||
                (currentStatus === "separe" && b.yearEnd !== null);
            
            return matchesGenre && matchesPays && matchesAnnee && matchesStatus;
        });
        
        if (filteredBands.length === 0) {
            alert("Aucun groupe disponible avec ces filtres !");
            return;
        }
        
        displayBands(searchBar.value, genreFilter.value, paysFilter.value, anneeFilter.value, statusFilter.value);
        
        const randomBand = filteredBands[Math.floor(Math.random() * filteredBands.length)];
        const bandDivs = document.querySelectorAll('.band');
        
        for (let i = 0; i < bandDivs.length; i++) {
            if (bandDivs[i].querySelector('strong').textContent === randomBand.name) {
                setTimeout(() => {
                    bandDivs[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const info = bandDivs[i].querySelector('.info');
                    info.style.display = 'block';
                }, 100);
                break;
            }
        }
    });

    document.getElementById("firstBtn").addEventListener("click", () => {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesBtn.textContent = '⭐ Mes favoris';
            favoritesBtn.style.background = '';
        }
        
        currentIndex = 0;
        displayBands(searchBar.value, genreFilter.value, paysFilter.value, anneeFilter.value, statusFilter.value);
        
        setTimeout(() => {
            const bandDivs = document.querySelectorAll('.band');
            if (bandDivs[0]) {
                bandDivs[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
                const info = bandDivs[0].querySelector('.info');
                info.style.display = 'block';
            }
        }, 100);
    });

    function scrollToBand(index) {
        const bandDivs = document.querySelectorAll('.band');
        if (bandDivs[index]) {
            bandDivs[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            const info = bandDivs[index].querySelector('.info');
            info.style.display = 'block';
        }
    }

    // Système de thèmes
    const themeDark = document.getElementById('themeDark');
    const themeLight = document.getElementById('themeLight');
    const themeColor = document.getElementById('themeColor');
    const themeNoel = document.getElementById('themeNoel');
    const themeStranger = document.getElementById('themeStranger');
    const body = document.body;

    // Vérifier si on est entre le 25 décembre et le 1er janvier
    function isStrangerThingsPeriod() {
        const today = new Date();
        const month = today.getMonth(); // 11 = décembre, 0 = janvier
        const day = today.getDate();
        
        // Du 25 au 31 décembre OU le 1er janvier
        return (month === 11 && day >= 25) || (month === 0 && day === 1);
    }

    // Vérifier si on est dans la période de Noël (1er au 24 décembre)
    function isNoelPeriod() {
        const today = new Date();
        const month = today.getMonth(); // 11 = décembre
        const day = today.getDate();
        
        // Du 1er au 24 décembre uniquement
        return month === 11 && day >= 1 && day <= 24;
    }

    // Masquer/afficher les boutons de thème selon la période
    function updateThemeButtons() {
        if (isStrangerThingsPeriod()) {
            // Période Stranger Things (25 déc - 1er jan) : cacher Noël, montrer Stranger Things
            if (themeNoel) themeNoel.style.display = 'none';
            if (themeStranger) themeStranger.style.display = 'inline-block';
        } else if (isNoelPeriod()) {
            // Période Noël (1-24 déc) : montrer Noël, cacher Stranger Things
            if (themeNoel) themeNoel.style.display = 'inline-block';
            if (themeStranger) themeStranger.style.display = 'none';
        } else {
            // Reste de l'année : cacher les deux thèmes
            if (themeNoel) themeNoel.style.display = 'none';
            if (themeStranger) themeStranger.style.display = 'none';
        }
    }

    // Appeler au chargement
    updateThemeButtons();

    if (themeDark && themeLight && themeColor && themeNoel && themeStranger) {
        console.log("Boutons de thème trouvés !");

        try {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            body.className = savedTheme === 'dark' ? '' : `theme-${savedTheme}`;
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            if (savedTheme === 'dark') themeDark.classList.add('active');
            else if (savedTheme === 'light') themeLight.classList.add('active');
            else if (savedTheme === 'color') themeColor.classList.add('active');
            else if (savedTheme === 'noel') themeNoel.classList.add('active');
            else if (savedTheme === 'stranger') themeStranger.classList.add('active');
        } catch(e) {
            console.log("Erreur chargement thème:", e);
        }

        themeDark.addEventListener('click', () => {
            console.log("Thème sombre cliqué");
            body.className = '';
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            themeDark.classList.add('active');
            try {
                localStorage.setItem('theme', 'dark');
            } catch(e) {
                console.log("localStorage non disponible");
            }
        });

        themeLight.addEventListener('click', () => {
            console.log("Thème clair cliqué");
            body.className = 'theme-light';
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            themeLight.classList.add('active');
            try {
                localStorage.setItem('theme', 'light');
            } catch(e) {
                console.log("localStorage non disponible");
            }
        });

        themeColor.addEventListener('click', () => {
            console.log("Thème coloré cliqué");
            body.className = 'theme-color';
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            themeColor.classList.add('active');
            try {
                localStorage.setItem('theme', 'color');
            } catch(e) {
                console.log("localStorage non disponible");
            }
        });

        themeNoel.addEventListener('click', () => {
            console.log("Thème Noël cliqué");
            body.className = 'theme-noel';
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            themeNoel.classList.add('active');
            try {
                localStorage.setItem('theme', 'noel');
            } catch(e) {
                console.log("localStorage non disponible");
            }
        });

        themeStranger.addEventListener('click', () => {
            console.log("Thème Stranger Things cliqué");
            body.className = 'theme-stranger';
            document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
            themeStranger.classList.add('active');
            try {
                localStorage.setItem('theme', 'stranger');
            } catch(e) {
                console.log("localStorage non disponible");
            }
        });
    } else {
        console.error("ERREUR: Boutons de thème non trouvés dans le HTML !");
    }

    // Bouton clear search
    const clearSearchBtn = document.getElementById('clearSearch');
    if (clearSearchBtn) {
        searchBar.addEventListener('input', (e) => {
            if (e.target.value) {
                clearSearchBtn.classList.add('show');
            } else {
                clearSearchBtn.classList.remove('show');
            }
        });

        clearSearchBtn.addEventListener('click', () => {
            searchBar.value = '';
            clearSearchBtn.classList.remove('show');
            displayBands('', genreFilter.value, paysFilter.value, anneeFilter.value, statusFilter.value);
        });
    } else {
        console.error("Bouton clearSearch non trouvé !");
    }

    displayBands();
});