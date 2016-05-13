(function(Global) {
    //顶部工具栏的控制
    var paper_frame_control = $('.paper_frame_control');
    var paper_frame_close = paper_frame_control.find('.paper_frame_close');

    var remote = require('electron').remote;

    //获取主窗体控制器
    var win = remote.getCurrentWindow();

    var $paper_frame_max = $('.paper_frame_control .paper_frame_max');
    var $paper_frame_restore = $('.paper_frame_control .paper_frame_restore');

    //绑定最大化函数
    paper_frame_close.bind('click', () => {
        win.close();
    });
    $paper_frame_max.click(() => {
        win.maximize();
    });
    //绑定还原函数
    $paper_frame_restore.click(() => {
        win.restore();
    });
    //绑定最小化函数
    $('.paper_frame_control .paper_frame_min').click(() => {
        win.minimize();
    });
    //最大化时触发
    win.on('maximize', () => {
        $paper_frame_max.hide();
        $paper_frame_restore.show();
    });
    //取消最大化
    win.on('unmaximize', () => {
        $paper_frame_max.show();
        $paper_frame_restore.hide();
    });
    //初始化断定是否在最大化的状态
    if (win.isMaximized()) {
        $paper_frame_max.hide();
    } else {
        $paper_frame_restore.hide();
    }
})(window);
