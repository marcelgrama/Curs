var note = [4, 4.5, 8, 10, 10, 10, 5, 7];
var elevi = ['Dan', 'Gelu', 'Gabriel', 'Sonia', 'Larisa', 'Maria', 'Sergiu', 'Bogdan'];

function afiseaza(text) {
    var rezElm = document.getElementById('rezultat');
    rezElm.textContent += JSON.stringify(text, null, 6);
}

function concat() {
    var total = 0;
    var length = 0;
    var rez = {};
    var key;
    var val;
    
    for (var i=0; i<note.length;i++) {
        key = elevi[i]; //la fiecare iterare key ia numele elevului curent
        val = note[i]; //la fiecare iterare val ia nota curenta
        //rez[key] = val;
        rez[key]+=[{ 'nota': val }]; //inserez nota la fiecare elev
        
        if (val >= 4.5) { //daca nota > sau = 4.5
            rez[key] += [{ 'admis': true }]; //adaug la fiecare elev admis:true

        }else{
            rez[key] += [{ 'admis': false }]; //admis:fals
        }
        total += val; //la fiecare iterare adun nota curenta la total
        length++; //incrementez cu 1 fiecare ciclu sa retin cate note am
        }  
    var average = total / length; //media aritmetica
    // var media= average.toFixed(2); //convertesc nr. la 2 zecimale
    rez.media = average.toFixed(2); //adaug proprietatea media cu valoarea mediei aritmetice si convertesc la 2 zecimale
    return rez; //returnez obiectul

}
var show = concat(); //apelez functia concat
afiseaza(show); //apelez functia afiseaza cu parametrul show

/*
Uneste cele doua liste "note" si "elevi" pentru a obtine
un obiect de forma urmatoare:
var rez = {
	Dan: {
  	nota: 4,
    admis: false,
  },
  Gelu: {
  	nota: 4.5,
    admis: true,
  },
  ...
  media: 6.23,
};

Elevii cu nota mai mare de nota 4.5 (inclusiv) vor avea proprietatea "admis: true"
iar ceilalti "admis: false".
Proprietatea "media" va contine media notelor sub forma "x.xx".
Foloseste functia afiseaza pentru a afisa rezultatul.
*/