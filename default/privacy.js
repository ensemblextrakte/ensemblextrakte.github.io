// privacy policies
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

function accepted()
{
    setCookie('privacyok', 'accepted', 365);
    window.location.reload(true);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function()
{
	var w=window,
	d=document,
	e=d.documentElement,
	g=d.getElementsByTagName('body')[0],
	x=w.innerWidth||e.clientWidth||g.clientWidth,
	y=w.innerHeight||e.clientHeight||g.clientHeight;
	
	var new_x = getRndInteger(150, (x - 400));
    var new_y = getRndInteger(150, (y - 400));

    if (getCookie('privacyok'))
    {
        return false;
    }
    else
    {
        var elem = document.createElement('div');
        elem.setAttribute('class', 'privacier');
        var e2 = document.createElement('div');
        e2.setAttribute('class', 'privacier');
        e2.innerHTML = "<div style='padding:50px;margin:0;line-height:1.3em;display:flex;justify-content:center;align-items:center;text-align:center;'><div><br />We use cookies on this site to provide you with downloading files and forum access. If this is good with you, please 'accept' or review our <a href='/privacy-policy/' style='color:white;text-decoration:underline;'>Privacy Policy</a>.<br /><br /><a href='#' onclick=\"accepted();return false;\" style='color:white;text-decoration:underline;'>Accept</a></div></div>";
        elem.style.cssText = 'position:fixed;top:' + new_y + 'px;left:' + new_x + 'px;width:327px;height:327px;z-index:100;background:blue;border-radius:50%;transform:rotate(-20deg);color:white;font-size:18px;filter:blur(20px)';
        e2.style.cssText = 'position:fixed;top:' + new_y + 'px;left:' + new_x + 'px;width:300px;height:300px;z-index:101;transform:rotate(-20deg);color:white;font-size:18px';
        document.body.appendChild(elem);
        document.body.appendChild(e2);
    }
});