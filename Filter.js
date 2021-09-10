// RegEx and QuerySelector rules that will hide a room if they match
const rules = [
	/\[[2-9][0-9][0-9]/gi,  //  Too many tokens, [100s
	/\[[0-9]{4}/gi,         //  Too many tokens, [1000s
	/\n[5-8][0-9]\n/gi,     //  Too Old (50-89)
	/goal/gi,               //  Has goal
	/private/gi,		//  Has orivate - No thanks to cash drainers
	/pvt/gi,                //  Has pvt
	/[2-9].[0-9] hrs/gi,    //  On Too Long 2+ hours
	/[0-9] min/gi,          //  On Too Short (under 10 min)
	/[0-9]{4} viewers/gi,   //  Too many viewers (1000s)
	/[3-9][0-9]{2} view/gi, //  Too many viewers (300+)
	/\n[0-5] viewers/gi,    //  Too few viewers (under 5)
	'.genderf',             //  Gender female
        '.genders'              //  Gender Sissy/trans
];

// Helper function to check if a room matches any rule
rules.check = (room)=>
	rules.map(rule=>
		rule instanceof RegExp ?	// If the rule is a regular expression
		!!room.innerText.match(rule) :  //   THEN Check for a text for the room matches
		!!room.querySelector(rule)      //   ELSE Check for a CSS Query expresssion match
	).reduce((a,b) => a||b);                // return true if ANY rule matches as true


// Load rooms the user hid manually
const hiddenRooms = localStorage.hiddenRooms.split(",");


// Finds the room name inside of an element
function roomName(roomElement){
	return roomElement.innerText.split("\n")[1];
}


// Checks to see if the room has been manually hidden
function isHidden(roomElement){
	return hiddenRooms.indexOf(roomName(roomElement)) >= 0;
}


// Every second check for updates to the room list and apply filter / GUI elements
setInterval( function(){
	[...document.querySelectorAll('.room_list_room')]
	.forEach(roomElement=>{
		if (rules.check(roomElement) || isHidden(roomElement)){ 
			room.style.display='none'; 
		} else {
			roomElement.onmouseover = function(){showOptions(roomElement)}
		}
	})
}, 1000);



function showOptions(roomElement){
	const name = roomName(roomElement);
	
	const hideBtn = document.createElement('button');
	hideBtn.innerText = 'Hide Room';
	hideBtn.style = 'position: absolute; left: 5px; top: 5px; z-index:9999';
	roomElement.appendChild(hideBtn);
	
	roomElement.onmouseout = function(){
		roomElement.removeChild(hideBtn);
		hideBtn.onclick = null;
		hideBtn = null;
	}
	
	hideBtn.onclick = function(){ hideRoom(name); }
}



function hideRoom(name){
	hiddenRooms.push(name);
	localStorage.hiddenRooms = hiddenRooms.join(",");
}

