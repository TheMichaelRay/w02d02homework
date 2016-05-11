var cal = {

  //DOM selectors
  buttons: {
    numbers: document.querySelectorAll('.num'),
    operators: document.querySelectorAll('.oper'),
    equals: document.querySelector('#equals'),
    clear: document.querySelector('#clear')
    },
  display: document.querySelector('#display'),

  //functions
  operations: {
    clear: function(){cal.display.value = "";
                      cal.display.placeholder = "";
                      cal.hold.arr = []},
    addNum: function(){cal.display.value += this.innerHTML},
    addOp: function(){if (cal.hold.arr.length == 2){
                          cal.hold.arr.push(cal.display.value);
                          cal.display.value = eval(cal.hold.arr.join(''));
                          cal.hold.arr = []}
                      cal.hold.arr.push(cal.display.value);
                      cal.display.placeholder = cal.display.value;
                      cal.hold.arr.push(this.innerHTML);
                      cal.display.value = ""},
    equals: function(){cal.hold.arr.push(cal.display.value);
                       cal.display.placeholder = cal.operations.calc(cal.hold.arr);
                       cal.display.value = '';
                       cal.hold.arr = []},
    calc: function(num1, operator, num2) {
          if (operator === '+') {
            return cal.operations.sum(num1, num2);
          } else if (operator === '-') {
            return cal.operations.diff(num1, num2);
          } else if (operator === '*') {
            return cal.operations.prod(num1, num2);
          } else if (operator === '/') {
            return cal.operations.quot(num1, num2);
          } else {alert('ugh')}},
    sum: function(a,b) {return a+b},
    diff: function(a,b) {return a-b},
    prod: function(a,b) {return a*b},
    quot: function(a,b) {return a/b}
    },

  //holding zone variables
  hold: {
    arr: []
  }
}

for (var i = 0; i < cal.buttons.numbers.length; i++) {
  cal.buttons.numbers[i].addEventListener('click', cal.operations.addNum)
};
for (var i = 0; i < cal.buttons.operators.length; i++) {
  cal.buttons.operators[i].addEventListener('click', cal.operations.addOp)
};
cal.buttons.equals.addEventListener('click', cal.operations.equals);

cal.buttons.clear.addEventListener('click', cal.operations.clear);
