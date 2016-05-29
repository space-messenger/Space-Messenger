$(document).ready(function() {

var msg = new Array(
	"Please help!! These weird creatures are trying to ATTACK us!",
	"Could you plz help us fight these ppl?",
	"OMG THESE CREATURES ARE WEIRD AND EVIL! THEY WANT TO DOMINATE EARTH!",
	"We don't know where they're from, but I heard they're really strong. They can fly really fast and take over Earth in no time. So send help NOW, please!",
	"We need weapons to fight these guys really fast. Lasers, tasers, guns, swords, and any other powerful weapons. Oh, and lightsabers",
	"COME TO EARTH, QUICK. BE ARMED AND BE PREPARED FOR WEIRD WHALE ALIENS THAT'LL TRY TO STEAL STUFF.",
	"Who's the leader of Mars? Tell them to contact us down at Earth and keep in touch. Something's very wrong - and it's bad!!",
	"Do you know what those creatures are? They look like whales, but they're not. THERE ARE SPACE WHALES COMING AFTER US! ",
	"Have you got your weapons yet?",
	"Can you type this phrase rather quickly?",
	"Who is the President of the US?",
	"I believe that you can type well!");



function beginIt() {
	randNum = Math.floor((Math.random() * 10)) % 12;
	msgType = msg[randNum];
	day = new Date();
	startType = day.getTime();

	//document.getElementById("displaytext").innerHTML = msgType;
	document.getElementById("providedtext").innerHTML = msgType;
	document.getElementById("displaytext").innerHTML = "You can do it";

	document.getElementById("typed").focus();
	document.getElementById("typed").select();

	document.getElementById("startGame").disabled = true;
	document.getElementById("sendbutt").disabled = false;

}

function cheat() {
	document.getElementById("displaytext").innerHTML = "You can not change that!";
	document.getElementById("typed").focus();
}

function stopIt() {
	dayTwo = new Date();
	endType = dayTwo.getTime();
	totalTime = ((endType - startType) / 1000);

	sentence = document.getElementById("typed").value;
	word = sentence.length;

	spd = Math.round((word/totalTime) * 60);

	//document.getElementById("displaytext").innerHTML = "[" + document.getElementById("typed").value + "]" + "[" + document.getElementById("providedtext").innerHTML + "]" + word;

	
	if (document.getElementById("typed").value == document.getElementById("providedtext").innerHTML) 
	{
		document.getElementById("displaytext").innerHTML = 
		"You typed a " + word + " word sentence in "
		+ totalTime + " seconds, a speed of about " + spd + " words per minute!";
	}
	else {		
		document.getElementById("displaytext").innerHTML = "You made an error, but typed at a speed of "; + spd + " words per minute.";
	}

	document.getElementById("startGame").disabled = false;
	document.getElementById("sendbutt").disabled = true;
	
}
});