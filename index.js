const fs = require('fs');
const csv = require('csv-parser');

const myString = new Promise((resolve, reject) => {
	resolve('Jack'); 
});

class myClass{
	constructor(filename){
		this.myArray = [];
		//this.myArray.push(this.csvToArray(filename));
		this.csvToArray(filename);
	}
	csvToArray(filename){
		return new Promise((res) => {
			fs.createReadStream(filename)
				.pipe(csv(['FirstName', 'LastName', 'Address', 'Town', 'Country', 'Postcode']))
				.on('data', (data) => {
					res(data);
					this.myArray.push(data);
				})
				.on('end', (data) => {
					console.log(JSON.stringify(this.myArray));
					this.myFunction();
				  });
		});
	}
	myFunction() {
		console.log("myfunction myString:");
		console.log(myString);
		console.log("myfunction myArray:");
		console.log(this.myArray);
		for(let i = 0; i < this.myArray.length; i++) {
			console.log(this.myArray[i]['FirstName']);
			if (this.myArray[i]['FirstName'].includes("John")){
				if (this.cooled_down(i)){
					this.approve(i, myString);
				}
			}
		}
	}
	
	cooled_down(i){
		var dictionary = this.myArray[i];
		console.log("cooled_down"+this.myArray[i]);
		if (!Object.keys(dictionary).includes('approved')){
			// Means we have never approved on this person!
			return true;
		} else{
			now = new Date();
			duration = now - dictionary['approved'];
			duration_seconds = duration.getTime() / 1000;
			hours = divmod(duration_seconds, 3600)[0];
			if (hours >= 24){
				return true;
			} else{
				console.log("Couldn't approve " + dictionary['FirstName'] + "Cool Down time: " + 24 - hours);
			}
		}
		return False;
	}

	approve(i, myString){
		this.dictionary = this.myArray[i];
		try{
			setTimeout(function(){
				console.log(myString);
				console.log(dictionary['FirstName'])
				console.log(dictionary['Postcode'])
			}, 60 * 60 * 3);
		}catch(e){
			console.log(e);
		}
		
		this.now = new Date();
		this.myArray[i]['approved'] = this.now;
	}
}

myObj = new myClass("myCSV.csv");
//myString.then( () => myObj.myFunction());