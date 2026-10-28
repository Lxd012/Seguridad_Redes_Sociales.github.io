/* =========================================
   MENÚ PARA CELULARES
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* =========================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   QUIZ DE SEGURIDAD
========================================= */

function checkQuiz() {

    const answers = {

        q1: "b",

        q2: "b",

        q3: "a"

    };


    let score = 0;

    let answered = 0;


    for (let question in answers) {

        const selected =
            document.querySelector(
                `input[name="${question}"]:checked`
            );


        if (selected) {

            answered++;

            if (selected.value === answers[question]) {

                score++;

            }

        }

    }


    const result =
        document.getElementById("result");


    /* =====================================
       SI NO RESPONDIÓ TODAS
    ====================================== */

    if (answered < 3) {

        result.textContent =
            "⚠️ Responde las 3 preguntas antes de comprobar.";

        result.style.color = "#fde68a";

        return;

    }


    /* =====================================
       RESULTADO PERFECTO
    ====================================== */

    if (score === 3) {

        result.textContent =
            "🎉 ¡Excelente! Obtuviste 3 de 3 respuestas correctas.";

        result.style.color = "#86efac";

    }


    /* =====================================
       RESULTADO MEDIO
    ====================================== */

    else if (score === 2) {

        result.textContent =
            "👍 Muy bien. Obtuviste 2 de 3 respuestas correctas.";

        result.style.color = "#fde68a";

    }


    /* =====================================
       RESULTADO BAJO
    ====================================== */

    else {

        result.textContent =
            "📚 Obtuviste " +
            score +
            " de 3. Revisa los consejos e inténtalo nuevamente.";

        result.style.color = "#fecaca";

    }

}


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".security-box, .tip, .hero-card, .contact-box"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});