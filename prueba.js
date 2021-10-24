const mes= prompt("Ingrese un mes");

if (mes == "enero"||mes=="marzo" ||mes ==  "mayo" ||mes ==  "julio" ||mes ==  "agosto" ||mes ==  "octubre" ||mes == "diciembre"){
    dias1 = parseInt(prompt("ingrese un numero del 1 al 31"));
} else if(mes== "febrero"){
    parseInt(prompt("ingrese un numero del 1 al 28"));
} else if(mes=="abril"||mes=="junio"||mes=="septiembre"||mes=="noviembre"){
    dias3 = parseInt(prompt("ingrese un numero del 1 al 30"));
}else{
    prompt("No se reconoce ese mes");
    location.reload();
}

if((mes== "diciembre"&& dias1>=21)||mes=="enero"||mes=="febrero"||(mes=="marzo"&&dias1<21)){
    alert("Si se encuentra en el emisferio sur es verano!");
}else if((mes=="marzo"&&dias1>=21)||mes=="abril"||mes=="mayo"||(mes=="junio"&& dias3 < 21)){
    alert("Si se encuentra en el emisferio sur es otoño");
}else if((mes=="junio"&&dias3>=21)||mes=="julio"||mes=="agosto"||(mes=="septiembre"&& dias3<21) ){
    alert("Si se encuentra en el emisferio sur es invierno");
}else {
    alert("Si se encuentra en el emisferio sur es primavera");
}
location.reload();