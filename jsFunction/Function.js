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

weC = 0;
ac = 0;
bc = 0;

console.log(abs(8));


