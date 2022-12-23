const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const output = document.querySelector('.output');
const input = document.querySelector('#write');
const submitBtn = document.querySelector('.submit');
const arr = [
  'Site-ul nostru este cel mai bun site din domeniul in care activam si ne face mandri, dar mai mult decat atat, ne aduce rezultate, se vede in vanzari.',
  'Increderea, seriozitatea si profesionalismul sunt si atuurile d-voastra si ale colegilor d-voastra.',
  'Vreau sa va multumesc frumos ptr realizarea proiectului. Suntem profund recunoscatori din toate punctele de vedere.',
  'Just to say thanks for our lovely new site, we love it!',
  'You guys have been very responsive and great throughout which is a big help.',
  'I can’t thank you enough, thank you for all your help, you are a very loyal development agency, and a good one.',
  'Din lunga lista de oameni cu care am colaborat in materie de imagine si web, voi sunteti printre putinii pe care ii putem recomanda si altora.',
  'Apreciez si ca sunteti o echipa completa si pot apela la voi pentru o gama larga de servicii: de creare, intretinere si promovare a site-ului.',
  "I just wanted to let you know that it's been great working with you!",
  'Fara ajutorul colegilor nu as fi ajuns aici. Sunt oameni minunati, dau dovada de profesionalism si au dorinta de a ajuta!',
  'hello',
];

//default value on output(first array)
output.innerText = arr[0];
//ocunter on button click(+ or -)
let currentIndex = 0;
//disabled button default
prevBtn.disabled = true;

nextBtn.addEventListener('click', function () {
  //increment counter
  currentIndex++;
  //afisare element de la indexul curent(counter)
  output.innerText = arr[currentIndex];
  if (currentIndex === arr.length - 1) {
    //verific daca counter-ul este egal cu lungimea array pt a face disable la butonul next cand ajunge la finalul arry-ului
    nextBtn.disabled = true;
  } else if (currentIndex > 0) {
    //conditie pentru butonul "previous" ca sa nu ramana dezactivat dupa prima afisare a butonului "next"
    prevBtn.disabled = false;
  }
});

prevBtn.addEventListener('click', function () {
  //decrement counter
  currentIndex--;
  //afisare element de la indexul curent(counter)
  output.innerText = arr[currentIndex];
  if (currentIndex === 0) {
    //verific daca counterul este la finalul array-ului pentru a dezactiva butonul "Previous" cand array este 0
    prevBtn.disabled = true;
  } else if (currentIndex < arr.length - 1) {
    //verificare si conditie pentru ca butonul "next" sa nu ramana dezactivat pana ajunge la finalul array-ului
    nextBtn.disabled = false;
  }
});

submitBtn.addEventListener('click', function () {
  //adaugare input in array
  arr.push(input.value);
  input.value = '';
});
