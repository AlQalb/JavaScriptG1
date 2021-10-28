var title = 'webBrain Academy'.repeat(5);
title = title.toLowerCase();
a = 0;
b = 0;

counter = (counter) => {
  index = title.indexOf('a');
  a++;
  title = title.substr(index + 1);
  title.includes('a') && counter(counter);
};
counter(counter);
var titleb = 'webBrain Academy'.repeat(5);
titleb = titleb.toLowerCase();

counterb = (counter) => {
  index = titleb.indexOf('b');
  b++;
  titleb = titleb.substr(index + 1);
  titleb.includes('b') && counterb(counter);
};

counterb(counter);
console.log(`a harfi ${a} ta`, `b harfi ${b} ta`);

var title = 'webBrain Academy '.trim();
title = title.toLowerCase();
title = title.replace(/\s+/g, '');
title = title.repeat(5);
title = title.split('');
var a = 0;
var b = 0;

for (var i = 0; i <= title.length; i++) {
  if (title[i] == 'a') {
    a++;
  }
}
for (var i = 0; i <= title.length; i++) {
  if (title[i] == 'b') {
    b++;
  }
}
console.log(a, b);

title.indexOf('a');

var son = 1;

for (son; son <= 100; son++) {
  if (son / 1 == 0 && son % son == 0) {
    console.log(`${son} tub son`);
  } else if (son % 2 == 0) {
    console.log(`${son} juft son`);
  } else {
    console.log(`${son} toq son`);
  }
}

tub = 1;

for (tub; tub <= 100; tub++) {
  bu_tub_son = true;
  for (var bol = 2; bol < tub; bol++) {
    if (tub % bol == 0) {
      bu_tub_son = false;
      break;
    }
  }
  if (bu_tub_son == true) {
    console.log(`${tub} tub son`);
  }
}
son = 10;
for (son; son >= 1; son--) {
  console.log(son);
}

var number = '748393736384937483';

let res = 0,
  juft = 0,
  toq = 0;

for (var i = 0; i < number.length; i++) {
  if (i % 2 === 0) {
    juft += Number(number[i]);
  } else {
    toq += Number(number[i]);
  }
}

console.log(juft, 'juft');
console.log(toq, 'toq');
