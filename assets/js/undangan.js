$("iframe").attr("width", "100%");
$("iframe").attr("height", "250px");

function requestFullScreen() {
    const elm = document.documentElement;
    if (elm.requestFullscreen) {
        elm.requestFullscreen();
    } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
    } else if (elm.webkitRequestFullScreen) {
        elm.webkitRequestFullScreen();
    }
}

$("#buttonBukaUndangan").on("click", function() {
    requestFullScreen();
    $(".wrapper .main-container-page-1").hide();
    $(".wrapper .tabbar").css('display', 'flex');
    $(".wrapper #buttonIconVolumeMusic").show();
    $(".wrapper .main-container-page-2").css('display', 'flex');
});

let currentPage = 1;
let goChangePage = false;
function changePage(id) {
    currentPage = parseInt(id);
    $(".wrapper .main-container").hide();
    $(`.wrapper .main-container-page-${id}`).show();

    // Set ulang opacity semua item dan hapus item-active
    $(".wrapper .tabbar .item").css('opacity', 0.5).removeClass('item-active');

    // Tambahkan class item-active ke item yang dipilih dan atur opasitas
    $(`.wrapper .tabbar .item-page-${id}`).css('opacity', 1).addClass('item-active');

    if (id === 2) {
        $(".wrapper .frame-preview").hide();
    } else {
        $(".wrapper .frame-preview").show();
    }

    let leftValue = 0;
    switch (id) {
        case 4:
            leftValue = 50;
            break;
        case 5:
            leftValue = 130;
            break;
        case 8:
            leftValue = 210;
            break;
        case 9:
            leftValue = 290;
            break;
        case 10:
            leftValue = 370;
            break;
        case 6:
            leftValue = 450;
            break;
        case 7:
            leftValue = 530;
            break;
    }
    $(".wrapper .tabbar").animate({
            scrollLeft: leftValue
        },
        500
    );

    if (goChangePage) {
        setTimeout(() => {
            goChangePage = false;
        }, 500);
    }
}


const getFullYear = new Date().getFullYear();

$("#wrapperCountdown").countdown({
    date: "2025-05-23T09:00:00",
    render: function(data) {
        var el = $(this.el);
        el.empty()
            .append("<span>" + this.leadingZeros(data.days, 2) + "<small>Hari</small></span>")
            .append("<span>" + this.leadingZeros(data.hours, 2) + "<small>Jam</small></span>")
            .append("<span>" + this.leadingZeros(data.min, 2) + "<small>Menit</small></span>")
            .append("<span>" + this.leadingZeros(data.sec, 2) + "<small>Detik</small></span>");
    },
});

