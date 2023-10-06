//Array de lista de palabras que serán comparadas
const wordList = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

let string = prompt("Ingrese palabra a comparar");

//Función que recibirá dos palabras para comparar parámetros que serán colocados en un array dependiendo de la condición
function bigWords (string, stringArray){
    
    //Se debe de crear un array vacío para colocar las palabras más largas
    let arrayStringSelected = [];

    //Revisamos cada palabra
    stringArray.forEach(word => {

        if (word.length > string.length) {
            //Si se cumple, agregamos al final la palabra al array vació que hicimos antes
            arrayStringSelected.push(word);
        }
    });

    //Nos regresa el array modificado
    return arrayStringSelected;

}

let result = bigWords(string,wordList);
console.log(result);


//Feedback de mi compañera Evelyn
/*
    En general me gusto mucho que iba explicando paso a paso su lógica de programación, solo como comentario un poco nerviosa en la entrevista y repetía algunas palabras, también el final resolver algunos detalles para concluir con el ejercicio, pero en general estuvo muy bien
*/