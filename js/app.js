const searchEl = document.querySelector("#search")
const tigerEl = document.querySelector("#tiger")
const lionEl = document.querySelector("#lion")
const bisonEl = document.querySelector("#bison")
const wolfEl = document.querySelector("#wolf")
const bearEl = document.querySelector("#bear")
const horseEl = document.querySelector("#horse")
const catEl = document.querySelector("#cat")
const foxEl = document.querySelector("#fox")
const donkeyEl = document.querySelector("#donkey")
const crocodileEl = document.querySelector("#crocodile")
const animalEl = document.querySelector("#animal")



setInterval(()=>{
            let word=searchEl.value
        
            switch(word.toLowerCase()){
                case "тигр":
                    tigerEl.style.display = "flex"
                    lionEl.style.display = "none"
                    bisonEl.style.display = "none"
                    bearEl.style.display = "none"
                    wolfEl.style.display ="none"
                    horseEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none" 
                break;
                case "лев":
                    lionEl.style.display = "flex" 
                    tigerEl.style.display = "none"
                    bisonEl.style.display = "none"
                    bearEl.style.display = "none"
                    wolfEl.style.display ="none"
                    horseEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none" 
                break;
                case "бизон":
                    bisonEl.style.display = "flex"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    bearEl.style.display = "none"
                    wolfEl.style.display ="none"
                    horseEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                break;
                case "медведь":
                    bearEl.style.display = "flex"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    wolfEl.style.display ="none"
                    horseEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                break;
                case "волк":
                    wolfEl.style.display ="flex"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    horseEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                break;
                case "лошадь":
                    horseEl.style.display = "flex"
                    wolfEl.style.display ="none"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    catEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                        break;
                case "кошка":
                    catEl.style.display = "flex"
                    horseEl.style.display = "none"
                    wolfEl.style.display ="none"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    foxEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                break;
                case "лиса":
                    foxEl.style.display = "flex"
                    catEl.style.display = "none"
                    horseEl.style.display = "none"
                    wolfEl.style.display ="none"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    donkeyEl.style.display ="none"
                    crocodileEl.style.display ="none"
                break;
                case "осел":
                    donkeyEl.style.display ="flex"
                    foxEl.style.display = "none"
                    catEl.style.display = "none"
                    horseEl.style.display = "none"
                    wolfEl.style.display ="none"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                    crocodileEl.style.display ="none"
                break;
                case "крокодил":
                    crocodileEl.style.display ="flex"
                    donkeyEl.style.display ="none"
                    foxEl.style.display = "none"
                    catEl.style.display = "none"
                    horseEl.style.display = "none"
                    wolfEl.style.display ="none"
                    bearEl.style.display = "none"
                    bisonEl.style.display = "none"
                    lionEl.style.display = "none" 
                    tigerEl.style.display = "none"
                break;
                        default:
                            console.log("Error404");
                    }
                
                
            },1000)
                
        
        