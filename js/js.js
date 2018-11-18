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

//De function: drankjes houd de hoeveelheid, en welke drankjes er besteld zijn.
function drankjes(){
	while(order == true){
		var drank = prompt('Wat wilt u bestellen? (bier, wijn of fris)');
		if (drank == 'stop') {
			order = false;
			console.log('Order Cancelled');
		}
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
			/*if (drank !== 'fris' || 'bier' || 'wijn' || 'stop') {
				alert('U heeft iets verkeerds ingetypt. druk op F5 en probeer opnieuw.');
			}*/

			//Ik krijg het niet voor elkaar om een alert te laten weergeven als er eenverkeerde invoer is gedaan.
			//Om een 1 of andere reden krijg ik de alert zodra ik de hoeveelheid van een gekozen product invoer.
		}
	}
}

//De function snacks houd bij welke order bitterballen er besteld is en hoeveel porties per order
function snacks(){
	while(snackOrder == true){
		var snack = prompt('Wat wilt u bestellen? (snack) (meerdere opties komen nog)');
		if (snack == 'stop') {
			snackOrder = false;
			console.log('Order Cancelled');
		}
		else{
			var bbQty = parseInt(prompt('Hoeveel bitterballen wilt u bestellen? (8 of 16)'));
			console.log(bbQty);
			/*if (bbQty != 8 && 16) {
				alert('U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.');
			}*/
			//Ook hier krijg ik de alert niet voor elkaar.
			if (bbQty === 8) {
				var bbPortie8 = parseInt(prompt('Hoeveel bitterbalschalen van aantal stuks wilt u bestellen?'));
				bbQty8 = bbQty8 + bbPortie8
				console.log(bbPortie8);
				if (bbQty8 > 0) {
					bbName8 = 'Bitterballen 8';
					totalBb8 = bbQty8 * BB8PRICE
					console.log(totalBb8);
				}	
			}
			if (bbQty === 16) {
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

function calculate(){
	var drinkSubTotal = totalBier + totalWijn + totalFris;
	var snackSubTotal = totalBb8 + totalBb16;
	var totalFull = snackSubTotal + drinkSubTotal; 
	document.write('<h2>Rekening</h2><h4>Drankjes:</h4>')
	/*document.write('<h3>Rekening</h3><br><h4>Drankjes:</h4><p>' + qtyBier + ' bier ' + '€'+ totalBier.toFixed(2) + '<br>'  + qtyWijn + ' wijn ' + '€'+ totalWijn.toFixed(2) + '<br>' + qtyFris + ' fris ' + '€'+ totalFris.toFixed(2) + '<br>' + 'Subtotaal: €' + drinkSubTotal.toFixed(2) + '</p><br><br>');*/
	if (qtyBier > 0) {
		document.write(qtyBier + " x " + bierName + "\u00A0 " + '€' + totalBier.toFixed(2) + '<br>');
		if (qtyWijn > 0) {
			document.write(qtyWijn + " x " + wijnName + "\u00A0 " + '€' + totalWijn.toFixed(2) + '<br>');
			if (qtyFris > 0) {
				document.write(qtyFris + " x " + frisName + "\u00A0 " + '€' + totalFris.toFixed(2) + '<br>');
		}
	}
}
	else{
		document.write('U heeft geen drankjes besteld.<br>')
	}
	document.write('Subtotaal: ' + '€' + drinkSubTotal.toFixed(2));
	document.write('<h4>Snacks:</h4>')
	if (bbQty8 > 0) {
		document.write(bbQty8 + " x " + bbName8 + "\u00A0 " + '€' + totalBb8.toFixed(2) + '<br>');
		if (bbQty16 > 0) {
			document.write(bbQty16 + " x " + bbName16 + "\u00A0 " + '€' + totalBb16.toFixed(2) + '<br>');
	}
}
	else{
		document.write('U heeft geen snacks besteld.<br>')
	}
	document.write('Subtotaal: ' + '€' + snackSubTotal.toFixed(2) + '<br><br>');
	document.write('<h3>Het totaal te betalen bedrag is: €' + totalFull.toFixed(2) + '</h3>');
}

alert('Welkom bij brasserie Da Vinci, klik verder om te beginnen met uw bestelling.');
alert('Volg de instructies op het scherm. Zodra u klaar bent met bestellen typt u "stop".')

drankjes();
snacks();
calculate();