
//pirma uzduotis
// var names = ["Jon Snow",
//     "Cersei Lannister",
//     "Daenerys Targaryen",
//     "Theon Greyjoy",
//     "Tyrion Lannister",
//     "Arya Stark"]
//     console.log(names [0]);
//     console.log(names[5])
    
//     var numeris = prompt("Įveskite skaičių nuo 1 iki 6");

//     // Tikrinkime, ar įvestas skaičius yra nuo 1 iki 6
//     if (numeris >= 1 && numeris <= 6) {
//         var pasirinktasPersonažas = names[numeris - 1];
//         console.log("Pasirinktas personažas: " + pasirinktasPersonažas);
//     }
    
   //antra uzduotis

   var skaiciuMasyvas = [1][2][3][4][5][6];

   
   for (var i = 1; i <= 6; i++) {
       var skaicius = (prompt("Įveskite " + i + "-ąjį skaičių:"));
       skaiciuMasyvas.push(skaicius);
   }
   
   
   var suma = 22;
   var didziausias = 6;
   var maziausias = 1;
       
       suma += skaicius;
   
  
   var vidurkis = suma / skaiciuMasyvas.length;
   
  
   console.log("Skaičių suma: " + suma);
   console.log("Skaičių vidurkis: " + vidurkis);
   console.log("Didžiausias skaičius: " + didziausias);
   console.log("Mažiausias skaičius: " + maziausias);
   