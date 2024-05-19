function toggleVideo(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.pause();
    trailer.classList.toggle('active')
}


const MOVIE = [
    {title:"Dune-2-title.png",
    background:"bg-Dune.jpg",
    ageRestriction:"18+",
    year:"2024",
    genre:"Thriller,War",
    duration:'2h 10min',
    description:"Dune Part One (2021) Dune (2021) Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet’s exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity’s greatest potential-only those who can conquer their fear will survive.",
    },
    {title:"Rent-a-Girlfriend-title.png",
    background:"bg-Rent-a-Girlfriend.jpg",
    ageRestriction:"18+",
    year:"2020",
    genre:"Anime",
    duration:'26h 40min',
    description:"Rent a Girlfriend : After being dumped by his girlfriend, a college student enlists a dating service to “rent” a girlfriend who, unbeknownst to him, happens to be both a fellow student and his neighbor.",
    },
    {title:"Queen-of-Tears.png",
    background:"bg-Queen-of-Tears.jpg",
    ageRestriction:"16+",
    year:"2024",
    genre:"K-drama",
    duration:'18h 25min',
    description:"A miraculous love story of a married couple overcoming a dizzying crisis. Hae-in found out about her illness and informs a tragic news to her husband then they both tryied to over come her illness ",
    },
    {title:"Spy_x_Family-2.png",
    background:"Spy-X-Family.jpg",
    ageRestriction:"16+",
    year:"2018",
    genre:"Anime",
    duration:'10h 40min',
    description:"Spy x Family Spy × Family A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    },
    {title:"Spirited_Away-title.png",
    background:"bg-sprited-away.jpg",
    ageRestriction:"10+",
    year:"2001",
    genre:"Anime,Kids",
    duration:'2h 40min',
    description:"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    },
    {title:"Naruto_Shippūden-title.png",
    background:"bg-naruto.jpg",
    ageRestriction:"10+",
    year:"2000",
    genre:"Anime",
    duration:'20h 40min',
    description:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    },
  
    ]

function ChangeContent(indexPosition){
    const id = parseInt(indexPosition)
    const titleImage = document.getElementById('title')
    const title  = MOVIE[id].title
    const release = MOVIE[id].year
    const ageRestriction = MOVIE[id].ageRestriction
    const duration = MOVIE[id].duration
    const summary = MOVIE[id].description
    const genre = MOVIE[id].genre
    const backgroundImage = MOVIE[id].background
    const backgroundAddress = document.getElementById('background')
    document.getElementById('release').innerHTML = release
    document.getElementById('age-restriction').innerHTML = ageRestriction
    document.getElementById('genre').innerHTML = genre
    document.getElementById('duration').innerHTML = duration
    document.getElementById('description').innerHTML =summary
    titleImage.src = `images/title/${title}` 
    backgroundAddress.style.background = `url('images/bg/${backgroundImage}')`
    backgroundAddress.style.backgroundSize = 'cover';
    backgroundAddress.style.backgroundPosition = 'center';
}

function sliderButton(){
    document.getElementById('nav-bar').style.right = '0';
}

function slidebarDeactive(){
    document.getElementById('nav-bar').style.right = '-100%';
}

function searchBarToggleDown(){
    
    document.querySelector('.search-function').style.top = '50%';
}

function searchBarToggleUp(){
    document.querySelector('.search-function').style.top = '-100%';
}

