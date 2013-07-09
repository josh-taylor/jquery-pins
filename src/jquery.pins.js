(function($) {

	var options = {};

	var methods = {
		init: function(opts) {
			var defaults = {
				pin: '.pin',
				margin: 10,
				columns: 3,
				animate: false,
				animateTime: 300,
				animateDelay: 200
			}

			options = $.extend(true, defaults, opts);
			options.selector = $(options.pin);

			// Add the css rules
			this.css({
				position: 'relative'
			});

			if (options.animate) {
				options.selector.css('opacity', 0);
			}

			return methods.reposition.apply(this, arguments);
		},
		reposition: function() {
			$(options.pin).each(function(i) {
				var top = _methods.getPinY($(this));
				var left = _methods.getPinX($(this));
				var animateTop = top + 30;

				$(this).css({
					position: 'absolute',
					top: top + 'px',
					left: left + 'px'
				});

				if (options.animate) {
					var self = $(this);
					window.setTimeout(function() {_methods.animate(self, animateTop, top)},
						options.animateDelay * i);
				}
			});

			return this;
		}
	};

	var _methods = {
		getPinX: function(element) {
			var index = element.index();
			var width = element.outerWidth();
			var position = index % options.columns;
			return position * (width + options.margin);
		},
		getPinY: function(element) {
			var index = element.index();

			var aboveIndex = index - options.columns;
			if (aboveIndex >= 0) {
				var aboveElement = options.selector.eq(aboveIndex);
				var aboveHeight = aboveElement.outerHeight();
				var abovePosition = aboveElement.position().top;
				return aboveHeight + abovePosition + options.margin;
			} else {
				return 0;
			}
		},
		animate: function(element, fromY, toY) {
			element.css({
				opacity: 0,
				top: fromY + 'px'
			}).animate({
				opacity: 1,
				top: toY + 'px'
			}, options.animateTime);
		}
	}

	$.fn.pins = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist in jQuery pins');
		}
	}

}) (jQuery);