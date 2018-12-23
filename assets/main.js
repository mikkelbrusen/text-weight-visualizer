function Interpolate(start, end, steps, count) {
    var s = start,
        e = end,
        final = s + (((e - s) / steps) * count);
    return Math.floor(final);
}

function Color(_r, _g, _b) {
    var r, g, b;
    var setColors = function(_r, _g, _b) {
        r = _r;
        g = _g;
        b = _b;
    };

    setColors(_r, _g, _b);
    this.getColors = function() {
        var colors = {
            r: r,
            g: g,
            b: b
        };
        return colors;
    };
}


$( document ).ready(function() {

	var red = new Color(215, 92, 92),
		white = new Color(255, 255, 255),
		blue = new Color(92, 174, 215),
		start = white,
		end = red;

	strings = ['This', 'is', 'an', 'awesome', 'tool', 'made', 'by', 'mikkelbrusen', '@', 'Github', 'use', 'as','you','like']
	weights = [-1.2, 0.2, 0, 15, 10, 4, 6, 5, 9, 4, 13, 10,4,3]

	max = Math.ceil(Math.max(...weights));
	min = Math.floor(Math.min(...weights));
	range = max - min;
	middle = Math.floor(range/2)

	console.log("Max: ", max, "== Min: ", min, "== Range: ", range)

	var arrayLength = strings.length;
	for (var i = 0; i < arrayLength; i++) {
		start = white,
		end = red;
		var origweight = weights[i];

		weight = origweight + Math.abs(min);

	    var startColors = start.getColors(),
	        endColors = end.getColors();

	    var r = Interpolate(startColors.r, endColors.r, range, weight);
	    var g = Interpolate(startColors.g, endColors.g, range, weight);
	    var b = Interpolate(startColors.b, endColors.b, range, weight);

	 	var bcolor = "background-color: " + "rgb(" + r + "," + g + "," + b + ");";


	    $('#wordsContainer1').append('<span style="' + bcolor + '" data-weight="' + origweight + '">'+strings[i]+'</span>');
	}
});
