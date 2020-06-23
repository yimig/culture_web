import Vue from 'vue'

var app = new Vue({
    el: '#main-container',
    data:{
        active :0,
        //描述必须少于150个字
        peopleData:[{name:'李白',html_name:'李<span class="colored">白</span>',img:require('../img/李白.png'),description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。'},
                    {name:'杜甫',html_name:'杜<span class="colored">甫</span>',img:require('../img/杜甫.png'),description:'杜甫（712年—770年），字子美，自号少陵野老，唐代伟大的现实主义诗人，与李白合称“李杜”。出生于河南巩县，原籍湖北襄阳。 为了与另两位诗人李商隐与杜牧即“小李杜”区别，杜甫与李白又合称“大李杜”，杜甫也常被称为“老杜”。杜甫的思想核心是仁政思想，他有“致君尧舜上，再使风俗淳”的宏伟抱负。'},
                    {name:'陆游',html_name:'陆<span class="colored">游</span>',img:require('../img/陆游.png'),description:'陆游（1125年11月13日－1210年1月26日），字务观，号放翁，汉族，越州山阴（今浙江绍兴）人，尚书右丞陆佃之孙，南宋文学家、史学家、爱国诗人。 陆游生逢北宋灭亡之际，少年时即深受家庭爱国思想的熏陶。宋高宗时，参加礼部考试，因受宰臣秦桧排斥而仕途不畅。。'},
			        {name:'孟浩然',html_name:'孟<span class="colored">浩然</span>',img:require('../img/孟浩然.png'),description:'孟浩然（689-740），男，汉族，唐代诗人。本名不详（一说名浩），襄州襄阳（今湖北襄阳）人，世称“孟襄阳”。浩然，少好节义，喜济人患难，工于诗。年四十游京师，唐玄宗诏咏其诗，至“不才明主弃”之语，玄宗谓：“卿自不求仕，朕未尝弃卿，奈何诬我？”因放还未仕，后隐居鹿门山，著诗二百余首。'},
			        {name:'岑参',html_name:'岑<span class="colored">参</span>',img:require('../img/岑参.png'),description:'岑参（718年－769年）唐代诗人，与高适并称“高岑”。岑参出生在一个官僚家庭，因聪颖早慧而五岁读书、九岁属文。， 唐代宗时，岑参曾任嘉州（今四川乐山市）刺史，故世称“岑嘉州”。文学创作方面，岑参工诗，长于七言歌行，对边塞风光，军旅生活，以及异域的文化风俗有亲切的感受，边塞诗尤多佳作。'},
			        {name:'李清照',html_name:'李<span class="colored">清照</span>',img:require('../img/李清照.png'),description:'李清照，宋代女词人。号易安居士，齐州章丘（今属山东）人。早期生活优裕，与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原，流寓南方，明诚病死，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤，也流露出对中原的怀念。'},
			        {name:'辛弃疾',html_name:'辛<span class="colored">弃疾</span>',img:require('../img/辛弃疾.png'),description:'辛弃疾生于宋高宗绍兴十年（金熙宗天眷三年）的五月十一日（1140年5月28日）卯时，祖上为狄道人，自始祖辛维叶时迁居济南历城]  。出生时，北方就已沦陷于金人之手。他的祖父辛赞在靖康之变、宋室南渡后“累于族众” ，无法南下，遂仕于金国。不断亲眼目睹汉人在金人统治下所受的屈辱与痛苦。'},
                    {name:'苏轼',html_name:'苏<span class="colored">轼</span>',img:require('../img/苏轼.png'),description:'苏轼（1037年1月8日-1101年8月24日），字子瞻、和仲，号铁冠道人、东坡居士，世称苏东坡、苏仙，汉族，眉州眉山（今四川省眉山市）人，祖籍河北栾城，北宋著名文学家、书法家、画家，历史治水名人。'}
        ],
        masterpiece:[{title:'将进酒',author:'李白',img:require('../img/bg-将进酒.jpg'),url:'poetry_page_1.html',content:'君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不复醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。'},
                                {title:'望岳',author:'杜甫',img:require('../img/望岳.png'),url:'poetry_page_6.html',content:'<p>岱宗夫如何？齐鲁青未了。</p><p>造化钟神秀，阴阳割昏晓。</p><p>荡胸生曾云，决眦入归鸟。</p><p>会当凌绝顶，一览众山小。</p>'},
                                {title:'春晓',author:'孟浩然',img:require('../img/春晓.jpg'),url:'poetry_page_2.html',content:'<p>春眠不觉晓，处处闻啼鸟。</p><p>夜来风雨声，花落知多少。</p>'},
                                {title:'逢入京使',author:'岑参',img:require('../img/逢入京使.jpg'),url:'poetry_page_3.html',content:'<p>故园东望路漫漫，双袖龙钟泪不干。</p><p>马上相逢无纸笔，凭君传语报平安。 </p>'},
                                {title:'浣溪沙',author:'李清照',img:require('../img/浣溪沙.jpg'),url:'poetry_page_4.html',content:'<p>髻子伤春慵更梳，</p><p>晚风庭院落梅初。</p><p>淡云来往月疏疏。</p><p>玉鸭熏炉闲瑞脑，</p><p>朱樱斗帐掩流苏。</p><p>遗犀还解辟寒无？</p>'},
                                {title:'元夕',author:'辛弃疾',img:require('../img/青玉案·元夕.jpg'),url:'poetry_page_5.html',content:'<p>东风夜放花千树，</p><p>更吹落，星如雨。</p><p>宝马雕车香满路。</p><p>凤箫声动，玉壶光转，</p><p>一夜鱼龙舞。</p><p>蛾儿雪柳黄金缕，</p><p>笑语盈盈暗香去。</p><p>众里寻他千百度，</p><p>蓦然回首，那人却在，</p><p>灯火阑珊处。</p>'},
        ],
        current_selected:0,
    },
    mounted(){
        window.addEventListener("scroll", this.onScroll)
    },
    destroy(){
        window.removeEventListener('scroll',this.onScroll)
    },
    methods:{
        onScroll(){
            const navContents = document.querySelectorAll('.page-section')
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                if (scrollTop >= offsetTopArr[n]) {
                    navIndex = n
                }
            }
            this.active = navIndex
        },

        changeCurrentMasterpiece(e){
            var el = e.currentTarget
            this.current_selected = el.id
        }
    }
})