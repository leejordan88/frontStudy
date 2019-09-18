function Hotel() {
  this.customers = [];
  //체크인
  this.checkIn = function(name) {
    //잘못된 값, 빈값에 대한 검증을 진행한다.
    if (!this.stringValidation(name)) {
      return '올바른 이름이 아닙니다. 다시 시도하여 주세요.';
    }
    //중복 이름에 대한 체크
    if (this.isCheckIn(name, 'checkIn')) {
      return `${name}님은 이미 체크인 하셨습니다.`;
    }
    //정상 체크인
    this.customers.push(name);
    return `안녕하세요. ${name}님 반갑습니다.`;
  };
  //체크인 고객 확인
  this.getStatus = function() {
    //체크인한 고객이 없다
    if (!this.haveCustomer()) {
      return '체크인한 고객이 없습니다.';
    }
    //체크인한 고객이 있다
    let msg = '';
    for (let i = 0; i < this.customers.length; i++) {
      msg = msg + this.customers[i];
      if (i + 1 === this.customers.length) {
        msg += '님이 체크인했습니다.';
      } else {
        msg += '님, ';
      }
    }
    return msg;
  };
  //체크아웃
  this.checkOut = function(name) {
    //잘못된 값, 빈값에 대한 검증을 진행한다.
    if (!this.stringValidation(name)) {
      return '올바른 이름이 아닙니다. 다시 시도하여 주세요.';
    }
    //체크인한 고객이 없다
    if (!this.haveCustomer()) {
      return '체크인한 고객이 없습니다.';
    }
    //체크인한 고객이 있다
    if (!this.isCheckIn(name, 'checkOut')) {
      return `${name}님 의 체크인 내역을 찾을 수 없습니다.`;
    }
    return `${name}님 감사합니다. 안녕히 가세요.`;
  };
  //파라미터 유효성 검사(string)
  this.stringValidation = function(value) {
    if (!value || typeof value !== 'string') {
      return false;
    } else {
      return true;
    }
  };

  this.isCheckIn = function(name, type) {
    //체크인한 고객이 있는지 확인
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i] === name) {
        //체크인한 고객이 존재하고 type이 checkOut 이라면 삭제
        if (type === 'checkOut') {
          this.customers.splice(i, 1);
        }
        return true || false;
      }
    }
  };

  this.haveCustomer = function() {
    if (this.customers.length !== 0) return true || false;
  };
}

const delnuna = new Hotel();
console.log(delnuna.checkIn());
console.log(delnuna.checkIn(1111));
console.log(delnuna.getStatus());
console.log(delnuna.checkIn('아이유'));
console.log(delnuna.checkIn('구혜선'));
console.log(delnuna.checkIn('구혜선'));
console.log(delnuna.checkIn('설리'));
console.log(delnuna.checkIn('아이유'));
console.log(delnuna.checkIn('한지민'));
console.log(delnuna.checkIn('권나라'));
console.log(delnuna.getStatus());
console.log(delnuna.checkOut());
console.log(delnuna.checkOut(1111));
console.log(delnuna.checkOut('이국주'));
console.log(delnuna.checkOut('구혜선'));
console.log(delnuna.getStatus());
console.log(delnuna.getStatus());
