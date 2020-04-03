// pages/cart/childCpns/cart-bottombar/cart-bottombar.js
const app=getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalPrice:{
      type:Number,
      value:0
    },
    totalCounter:{
      type:Number,
      value:0
    },
    isSelectAll:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(){
      const data = {iconChecked:this.data.isSelectAll}
      this.triggerEvent('bottomBarCheckClick',data)
    }
  }
})
