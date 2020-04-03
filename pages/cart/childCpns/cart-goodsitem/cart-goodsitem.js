// pages/cart/childCpns/cart-goodsitem/cart-goodsitem.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsItem:{
      type:Object,
      value:{}
    },
    isSelected:{
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
      const iid = {iid:this.data.goodsItem.iid}
      this.triggerEvent('checkBottomClick',iid)
    }
  }
})
