	




	for (var i = 1; i < 101; i++) 
		{
			document.write("<br />");

			if ((i % 3 == 0) && (i % 5 == 0)) {
			document.write('fizzbuzz');
			} 
			else if ((i % 3 == 0) && (i % 5 != 0)) {
			document.write('fizz'); 
			} 
			else if ((i % 5 == 0) && (i % 3 != 0)) {
			document.write('buzz'); 
			} 
			else {
			document.write(i); 
			}
		}