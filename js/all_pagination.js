let cardData = [
    {
        img:"./images/Hello_World.png",
        href:"./C_C++/0.html",
        date:"1970.1.1",
        title:"Hello World!",
        content:"与君初相识，犹如故人归。嗨，别来无恙啊！"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.2.2",
        title:"让风告诉你",
        content:"当你的天空突然下起了大雨，那是我在为你炸乌云~"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.3",
        title:"让风告诉你",
        content:"当你的发丝微乱有阵风吹过，那是我在远处想念你~"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.4",
        title:"天梯",
        content:"几多对持续爱到几多岁，当生命仍能为你豁出去。"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.4",
        title:"天梯",
        content:"千夫所指里，谁理登不登对，仍挽手历尽在世间兴衰。"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.4",
        title:"天梯",
        content:"千夫所指里，谁理登不登对，仍挽手历尽在世间兴衰。"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.4",
        title:"天梯",
        content:"几多对，能悟到几多精髓，能撑下去。"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1971.3.4",
        title:"天梯",
        content:"竭力也要为爱尽瘁，抱紧一生未觉累。"
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"It's a little cold in paradise tonight, Love faded."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"I'm finding new forms.I'll ride it out.It's fine for now."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"Then you come along and I cry.Liberated."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"I'm seeing clearly now there's no turning back.And I'm overwhelmed."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"Do you really want to set the night on fire.You're my only way out."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"Do you really want to turn your life around again.You know you're my last chance."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"Can you feel my can you feel my.Can you feel my tears, they won't dry."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"Can you feel my can you feel my.Tear drops of the loneliest girl."
    },
    {
        img:"./images/searchtest.png",
        href:"#",
        date:"1972.1.1",
        title:"The Loneliest Girl",
        content:"The loneliest girl."
    },
]

let cardMain = document.querySelector('.container');//容器
let pagination = document.querySelector('.pagination');//分页容器
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
                <img class="card_img" src="${item.img}">
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