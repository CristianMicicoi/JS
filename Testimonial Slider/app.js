const output = document.querySelector('.output');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
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
];

output.innerText = arr[0];

toggle();
nextBtn.addEventListener('click', function () {
  slider(nextBtn.value);
  toggle();
});

prevBtn.addEventListener('click', function () {
  slider(prevBtn.value);
  toggle();
});

function slider(btnValue) {
  const indexActual = arr.indexOf(output.innerText);
  const result = Number(indexActual) + Number(btnValue);
  output.innerText = arr[result];
}

function toggle() {
  const actual = arr.indexOf(output.innerText);
  if (actual === 0) {
    prevBtn.disabled = true;
  } else if (actual === arr.length - 1) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
