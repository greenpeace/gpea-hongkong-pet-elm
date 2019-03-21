/* eslint-disable */
export const numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const addEvent = function(el, type, handler) {
    if (el.attachEvent) el.attachEvent("on" + type, handler);
    else el.addEventListener(type, handler);
}

export const removeEvent = function(el, type, handler) {
    if (el.detachEvent) el.detachEvent("on" + type, handler);
    else el.removeEventListener(type, handler);
}

export function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

export function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

export function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

export function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

export function mobilecheck() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

export const getAllUrlParams = function(url) {
    var queryString = url ?
        url.split("?")[1] :
        window.location.search.slice(1);
    var obj = {};

    if (queryString) {
        queryString = queryString.split("#")[0];

        var arr = queryString.split("&");

        for (var i = 0; i < arr.length; i++) {
            var a = arr[i].split("=");

            var paramNum;
            var paramName = a[0].replace(/\[\d*]/, function(v) {
                paramNum = v.slice(1, -1);
                return "";
            });

            var paramValue = typeof a[1] === "undefined" ? true : a[1];

            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            if (obj[paramName]) {
                if (typeof obj[paramName] === "string") {
                    obj[paramName] = [obj[paramName]];
                }
                if (typeof paramNum === "undefined") {
                    obj[paramName].push(paramValue);
                } else {
                    obj[paramName][paramNum] = paramValue;
                }
            } else {
                obj[paramName] = paramValue;
            }
        }
    }
    return obj;
}

export const getUsableHeight = function() {
    "use strict";

    // check if this page is within a app frame
    var isInAppMode = ("standalone" in navigator && navigator.standalone) || (window.chrome && window.top.chrome.app && window.top.chrome.app.isInstalled);

    var ua = navigator.userAgent;
    // memoized values
    var isIphone = ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1;
    var isIpad = ua.indexOf('iPad') !== -1;
    var isAndroid = ua.indexOf('Android') !== -1;
    var isMobile = isIphone || isIpad || isAndroid;

    // compute the missing area taken up by the header of the web browser to offset the screen height
    var usableOffset = 0;
    if (isIphone) {
        usableOffset = 20;
    } else if (isAndroid && ua.indexOf('Chrome') === -1) {
        usableOffset = 1;
    }

    return function() {
        if (!isMobile) {
            return window.innerHeight;
        }
        var isLandscape = window.innerWidth > window.innerHeight,
            height;
        // on ios devices, this must use screen
        if (isIphone) {
            height = isLandscape ? screen.width : screen.height;
            if (!isInAppMode) {
                height -= isLandscape ? 32 : 44;
                height += 1;
            }
        } else {
            height = (isLandscape ? window.outerWidth : window.outerHeight) / (window.devicePixelRatio || 1);
        }
        return height - usableOffset;
    };
}

/*
const mainShare = event => {
    event.preventDefault();
    if (navigator.share) {
        navigator
            .share({
                title: "",
                text: "Hi👋 你知唔知道而家香港政府嘅空氣質素指標，遠落後於世界衞生組織建議嘅標準👉 ",
                url: "https://act.gp/2tskQgC"
            })
            .then(() => console.log("Successfully shared"))
            .catch(error => console.log("Error sharing:", error));
    } else {
        fbShare();
    }
}

const fbShare = event => {
    event.preventDefault();
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u =
        "https://act.greenpeace.org/page/37310/petition/1?ea.tracking.id=facebook&utm_campaign=2019-airpollution&utm_source=facebook&utm_medium=social&utm_content=main_share";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
        baseURL + "?u=" + encodeURIComponent(u),
        "_blank",
        "width=626,height=436,top=" + t + ",left=" + l
    );
}

const whatsAppShare = event => {
    event.preventDefault();
    var w =
        "https://api.whatsapp.com/send?text=Hi👋 你知唔知道而家香港政府嘅空氣質素指標，遠落後於世界衞生組織建議嘅標準👉 https://act.gp/2tskPcy";
    window.open(w);
}
*/