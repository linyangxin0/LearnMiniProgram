// components/tabcontrol/TabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event){
      this.setData({
        currentIndex : event.currentTarget.dataset.index
      })

      const data = {index: this.data.currentIndex}
      this.triggerEvent('tabclick',data)
    }
  }
})
