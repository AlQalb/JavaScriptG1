pow = (a, b) => {
  return a ** b;
};

console.log(pow(4, 2));

//

ceil = (a) => {
  return a >= a % 1 && parseInt(++a);
};
console.log(ceil(1.9));
//

floor = (a) => {
  return a % 1 <= a % 9 && parseInt(a);
};
console.log(floor(12.9));
//

round = (a) => {
  var qoldiq = a % 1;
  qoldiq >= 0.5 && console.log(parseInt(++a));
  qoldiq < 0.5 && console.log(parseInt(a));
};

round(12.4);

sqrt = (a) => {
  return a ** (1 / 2);
};

console.log(sqrt(9));

cbrt = (a) => {
  return a ** (1 / 3);
};

console.log(cbrt(8));

abs = (a) => {
  return (a ** 2) ** 0.5;
};


console.log(abs(8));

let tekst = 'welcome webbrain'.repeat(5);

var we = 0;
var a = 0;
var b = 0;

sanoq = (sanoq) => {
  index = tekst.indexOf('we');
  we++;
  tekst = tekst.slice(index + 2);
  tekst.includes('we') && sanoq(sanoq);
};
sanoq(sanoq);

let teksta = 'welcome webbrain'.repeat(5);

sanoqa = (sanoq) => {
  index = teksta.indexOf('a');
  a++;
  teksta = teksta.slice(index + 1);
  teksta.includes('a') && sanoqa(sanoq);
};
sanoqa(sanoq);

let tekstb = 'welcome webbrain'.repeat(5);
sanoqb = (sanoq) => {
  index = tekstb.indexOf('b');
  b++;
  tekstb = tekstb.slice(index + 1);
  tekstb.includes('b') && sanoqb(sanoq);
};
sanoqb(sanoq);

console.log(`we : ${we} ta`, `a : ${a} ta`, `b : ${b} ta`);
