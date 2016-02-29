var hasCSSTransitions = Modernizr.csstransitions;

hasCSSTransitions && (function ($) {
    $.fn.fadeIn = function (speed, easing, callback) {
        return this.filter(function (i, elem) {
                        return $.css(elem, 'display') === 'none' || !$.contains(elem.ownerDocument, elem);
                    })
                    .css('opacity', 0)
                    .show()
                    .end()
                .transition({
                    opacity: 1
                }, speed, easing, callback);
    };

    $.fn.fadeOut = function (speed, easing, callback) {
        var newCallback = function () {
            $(this).hide();
        };

        // Account for `.fadeOut(callback)`.
        if (typeof speed === 'function') {
            callback = speed;
            speed = undefined;
        }

        // Account for `.fadeOut(options)`.
        if (typeof speed === 'object' && typeof speed.complete === 'function') {
            callback = speed.complete;
            delete speed.complete;
        }

        // Account for `.fadeOut(duration, callback)`.
        if (typeof easing === 'function') {
          callback = easing;
          easing = undefined;
        }

        if (typeof callback === 'function') {
            newCallback = function () {
                $(this).hide();
                callback.apply(this, arguments);
            };
        }

        return this.transition({
            opacity: 0
        }, speed, easing, newCallback);
    };
}(jQuery));// JavaScript Document