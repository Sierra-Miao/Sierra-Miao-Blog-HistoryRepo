let cardData = [
    {
        href:"./dogfood/novel/0.html",
        title:"一、为寻美食离家园",
        date:"2021.12",
        content:"好耶是一只可爱的小白猿，生活在手长星上，他有个猴子朋友，名叫起飞……"
    },
    {
        href:"./dogfood/novel/1.html",
        title:"二、偏航来到水獭星",
        date:"2021.12",
        content:"好耶和起飞逐渐感受到屁股漏风。“嗯？怎么回事呢？”……"
    },
    {
        href:"./dogfood/novel/2.html",
        title:"三、米老鼠入侵水獭星",
        date:"2021.12",
        content:"“好香啊！”起飞闻着这美食的香味，口水流下三千尺，扎进美食山中美美吃了一顿……"
    },
    {
        href:"./dogfood/novel/3.html",
        title:"四、水獭饱腹滚滚乐",
        date:"2021.12",
        content:"“冲冲冲！”米老鼠们大声呼喊，向着美食山旁的水獭冲去……"
    },
    {
        href:"./dogfood/novel/4.html",
        title:"五、神偷芜湖立“大功”",
        date:"2021.12",
        content:"米奇故技重施，让宇宙帅鸭可达去色诱宇宙交通局局长的老婆……"
    },
    {
        href:"./dogfood/novel/5.html",
        title:"六、假车票居然能用？",
        date:"2021.12",
        content:"好耶和起飞半信半疑，“你该不会是电信诈骗吧？……"
    },
    {
        href:"./dogfood/novel/6.html",
        title:"七、宇宙尽头的鸡公煲",
        date:"2021.12",
        content:"芜湖得知此事后，就自告奋勇，要带他们到地球去——正好自己也体验一把开高级飞船的快乐。……"
    },
    {
        href:"./dogfood/novel/7.html",
        title:"八、地球竟要胶水粘",
        date:"2021.12",
        content:"“要说起地球是怎么没的，得从一百年前的资本主义经济危机开始说起。”……"
    },
    {
        href:"./dogfood/novel/8.html",
        title:"九、火辣辣的心，火辣辣的菊",
        date:"2021.12",
        content:"起飞的肚子早就瘪了，抄起筷子狠狠夹起一大块鸡肉塞入大嘴……"
    },
    {
        href:"./dogfood/novel/9.html",
        title:"十、熟悉而又陌生的星球",
        date:"2021.12",
        content:"“砰”的一声，三兄弟平稳落地，他们肚子里的二氧化碳也排得七七八八……"
    }
]

let cardMain = document.querySelector('.container');//容器
let pagination =  document.querySelector('.pagination');//分页容器
let pageCount = Math.ceil(cardData.length/12); //根据数据的长度计算总共几页
let cardDataRender = [];//每页要显示的数据
let p = 1;//根据p值显示每页的数据

//渲染页面函数
let render = ()=>{
    cardMain.innerHTML = ' ';
   cardDataRender = cardData.slice((p-1)*12,12*p); //每页要显示的数据,一页显示5条
   cardDataRender.forEach((item,index)=>{
       cardMain.innerHTML += ` 
       <div class="mdui-card card">
            <div onclick="setTimeout(function(){window.location.href='${item.href}'},250);" class="mdui-card-primary mdui-ripple card_title" style="background-color: rgba(253, 188, 199,0.5);">
                <div class="mdui-card-primary-title">${item.title}</div>
                <div class="mdui-card-primary-subtitle">${item.date}</div>
                <div class="mdui-card-content">${item.content}</div>
            </div>
        </div>
       `;
   });
};
//初始化页面
render();

//渲染分页
for(let i = 1;i<=pageCount;i++){
    pagination.innerHTML +=`<a class="mdui-btn mdui-btn-icon mdui-btn-dense mdui-color-pink-accent mdui-ripple" style="margin:3px;">${i}</a>`;
}
let asAll = pagination.querySelectorAll('a');
//页面刚进来时第一页高亮
asAll[p-1].classList.add('active');

//遍历总页数
asAll.forEach((item,index)=>{
    //点击页数
    item.onclick = function () {
        for(let j=0;j<asAll.length;j++){
            asAll[j].classList.remove('active');
        }
        this.classList.add('active');
        p=index+1; //点击页数，改变p的值，以改变这个页面要显示的数据，达到分页的效果
        render(); //重新渲染页面
    }
});

let changePageClass = ()=>{
    for(let j=0;j<asAll.length;j++){
        asAll[j].classList.remove('active');
    }
    asAll[p-1].classList.add('active');
};
//上一页
let prev = document.querySelector('.prev');
prev.onclick = function (e) {
        if(p<=1){
            console.log(p);
            return;
        }else{
            p=p-1;
            changePageClass();
            render();
        }
};
//下一页
let next = document.querySelector('.next');
next.onclick = function () {
    if(p>=asAll.length){
        return;
    }
    p=p+1;
    changePageClass();
    render();
}