/*писати код тут*/

let monday = [ 
	['Інформатика', '7-A'], 
	['Математика', '8-Б']
];	

let tue = [ 
	['Математика', '11-В'], 
	['Інформатика', '7-A']
];	
let wed = [ 
	['Зарубіжна література', '9-A'], 
	['Інформатика','7-Б'], 
	['Інформатика','5-A'], 
	['-', '-']
];

function showSchedule (day, el) {
	console.log(day[0][0]);
	let str = "";
		for (var i = 0; i < day.length; i++) {
			str += "<li> <strong>Урок:</strong> " +day[i][0]+ " <strong>Клас:</strong> "+day[i][1]+"</li>"; 
		}

		el.innerHTML =  str;

}

let ul = '';
ul = document.getElementById('monday-lessons');
showSchedule(monday, ul);

ul = document.getElementById('tuesday-lessons');
showSchedule(tue, ul);

ul = document.getElementById('wednesday-lessons');
showSchedule(wed, ul);