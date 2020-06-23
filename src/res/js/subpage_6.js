import Vue from 'vue'

var app = new Vue({
    el:'#main-container',
    data:{
        title:'望岳',
        content:"<p>岱宗夫如何？齐鲁青未了。</p><p>造化钟神秀，阴阳割昏晓。</p><p>荡胸生曾云，决眦入归鸟。</p><p>会当凌绝顶，一览众山小。</p>",
        description:"这首诗通过描绘泰山雄伟磅礴的景象，热情赞美了泰山高大巍峨的气势和神奇秀丽的景色，流露出了对祖国山河的热爱之情，表达了诗人不怕困难、敢攀顶峰、俯视一切的雄心和气概，以及卓然独立、兼济天下的豪情壮志。一二句写泰山山脉绵延辽阔；三四句写泰山雄峻磅礴；五六句写仔细远望，见群峰云生，仿佛有归鸟入谷。七八句想象将来登山所见景象，同时抒发自己的抱负。",
        bg_img:require("../img/望岳.png"),
    }
})
