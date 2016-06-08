
//JavaScript arrays are used to store multiple values in a single variable. Arrays are list-like objects.
var msg = new Array(
	"Please help!! These weird creatures are trying to attack us!!",
	"Could you help us fight these weird things?",
	"THERE ARE WEIRD AND EVIL CREATURES THAT WANT TO DOMINATE EARTH! What do we do? Reply quick.",
	"We don't know where they're actually from, but I'm guessing they're really strong. They can fly really fast and I bet they take over Earth in no time. Send help.",
	"We need weapons to fight these guys. Sorry, no one here knows what they really are other than the fact they look like galactic whales, so we can't give you much info that'll help. :T",
	"COME TO EARTH, QUICK! BE PREPARED FOR WEIRD SPACE WHALES THAT'LL TRY TO STEAL STUFF.",
	"Tell the people on Mars to contact us down at Earth and keep in touch. Something's wrong here...",
	"Do you know what those creatures are? They look like whales, but they're not. Anyway, THERE ARE SPACE WHALES COMING AFTER US! ",
	"Everyone ready? (Does anyone have lightsabers? Is that even a thing where you people live?)",
	"Quick! There are creatures trying to attack us on Earth! Please help ASAP.",
	"Can you guys help us?",
	"Please help us defeat these vile space things!");


//when "ready to Type" button is clicked, it calls beginIt() function
function beginIt() {	

	//Math.random() returns a random number between 0 (included) and 1 (not included).
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
	$("#providedtext").html(msgType);
	$("#displaytext").html("Help save Earth by sending text messages!");

	//for user to type in the textarea box, first move cursor to textarea box by calling focus and secondly, select letters in the textarea box so that it will erase when user types the first letter.
	document.getElementById("typed").focus();
	document.getElementById("typed").select();
	//erase letter already in the textarea box to retype new message
	document.getElementById("typed").value = "";

	//disables "ready to Type" button and enable "send" button
	document.getElementById("startGame").disabled = true;
	document.getElementById("submitmessage").disabled = false;

}

function cheat() {
	//if user click mouse in the div box that shows sentence on the top, it shows warning message and move cursor to textarea box below
	$("#displaytext").html("Hey! Don't touch that!");
	document.getElementById("typed").focus();
}

//when user clicks "Send" button
function stopIt() {
	//A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
	//Using new Date(), creates a new date object with the current date and time:
	//getTime() returns current time in the number of milliseconds	
	dayTwo = new Date();
	endType = dayTwo.getTime();

	//startType is the time in milliseconds when user clicks "ready to type"button and endType is the time in milliseconds when user clicks "Send Now" button.
	//endType mius startType is the duration time user took to type.
	//since time unit is milliseconds, so we need to divide by 1000 to convert to seconds.
	totalTime = ((endType - startType) / 1000);

	//sentence is the message user typed in the textarea box
	sentence = document.getElementById("typed").value;
	//count the number of letters in user sentence
	word = sentence.length;

	//to show user's typing speed in minutes, speed is calculated from the number of letters user typed divided by duration time user took and multiply 60 to convert to minutes.
	spd = Math.round((word/totalTime) * 60);


	//Now, compare the message on box on the top with the message user entered
	//if the sentence user type is the same as message displayed in div	
	if (document.getElementById("typed").value == document.getElementById("providedtext").innerHTML) 
	{
		//display the number of letters user typed, duration time and speed per minute
		$("#displaytext").html( "Message sent! You typed a " + word + " letter sentence in "
		+ totalTime + " seconds, a speed of about " + spd + " letters per minute!");
	}
	else {	
		//if user did not enter meesage correctly, diaply error message and speed per minute
		$("#displaytext").html("Oh no! You made an error, but hopefully people will understand your text. You typed at a speed of " + spd + " letters per minute.");
	}

	//after user send message, we should enable "ready to Type" button again and disable "Send" botton
	document.getElementById("startGame").disabled = false;
	document.getElementById("submitmessage").disabled = true;
	
}
//});