//1. 생성자 함수
//2. 속성1개, 메소드 1개
function Animal(type, name, age) {
  if (!type) {
    throw Error('올바른 타입이 아닙니다. 다시 시도하여 주세요.');
  }
  if (!name) {
    throw Error('올바른 이름이 아닙니다. 다시 시도하여 주세요.');
  }
  if (!age || isNaN(age)) {
    throw Error('올바른 나이가 아닙니다. 다시 시도하여 주세요.');
  }
  this.type = type;
  this.name = name;
  this.age = age;

  this.callThis = function() {
    return `tpye : ${this.type}, name : ${this.name}, age : ${this.age}`;
  };
}

const cat1 = new Animal('고양이', '때껄룩', 2);
const cat2 = new Animal('고양이', '애용이', 2);
const cat3 = new Animal('고양이', '', 2);

console.log(cat1.callThis());
console.log(cat2.callThis());
console.log(cat3.callThis());
