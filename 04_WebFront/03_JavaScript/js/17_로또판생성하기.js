const createBtn = document.getElementById("createBtn");
const lottoBoard = document.getElementById("lottoBoard");

// 로또판 생성하기 버튼 클릭 시 로또판에 1~45 번호 생성
createBtn.addEventListener("click", () => {
    lottoBoard.innerHTML = ""; // 이전에 생성된 내용을 모두 삭제
                                // 클릭할 때 마다 계속 번호가 생성되는걸 방지함

    for(let i=1; i<46; i++){

        // 로또판에 들어갈 div 요소 생성
        const innerDiv = document.createElement("innerDiv");

        // innerDiv 요소에 i(1~45) 값 대입
        innerDiv.innerText = i;

        // innerDiv number 클래스 추가
        innerDiv.classList.add("number");

        // innerDiv 클릭되었을 때 배경색 변경/제거
        innerDiv.addEventListener("click", e => {

            // active 클래스가 있다면 제거
            if(e.target.classList.contains("active")){
                e.target.classList.remove("active");
            }
            else{
                // active 클래그가 없으면 추가
                // e.target.classList.add("active");

                // active 클래스를 가진 요소가 6개 이상인 경우
                if(document.getElementsByClassName("active").length >= 6){
                    alert("6개 까지만 선택할 수 있습니다.");

                }else{ // active 클래스를 가진 요소가 6개 미만인 경우
                    e.target.classList.toggle("active");
                }
            }
        });

        // 로또판에 innerDiv 추가
        lottoBoard.append(innerDiv);

    }
    
});