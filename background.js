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
    } else {
        connectedIcon.src = './sources/disconnected.svg';
    }
}
const connectedIcon = document.querySelector('.connectIcon')
window.addEventListener('online', function () {
    connectedIcon.src = './sources/connected.svg';
});
window.addEventListener('offline', function () {
    connectedIcon.src = './sources/disconnected.svg';
});

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