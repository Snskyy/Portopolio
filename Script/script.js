const sun = "./Asset/Sun.png";
const moon = "./Asset/Moon.png"
const container = document.getElementsByClassName("kotaklogoo")[0];
console.log(container);
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

var darkmode = localStorage.getItem("theme") == null ? "light" : localStorage.getItem("theme")
setCurrentTheme()

function setCurrentTheme(){
    console.log(darkmode);
    switch(darkmode){
        case "dark" :
            setDark();
            
            break;
        case "light":
            setLight();
            
            break;
    }
}

function setTheme() {
    switch (darkmode) {
    case "dark":
        darkmode = "light";
        setLight();
        setLightPartikel();
        
        localStorage.setItem('theme', darkmode);
        break;
    case "light":
        darkmode = "dark";
        setDark();
        setDarkPartikel();

        localStorage.setItem('theme', darkmode);
        break;
    }
}

function setLight() {
    themeIcon.src = sun;
    myFunction();
}

function setDark() {
    themeIcon.src = moon;
    myFunction();
}

function myFunction() {
   var element = document.body;
   var element2 = document.getElementById("header");
   var element3 = document.getElementById("footer");
   var element4 = document.getElementById("content1");
   var element5 = document.getElementById("content2");
   var element6 = document.getElementById("content3");
   var element7 = document.getElementById("content4");
   var element8 = document.getElementById("last-desain-project");
   var element9 = document.getElementById("particles-js");
   var element10 = document.getElementById("waves");
   console.log(element9);
   if(darkmode == "dark"){
    element.classList.add("dark-mode");
    element2.classList.add("dark-mode2");
    element3.classList.remove("dark-mode2");
    element4.classList.add("dark-mode3");
    element5.classList.add("dark-mode4");
    element6.classList.add("dark-mode9");
    element7.classList.add("dark-mode4");
    element8.classList.add("dark-mode5");  
    element9.classList.add("dark-mode7");  
   
    element10.classList.remove("dark-mode8");  
  } else{
    element.classList.remove("dark-mode");
    element2.classList.remove("dark-mode2");

    element3.classList.add("dark-mode2");
    element4.classList.remove("dark-mode3");
    element5.classList.remove("dark-mode4");
    element6.classList.remove("dark-mode9");
    element7.classList.remove("dark-mode4");
    element8.classList.remove("dark-mode5");  
    element9.classList.remove("dark-mode7"); 
    element10.classList.add("dark-mode8");   

   

   }
 
}


const app = document.getElementById('app');

function loadPage(pageName) {
    fetch(pageName + '.html') // Misalnya, dapatkan konten dari file HTML yang sesuai
        .then(response => response.text())
        .then(content => {
            app.innerHTML = content;
        });
}


function setDarkPartikel(){
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 1000,
          "height": 10000
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "grab"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
  );
}


function setLightPartikel(){
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 1000,
          "height": 10000
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "grab"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
}