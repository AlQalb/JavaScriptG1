// var title = 'webBrain Academy'.repeat(5);
// title = title.toLowerCase();
// a = 0;
// b = 0;

// counter = (counter) => {
//   index = title.indexOf('a');
//   a++;
//   title = title.substr(index + 1);
//   title.includes('a') && counter(counter);
// };
// counter(counter);
// var titleb = 'webBrain Academy'.repeat(5);
// titleb = titleb.toLowerCase();

// counterb = (counter) => {
//   index = titleb.indexOf('b');
//   b++;
//   titleb = titleb.substr(index + 1);
//   titleb.includes('b') && counterb(counter);
// };

// counterb(counter);
// console.log(`a harfi ${a} ta`, `b harfi ${b} ta`);
//
//
//

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
for (tub; tub <= sqrt(i); tub++) {
  if (tub % 1 == 0 && tub % tub == 0) {
    console.log(`${tub} tub son`);
  }
}
