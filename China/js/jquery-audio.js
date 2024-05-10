$(document).ready(function() {
    $.fn.maphilight.defaults = {
        fill: true,
        fillColor: 'ff8c19',
        fillOpacity: 0.7,
        stroke: true,
        strokeColor: 'ff8b19',
        strokeOpacity: 1,
        strokeWidth: 3,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false
    };

    $("#map_image").maphilight();

    var btn = $(".mapBtn");

    btn.click(function() {
        var audioSource = $(this).data('audio'); // 获取音频文件路径
        var audioPlayer = $("#audioPlayer")[0]; // 获取audio元素
        audioPlayer.src = audioSource; // 设置音频源
        audioPlayer.play(); // 播放音频
    });
});