Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Nov 25 2016",
    title:"正是虾肥蟹壮时"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content=[
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        post_img: "/images/post/crab.png",
        author_img: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        view_num: "112",
        collect_num: "96",
      },
      {
        date: "Dec 15 2017",
        title: "比利.林恩的中场故事",
        post_img: "/images/post/bl.png",
        author_img: "/images/avatar/2.png",
        content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
        view_num: "112",
        collect_num: "96",
      },
      {
        date: "Dec 15 2017",
        title: "Tom.猫的中场故事",
        post_img: "/images/post/cat.png",
        author_img: "/images/avatar/3.png",
        content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“猫”问题的论题时，经常会遇到这样的情况：...",
        view_num: "118",
        collect_num: "92",
      },
    ]
    
    this.setData({
      posts_key: posts_content
    });//相当于把上面的变量搞到data里面
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})