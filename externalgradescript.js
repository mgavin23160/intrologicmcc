






function listgrades(){
		
		document.getElementById("info").innerHTML="";
		
		var entry=document.getElementById("entry").value;
		
		/*List names of exercises as an array. The idea is this could be pasted from excel.The first one's a placeholder because the first item in the array each student's homework is their password, not their first assignment. 
		*/
		var homeworks = ["placeholder"	,	"Ex. 1.1: "	,	"Ex. 1.2: "	,	"Ex 1.3 "	,	"Ex. 2.3: "	,	"Ex. 2.5: " 
];
		
		/*List student grades as arrays. The idea is this could be pasted from excel. The first item in each array is the password for that array, which will also be the name of the array in this script.*/ 
	
		
		var	a98619	=	[	'a98619',		10	,	0	,	0	,	0	,	0	]
		var	a20083	=	[	'a20083',		10	,	10	,	10	,	10	,	0	]
		var	a88154	=	[	'a88154',		10	,	10	,	10	,	10	,	10	]
		var	a98728	=	[	'a98728',		10	,	10	,	10	,	10	,	10	]
		var	a95878	=	[	'a95878',		10	,	0	,	0	,	0	,	0	]
		var	a65446	=	[	'a65446',		10	,	0	,	0	,	10	,	10	]



		
		//put each array of homeworks into an array of arrays.
		
		var allarrays = [a98619,a20083,a88154,a98728,a95878,a65446,]
		
		//find out which array we need by comparing the entry to the 0th member of each array in turn.
		
		let arrayNumber = [];
		for(i=0;i < allarrays.length; i++) {
				if(allarrays[i][0]===entry)
						{arrayNumber.push(i)};
				
		};
		
		//now index is the number of the array, either the first array, second array, etc. Verify to me for now, it's getting the right number. 
		
		//document.getElementById("info").innerHTML=arrayNumber;
		
		/* So allarrays[arrayNumber] refers to the array in question. Now I want to list items 1 thru whatever in that array, on separate lines. Item j in allarrays[arrayNumber] is allarrays[arrayNumber][j]. For example allarrays[0][1] === 10. Since 0 was the password-placeholder pair, we start with element 1. 
		*/
		for(j=1; j < allarrays[arrayNumber].length; j++)
				{document.getElementById("info").innerHTML+=homeworks[j]+allarrays[arrayNumber][j]+"<br />"};
				
		//Get the total homework points possible by multiplying the number of exercises, which is homeworks.length minus 1, times 10.
		let total=(homeworks.length-1)*10;
		
		/*Now get the total homework points achieved by the student. Create a variable called points, set to zero, and run a for loop that adds each value, starting from one to skip the password, to "points". 
		*/
		
		let points = 0;
		
		for (h=1; h < allarrays[arrayNumber].length; h++)
				{points=points+allarrays[arrayNumber][h];}
		
		document.getElementById("info").innerHTML+="Homework Grade: ";
		document.getElementById("info").innerHTML+=100*(points/total);
		
		
		
		
		
		
		}