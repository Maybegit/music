Page({
    onTap:function(){
      // wx.navigateTo({
      //   url: '../posts/post'
      // })  可以返回welcome页面
      wx.redirectTo({
        url: '../posts/post'
      })
    }
})