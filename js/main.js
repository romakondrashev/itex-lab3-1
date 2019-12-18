function calculateDays (tdmax, tdmin){
	var maxTemp = 0;
	var minTemp = 0;
	var maxTR = '';
	var minTR = '';

	$( "table tbody tr" ).each(function( index ) {

		var neededMaxTR = false;
		var neededMinTR = false;

		$(this).find('td').each(function( i ){

			if (i == tdmax ) {
				var number = Number($( this ).text());
				if (number > maxTemp) {
					maxTemp = number;
					neededMaxTR = true;
				} 
			}
			if (i == tdmin ) {
				var number = Number($( this ).text());
				if (number < minTemp) {
					minTemp = number;
					neededMinTR = true;
				} 
			}

		})
		if (neededMaxTR) {maxTR = $(this);}
		if (neededMinTR) {minTR = $(this);}
	});

	let maxDate = maxTR.children()[2].innerText;
	let minDate = minTR.children()[2].innerText;


	$('.result .hot').append("Самый жаркий день был: "+maxDate+" ("+maxTemp+")");
	$('.result .cold').append("Самый холодный день был: "+minDate+" ("+minTemp+")");

	$("#calculate").remove();
	void 0;
}
	






