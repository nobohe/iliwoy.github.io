var cernet20_config = {
    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition: 6,

    //切换间隔时间，毫秒
    slide_interval: 10000,

    //页面配置
    pages: [{
        title: 'HTTPS 测量',
        url: 'http://218.2.197.243'
    }, {
        title: 'Passive DNS 监控',
        url: 'http://netsec.ccert.edu.cn'
    }, {
        title: 'Ghost Domain',
        url: 'http://www.bing.com'
    },{
        title: 'opendns',
        url: 'http://202.112.51.64:8000/opendns'
    },{
        title: 'opendns-world',
        url: 'http://202.112.51.64:8000/opendns-world'
    },{
        title: 'king',
        url: 'http://202.112.51.64:8000/king'
    }
    ]
};
