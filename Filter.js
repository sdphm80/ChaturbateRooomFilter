const rules = [
	/\[[2-9][0-9][0-9]/gi,  //  Too many tokens, 100s
	/\[[0-9]{4}/gi,         //  Too many tokens, 1000s
	/\n[5-8][0-9]\n/gi,     //  Too Old (50-89)
	/goal/gi,               //  Has goal
	/private/gi,		    //  Has Private - No thanks to cash drainers
	/pvt/gi,                //  Has pvta
	/feet/gi,               //  Has Feet - No thanks to foot fetish
	/foot/gi,				//  Has Foot
	/[2-9].[0-9] hrs/gi,    //  On Too Long 2+ hours
	/,[0-9] min/gi,         //  On Too Short (under 10 min)
	/[0-9]{4} view/gi,      //  Too many viewers (1000s)
	/[3-9][0-9]{2} view/gi, // Too many viewers (300+)
	/\n[0-5] viewers/gi,    // Too few viewers (under 5)
	'.genderf',             // Gender female
    '.genders'              // Gender Sissy/trans
];

rules.check = (room)=>
	rules.map(rule=>
		rule instanceof RegExp ?
		!!room.innerText.match(rule) :
		!!room.querySelector(rule)
	).reduce((a,b) => a||b);


const hiddenRooms = localStorage.hiddenRooms.split(",");

function roomName(room){
	return room.innerText.split("\n")[1];
}

function isHidden(room){
	return hiddenRooms.indexOf(roomName(room)) >= 0;
}


setInterval( function(){
	[...document.querySelectorAll('.room_list_room')]
	.forEach(room=>{
		room.onmouseover = function(){showRoomMenu(room)}
		room.onmouseleave = hideRoomMenu;
		if (rules.check(room) || isHidden(room)){ room.style.display='none'; }
	})
}, 1000);


let activeRoom = null;

let roomMenu = document.createElement('div');
roomMenu.id = "roomMenu";
roomMenu.className = 'roomMenu'

let hideBtn = document.createElement('button');
hideBtn.innerText = "Hide Room";
roomMenu.appendChild(hideBtn);



function showRoomMenu(room){
	let name = roomName(room);
	activeRoom = room;
	window.activeRoom = room;
	activeRoom.appendChild(roomMenu);
	hideBtn.onclick = function(){ hideRoom(name); }
}

function hideRoomMenu(){
	document.body.appendChild(roomMenu);
	activeRoom = null;
}


function hideRoom(name){
	hiddenRooms.push(name);
	localStorage.hiddenRooms = hiddenRooms.join(",");
	consol.log(`Hide room ${name}, ${hiddenRooms.length} rooms hidden`)
}

