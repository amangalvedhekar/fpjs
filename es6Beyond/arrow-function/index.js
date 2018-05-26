import {
  gamesList,
} from '../../mock-data/arrayObjects';

function getGameNames(gameObject) {
  /*
  * arguments object cannot be accessed with arrow function but
  * rest parameters can be used
  * */

  console.log(arguments.length, 'inside anonymous function');
  return gameObject.name;
}

const getNamesList = game => game.name;
const restParameter = (...game) => {
  console.log(game.length, 'inside new arrow funct');
  return game[0].name;
};
//Anonymous function
const gameNames = gamesList.map(getGameNames);

//Arrow Function
const gameNamesList = gamesList.map(getNamesList);

const restExample = gamesList.map(restParameter);

console.log(gameNamesList, gameNames, restExample);