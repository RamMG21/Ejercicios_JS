//Escribe un programa que pida un número y nos 
//diga si es divisible por 2, 3, 5 o 7 
//(sólo hay que comprobar si lo es por uno de los cuatro)

//Se genera el numero de manera aleatoria
var n = Math.floor((Math.random() * 1000) + 1);
alert(n);

if(n % 2 == 0)
{
    alert("Divisible entre 2");
}

if(n % 3 == 0)
{
    alert("Divisible entre 3");
}

if(n % 5 == 0)
{
    alert("Divisible entre 5");
}


if(n % 7 == 0)
{
    alert("Divisible entre 7");
}
