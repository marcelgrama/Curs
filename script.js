var grades = [4, 4.5, 8, 10, 10, 10, 5, 7];
var students = ['Dan', 'Gelu', 'Gabriel', 'Sonia', 'Larisa', 'Maria', 'Sergiu', 'Bogdan'];

function showIt(text) {
    var resElm = document.getElementById('resultat');
    resElm.textContent += JSON.stringify(text, null, 6);
}

function concat() {
    var total = 0;
    var length = 0;
    var res = {};
    var key;
    var val;
    
    for (var i=0; i<grades.length;i++) {
        key = students[i]; 
        val = grades[i]; 
        //res[key] = val;
        res[key]+=[{ 'grade': val }]; 
        
        if (val >= 4.5) { //if grade > or = 4.5
            res[key] += [{ 'pass': true }]; //pass:true

        }else{
            res[key] += [{ 'pass': false }]; //pass:fals
        }
        total += val; // sum the grades
        length++; //adding +1 at every iteration to find how many grades I have
        }  
    var average = total / length; //average of grades
    // var media= average.toFixed(2); 
    res.media = average.toFixed(2); 
    return res; //returnez obiectul

}
var show = concat();
showIt(show); 

/*
Uneste cele doua liste "grades" si "students" pentru a obtine
un obiect de forma urmatoare:
var res = {
	Dan: {
  	grade: 4,
    pass: false,
  },
  Gelu: {
  	grade: 4.5,
    pass: true,
  },
  ...
  media: 6.23,
};

studentsi cu grade mai mare de grade 4.5 (inclusiv) vor avea proprietatea "pass: true"
iar ceilalti "pass: false".
Proprietatea "media" va contine media gradeslor sub forma "x.xx".
Foloseste functia showIt pentru a afisa resultatul.
*/