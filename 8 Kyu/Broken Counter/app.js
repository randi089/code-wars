function Counter() {
    this.value = 0;
  }

//   Counter.prototype = {
//     increase : function(){this.value++;},
//     getValue : function(){ return this.value;},
//     reset : function(){this.value = 0;}
//   };
  
  Counter.prototype.increase = function () {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };

//   class Counter {
// 	constructor() {
//   	this.value = 0;
//   }
  
//   increase() {
//     this.value++;
//   };

//   getValue() {
//     return this.value;
//   };

//   reset() {
//     this.value = 0;
//   };
// }

  const counter = new Counter();

  console.log(counter.getValue());
  counter.increase()
  console.log(counter.getValue());
  counter.reset()
  console.log(counter.getValue());