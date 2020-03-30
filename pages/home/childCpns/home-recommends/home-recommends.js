// pages/home/childCpns/home-recommends/home-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    haveLoaded:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(){
      
      if(!this.data.haveLoaded){
        
        this.triggerEvent('imageLoaded')
        this.data.haveLoaded=true
      }
      
    }
  }
})
