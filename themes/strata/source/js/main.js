(function($) {
    'use strict';

    $(document).ready(function() {
        // Smooth scrolling for anchor links
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 20
                }, 800);
            }
        });

        // Image loading effect
        $('img').on('load', function() {
            $(this).addClass('loaded');
        });

        // Mobile menu toggle (if needed in future)
        $('#menu-toggle').on('click', function() {
            $('#sidebar').toggleClass('active');
        });

        // Add active class to current nav item
        var currentPath = window.location.pathname;
        $('#nav a').each(function() {
            var href = $(this).attr('href');
            if (currentPath.indexOf(href) === 0 && href !== '/') {
                $(this).parent().addClass('active');
            } else if (currentPath === '/' && href === '/') {
                $(this).parent().addClass('active');
            }
        });

        // External links open in new tab
        $('a[href^="http"]').not('[href*="' + window.location.host + '"]').attr({
            target: '_blank',
            rel: 'noopener noreferrer'
        });
    });

})(jQuery);
