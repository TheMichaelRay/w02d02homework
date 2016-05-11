var cal = {

  //DOM selectors
  buttons: {

    numbers: document.querySelectorAll('.num'),

    operators: document.querySelectorAll('.oper'),

    equals: document.querySelector('#equals'),

    clear: document.querySelector('#clear')
    },

  //Calculator display
  display: document.querySelector('#display'),

  //functions
  operations: {
    clear: function(){cal.display.value = "";
                      cal.display.placeholder = "0";
                      cal.hold.arr = []},

    addNum: function(){cal.display.value += this.innerHTML},

                        //used if the user is using multiple numbers
                        //and operators to continue ad infinitum
    addOp: function(){if (cal.hold.arr.length == 2){
                          cal.hold.arr.push(cal.display.value);
                          cal.display.value = cal.operations.calc(cal.hold.arr[0], cal.hold.arr[1], cal.hold.arr[2]);
                          cal.hold.arr = [];
                        //used if the user presses = and then wants to
                        //continue operations
                      } else if (Number(cal.display.placeholder) > 0) {
                          cal.hold.arr.push(cal.display.placeholder);
                          cal.hold.arr.push(this.innerHTML)
                      } else {
                      cal.hold.arr.push(cal.display.value);
                      cal.display.placeholder = cal.display.value;
                      cal.hold.arr.push(this.innerHTML);
                      cal.display.value = ""}},

    equals: function(){cal.hold.arr.push(cal.display.value);
                       cal.display.placeholder = cal.operations.calc(cal.hold.arr[0], cal.hold.arr[1], cal.hold.arr[2]);
                       cal.display.value = '';
                       cal.hold.arr = []},

          // takes the cal.hold.arr array and returns a numerical value
    calc: function(num1, operator, num2) {
          if (operator === '+') {
            return cal.operations.sum(Number(num1), Number(num2));
          } else if (operator === '-') {
            return cal.operations.diff(Number(num1), Number(num2));
          } else if (operator === '*') {
            return cal.operations.prod(Number(num1), Number(num2));
          } else if (operator === '/') {
            return cal.operations.quot(Number(num1), Number(num2));
          } else {alert('ugh')}},

          //arithemical functions
    sum: function(a,b) {return a+b},
    diff: function(a,b) {return a-b},
    prod: function(a,b) {return a*b},
    quot: function(a,b) {return a/b}
    },

  //holding zone variables
  hold: {
    arr: [],
    // mem used for future memory store and recall function
    mem: null
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
