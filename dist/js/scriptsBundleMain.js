"use strict";$(document).ready(function(){$("a").click(function(){if(!this.classList.contains("not-smooth-scroll")&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length&&t||$("[name="+this.hash.slice(1)+"]"),t.length){var a=t.offset().top-10;return $("html,body").animate({scrollTop:a},1e3),!1}}})});
//# sourceMappingURL=maps/scriptsBundleMain.js.map