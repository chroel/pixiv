//index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["插画", "漫画", "小说"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        scrollTop: 100,
        rankArray:[
          {
              mode:'aspectFill',
              src:'../images/photo2.png',
              paintName:'Bird',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/photo1.png',
              paintName:'House and Road',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/loginBg.jpg',
              paintName:'Night Elves',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/crown.png',
              paintName:'crown',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/photo2.png',
              paintName:'Bird',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/photo1.png',
              paintName:'House and Road',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/loginBg.jpg',
              paintName:'Night Elves',
              authorImg:'../images/vip.png',
              author:'TID'
          },
          {
              mode:'aspectFill',
              src:'../images/crown.png',
              paintName:'crown',
              authorImg:'../images/vip.png',
              author:'TID'
          }
        ],
        recommendArray:[
          {
              id:0,
              num:6,
              mode:'aspectFill',
              src:'../images/photo2.png',
          },
          {
              id:1,
              num:1,
              mode:'aspectFill',
              src:'../images/photo1.png',
          },
          {
              id:2,
              num:1,
              mode:'aspectFill',
              src:'../images/loginBg.jpg',
          },
          {
              id:3,
              num:3,
              mode:'aspectFill',
              src:'../images/crown.png',
          }
        ],
        pixivsionArray:[
          {
              mode:'aspectFill',
              src:'../images/photo2.png',
              paintDesc:'点缀邂逅与离别的樱花。樱花特辑。'
          },
          {
              mode:'aspectFill',
              src:'../images/photo1.png',
              paintDesc:'点缀邂逅与离别的樱花。樱花特辑。'
          },
          {
              mode:'aspectFill',
              src:'../images/loginBg.jpg',
              paintDesc:'点缀邂逅与离别的樱花。樱花特辑。'
          },
          {
              mode:'aspectFill',
              src:'../images/crown.png',
              paintDesc:'点缀邂逅与离别的樱花。樱花特辑。'
          },
          {
              mode:'aspectFill',
              src:'../images/photo2.png',
              paintDesc:'樱花樱花樱花樱花樱花。樱花特辑。'
          }
        ],
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    upper: function(e) {
      console.log(e)
    },
    lower: function(e) {
      console.log(e)
    },
    scroll: function(e) {
      console.log(e)
    },
    tapMove: function(e) {
      this.setData({
        scrollTop: this.data.scrollTop + 10
      })
    },
    imageError: function(e) {
      console.log('image3发生error事件，携带值为', e.detail.errMsg)
    }
});