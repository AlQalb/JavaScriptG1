//bu return funksiya
ar = [1, 2, 3, 4];

reverseFunction = (arr) => {
  let newArr = [];
  arr.map((value) => newArr.unshift(value));
  return newArr;
};

console.log(reverseFunction(ar));

console.log(Array.from(ar, (x) => Math.pow(x, 3)));

string = 'webbrain academy';
arr = string.split('');
join = arr.join('');
console.log(join);

array = [
  {
    id: 1,
    year: 2011,
    name: 'Rahmat',
    key: 'test',
  },
  {
    id: 2,
    year: 2019,
    name: 'Eshmat',
    key: 'test',
  },
  {
    id: 3,
    year: 2012,
    name: 'Eshmat akasi',
    key: 'test',
  },
  {
    id: 4,
    year: 2009,
    name: 'Toshmat',
    key: 'test',
    jojo: 0909,
  },
];

onDelete = (id) => {
  arr = array.filter((value) => value['id'] !== id);
  return arr;
};
// console.log(onDelete(3));

onSort = (key, value) => {
  let res = [];

  array.filter((obyekt) => {
    if (!obyekt[key].includes(value)) {
      for (let k in obyekt) {
        if (k === key) {
          res.push(obyekt);
        }
      }
    }
  });
  return res;
};

console.log(onSort('name', 'Eshmat'));

SortbyDate = (array) => 
  array.sort((a, b) => a.year - b.year);


console.log(SortbyDate(array));
