import "./assets/scss/root.scss";

(function () {
    const pageClassName = [
        "bVUIrH","bxenLF","glDpUc","dHZPuP",
        "djPkle","gGkVoG","kdcObw","zPFXK"
    ]
    const $main = document.querySelector(".scroll");
    const $a = document.querySelector(".fxyCm");
    const $i = document.querySelector(".kONFoa");
    const $nav = document.querySelector(".nav");
    const $doownload = document.querySelector(".jfgxeQ");
    const $sideNav = document.querySelector(".cOtBOK");
    const $sideNavUl = $sideNav.children[0]

    let timer = null
    let index = 0
    let isInit = true

    window.addEventListener('wheel', (event) => {

        if (timer == null) {
            timer = setTimeout(() => {
                timer = null

                const y = event.deltaY
                if (y > 0) { // 밑으로 scroll
                    if (index < pageClassName.length-1) {
                        // 마지막 page가 아닌 경우
                        index += 1
                        $main.className = `scroll ${pageClassName[index]}`
                    }
                } else if (y < 0) {
                    // 위로 scroll
                    if (index != 0) {
                        // 첫 page가 아닌 경우
                        index -= 1
                        $main.className = `scroll ${pageClassName[index]}`
                    }
                }

                // 첫 화면에서만 라이더 모집 show
                $a.style.display = index == 0 ? 'flex' : 'none';

                // 마지막 화면에서 스크롤 이미지 제거
                $i.style.display = index == pageClassName.length - 1 ? 'none' : 'flex';
                $nav.style.opacity = index == pageClassName.length - 1 ? 0 : 1;

                // 첫 화면에서는 앱 설치 버튼 제거
                $doownload.style.display = index == 0 || index == pageClassName.length - 1 ? "none" : "block";
                $sideNav.style.opacity = index == 0 || index == pageClassName.length - 1 ? 0 : 1;

                // 스크롤로 이동 시 사이드 navigation도 함께 이동
                if (index > 0 && index < pageClassName.length -1) {
                    $sideNavUl.querySelector('.chqsmC').className = "bmjNdF"
                    $sideNavUl.children.item(index-1).className = 'chqsmC'
                }
            }, 700)
        }
    });

    document.querySelector('.page-container').addEventListener('click', (event) => {
        const { className } = event.target
        // 오른쪽 nav var 이동
        if (className == 'bmjNdF') {
            const { id } = event.target.dataset;
            if (id) {
                index = parseInt(id);
                $main.className = `scroll ${pageClassName[index]}`
                $sideNavUl.querySelector('.chqsmC').className = "bmjNdF"
                event.target.className = 'chqsmC'
            }
        }
    })
})()