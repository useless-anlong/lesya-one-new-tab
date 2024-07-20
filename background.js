let disconnectWarnWindow = document.querySelector('#disconnectWarn')

window.onload = function () {
    function fnCreatClock() {
        //声明时间相关变量
        var dLocal, nMonth, nDate, nHours, nMinutes;

        //1 获取计算机本地时间
        function fnGetDate() {
            dLocal = new Date();
            nMonth = dLocal.getMonth() + 1;
            nDate = dLocal.getDate();
            nHours = dLocal.getHours();
            nMinutes = dLocal.getMinutes();
        }

        function fnToDouble(num) {
            //声明一个返回结果
            var sResult = '';
            if (num < 10) {
                //判断数字小于10则是单数字，需要在前面添加字符串0
                sResult = '0' + num;
            } else {
                //数字为10以上转换为字符串
                sResult = '' + num;
            }
            //返回格式化后的字符串
            return sResult;
        }

        function fnFormatMonth() {
            return nMonth;
        }

        function fnFormatDate() {
            return nDate;
        }

        function fnFormatHours() {
            return nHours;
        }

        function fnFormatMinutes() {
            return fnToDouble(nMinutes);
        }

        var eMonth = document.getElementById('month');
        var eDate = document.getElementById('date');
        var eHours = document.getElementById('hours');
        var eMinutes = document.getElementById('minutes');

        fnGetDate();

        eMonth.innerHTML = fnFormatMonth();
        eDate.innerHTML = fnFormatDate();
        eHours.innerHTML = fnFormatHours();
        eMinutes.innerHTML = fnFormatMinutes();

        setInterval(function () {

            fnGetDate();

            eMonth.innerHTML = fnFormatMonth();
            eDate.innerHTML = fnFormatDate();
            eHours.innerHTML = fnFormatHours();
            eMinutes.innerHTML = fnFormatMinutes();
        }, 1000);

    }
    fnCreatClock();

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })

    let main = document.querySelector('main');
    main.style.opacity = '1';
    main.style.filter = 'blur(0px)';

    if (navigator.onLine) {
        connectedIcon.src = './sources/connected.svg';
        disconnectWarnWindow.style.transform = 'scale(0)';
    } else {
        connectedIcon.src = './sources/disconnected.svg';
        disconnectWarnWindow.style.transform = 'scale(1)';
    }
}

let consoleText =
    ":::.\n" +
    ":::.\n" +
    ":::.        ..:::..         ..::::..     ....        ....     ..:::..  ...        ......         .   .....            ......\n" +
    ":::.     .:::.....:::.    .::......:::.   :::.      .:::    ::::....::::::     .:..     .:.     .:...    ..:.      .:.     ..:.\n" +
    ":::.    .::.       .::.  .:::              :::.    .:::   .:::        :::.    ::          .:    .:.        .:     :.          :.\n" +
    ":::.    :::........::::   .:::::::..        :::.  .:::    :::.         ::.   .:            ::   .:          :.   .:. ........ ::\n" +
    ":::     :::............       ....::::.      :::. :::     :::.        .::.   .:            ::   .:          :.   .:. .........\n" +
    ":::.    .::.              .        .:::       ::::::       :::.      .:::.    ::          .:    .:          :.    :.\n" +
    " .:::.   .:::::..::::.   .::::.....:::.        ::::         .::::..:::::::     .:.      .:.     .:          :.     .:.      ...\n" +
    "    ..      .......         ....:...          .:::            .......  ...        .......        .          .        ........\n" +
    "                                             .:::\n" +
    "                                            .:::"
console.log(consoleText);
console.log('%cLesyaOne Start Page \n' +
    '%cVersion 24w06v2 ', 'color: #7ACF9C; font-size: 18px;', 'color: #999')
console.log("%cWelcome!", 'color: #8AC5DD; font-size: 18px; font-weight: bold');


let settingsButton = document.querySelector('#set');
let closeSettingsButton = document.querySelector('#closeSet');
let settingsBackDrop = document.getElementById('settings');
let settingsWindow = document.querySelector('.settingsMain');
let searchPage = document.querySelector('#searchPage');
let closeSearchPage = document.querySelector('#closeSearch');
let searchButton = document.querySelector('#sear');

settingsButton.addEventListener('click', function () {
    settingsBackDrop.style.opacity = '1';
    settingsBackDrop.style.transform = 'scaleY(1)';
    settingsWindow.style.marginTop = '0%';
    settingsWindow.style.opacity = '1';
});

closeSettingsButton.addEventListener('click', function () {
    settingsBackDrop.style.opacity = '0';
    settingsBackDrop.style.transform = 'scaleY(0)';
    settingsWindow.style.marginTop = '100%';
    settingsWindow.style.opacity = '0';
});

function opensearch() {
    searchPage.style.opacity = '1';
    searchPage.style.transform = 'scale(1)';
}

searchButton.addEventListener('click', function () {
    opensearch()
});

closeSearchPage.addEventListener('click', function () {
    searchPage.style.opacity = '0';
    searchPage.style.transform = 'scale(0)';
});

const connectedIcon = document.querySelector('.connectIcon');
window.addEventListener('online', function () {
    connectedIcon.src = './sources/connected.svg';
    console.log("Internet Connected");
    let connectedTips = document.createElement('div');
    let connectedTipsIcon = document.createElement('img');
    let connectedTipsText = document.createElement('p');

    connectedTipsText.textContent = '已连接至 Internet';
    connectedTipsIcon.src = './sources/animate/light/connected.svg';

    connectedTips.appendChild(connectedTipsIcon);
    connectedTips.appendChild(connectedTipsText);
    document.body.appendChild(connectedTips);
    connectedTips.classList.add('connectTips');
    setTimeout(() => {
        // connectedTips.removeChild(connectedTipsIcon);
        document.body.removeChild(connectedTips);
    }, 6000);
});
window.addEventListener('offline', function () {
    connectedIcon.src = './sources/connected.svg';
    console.log("Internet Connected");
    let connectedTips = document.createElement('div');
    let connectedTipsIcon = document.createElement('img');
    let connectedTipsText = document.createElement('p');

    connectedTipsText.textContent = 'Internet 连接被断开';
    connectedTipsIcon.src = './sources/animate/light/disconnect.svg';

    connectedTips.appendChild(connectedTipsIcon);
    connectedTips.appendChild(connectedTipsText);
    document.body.appendChild(connectedTips);
    connectedTips.classList.add('disconnectTips');
    setTimeout(() => {
        // connectedTips.removeChild(connectedTipsIcon);
        document.body.removeChild(connectedTips);
    }, 6000);
});

document.addEventListener('keydown', function (event) {
    // 假设要监听 Ctrl + Enter 组合键
    if ((event.key === 'Enter' || event.key === 'NumpadEnter') && (navigator.platform.match("mac") ? event.metaKey : event.ctrlKey)) {
        // 这里编写要执行的函数
        opensearch()
    }
});

let EnterBtn = document.querySelector('.tips');
EnterBtn.addEventListener('click', function () {
    let event = document.createEvent('Event');
    event.initEvent('keyup', true, false);
    event = Object.assign(event, {
        ctrlKey: false,
        metaKey: false,
        altKey: false,
        which: 13,
        keyCode: 13,
        key: 'Enter',
        code: 'Enter'
    })

    let input = document.querySelector("input");
    input.dispatchEvent(event);
});

let closeWindowBtn = document.querySelector('.closeWindow');

closeWindowBtn.addEventListener('click', function () {
    disconnectWarnWindow.style.transform = 'scale(0)';
})

// 获取按钮列表和第一个按钮
var buttonList = document.getElementById('buttonList');
var buttons = buttonList.getElementsByTagName('button');
var currentIndex = 0;

// 为文档添加键盘按下事件监听器
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 38) { // 上方向键
        // 如果不是第一个按钮，将当前按钮的样式恢复，并将上一个按钮设为选中样式
        if (currentIndex > 0) {
            buttons[currentIndex].style.backgroundColor = '';
            buttons[currentIndex].style.opacity = '0.45';
            currentIndex--;
            buttons[currentIndex].style.backgroundColor = 'var(--search-button-bg)';
            buttons[currentIndex].style.opacity = '0.75';
        }
    } else if (event.keyCode === 40) { // 下方向键
        // 如果不是最后一个按钮，将当前按钮的样式恢复，并将下一个按钮设为选中样式
        if (currentIndex < buttons.length - 1) {
            buttons[currentIndex].style.backgroundColor = '';
            buttons[currentIndex].style.opacity = '0.45';
            currentIndex++;
            buttons[currentIndex].style.backgroundColor = 'var(--search-button-bg)';
            buttons[currentIndex].style.opacity = '0.75';
        }
    }
});

// 初始时，将第一个按钮设为选中样式
buttons[0].style.backgroundColor = 'var(--search-button-bg)';
buttons[0].style.opacity = '0.75';