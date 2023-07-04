const quotes = [
  {
    quote : `Hello World!`,
    author : `C Lang`,
  },
  {
    quote : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ipsa impedit atque itaque ipsum tempore dolorum deserunt libero accusamus est rem, explicabo sunt tenetur consectetur commodi reprehenderit totam iure quos?`,
    author : `Unknown`,
  },
  {
    quote : ``,
    author : ``,
  },
]
//명언과 명언을 한 사람을 하나의 object로 만들고 이를 배열로 저장하였다.

const numOfQuotes = quotes.length - 1;
//명언의 개수. quotes 배열의 개수이다.

const genBtn = document.querySelector(`#generateBtn`);
const quoteArea = document.querySelector(`#quote`);
const authorArea = document.querySelector(`#author`);
//Get HTML Elements

function getQuotes(){
  let quote = quotes[getRandomNum(0, numOfQuotes)];
  return quote;
}
//여기에는 quotes object에서 요소들만 가져오기

function getRandomNum(minNum, maxNum){
  let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randomNum;
}
//minNum ~ maxNum 두 수를 포함한 사잇값을 랜덤으로 출력하는 함수

function generateQuotes(){
  let quotes = getQuotes()
  let quote = quotes.quote
  let author = quotes.author
  quoteArea.innerHTML = quote;
  authorArea.innerHTML = author;
}
//명언을 랜덤으로 불러와서 이를 HTML에 입력하는 함수

genBtn.addEventListener('click', generateQuotes);
//버튼을 누르면 generateQuotes 함수 실행
