//--------------------------------------Money in 30 days
var days; 
var dollars = 0; 
var payment = .01; 
 for (days =0; days <= 30; days++) {
 	dollars += payment; 
 	payment *= 2; 
 }
 console.log(dollars);
 //------------------------------------- days to 10,000
var days; 
var dollars = 0; 
var payment = .01;
for (days =0; days <= 30; days++) {
	dollars += payment;
	if (dollars >= 10000) {
		break; 
	} 
	else {
		payment *= 2; 
	}

}
console.log(days);
//------------------------------ days to 1 billion
var days; 
var dollars = 0; 
var payment = .01;
for (days =0; days >= 0; days++) {
	dollars += payment;
	if (dollars >= 1000000000) {
		break; 
	} 
	else {
		payment *= 2; 
	}

}
console.log(days);
//----------------------------- Days to infinite money
var days; 
var dollars = 0; 
var payment = .01;
for (days =0; days >= 0; days++) {
	dollars += payment;
	if (dollars >= Infinity) {
		break; 
	} 
	else {
		payment *= 2; 
	}

}
console.log(days);