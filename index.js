const fs = require('fs');
const csv = require('csv-parser')

const myString = new Promise((resolve, reject) => {
	resolve('John');
});

class myClass{
	constructor(filename){
		this.myArray = [];
		this.myArray.push(myVar);
	}
    async csvToArray(filename){
        return await new Promise((res) => {
			fs.createReadStream(filename)
				.pipe(csv(['FirstName', 'LastName', 'Address', 'Town', 'Country', 'Postcode']))
				.on('data', (data) => {
				    return(data);
				})
		});
    }
	async myFunction() {
        console.log(myString);
        console.log(this.myArray);
    	for(let i = 0; i < this.myArray.length; i++) {
            if (String(myString).includes(this.myArray[i]['FirstName'])){
                if (this.cooled_down(i)){
                    this.approve(i, myString);
                }
            }
    	}
  	}
	
	cooled_down(i){
        dictionary = this.myArray[i]
        if (!dictionary.keys().includes('approved')){
            // Means we have never approved on this person!
            return True;
        } else{
            now = datetime.now();
            duration = now - datetime.fromtimestamp(dictionary['approved']);
            duration_seconds = duration.total_seconds();
            hours = divmod(duration_seconds, 3600)[0];
            if (hours >= 24){
                return True;
            } else{
                console.log("Couldn't approve " + dictionary['FirstName'] + "Cool Down time: " + 24 - hours);
            }
        }
        return False;
    }

    approve(i, myString){
        dictionary = this.myArray[i];
        try{
            setTimeout(function(){
                console.log(myString);
                console.log(dictionary['FirstName'])
                console.log(dictionary['Postcode'])
            }, 60 * 60 * 3);
        }catch(e){
            console.log(e);
        }

        now = datetime.now();
        this.myArray[i]['approved'] = now.timestamp();
    }
}

myObj = new myClass("myCSV.csv");
myVar = myObj.csvToArray()
myString.then( () => myObj.myFunction());