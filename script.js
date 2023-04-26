const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const active = document.querySelector(".active");
const close = document.querySelector("#close");


menu.onclick = function(){
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
close.onclick = function(){
    menu.classList.toggle('bx-x');

    navlist.classList.toggle('open');

}

const header = document.getElementById("myHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY >= header.offsetHeight) {
    header.classList.add("header-scrolled");
    active.classList.remove('active');
  } else {
    header.classList.remove("header-scrolled");
    active.classList.add('active');
  }
});

// Get the list of categories and the cards
const categories = document.querySelectorAll(".gallery ul li");
const cards = document.querySelectorAll(".gallery .card");

// Add a click event listener to each category
categories.forEach((category) => {
  category.addEventListener("click", () => {
    // Remove the "active" class from all categories
    categories.forEach((c) => c.classList.remove("active"));

    // Add the "active" class to the clicked category
    category.classList.add("active");

    // Get the name of the selected category
    const selectedCategory = category.innerText;

    // Loop through all cards and show/hide them based on the category
    cards.forEach((card) => {
      const cardCategory = card.querySelector(".category").innerText;
      if (selectedCategory === "All" || cardCategory === selectedCategory) {
        card.style.opacity = "0";
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, 100);
      } else {
        card.style.display = "none";
      }
    });
  });
});



// Get the modal overlay and the image container
const modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
const modalImage = document.createElement("div");
modalImage.classList.add("modal-image");

// Add the image to the modal
function displayModalImage(imgSrc) {
  const img = document.createElement("img");
  img.src = imgSrc;
  modalImage.innerHTML = "";
  modalImage.appendChild(img);
}

// Handle the click event on the images
const galleryImages = document.querySelectorAll(".images .card img");
galleryImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault();
    const imgSrc = event.target.src;
    displayModalImage(imgSrc);
    modalOverlay.appendChild(modalImage);
    document.body.appendChild(modalOverlay);
  });
});

// Handle the click event on the modal overlay to close the modal
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    document.body.removeChild(modalOverlay);
  }
});


$('.slick_slide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const answer = question.querySelector('.answr');
  const add = question.querySelector('.add');

  question.addEventListener('click', () => {
    questions.forEach((q) => {
      const a = q.querySelector('.answr');
      if (q !== question && a.style.display === 'block') {
        a.style.display = 'none';
        a.style.height = '0px';
        q.classList.remove('open');
      }
    });

    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    answer.style.height = answer.style.height === 'auto' ? '0px' : 'auto';
    question.classList.toggle('open');

    // Change the ri-add-line icon to ri-close-line icon
    const addIcon = add.querySelector('i');
    if (addIcon.classList.contains('ri-add-line')) {
      addIcon.classList.remove('ri-add-line');
      addIcon.classList.add('ri-close-line');
      add.innerHTML = add.innerHTML.replace('Add', 'Close');
    } else {
      addIcon.classList.remove('ri-close-line');
      addIcon.classList.add('ri-add-line');
      add.innerHTML = add.innerHTML.replace('Close', 'Add');
    }
  });
});

// -----------------------------------------------Dark mode------------------------------


const darkmode = document.getElementById('dark-mode');
const hero = document.getElementById('hero-section');
const logo = document.getElementById('logo');

darkmode.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    hero.style.background = "white";
    darkmode.setAttribute('id', 'light-mode');
    logo.src= "images/logo-dark.png"
    particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 1100
        }
      },
      "color": {
        "value": "#000"
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
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
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
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
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
    
  } else {
    hero.style.background = ""; // remove the background style if dark-theme is not present
    darkmode.setAttribute('id', 'dark-mode');
    logo.src= "images/logo-light.png"
    particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 1100
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
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
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
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
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
}
