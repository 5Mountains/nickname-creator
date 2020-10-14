const button = document.querySelector('.button');
const out = document.querySelector('.out');

const bags = ['sack', 'purse', 'pouch', 'bag', 'gripsack', 'handbag', 'suitcase', 'briefcase'];
const leaders = ['Warhol','Picasso','van Gogh','da Vinci','Matisse','Pollock','Munch','Dalí'];

const getRandom = (array) => Math.floor(Math.random() * Math.floor(array));

button.addEventListener('click', (e) => {
    e.preventDefault();
    let randomBag = bags[getRandom(bags.length)];
    let randomLeader = leaders[getRandom(leaders.length)];
    let randomNickname = `${randomLeader}'s ${randomBag}`;
    out.innerHTML = randomNickname;
});

