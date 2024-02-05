const name = localStorage.getItem('name');
    let changes = document.querySelector('.name');
    changes.innerText = name

    const DEFAULT_HEIGHT = 5; // textarea 기본 height
    const text = document.getElementById('textarea')
    const btn = document.getElementById('btn')
    const container = document.querySelector('.container');


    text.oninput = (event) => {
        const $target = event.target;
        if (text.value.length > 0) {
            btn.classList.add('yellow')
        }
        $target.style.height = 0;
        $target.style.height = DEFAULT_HEIGHT + $target.scrollHeight + 'px';
        if (text.value.length == 0) {
            btn.classList.remove('yellow')
        }
    };

    function submit() {
        if (text.value.length > 0) {
            // 현재 시간
            let today = new Date();
            let hours = ('0' + today.getHours()).slice(-2);
            let minutes = ('0' + today.getMinutes()).slice(-2);
            let timeString = hours + ':' + minutes
            // 입력값 화면에 띄우기
            container.innerHTML += `<span class="text">
                <div class="align">
                    <span class="time">${timeString}
                    </span>
                <div class="mytext">
                    <div>${text.value}</div>
                </div>
                </div>
            </span>`;
            // input, 버튼 초기화
            model(text.value);
            text.value = null
            text.style.height = 0;
            text.style.height = DEFAULT_HEIGHT + text.scrollHeight + 'px';
            window.scrollTo(0, document.body.scrollHeight);
            btn.classList.remove('yellow')
        }
    }
    /////////////// 모델에 돌려서 나온 값 넣어주면 됨////////////////
    function model(value) {
        setTimeout(() => {
            let today = new Date();
            let hours = ('0' + today.getHours()).slice(-2);
            let minutes = ('0' + today.getMinutes()).slice(-2);
            let timeString = hours + ':' + minutes;

            container.innerHTML += `<span class="text">
            <div class="character">
                <img src="../logo/1.png" alt="">
            </div>
            <div class="yourtext">
                <div>${value}</div>
            </div>
            <span class="time">${timeString}</span>
        </span>`;
            window.scrollTo(0, document.body.scrollHeight);
        }, 1000)
    }

    $('textarea').on('keydown', function (event) {
        if (event.key == 'Enter')
            if (!event.shiftKey) {
                event.preventDefault();
                submit();
            }
    });