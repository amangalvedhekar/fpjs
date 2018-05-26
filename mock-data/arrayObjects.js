const gamesList = [
  {
    id: 1,
    genre: 'action',
    name: 'Killzone'
  },
  {
    id: 2,
    genre: 'action',
    name: 'Resistance'
  },
  {
    id: 3,
    genre: 'action',
    name: 'Infamous'
  },
  {
    id: 4,
    genre: 'action',
    name: 'God Of War!!!'
  }
];
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const filterList = Array.from({ length: 40 }, (_, index) => index + 1);

export {
  gamesList,
  filterList
};