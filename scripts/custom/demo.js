function getColor() {
    var colorblock = $('.get-color');
    colorblock.each(function () {
        var rgb = $(this).css('background-color');
        var hex = rgb2hex(rgb);
        var colorName = $.grep(this.className.split(" "), function (v, i) {
            return v.indexOf('bg-') === 0;
        }).join().replace(/bg-/g, '');
        $(this).find('.get-color-name').text(colorName);
        $(this).find('.get-rgb').text(rgb);
        $(this).find('.get-hex').text(hex);
        $(this).find('.get-map').text('color(' + colorName + ')');
    });
}
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

$(document).ready(function () {
    getColor();

    $(".burger").click(function () {
        $(".main-nav").toggleClass("open");
    });
});