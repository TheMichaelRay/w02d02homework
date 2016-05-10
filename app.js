var cal = {

  //DOM selectors
  buttons: {
    numbers: document.querySelectorAll('.num'),
    operators: document.querySelectorAll('.oper'),
    equals: document.querySelector('#equals')
    },
  display: document.querySelector('#display'),

  //functions
  operations: {
    addNum: function(){cal.display.innerHTML += this.innerHTML},
    addOp: function(){console.log(this.innerHTML)},
    sum: function(a,b) {return a+b},
    diff: function(a,b) {return a-b},
    prod: function(a,b) {return a*b},
    quot: function(a,b) {return a/b}
    }
}

for (var i = 0; i < cal.buttons.numbers.length; i++) {
  cal.buttons.numbers[i].addEventListener('click', cal.operations.addNum)
};
for (var i = 0; i < cal.buttons.operators.length; i++) {
  cal.buttons.operators[i].addEventListener('click', cal.operations.addOp)
};
cal.buttons.equals.addEventListener('click', cal.operations.addOp)
