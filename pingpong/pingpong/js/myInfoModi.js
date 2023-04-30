/* 탭 메뉴 */
const tabList = document.querySelectorAll('.myPage-left-side-menu>ul>li');
const contents = document.querySelectorAll('.myPage-content-main>div')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.myPage-left-side-menu>ul>li>a').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}


/* 업로드된 이미지 바로 보여줌 */
// 파일 선택 대화 상자에서 파일을 선택할 때마다 이미지를 미리보기
const inputElement = document.querySelector('input[type="file"]');
const previewElement = document.querySelector('#profile-picture-preview');

inputElement.addEventListener('change', () => {
  const file = inputElement.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    previewElement.src = reader.result;
  });

  reader.readAsDataURL(file);
});



/* 탈퇴 알링 */
const secession = document.querySelector('.secession>button');
secession.addEventListener("click", () => {
    alert('정말로 탈퇴하시겠습니까?')
});