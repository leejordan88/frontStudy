var counter = {
  a: 10,
  increment: function(num) {
    typeof num === 'number' ? console.log('a') : console.log('b');
    this.a = this.a + (num || 1);
  },
  decrement: function(num) {
    this.a = this.a - (num || 1);
  },
  reset: function(num) {
    this.a = num || 1;
  },
  getCount: function() {
    return this.a;
  },
};

counter.increment('30');
console.log('increment(30)');
console.log(counter.getCount());
counter.decrement(20);
console.log('decrement(20)');
console.log(counter.getCount());
counter.reset(1);
console.log('reset(1)');
console.log(counter.getCount());
