$(document).ready(function() {
    // Initialisation
    let $grid = $('.portfolio-container');
    let $items = $('.portfolio-item');
    let $filters = $('#portfolio-flters li');

    // Fonction de filtrage
    function filterItems(filter) {
        $items.each(function() {
            let $item = $(this);
            if (filter === '*' || $item.hasClass(filter.substring(1))) {
                $item.removeClass('hide').fadeIn(300);
            } else {
                $item.addClass('hide').fadeOut(300);
            }
        });
    }

    // Gestion des clics sur les filtres
    $filters.on('click', function(e) {
        e.preventDefault();
        
        // Mise à jour de la classe active
        $filters.removeClass('filter-active');
        $(this).addClass('filter-active');

        // Filtrage des éléments
        let filterValue = $(this).attr('data-filter');
        filterItems(filterValue);
    });

    // Animation au défilement (si vous utilisez AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Animation initiale
    $items.addClass('animate').attr('data-animate', 'fadeInUp');
});