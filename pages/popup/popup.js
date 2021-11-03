// pages/popup/popup.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        animationData: {},
        isAnimation:true
    },
    showPop(){
        if(this.data.isAnimation){
            let animation=wx.createAnimation({
                duration: 500,
                timingFunction:"linear"
            })
            animation.bottom(0).step();
            this.setData({
                animationData:animation.export(),
                isAnimation:false
            })
        }else{
            let animation=wx.createAnimation({
                duration: 500,
                timingFunction:"linear"
            })
            animation.bottom(-500).step();
            this.setData({
                animationData:animation.export(),
                isAnimation:true
            }) 
        }
       
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

    }
})