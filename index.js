
var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyAppendKitten(name){
kittens.push(name);
return kittens;
}
destructivelyAppendKitten('Nala');

var kittens = ['Milo', 'Garfield', 'Otis'];

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten('Cowboy');
