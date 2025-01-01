//1. Даний рядок тексту. Вивести його задом наперед

const string = "My name is Nataliia";
const stringArray = Array.from(string).reverse().join("");
console.log(stringArray);
//-----------------------------------------------------------------------------------------------
//2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину
//Варіает1

function returnsIntegerPart(number) {
  return Math.floor(number);
}
console.log(returnsIntegerPart(15.66));

//Варіает2
function returnsIntegerPart1(number) {
  return Math.ceil(number);
}
console.log(returnsIntegerPart1(15.66));
//-----------------------------------------------------------------------------------------------
//3. Прийняти від користувача (за допомогою prompt) його ім’я
//і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)

const userName = prompt("To write your name");
alert(userName.toUpperCase());
//-----------------------------------------------------------------------------------------------
//4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09”
//і повертає її у вигляді “22.09.2021”

function getStringDate(date) {
  let number = date.split("-");
  return `${number[1]}.${number[2]}.${number[0]}`;
}
console.log(getStringDate("2021-22-09"));
//--------------------------------------------------------------------------
/*5. Написати функцію, яка приймає два рядки, написані у різному регістрі 
//та порівнює їх незалежно від регістру.
isEqual(‘pApA’, ‘papa’)  //true
isEqual(‘qwerty’, ‘QWErty’)  //true
isEqual(‘aaa’, ‘EEE’) //false 
*/

function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));
//----------------------------------------------------------------------------
//*6. Написати функцію, яка викидає помилку під час роботи
// і перевірити роботу функції, викликавши її у блоці try-catch

function getSumNumbers(a) {
  return a + b;
}
try {
  console.log(getSumNumbers(1, 2));
} catch (error) {
  console.log(error);
}

console.log('Hello');
