//oziga va birga

for (let i = 1; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    i % j === 0 && count++;
  }
  count === 2 && console.log(i, 'tub son');
}

var title = 'webBrain Academy'.repeat(5);
a = 0;
b = 0;

for (let i = 0; i < title.length; i++) {
  title[i].toLowerCase() === 'a' && a++;
  title[i].toLowerCase() === 'b' && b++;
}
console.log(a, ' = a');
console.log(b, ' = b');

var title = 'WebBrain Academy'.repeat(5);

title = title.replace(/ /g, '');

console.log(title);

Newtitle = '';
for (let i = 0; i < title.length; i++) {
  title[i] === title[i].toUpperCase()
    ? (Newtitle += ` ${title[i]}`)
    : (Newtitle += `${title[i]}`);
}
console.log(Newtitle.trim());

a = '123';

console.log(a.split('').reverse().join('') + a);

tekst1 = ['abs', 'abs', 'abs', 'abs'];
tekst2 = ['abs', 'abs', 'abs', 'abs'];
tekst3 = ['abs', 'abs', 'abs', 'abs'];
tekst4 = ['abs', 'abs', 'abs', 'abs'];

taqqoslovchi = (arrrrrrrr, son) => {
  count = 0;
  for (let i = 0; i < arrrrrrrr.length; i++) {
    arrrrrrrr[i] === arrrrrrrr[0] && count++;
  }
  if (count === 4) {
    return 'teng';
  }
  return 'teng emas';
};

console.log(taqqoslovchi(tekst1));
console.log(taqqoslovchi(tekst2));
console.log(taqqoslovchi(tekst3));
console.log(taqqoslovchi(tekst4));
