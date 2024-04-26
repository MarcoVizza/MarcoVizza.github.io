document.addEventListener("DOMContentLoaded", function () {
    // Funzione per rimuovere la classe 'active' da tutti i link nella navbar
    function removeActiveClass() {
        document.querySelectorAll(".navbar .nav-link").forEach(function (link) {
            link.classList.remove("active");
        });
    }

    window.addEventListener("scroll", function () {
        // Ottieni tutte le sezioni
        var sections = document.querySelectorAll("section");
        sections.forEach(function (section) {
            // Controlla se la sezione è visibile nella finestra
            var rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                // Rimuovi la classe 'active' da tutti i link nella navbar
                removeActiveClass();

                // Ottieni l'id della sezione
                var id = section.getAttribute("id");

                // Aggiungi la classe 'active' al link corrispondente nella navbar
                document.querySelector(".navbar .nav-link[href='#" + id + "']").classList.add("active");
            }
        });
    });

    /* =====================================================
		SCROLLSPY DI BOOTSTRAP
	===================================================== */

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });
});