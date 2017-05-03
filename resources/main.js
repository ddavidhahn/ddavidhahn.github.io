﻿$(document).ready(function() {
    $('button.more-bio-button').click(function () {
        var $moreBio = $('div.more-bio');
        if ($moreBio.is( ":hidden" )) {
            $moreBio.slideDown();
            $(this).html('<b>Less <i class="fa fa-arrow-up" aria-hidden="true"></i>');
        } else {
            $moreBio.slideUp();
            $(this).html('<b>More <i class="fa fa-arrow-right" aria-hidden="true"></i></b></button>');
        }
    });
});