function calcTip() {
	var billamt=document.getElementById('billamt').value;
	var serv= document.getElementById('serv').value;
	var nump = document.getElementById('nump').value;
	var totaltip = (billamt*serv)/nump;
	totaltip = Math.round(totaltip*100)/100;
	totaltip = totaltip.toFixed(2);
	document.getElementById('tip').innerHTML = totaltip;
	document.getElementById('total').style.display = "block";
	if (nump==1) {
		document.getElementById('each').style.display = "none";
	}
	else {
		document.getElementById('each').style.display = "inline-block";
	}
}