var cal = {
  buttons: {
    numbers: document.querySelectorAll('.num'),
    operators: document.querySelectorAll('.oper'),
    equals: document.querySelector('.equal')
    },
  display: document.querySelector('#display')
}

function addNum(){
  console.log(Number(this.innerHTML))
}

for (var i = 0; i < cal.buttons.numbers.length; i++) {
  cal.buttons.numbers[i].addEventListener('click', function(){
    console.log(Number(this.innerHTML));
  })
}
