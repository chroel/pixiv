//index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var order = ['red', 'yellow', 'blue', 'green', 'red']

Page({
    data: {
        tabs: ["插画", "漫画", "小说"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        toView: 'red',
        scrollTop: 100,
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
    tap: function(e) {
      for (var i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1]
          })
          break
        }
      }
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