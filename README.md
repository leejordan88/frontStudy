<html>
  <head>
    <meta http-equiv="content-Type" content = "text/html; charset=UTF-8">
  </head>
  <body>
    <div>TIL(Today I Learned)</div>
    <table>
      <colgroup>
        <col width = "5%">
        <col width = "15%">
        <col width = "25%">
        <col width = "*">
      </colgroup>
      <thead>
        <th>
          #
        </th>
        <th>
          날짜
        </th>
        <th>
          카테고리
        </th>
        <th>
          내용
        </th>
      </thead>
      <tbody>
        <tr>
          <td style = 'tetext-align:center;'>
            1
          </td>
          <td style = 'tetext-align:center;'>
            2019.04.23
          </td>
          <td>
            JS의 역사 및 탄생 그리고 미래
          </td>
          <td>
            자바스크립트의 역사<br>
            자바스크립트는 동적 페이지 구현을 위한 언어이다.<br>
            버튼 클릭시 이벤트의 상세한 구현이나 서버와의 통신이 대부분 자바 스크립트로 이루어진다.<br>
            자바스크립트는 이름에서도 알수 있듯이 스크립트 언어로써, 인터넷 브라우저의 스크립트 엔진으로 돌아가게 된다.<br>
            자바스크립트의 특징은 명령형, 함수형, 객체지향형 언어라는 것이다.<br>
            간단하고 유연하기 때문에 초보자가 배우기 쉽기때문에 많은 프로그래밍 부트캠프에서 가르치는 언어 중 하나이다.<br>
            그러나 배우면 배울수록 터지는 매력에 끝을 알수 없는 언어이기도 하다.<br>
            물론 유행의 주기가 짧게 계속 생성되는 프레임워크도 이에 한몫하는 요소 중의 하나이다.<br>
            다른 특징중에 하나는 비동기 싱글 스레드로 동작한다는 것이다.<br>
            이러한 특징을 잘 알아야 효율적인 프로그래밍이 가능하다. <br>
            대표적인 라이브러리, 프레임워크는 JQuery, Angular, React, Vue 등이 있으며<br>
            백엔드에서는 자바스크립트 기반 런타임 환경인 Node JS 가 각광받고 있다.<br>
            출처: https://new93helloworld.tistory.com/207
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            2
          </td>
          <td style = 'tetext-align:center;'>
            2019.04.23
          </td>
          <td>
            FE 개발자? 개발자?
          </td>
          <td>
            <h3>프론트엔드 개발자의 길(FE 개발자가 하는 일)</h3>
            일을 하다보면 오히려 본업이었던(?) HTML, CSS에 대한 작업이 매우 작은 부분이 될 수 있다.<br> 
            위에 이야기한 업무들을 뒤로하고 프론트엔드는 그 중에서도 좀 세분화되는 것으로 보고있다.<br>
            <li>CSS 스페셜리스트(optional)</li>
            <li>UI 라이브러리 혹은 프레임워크 개발자(optional)</li>
            <li>서비스나 제품을 내고 이를 매니징 이슈를 맞이하는 최전방 개발자(required)</li>
            출처: https://medium.com/@deptno/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9E%80-b2c9af305aa0
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            3
          </td>
          <td style = 'tetext-align:center;'>
            2019.05.09
          </td>
          <td>
            javascript Object
          </td>
          <td>
            <h3>객체 선언 예시</h3>
              var person = {<br>
                name: ['Bob', 'Smith'],<br>
                age: 32,<br>
                gender: 'male',<br>
                interests: ['music', 'skiing'],<br>
                bio: function() {<br>
                  alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age +<br>
                  ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');<br>
                },<br>
                greeting: function() {<br>
                  alert('Hi! I\'m ' + this.name[0] + '.');<br>
                }<br>
              };<br>
            <h3>표기법</h3>
              점 표시법<br>
              person.age<br>
              person.interests[1]<br>
              person.bio()<br>
              괄호 표기법섹션<br>
              person['age']<br>
              person['name']['first']<br>
            출처: https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            4
          </td>
          <td style = 'tetext-align:center;'>
            2019.05.09
          </td>
          <td>
            Standard built-in Objects(표준 내장 객체)
          </td>
          <td>
            표준 내장 객체는 전역 범위의 여러 객체를 일컫습니다.<br>
            전역 객체는 엄격 모드를 사용하지 않을 땐 전역 범위에서 this, 지원하는 환경에선
            globalThis를 사용해 접근할 수 있는 객체입니다.<br>
            사실 전역 범위는 전역 객체와 전역 객체가 상속한 속성으로 이루어집니다.<br>
            출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            5
          </td>
          <td style = 'tetext-align:center;'>
            2019.09.19
          </td>
          <td>
            1. 호텔 앱 "생성자 함수" 버전으로 변경하기<br>
            2. 카운터 앱 "생성자 함수" 버전으로 변경하기<br>
          </td>
          <td>
            https://github.com/leejordan88/frontStudy/blob/master/homework/hotelAppConst.js
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            index
          </td>
          <td style = 'tetext-align:center;'>
            yyyy.mm.dd
          </td>
          <td>
            category
          </td>
          <td>
            detail
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            index
          </td>
          <td style = 'tetext-align:center;'>
            yyyy.mm.dd
          </td>
          <td>
            category
          </td>
          <td>
            detail
          </td>
        </tr>
        <tr>
          <td style = 'tetext-align:center;'>
            index
          </td>
          <td style = 'tetext-align:center;'>
            yyyy.mm.dd
          </td>
          <td>
            category
          </td>
          <td>
            detail
          </td>
        </tr>
      </tbody>
    </table>
  <body>
</html>