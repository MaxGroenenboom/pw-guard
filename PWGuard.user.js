// ==UserScript==
// @name        PWGuard
// @namespace   MG
// @description Warns the user for non-secure password fields.
// @include     *
// @version     1.0.2
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL   https://github.com/MaxGroenenboom/pw-guard/raw/master/PWGuard.user.js
// ==/UserScript==

var $ = jQuery.noConflict(true);

if(window.top === window.self) {
    console.log("Loaded script: " + GM_info.script.namespace + ":" + GM_info.script.name + ":" + GM_info.script.version);
    
    function doCheck() {
        var content = $("input[type=password]").not(".PWGChecked");
        content.each(function() {
            var $this = $(this);
            $this.addClass("PWGChecked PWGUnsafe");
            $this.click(function(e) {
                $this.removeClass("PWGUnsafe");
                $this.addClass("PWGNoticed");
            });
            this.oncontextmenu = function(e) {
                window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
                return false;
            };
            $this.attr("title", "Page is not secured, RMB to reload secure.");
        });
    }
    
    if (window.top === window.self && window.location.protocol != "https:") {
        interval = setInterval(doCheck, 500);
        $("head:first").append("<style>input.PWGUnsafe {background-color:red !important;} input.PWGNoticed {background-color:yellow !important;}</style>");
    }
}
