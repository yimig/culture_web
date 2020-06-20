var app = new Vue({
    el: '#main-container',
    data:{
        active :0,
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