// pages/accountSetting/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },

  // 页面后退

  goBack : function(ops){
    wx.navigateBack();
  },

  // 页面跳转 至 修改昵称
  JumpToName : function(ops){
    wx.navigateTo({
      url : "../accountSettingSetName/index"
    })
  },

  JumpToNature : function(){
    wx.navigateTo({
      url : "../accountSettingSetNature/index"
    })
  },

  JumpToUserBind: function () {
    wx.navigateTo({
      url: "../accountSettingUserBinding/index"
    })
  },

  JumpToChangePW: function () {
    wx.navigateTo({
      url: "../accountSettingChangePW/index"
    })
  },


})