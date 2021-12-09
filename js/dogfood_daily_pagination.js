let cardData = [
    {
        img:"./dogfood/img/daily/8.jpg",
        href:"#",
        title:"好耶！十翅桶！",
        date:"2021.12.5",
        content:"好耶！周四椒盐香骨鸡，周日十翅桶！人均11.5块！"
    },
    {
        img:"./dogfood/img/daily/7.jpg",
        href:"#",
        title:"武汉科技馆半日游",
        date:"2021.11.27",
        content:"虽说展馆内容有点少，但还是挺好玩的。看看在画什么！"
    },
    {
        img:"./dogfood/img/daily/6.jpg",
        href:"#",
        title:"喜提滑滑送的毛绒玩具！",
        date:"2021.11.18",
        content:"他叫起飞，来自手长星，好耶从此有伴了！"
    },
    {
        img:"./dogfood/img/daily/5.jpg",
        href:"#",
        title:"坐在操场上唱歌",
        date:"2021.11.12",
        content:"滑滑唱歌的时候真可爱。"
    },
    {
        img:"./dogfood/img/daily/4.jpg",
        href:"#",
        title:"收到的第一封情书",
        date:"2021.11.12",
        content:"心在树上，你摘就是。"
    },
    {
        img:"./dogfood/img/daily/3.png",
        href:"#",
        title:"出去玩咯",
        date:"2021.11.6",
        content:"上午湖北省美术馆，下午东湖，晚上大喊EDG牛逼，而数据自然主义和烧了的抹布已经深深印在我们的脑海中。"
    },
    {
        img:"./dogfood/img/daily/2.png",
        href:"#",
        title:"“我爱你”",
        date:"2021.10.29",
        content:"第一次跟对方互相亲口说出“我爱你”。好几天不好意思说的话，在今天说了。"
    },
    {
        img:"./dogfood/img/daily/1.jpg",
        href:"#",
        title:"在一起的第一晚",
        date:"2021.10.23",
        content:"晚上，我们走在花田，你问我要不要谈朋友，然后我们就一直在一起了。"
    },
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
            <div class="mdui-card-media">
                <a href="${item.img}"><img class="card_img" src="${item.img}"></a>
            </div>
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