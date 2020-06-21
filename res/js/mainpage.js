

var app = new Vue({
    el: '#main-container',
    data:{
        active :0,
        //描述必须少于150个字
        peopleData:[{name:'李白',html_name:'李<span class="colored">白</span>',img:'res/img/李白.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
            {name:'杜甫',html_name:'杜<span class="colored">甫</span>',img:'res/img/杜甫.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
            {name:'陆游',html_name:'陆<span class="colored">游</span>',img:'res/img/陆游.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
            {name:'苏轼',html_name:'苏<span class="colored">轼</span>',img:'res/img/苏轼.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'}
        ],
        masterpiece:[{title:'将进酒',author:'李白',img:'res/img/bg-将进酒.jpg',url:'poetry_page_1.html',content:'君不见黄河之水天上来，奔流到海不复回。 君不见高堂明镜悲白发，朝如青丝暮成雪。 人生得意须尽欢，莫使金樽空对月。 天生我材必有用，千金散尽还复来。 烹羊宰牛且为乐，会须一饮三百杯。 岑夫子，丹丘生，将进酒，杯莫停。 与君歌一曲，请君为我倾耳听。 钟鼓馔玉不足贵，但愿长醉不复醒。 古来圣贤皆寂寞，惟有饮者留其名。 陈王昔时宴平乐，斗酒十千恣欢谑。 主人何为言少钱，径须沽取对君酌。 五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'<p>岱宗夫如何？齐鲁青未了。</p><p>造化钟神秀，阴阳割昏晓。</p><p>荡胸生曾云，决眦入归鸟。</p><p>会当凌绝顶，一览众山小。</p>'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
                                {title:'望岳',author:'杜甫',img:'res/img/苏轼.png',url:'poetry_page_1.html',content:'岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'},
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
            console.log(this.active)
        },

        changeCurrentMasterpiece(e){
            var el = e.currentTarget
            this.current_selected = el.id
        }
    }
})