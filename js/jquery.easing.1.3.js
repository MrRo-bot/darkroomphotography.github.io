(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, e, f, b, c) {
      return jQuery.easing[jQuery.easing.def](a, e, f, b, c);
    },
    easeInQuad: function (a, e, f, b, c) {
      return b * (e /= c) * e + f;
    },
    easeOutQuad: function (a, e, f, b, c) {
      return -b * (e /= c) * (e - 2) + f;
    },
    easeInOutQuad: function (a, e, f, b, c) {
      return 1 > (e /= c / 2)
        ? (b / 2) * e * e + f
        : (-b / 2) * (--e * (e - 2) - 1) + f;
    },
    easeInCubic: function (a, e, f, b, c) {
      return b * (e /= c) * e * e + f;
    },
    easeOutCubic: function (a, e, f, b, c) {
      return b * ((e = e / c - 1) * e * e + 1) + f;
    },
    easeInOutCubic: function (a, e, f, b, c) {
      return 1 > (e /= c / 2)
        ? (b / 2) * e * e * e + f
        : (b / 2) * ((e -= 2) * e * e + 2) + f;
    },
    easeInQuart: function (a, e, f, b, c) {
      return b * (e /= c) * e * e * e + f;
    },
    easeOutQuart: function (a, e, f, b, c) {
      return -b * ((e = e / c - 1) * e * e * e - 1) + f;
    },
    easeInOutQuart: function (a, e, f, b, c) {
      return 1 > (e /= c / 2)
        ? (b / 2) * e * e * e * e + f
        : (-b / 2) * ((e -= 2) * e * e * e - 2) + f;
    },
    easeInQuint: function (a, e, f, b, c) {
      return b * (e /= c) * e * e * e * e + f;
    },
    easeOutQuint: function (a, e, f, b, c) {
      return b * ((e = e / c - 1) * e * e * e * e + 1) + f;
    },
    easeInOutQuint: function (a, e, f, b, c) {
      return 1 > (e /= c / 2)
        ? (b / 2) * e * e * e * e * e + f
        : (b / 2) * ((e -= 2) * e * e * e * e + 2) + f;
    },
    easeInSine: function (a, e, f, b, c) {
      return -b * Math.cos((e / c) * (Math.PI / 2)) + b + f;
    },
    easeOutSine: function (a, e, f, b, c) {
      return b * Math.sin((e / c) * (Math.PI / 2)) + f;
    },
    easeInOutSine: function (a, e, f, b, c) {
      return (-b / 2) * (Math.cos((Math.PI * e) / c) - 1) + f;
    },
    easeInExpo: function (a, e, f, b, c) {
      return 0 == e ? f : b * Math.pow(2, 10 * (e / c - 1)) + f;
    },
    easeOutExpo: function (a, e, f, b, c) {
      return e == c ? f + b : b * (-Math.pow(2, (-10 * e) / c) + 1) + f;
    },
    easeInOutExpo: function (a, e, f, b, c) {
      return 0 == e
        ? f
        : e == c
        ? f + b
        : 1 > (e /= c / 2)
        ? (b / 2) * Math.pow(2, 10 * (e - 1)) + f
        : (b / 2) * (-Math.pow(2, -10 * --e) + 2) + f;
    },
    easeInCirc: function (a, e, f, b, c) {
      return -b * (Math.sqrt(1 - (e /= c) * e) - 1) + f;
    },
    easeOutCirc: function (a, e, f, b, c) {
      return b * Math.sqrt(1 - (e = e / c - 1) * e) + f;
    },
    easeInOutCirc: function (a, e, f, b, c) {
      return 1 > (e /= c / 2)
        ? (-b / 2) * (Math.sqrt(1 - e * e) - 1) + f
        : (b / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + f;
    },
    easeInElastic: function (e, f, g, b, c) {
      var d = 1.70158,
        h = 0,
        i = b;
      if (0 == f) return g;
      if (1 == (f /= c)) return g + b;
      if ((h || (h = 0.3 * c), i < Math.abs(b))) {
        i = b;
        var d = h / 4;
      } else var d = (h / (2 * Math.PI)) * Math.asin(b / i);
      return (
        -(
          i *
          Math.pow(2, 10 * (f -= 1)) *
          Math.sin(((f * c - d) * (2 * Math.PI)) / h)
        ) + g
      );
    },
    easeOutElastic: function (e, f, g, b, c) {
      var d = 1.70158,
        h = 0,
        i = b;
      if (0 == f) return g;
      if (1 == (f /= c)) return g + b;
      if ((h || (h = 0.3 * c), i < Math.abs(b))) {
        i = b;
        var d = h / 4;
      } else var d = (h / (2 * Math.PI)) * Math.asin(b / i);
      return (
        i * Math.pow(2, -10 * f) * Math.sin(((f * c - d) * (2 * Math.PI)) / h) +
        b +
        g
      );
    },
    easeInOutElastic: function (e, f, g, b, c) {
      var d = 1.70158,
        h = 0,
        i = b;
      if (0 == f) return g;
      if (2 == (f /= c / 2)) return g + b;
      if ((h || (h = c * (0.3 * 1.5)), i < Math.abs(b))) {
        i = b;
        var d = h / 4;
      } else var d = (h / (2 * Math.PI)) * Math.asin(b / i);
      return 1 > f
        ? -0.5 *
            (i *
              Math.pow(2, 10 * (f -= 1)) *
              Math.sin(((f * c - d) * (2 * Math.PI)) / h)) +
            g
        : 0.5 *
            (i *
              Math.pow(2, -10 * (f -= 1)) *
              Math.sin(((f * c - d) * (2 * Math.PI)) / h)) +
            b +
            g;
    },
    easeInBack: function (a, e, f, b, c, d) {
      return (
        null == d && (d = 1.70158), b * (e /= c) * e * ((d + 1) * e - d) + f
      );
    },
    easeOutBack: function (a, e, f, b, c, d) {
      return (
        null == d && (d = 1.70158),
        b * ((e = e / c - 1) * e * ((d + 1) * e + d) + 1) + f
      );
    },
    easeInOutBack: function (a, e, f, b, c, d) {
      return (
        null == d && (d = 1.70158),
        1 > (e /= c / 2)
          ? (b / 2) * (e * e * (((d *= 1.525) + 1) * e - d)) + f
          : (b / 2) * ((e -= 2) * e * (((d *= 1.525) + 1) * e + d) + 2) + f
      );
    },
    easeInBounce: function (a, e, f, b, c) {
      return b - jQuery.easing.easeOutBounce(a, c - e, 0, b, c) + f;
    },
    easeOutBounce: function (a, e, f, b, c) {
      return (e /= c) < 1 / 2.75
        ? b * (7.5625 * e * e) + f
        : e < 2 / 2.75
        ? b * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + f
        : e < 2.5 / 2.75
        ? b * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + f
        : b * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + f;
    },
    easeInOutBounce: function (a, e, f, b, c) {
      return e < c / 2
        ? 0.5 * jQuery.easing.easeInBounce(a, 2 * e, 0, b, c) + f
        : 0.5 * jQuery.easing.easeOutBounce(a, 2 * e - c, 0, b, c) +
            0.5 * b +
            f;
    },
  });
