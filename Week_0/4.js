var Instance = function() {
  Instance.instance_count++;
  let counter = 0;
  this.add = function(){return counter++;};
  this.add();
};

Instance.instance_count = 0;

var i1 = new Instance();
var i2 = new Instance();

console.log(`Instance count = `+ Instance.instance_count);

console.log('Counter :');
console.log(i1.add());
console.log(i1.add());
console.log(i1.add());
