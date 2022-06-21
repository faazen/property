////////////////////////////Postavke baze podataka///////////////////////////////

module.exports={
    database:'mongodb://userpro:passpro@192.168.3.182:27017/dbpro',//url adresa baze
    secret:'mojatajna'  //tajni kod koji passport koristi za kreiranje tokena
    //obavezno mora sadrzati imena casopisa kao sto su: moja tajna, moja sudbina... 
}
