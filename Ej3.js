//java script tiene dos tipos de valores
//Los objetos y los array no se pueden copiar tal cual
//Variables primitivas

//Objetos

const dessert = {type: 'pie'};
dessert.type = 'pudding';

const second = dessert;
second.type = 'fruit';

alert(dessert.type);

//estuidar clases y prototipos