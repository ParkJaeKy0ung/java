/* 탭 메뉴 */
const tabList = document.querySelectorAll('.myPage-left-side-menu > ul > li');
const contents = document.querySelectorAll('.myPage-content-main')
let activeCont = '#myPageModiTab1';


for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.myPage-left-side-menu > ul > li > a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('myPage_modi_is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('myPage_modi_is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}