let studente = {
    nome: 'Andrea',
    cognome: 'Gentili',
    eta: 25,
};

for(let key in studente) {
console.log(key);
console.log(studente[key]);
};

let studenti = [
    {
    nome: 'Mattia',
    cognome: 'Maio',
    eta: 24
    },
    {
    nome: 'Marco',
    cognome: 'Fabretti',
    eta: 22
    },
    {
    nome: 'Luisa',
    cognome: 'Sara',
    eta: 24
    }
];

for (let i=0; i <studenti.length; i++) {
    let stu = studenti[i];
    console.log(stu.nome);
    console.log(stu.cognome);
};

let inputNome = prompt('Inserisci nome studente');
let inputCognome = prompt('Inserisci cognome studente');
let inputEta = prompt('Inserisci età studente');

studenti.push({
    nome: inputNome,
    cognome: inputCognome,
    eta: inputEta
  });

  for (let i=0; i <studenti.length; i++) {
    let stu = studenti[i];
    console.log(stu.nome);
    console.log(stu.cognome);
    console.log(stu.eta);
};