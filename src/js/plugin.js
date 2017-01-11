/**
 * Created by User on 2017/1/11.
 */
(function ($) {
    const shade = "red";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));