let cardData = [
    {
        img:"./dogfood/img/ps/11.png",
        href:"#",
        title:"平安夜快乐！",
        date:"2021.12.24",
        content:"晚上，起飞悄悄行动起来。好耶得到了梦寐以求的圣诞帽，可高兴了。滑滑和公鸭赶制了一副画，画里纪念了好耶和起飞的一次逃亡。摆烂家族新增一员，他叫华子，有大眼睛，黄色的尖嘴巴，红色的小翅膀。"
    },
    {
        img:"./dogfood/img/ps/10.png",
        href:"#",
        title:"起飞给你们送来圣诞礼物啦！",
        date:"2021.12.16",
        content:"看似老实憨厚的起飞在好耶的教唆下学坏了，决定在平安夜驾驶好耶的飞机偷偷去各个宿舍偷吃礼物。为什么好耶不自己去？好耶看起来就很狡猾，骗不过平安夜监护礼物的各个狮子守卫。但是起飞看起来蠢蠢的，守卫们不会注意他……"
    },
    {
        img:"./dogfood/img/ps/9.png",
        href:"#",
        title:"躺在蒙娜丽莎手上的摆烂哥",
        date:"2021.12.16",
        content:"杜尚一定会喜欢这幅作品吧！摆烂哥在看什么呢？画家在那儿准备了美味的金枪鱼罐头!"
    },
    {
        img:"./dogfood/img/ps/8.png",
        href:"#",
        title:"摆烂哥的秘密基地",
        date:"2021.12.14",
        content:"现代艺术与摆烂美学的完美结合"
    },
    {
        img:"./dogfood/img/ps/7.png",
        href:"#",
        title:"雪山之巅的摆烂哥",
        date:"2021.12.14",
        content:"从前的摆烂哥经常去雪山修炼，增强实力，以消灭人类。但是后来他越来越摆烂了，现在胖得像个球……"
    },
    {
        img:"./dogfood/img/ps/4.png",
        href:"#",
        title:"12.13(1)",
        date:"2021.12.13",
        content:"好耶在芜湖，起飞的帮助下有了自己的飞机!"
    },
    {
        img:"./dogfood/img/ps/5.png",
        href:"#",
        title:"12.13(2)",
        date:"2021.12.13",
        content:"在遨游四海的过程中，他发现了正在珠峰修炼的摆烂哥，摆烂哥告诉好耶，东方在打仗，有一伙人残害了许多可爱的小水獭，到处流血。。。"
    },
    {
        img:"./dogfood/img/ps/6.png",
        href:"#",
        title:"12.13(3)",
        date:"2021.12.13",
        content:"好耶听了十分生气，决定去炸了这伙坏蛋的老窝。"
    },
    {
        img:"./dogfood/img/ps/3.jpg",
        href:"#",
        title:"虾滑滑的最新论证",
        date:"2021.12.10",
        content:"什么？林妹妹真的倒拔垂杨柳了？"
    },
    {
        img:"./dogfood/img/ps/2.png",
        href:"#",
        title:"我摆烂还不行吗",
        date:"2021.12.8",
        content:"这是摆烂哥，他实际上是来自喵星的特工，在whut传播摆烂思想以麻痹学子的意志力。他是好耶，起飞还有芜湖的好朋友，同时也是米奇猫，绿豆冰糕的宿敌。而他们也在地球寻找太空解构主义学派的各种作品，暗中筹划着什么东西。"
    },
    {
        img:"./dogfood/img/ps/1.png",
        href:"#",
        title:"太空解构主义艺术展",
        date:"2021.12.6",
        content:"这是56年后我将举办的一个艺术展，欢迎各位提前关注，希望我们都能长寿!如果你问我太空解构主义是啥，我只能说四个字——无可奉告!它就像数据自然主义一样，只有聪明人才能懂。"
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