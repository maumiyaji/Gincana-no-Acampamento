var joga = true;
var numbers = [];
var names = [];
var x;
var veio;
var novo;

while (joga == true) { // termina quando a linha de entrada for '0'
  let kids = gets(); // captura a 1a linha de entrada
  if (kids != 0) {
    for (i=0; i<kids; i++) { // loop para cada grupo
      let input = gets();
      let pos = input.indexOf(" ");
      names[i] = input.slice(0,pos); // array com os nomes
      numbers[i] = Number(input.slice(pos+1)); // array com os números
    }
    
    for (i=0; i<kids-1; i++) { // loop com o número de crianças - 1
    
      let n = numbers.length; // tem que declarar o n porque o length vai mudando
      
      // ações só para a 1a jogada
      if (i == 0) {
        // define a contagem
        veio = numbers[0];
        // se for maior que o length, calcula o resto, para facilitar
        if (veio >= n) {
          x = veio % n;
        }
        else {
          x = veio;
        }
        // se o número for par, já tem que inverter a ordem e mudar o x
        if (veio % 2 == 0) {
            numbers.reverse();
            names.reverse();
            if (x == 0) {
              x = n - 1;
            }
            else {
              x = x - 1;
            }
        }
      }
      // ações a partir da 2a rodada
      else {
        // define a nova contagem
        veio = novo;
        // se for maior que o length, calcula o resto, para facilitar
        if (veio >= n) {
          x = (veio % n) - 1;
          if (x < 0) x = n - 1;
        }
        else {
          x = veio - 1;
        }
      }
      
      // ações gerais
      novo = numbers[x];
      
      if ((veio + novo) % 2 == 0) { // par/par ou impar/impar mantém a ordem
        if (x == 0) {
          names.shift();
          numbers.shift();
        }
        else if (x == n - 1) {
          names.pop();
          numbers.pop();
        }
        else { // Retira o index x e reestrutura as listas
          let numA = numbers.slice(0,x);
          let numB = numbers.slice(x+1);
          numbers = numB.concat(numA);
          
          let namA = names.slice(0,x);
          let namB = names.slice(x+1);
          names = namB.concat(namA);
        }
      }
      else { // par/impar || impar/par
        if (x == 0) {
          names.shift();
          numbers.shift();
          names.reverse();
          numbers.reverse();
        }
        else if (x == names.length -1) {
          names.pop();
          numbers.pop();
          names.reverse();
          numbers.reverse();
        }
        else {
          let numA = numbers.slice(0,x);
          numA.reverse();
          let numB = numbers.slice(x+1);
          numB.reverse();
          numbers = numA.concat(numB);
          
          let namA = names.slice(0,x);
          namA.reverse();
          let namB = names.slice(x+1);
          namB.reverse();
          names = namA.concat(namB);
        }
      }
    }
    console.log(names);
    // names = [];
    // numbers = [];
  }
  else {
    joga = false;
  }
}

