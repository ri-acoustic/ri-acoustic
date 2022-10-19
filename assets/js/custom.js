
import data from '../json/data.json' assert {type: 'json'};
var main = (function ($) {
    // once the page is loaded go to index2.html
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    window.onload = function () {
        const divs = $("#thumbnails article").get().sort(function () {
            return Math.round(Math.random()) - 1; //random so we get the right +/- combo
        }).slice(0, 23);
        $(divs).appendTo(divs[0].parentNode).show();
        if (!isMobile) {
            setTimeout(() => {
                $("#thumbnails article .thumbnail").first()[0].click()
            }, 500);
        }
    }
})(jQuery); 