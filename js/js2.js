const FRISPRICE = parseFloat(1.80);
const BIERPRICE	= parseFloat(2.30);
const WIJNPRICE	= parseFloat(2.65);
const BB8PRICE	= parseFloat(4.00);
const BB16PRICE	= parseFloat(6.95);

qtyFris = 0;
qtyBier	= 0;
qtyWijn = 0;

bbQty8 	= 0;
bbQty16 = 0;

totalBier = 0;
totalWijn = 0;
totalFris = 0;

totalBb8 	= 0;
totalBb16 	= 0;

order = true;
snackOrder = true;

//De function: drankjes houd de hoeveelheid, en welke drankjes er besteld zijn bij.
function drankjes(){
	while(order == true){
		var drank = prompt('Wat wilt u bestellen? (bier, wijn, fris of snack)');
		
		if (drank == 'stop') {
			order = false;
			console.log('Order Cancelled');

			//Na het invoeren van stop bij deze prompt gaat de code nog wel de else in, waarna weer een invoer gegeven moet worden
			//voordat de code doorgaat naar de function snacks.
			//Dit inplaats van dat de function drankjes gestopt wordt en de code door zou moeten gaan naar de function snacks
			//na de eerste keer intypen van stop.
			//De console logged wel "Order Cancelled", Maar gaat daarna alsnog naar: 
			//var qty = parseInt(prompt('Hoeveel ' + drank + ' wilt u bestellen?'));
			//Het maakt niet uit wat er in wordt gevoerd, deze function stopt dan wel alsnog en gaat door naar de function snacks.

		}
		if (drank == 'snack') {
				order = false;
				console.log('Order Cancelled');
			}

		/*if (drank != 'fris') {
				alert('U hebt iets verkeerds ingetypt. Probeer het opnieuw.');
			}*/
		//Ik krijg deze alert niet aan de praat. Zodra ik meer conditions toevoeg, doormiddel van comparison operators
		//of door meerdere if statements te gebruiken, krijg ik bij elke invoer, ook de goede invoer, deze alert te zien.

		else{
			var qty = parseInt(prompt('Hoeveel ' + drank + ' wilt u bestellen?'));
			if (drank === 'fris') {
				qtyFris = qtyFris + qty;
				console.log(qtyFris);
				if (qtyFris > 0) {
					frisName = 'fris';
					totalFris = qtyFris * FRISPRICE
				}	
			}
			if (drank === 'bier') {
				qtyBier = qtyBier + qty;
				console.log(qtyBier);
				if (qtyBier > 0) {
					bierName = 'bier';
					totalBier = qtyBier * BIERPRICE
				}
			}
			if (drank === 'wijn') {
				qtyWijn = qtyWijn + qty;
				console.log(qtyWijn);
				if (qtyWijn > 0) {
					wijnName = 'wijn';
					totalWijn = qtyWijn * WIJNPRICE
				}
			}
		}
	}
}

//De function snacks houd bij welke order bitterballen er besteld is en hoeveel porties per order
function snacks(){
	while(snackOrder == true){
		var bbQty = prompt('Hoeveel bitterballen wilt u bestellen? (8 of 16)');
		if (bbQty == 'stop') {
			snackOrder = false;
			console.log('Order Cancelled');
		}
		else{
			console.log(bbQty);

			/*if (bbQty != 8 && 16) {
				alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
			}*/
			//Ook hier krijg ik de alert niet voor elkaar.

			if (bbQty == 8) {
				var bbPortie8 = parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				bbQty8 = bbQty8 + bbPortie8
				console.log(bbPortie8);
				if (bbQty8 > 0) {
					bbName8 = 'Bitterballen 8';
					totalBb8 = bbQty8 * BB8PRICE
					console.log(totalBb8);
				}	
			}
			if (bbQty == 16) {
				var bbPortie16 = parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				bbQty16 = bbQty16 + bbPortie16
				console.log(bbPortie16);
				if (bbQty16 > 0) {
					bbName16 = 'Bitterballen 16';
					totalBb16 = bbQty16 * BB16PRICE
					console.log(totalBb16);
				}
			}
			
		}
	}
}

//deze function rekent de totale bedragen uit van alle bestelde producten.
//Is er niks besteld staat er "U hebt geen drankjes besteld" of "U hebt geen snacks besteld"
function calculate(){
	var drinkSubTotal = totalBier + totalWijn + totalFris;
	var snackSubTotal = totalBb8 + totalBb16;
	var totalFull = snackSubTotal + drinkSubTotal; 
	document.write('<h2>Rekening</h2><h4>Drankjes:</h4>')
	if (qtyBier || qtyWijn || qtyFris > 0) {	
		if (qtyBier > 0) {
			document.write(qtyBier + " x " + bierName + "\u00A0 " + '€' + totalBier.toFixed(2) + '<br>');
		} 
		if (qtyWijn > 0) {
			document.write(qtyWijn + " x " + wijnName + "\u00A0 " + '€' + totalWijn.toFixed(2) + '<br>');
		}
		if (qtyFris > 0) {
			document.write(qtyFris + " x " + frisName + "\u00A0 " + '€' + totalFris.toFixed(2) + '<br>');
		}
	}
	else{
		document.write('U hebt geen drankjes besteld.<br>')
	}
	document.write('Subtotaal: ' + '€' + drinkSubTotal.toFixed(2));
	document.write('<h4>Snacks:</h4>')
	if (bbQty8 || bbQty16 > 0) {	
		if (bbQty8 > 0) {
			document.write(bbQty8 + " x " + bbName8 + "\u00A0 " + '€' + totalBb8.toFixed(2) + '<br>');
		} 
		if (bbQty16 > 0) {
			document.write(bbQty16 + " x " + bbName16 + "\u00A0 " + '€' + totalBb16.toFixed(2) + '<br>');
		}
}
	else{
		document.write('U hebt geen snacks besteld.<br>')
	}
	document.write('Subtotaal: ' + '€' + snackSubTotal.toFixed(2) + '<br><br>');
	document.write('<h3>Het totaal te betalen bedrag is: €' + totalFull.toFixed(2) + '</h3>');
}

alert('Welkom bij brasserie Da Vinci, klik verder om te beginnen met uw bestelling.');
alert('Volg de instructies op het scherm. Zodra u klaar bent met bestellen typt u "stop".')

drankjes();
snacks();
calculate();