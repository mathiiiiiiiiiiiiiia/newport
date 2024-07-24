let lastScrollTop = 0;
const navbar = document.querySelector('nav');
const navbarHeight = navbar.clientHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
        // Scroll hacia abajo
        navbar.style.top = `-${navbarHeight}px`;
    } else {
        // Scroll hacia arriba
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll;
});

window.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("toggleCheckbox");
    const stylesheet = document.getElementById("stylesheet");
    const scriptElements = document.querySelectorAll("script[data-custom]");


    
    var currentStylesheet = "style.css";
    var currentScripts = ["script.js"];


    toggleCheckbox.addEventListener("change", function () {
        if (currentStylesheet === "style.css") {
        } else {
            currentStylesheet = "style.css";
            currentScripts = ["script.js"];
        }

        // Cambiar los archivos JavaScript
        for (const scriptElement of scriptElements) {
            scriptElement.parentNode.removeChild(scriptElement);
        }


        for (const scriptSrc of currentScripts) {
            const newScript = document.createElement("script");
            newScript.src = scriptSrc;
            newScript.setAttribute("data-custom", "true");
            document.body.appendChild(newScript);
        }
    });

    window.addEventListener("scroll", changeColorsOnScroll);


    // Agrega eventos de escucha para el color del texto al pasar el mouse
    for (const item of items_menu) {
        item.addEventListener("mouseenter", function () {
            this.style.color = noche ? "#ebb40c" : "#ebb40c";
        });
        item.addEventListener("mouseleave", function () {
            changeColorsOnScroll();
        });
    }
});

function llenarBarra(porcentaje, elementoId) {
    const progreso = document.getElementById(elementoId);
    progreso.style.width = porcentaje + '%'; // Establece el ancho de la barra de progreso
}

// Llena la barra de HTML al 80%
llenarBarra(80, "miProgreso");

// Llena la barra de CSS al 65%
llenarBarra(65, "miProgreso-css");

// Llena la barra de JS al 20%
llenarBarra(20, 'miProgreso-js');

// Llena la barra de Python al 0% (sin llenar)
llenarBarra(0, 'miProgreso-py');



let menuVisible = false;


function mostrar() {
    const menu = document.getElementById('menu2');
    var element = document.getElementById('eliminar');


    if (!menuVisible) {
        menu.style.left = '0';
        menuVisible = true;
        setTimeout(()=> {
        }, 1000)
    } else {
        menu.style.left = '100%';
        menuVisible = false;
        element = false;
        setTimeout(() => {
        }, 1000);
    }
}


function retrasarRedireccion(event) {
    event.preventDefault();
    setTimeout(function() {
      const destino = document.getElementById(event.target.getAttribute('href').substring(1));
      if (destino) {
        const offset = destino.offsetTop;
        window.scroll({
          top: offset,
          behavior: 'smooth'
        });
      }
    }, 1.5);
  }
 
