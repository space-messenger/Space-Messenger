// $(document).ready(function() {

//JavaScript arrays are used to store multiple values in a single variable. Arrays are list-like objects.
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
	"Quick! There are creatures trying to attack us on Earth! Please help ASAP.",
	"We think you guys can help us defeat the ",
	"Please help us defeat these vile space things!");


//when "ready to Type" button is clicked, it calls beginIt() function
function beginIt() {	

	//Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).
	//The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
	//Modulus (%) operator returns only the remainder. 
	//below variable randNum will be random integer number between 0 and 11 and we need this number to pick one of strings in array defined above.
	randNum = Math.floor((Math.random() * 10)) % 12;
	//using random number between 0 and 11, msg[randNum] will return the one of strings in array above.
	msgType = msg[randNum];

	//A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
	//Using new Date(), creates a new date object with the current date and time:
	//getTime() returns current time in the number of milliseconds
	day = new Date();
	startType = day.getTime();


	//now, display one of the strings in array in div on the top
	document.getElementById("providedtext").innerHTML = msgType;
	document.getElementById("displaytext").innerHTML = "You can do it";

	//for user to type in the textarea box, first move cursor to textarea box by calling focus and secondly, select letters in the textarea box so that it will erase when user types the first letter.
	document.getElementById("typed").focus();
	document.getElementById("typed").select();
	//erase letter already in the textarea box to retyoe new message
	document.getElementById("typed").value = "";

	//disable "ready to Type" button and enable "send Now" button
	document.getElementById("startGame").disabled = true;
	document.getElementById("submitmessage").disabled = false;

}

function cheat() {
	//if user click mouse in the div box that shows sentence on the top, it shows warning message and move cursor to textarea box below
	document.getElementById("displaytext").innerHTML = "Hey! Don't touch that!";
	document.getElementById("typed").focus();
}

//when user clicks "Send Now" button
function stopIt() {
	//A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
	//Using new Date(), creates a new date object with the current date and time:
	//getTime() returns current time in the number of milliseconds	
	dayTwo = new Date();
	endType = dayTwo.getTime();

	//startType is the time in milliseconds when user clicks "ready to type"button and endType is the time in milliseconds when user clicks "Send Now" button.
	//endType mius startType is the duration time user took to type.
	//since time unit is milliseconds, we need to divide by 1000 to convert to seconds.
	totalTime = ((endType - startType) / 1000);

	//sentence is the message user typed in the textarea box
	sentence = document.getElementById("typed").value;
	//count the number of letters in user sentence
	word = sentence.length;

	//to show user's typing speed in minutes, speed is calculated from the number of letters user typed devided by duration time user took and multiply 60 to convert to minute.
	spd = Math.round((word/totalTime) * 60);


	//Now, compare the message on box on the top with the message user entered
	//if the sentence user type is the same as message displayed in div	
	if (document.getElementById("typed").value == document.getElementById("providedtext").innerHTML) 
	{
		//display the number of letters user typed, duration time and speed per minute
		document.getElementById("displaytext").innerHTML = 
		"You typed a " + word + " word sentence in "
		+ totalTime + " seconds, a speed of about " + spd + " letters per minute!";
	}
	else {		//if user did not enter meesage correctly, diaply error message and speed per minute
		document.getElementById("displaytext").innerHTML = "You made an error, but typed at a speed of " + spd + " letters per minute.";
	}

	//after user send message, we should enable "ready to Type" button again and disable "Send Now" botton
	document.getElementById("startGame").disabled = false;
	document.getElementById("submitmessage").disabled = true;
	
}
//});