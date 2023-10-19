const sun = "../Asset/Sun.png";
const moon = "../Asset/Moon.png";
var theme = "dark";
const container = document.getElementsByClassName("kotaklogoo")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);

var darkmode =
  localStorage.getItem("theme") == null
    ? "light"
    : localStorage.getItem("theme");
setCurrentTheme();

function setCurrentTheme() {
  console.log(darkmode);
  switch (darkmode) {
    case "dark":
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
      localStorage.setItem("theme", darkmode);
      break;
    case "light":
      darkmode = "dark";
      setDark();
      setDarkPartikel();
      localStorage.setItem("theme", darkmode);
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
  var element4 = document.getElementById("AchievementContent")
  var element5 = document.getElementById("particles-js");
  var element6 = document.getElementById("waves");

  if (darkmode == "dark") {
    element.classList.add("dark-mode");
    element2.classList.add("dark-mode2");
    element3.classList.remove("dark-mode2");
    element4.classList.add("darkmode_shadow");
    element5.classList.add("dark-mode7");
    element6.classList.remove("dark-mode8");
  } else {
    element.classList.remove("dark-mode");
    element2.classList.remove("dark-mode2");
    element3.classList.add("dark-mode2");
    element4.classList.remove("darkmode_shadow");
    element5.classList.remove("dark-mode7");
    element6.classList.add("dark-mode8");
  }
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


const clickableImages = document.querySelectorAll('.clickable-image');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

// Open modal when any of the images is clicked
clickableImages.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

ScrollReveal().reveal('.image-container', { delay: 1000});
ScrollReveal().reveal('.image-container2',{ delay: 2000});