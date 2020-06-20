var app = new Vue({
    el: '#main-container',
    data:{
        active :0,
        peopleData:[{name:'李白',html_name:'李<span class="colored">白</span>',img:'res/img/李白.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
                                {name:'杜甫',html_name:'杜<span class="colored">甫</span>',img:'res/img/杜甫.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
                                {name:'陆游',html_name:'陆<span class="colored">游</span>',img:'res/img/陆游.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'},
                                {name:'苏轼',html_name:'苏<span class="colored">轼</span>',img:'res/img/苏轼.png',description:'作品想像奇特丰富，风格雄奇浪漫，意境独特，清新俊逸； 善于利用夸饰与譬喻等手法、自然优美的词句，表现出奔放的情感。 诗句行云流水，浑然天成。李白诗篇传诵千年，众多诗句已成经典， 清赵翼称：“李杜诗篇万口传”（例如“抽刀断水水更流，举杯消愁愁更愁”等， 更被谱入曲）。李白在诗歌的艺术成就被认为是中国浪漫主义诗歌的巅峰。 诗作在全唐诗收录于卷161至卷185。有《李太白集》传世。'}
        ]
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
        }
    }
})