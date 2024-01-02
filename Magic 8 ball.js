main.js
const userName = 'Riley'; // replace 'Keiran' or leave it empty for a different imput
var userQuestion = 'What are my chances of getting my dick sucked tonight'; // Riley's question when asked
var randomNumber = (Math.floor(Math.random() *8)); 
var eightBall = '';

  const greeting = userName ? `Hello, ${userName}!` : `Hello`;

  console.log(`${greeting} You asked: ${userQuestion}`);

switch(randomNumber){
case 0:
  eightBall = ('It is certain')
  break;
case 1: 
  eightBall = ('It is decidedly so')
  break;
case 2:
  eightBall = ('Reply hazy try again')
  break;
case 3:
  eightBall = ('Cannot predict now')
  break;
case 4:
  eightBall = ('Do not count on it')
  break;
case 5:
  eightBall = ('My sources say no')
  break;
case 6:
  eightBall = ('Outlook not so good')
  break;
case 7:
  eightBall = ('Signs point to yes')
  break;

}
console.log(eightBall)