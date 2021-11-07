var fruits = ['apple', 12, 'Ananas', 'Orange', 'Banana', 'Kiwi'];
var number = [10, 5, 11, 'apple', 2, 3, 4, 5, 6];

returnAsAndbs = (arr) => {
  let a = 0;
  let b = 0;

  arr.map((qiymat) => {
    qiymat = qiymat.toString().toLowerCase();

    qiymat.split('').map((yakkaQiymay) => {
      if (yakkaQiymay === 'a') {
        a++;
      }
      if (yakkaQiymay === 'b') {
        b++;
      }
    });
  });

  return `
    alar soni ${a}
    blar soni ${b}
    `;
};
console.log(returnAsAndbs(fruits));

returnyigindi = (arr) => {
  raqamlar = 0;
  yigindi = 0;

  raqamlar = arr.filter((value) => typeof value !== 'string');

  raqamlar.map((raqam) => {
    yigindi = raqam + yigindi;
  });

  return yigindi;
};
console.log(returnyigindi(number));

bittakichik = (arr) => {
  raqamlar = arr.filter((value) => typeof value !== 'string');

  raqamlar = raqamlar.sort((a, b) => a - b);

  for (var i = 0; i < raqamlar.length; i++) {
    var son = 0;
    son = raqamlar[i - 1];
  }
  return son;
};
console.log(bittakichik(number));

bittakichik = (arr) => {
  raqamlar = arr.filter((value) => typeof value !== 'string');

  raqamlar = raqamlar.sort((a, b) => a - b);

  for (var i = 0; i >= 0; i--) {
    var son = 0;
    son = raqamlar[i + 1];
  }
  return son;
};
console.log(bittakichik(number));

returnyiginditoqjuft = (arr) => {
  raqamlar = 0;
  yiginditoq = 0;
  yigindijuft = 0;

  raqamlar = arr.filter((value) => typeof value !== 'string');
  raqamjuft = raqamlar.filter((value, index) => index % 2 === 0);
  raqamtoq = raqamlar.filter((value, index) => index % 2 !== 0);
  raqamtoq.map((raqamtoq) => {
    yiginditoq = raqamtoq + yiginditoq;
  });
  raqamjuft.map((raqam) => {
    yigindijuft = raqam + yigindijuft;
  });
  return `${yigindijuft},${yiginditoq}`;
};
console.log(returnyiginditoqjuft(number));
