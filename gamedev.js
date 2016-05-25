$( document ).ready(function() {

//Your jquery + js goes here
var msg = new Array(
	"Practicing with your typing can greatly help your overall computer skills.",
	"A new computer is sold in the US every hour!",
	"When do birds migrate from North to South?",
	"Perplexing phrases, like this one, are tougher to type.",
	"If you can correctly, and quickly, type this perplexing sentence, you are one superb typist!",
	"You are one superb typist if you can correctly, and quickly, type this long phrase.",
	"I believe you're a good typist, so I believe you will correctly copy this statement!",
	"Because this is not a fairly simple phrase, could you swiftly, and precisely, copy it?",
	"Computers are the medium of the future.",
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

</script>


</body>
</html>

});
});