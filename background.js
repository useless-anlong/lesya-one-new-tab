window.onload = function () {
    // //GET
    // Date.prototype.format = function (fmt) {
    //     var o = {
    //         "y+": this.getFullYear, //YEAR
    //         "M+": this.getMonth() + 1, //MONTH
    //         "d+": this.getDate(), //DAY
    //         "h+": this.getHours(), //HOUR
    //         "m+": this.getMinutes(), //MINUTE
    //         "s+": this.getSeconds(), //SECOND
    //     };
    //     if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    //     for (var k in o)
    //         if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    //     return fmt;
    // }


    // //INPUT
    // setInterval("document.getElementById('date1').innerHTML = (new Date()).format('M');", 100);
    // setInterval("document.getElementById('date2').innerHTML = (new Date()).format('d');", 100);
    // setInterval("document.getElementById('clock1').innerHTML = (new Date()).format('hh');", 100);
    // setInterval("document.getElementById('clock2').innerHTML = (new Date()).format('mm');", 100); 
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


    updateText("n", window.navigator.onLine);

    window.addEventListener("online", function () {
        updateText("n", window.navigator.onLine);
    });

    window.addEventListener("offline", function () {
        updateText("n", window.navigator.onLine);
    });

    function updateText(id, msg) {
        document.getElementById(id).textContent = msg;
        console.log(msg);
    }

    // const ContextMenu = function (options) {
    //     let instance;

    //     function createMenu() {
    //         const ul = document.createElement("ul");
    //         ul.classList.add("custom-context-menu");
    //         const { menus } = options;
    //         const menuOpenAnim = [
    //             { transform: "rotate(0) scale(1)" },
    //             { transform: "rotate(360deg) scale(0)" },
    //         ];

    //         const menuOpenTiming = {
    //             duration: 2000,
    //             iterations: 1,
    //         };
    //         if (menus && menus.length > 0) {
    //             for (let menu of menus) {
    //                 const li = document.createElement("li");
    //                 li.textContent = menu.name;
    //                 li.onclick = menu.onClick;
    //                 ul.animate(menuOpenAnim, menuOpenTiming);
    //                 ul.appendChild(li);
    //             }
    //         }
    //         const body = document.querySelector("body");
    //         body.appendChild(ul);
    //         return ul;
    //     }

    //     return {
    //         getInstance: function () {
    //             if (!instance) {
    //                 instance = createMenu();
    //             }
    //             return instance;
    //         },
    //     };
    // };

    // const contextMenu = ContextMenu({
    //     menus: [
    //         {
    //             name: "通用设置",
    //             onClick: function (e) {
    //                 console.log("settings clicked");
    //             },
    //         },
    //         {
    //             name: "搜索引擎偏好",
    //             onClick: function (e) {
    //                 console.log("search-settings clicked");
    //             },
    //         },
    //         {
    //             name: "管理快捷菜单栏",
    //             onClick: function (e) {
    //                 console.log("menu-setting clicked");
    //             },
    //         },
    //         {
    //             name: "关于 Silent Start",
    //             onClick: function (e) {
    //                 console.log("about clicked");
    //             },
    //         },
    //         {
    //             name: "帮助与支持",
    //             onClick: function (e) {
    //                 console.log("help clicked");
    //             },
    //         },
    //     ],
    // });

    // function showMenu(e) {
    //     e.preventDefault();
    //     const menus = contextMenu.getInstance();
    //     menus.style.top = `${e.clientY}px`;
    //     menus.style.left = `${e.clientX}px`;
    //     menus.classList.remove("hidden");
    // }

    // function hideMenu(event) {
    //     const menus = contextMenu.getInstance();
    //     menus.classList.add("hidden");
    // }

    // document.addEventListener("contextmenu", showMenu);
    // document.addEventListener("click", hideMenu);

    // var t = document.getElementById("text");

    // function fun() {
    //     t.submit()
    //     // t.reset();
    //     alert(t.value);
    //     return false;
    // };

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    })

    // var frame = document.getElementById("settings");

    // window.addEventListener(
    //     "message",
    //     function (ev) {
    //         var data = ev.data;
    //         console.log(`get(`, data, `)`);
    //         window.location.href = "https://github.com/useless-anlong/";
    //     },
    //     false
    // );
}
