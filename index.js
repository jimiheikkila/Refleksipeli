function pelinalotus() {  
  vaihtoväli = 3000; //Laittaa ajan jolla voi painaa napeista
  colorreset1(); //resetoi värit
  colorreset2(); //resetoi värit
  colorreset3(); //resetoi värit
  colorreset4(); //resetoi värit
  pisteet = 0; //Nollaa pisteet
  pisteteksti.innerText = "Pisteet: " + pisteet; //Kertoo paljon pisteitä on pelin ollessa käynissä
  setTimeout(ColorChange,vaihtoväli); //3 sek åäästä alkaa peli

}


function Klik1(){ //muiden nappien funktio
  pisteet++;  //pisteet = pisteet  + 1;
  pisteteksti.innerText = "Pisteet: " + pisteet; // pistemäärä tulostuu html sivulle
  pelaajahäviää = false; //Ilmoittaa että peli ei ole hävitty
}

function ColorChange(){//Vaihtaa väriä
  //arvotaan väläytettävä nappula
  if(pelaajahäviää == true) { //Katsoo onko peli hävitty
    document.getElementById("pisteet").innerText = "Sait " + pisteet + " pistettä" //Kertoo paljon pisteitä sai pelin aikana
  }
  else { //Jatkaa peliä
    var randomiluku = Math.floor(Math.random()*4+1);//Arpoo random painikkeen jonka väriä vaihtaa
    document.getElementById("ekaväri"+randomiluku).hidden = true;//Piilottaa oikean värin
    document.getElementById("vaihtoväri"+randomiluku).hidden = false;//Avaa vaihtoväri painikkeen
    setTimeout(ColorChange,vaihtoväli); //3 sek päästä alkaa peli
    pelaajahäviää = true; // kertoo että pelaaja hävisi
    vaihtoväli = vaihtoväli * 0.9;//Kertoo että paino aika lyhenee 0,9
  }
}

function colorreset1() {//Resetoi ekan painikkeen värit
  document.getElementById("ekaväri"+1).hidden = false;
  document.getElementById("vaihtoväri"+1).hidden = true;
  Klik1();

}

function colorreset2() {//Resetoi tokan painikkeen värit
  document.getElementById("ekaväri"+2).hidden = false;
  document.getElementById("vaihtoväri"+2).hidden = true;
  Klik1();
}

function colorreset3() {//Resetoi kolmannen painikkeen värit
  document.getElementById("ekaväri"+3).hidden = false;
  document.getElementById("vaihtoväri"+3).hidden = true;
  Klik1();
}

function colorreset4() {//Resetoi neljännen painikkeen värit
  document.getElementById("ekaväri"+4).hidden = false;
  document.getElementById("vaihtoväri"+4).hidden = true;
  Klik1();
}

var pelaajahäviää = false;
var klikkiaika;
var vaihtoväli;
var painikkeet = document.getElementsByClassName("pelipainikkeet");
var pisteet = 0;
var pisteteksti = document.getElementById("pisteet"); // pisteteksti tulostuu html  <p id = pisteet> </p> kohtaan
var käynnistäpainike = document.getElementById("käynnistäpainike");
