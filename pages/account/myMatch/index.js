// pages/account/myMatch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekOrTotalData : 1,
    weekRate : Math.round(0.6111 * 100),
    totalRate: Math.round(0.48777 * 100),
    aa : false,
    cc : true
  },

  // 选择 week 周数据统计
  selWeekData : function(){
    if (this.data.weekOrTotalData !== 1){
      this.setData({
        weekOrTotalData : 1
      })
    }
  },

  // 选择 total 总数据统计
  selTotalData : function () {
    if (this.data.weekOrTotalData !== 0) {
      this.setData({
        weekOrTotalData : 0
      })
    }
  },

  // cavs 胜率 周/总 切换
  switchRate : function(){
    this.setData({
      weekOrTotalData: !this.data.weekOrTotalData
    })
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

    function drawing(elm, rate){
      var R = 0;
      var rate = rate/100;
      var drawingTimer = setInterval(function(){
        if (R < rate) {
          elm.setLineWidth(1);
          elm.setStrokeStyle('red');
          elm.beginPath();
          elm.arc(36, 36, 34, -.5 * Math.PI, (-.5 + 2 * R) * Math.PI, false);
          elm.stroke();
          elm.closePath();
          elm.draw(true);
          R += 0.01;
        }else{
          clearInterval(drawingTimer)
        }
      },10)
    }

    var cvs1 = wx.createCanvasContext('weekCvs');
    cvs1.setLineWidth(1);
    cvs1.setStrokeStyle('#979090');
    cvs1.beginPath();
    cvs1.arc(36, 36, 34, 0, 2 * Math.PI, false);
    cvs1.stroke();
    cvs1.closePath();
    cvs1.draw();

    var cvs2 = wx.createCanvasContext('totalCvs');
    cvs2.setLineWidth(1);
    cvs2.setStrokeStyle('#979090');
    cvs2.beginPath();
    cvs2.arc(36, 36, 34, 0, 2 * Math.PI, false);
    cvs2.stroke();
    cvs2.closePath();
    cvs2.draw();

    drawing(cvs1, this.data.weekRate);
    drawing(cvs2, this.data.totalRate);
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