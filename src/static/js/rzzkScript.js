function changeBG(pic) {
    const pic0 = 'url(../src/static/img/banner.jpg) no-repeat center';
    const pic1 = 'url("../src/static/img/banner1.jpg") no-repeat center';
    const pic2 = 'url("../src/static/img/banner2.jpg") no-repeat center';

    if(pic == 0) {
        document.getElementById('firstBG').style.background = pic0;
        document.getElementById("firstBG").style.backgroundSize = 'cover';
    }
    if(pic == 1) {
        document.getElementById("firstBG").style.background = pic1;
    }
    if(pic == 2) {
        document.getElementById("firstBG").style.background = pic2;
    }
}
var currentMargin = 0;
function slideforward()
{
    if (currentMargin > -430*4) {
        var i, j;
        for (i = 1; i <= 430; i++) {
            setTimeout(function (x) {
                document.getElementById("sliderw").style.marginLeft = currentMargin - x + "px";
                if (x == 430) currentMargin -= 430;
            }, i * 0.5, i);
        }
    }
}

function slideback()
{
    if (currentMargin < 0) {
        var i;
        for (i = 1; i <= 430; i++) {
            setTimeout(function (x) {
                document.getElementById("sliderw").style.marginLeft = currentMargin + x + "px";
                if (x == 430) currentMargin += 430;
            }, i * 0.5, i);
        }
    }
}
