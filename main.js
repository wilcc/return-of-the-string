/*******************
 * YOUR CODE HERE! *
 *******************/
function capitalize(word){
  return word.toUpperCase()
}
function exclaim(mark){
  return mark + '!'
}
function firstCharacter(first){
  return first[0]
}
function lastCharacter(last){
  return last[last.length-1]
}
function oneCharacter(one,x){
  return one[x]
}
function twoCharacters(two,x,y){
  return two[x]+two[y]
}

function yeller(what){
  return what.toUpperCase() + '!!!'
}
function initials(fullName){
  return fullName[0] + '.' + fullName[fullName.indexOf(' ')+1] +'.'
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof capitalize === 'undefined') {
  capitalize = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof firstCharacter === 'undefined') {
  firstCharacter = undefined;
}

if (typeof lastCharacter === 'undefined') {
  lastCharacter = undefined;
}

if (typeof oneCharacter === 'undefined') {
  oneCharacter = undefined;
}

if (typeof twoCharacters === 'undefined') {
  twoCharacters = undefined;
}

if (typeof initials === 'undefined') {
  initials = undefined;
}

if (typeof yeller === 'undefined') {
  yeller = undefined;
}


module.exports = {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  yeller,
  initials,
};