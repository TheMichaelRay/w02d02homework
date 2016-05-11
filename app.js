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
                      cal.display.placeholder = ""},
    addNum: function(){cal.display.value += this.innerHTML},
    addOp: function(){cal.hold.arr.push(cal.display.value);
                      cal.display.placeholder = cal.display.value;
                      cal.hold.arr.push(this.innerHTML);
                      cal.display.value = ""},
    equals: function(){cal.hold.arr.push()}
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
cal.buttons.equals.addEventListener('click', cal.operations.addOp);

cal.buttons.clear.addEventListener('click', cal.operations.clear);
