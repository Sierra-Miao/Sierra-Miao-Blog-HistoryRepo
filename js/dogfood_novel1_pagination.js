let cardData1 = [
    {
        href:"./dogfood/novel1/0.html",
        title:"一、大公鸭的传奇",
        date:"2022.2.12",
        content:"“啊，不要！”一声惨叫打破了阴暗小巷里的宁静……"
    },
    {
        href:"./dogfood/novel1/1.html",
        title:"二、走马楼台类转蓬",
        date:"2022.2.13",
        content:"“正叟谓，抖万卷苏，兴万里漏。既要行漏，也要读苏。”……"
    },
]

let cardMain1 = document.getElementById('novel2');//容器
let pagination1 =  document.getElementById('pagination2');//分页容器
let pageCount1 = Math.ceil(cardData.length/12); //根据数据的长度计算总共几页
let cardDataRender1 = [];//每页要显示的数据
let p1 = 1;//根据p值显示每页的数据

//渲染页面函数
let render1 = ()=>{
    cardMain1.innerHTML = ' ';
   cardDataRender1 = cardData1.slice((p-1)*12,12*p); //每页要显示的数据,一页显示5条
   cardDataRender1.forEach((item,index)=>{
       cardMain1.innerHTML += ` 
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
render1();

//渲染分页
for(let i = 1;i<=pageCount1;i++){
    pagination1.innerHTML +=`<a class="mdui-btn mdui-btn-icon mdui-btn-dense mdui-color-pink-accent mdui-ripple" style="margin:3px;">${i}</a>`;
}
let asAll1 = pagination1.querySelectorAll('a');
//页面刚进来时第一页高亮
asAll1[p-1].classList.add('active');

//遍历总页数
asAll1.forEach((item,index)=>{
    //点击页数
    item.onclick = function () {
        for(let j=0;j<asAll1.length;j++){
            asAll1[j].classList.remove('active');
        }
        this.classList.add('active');
        p1=index+1; //点击页数，改变p的值，以改变这个页面要显示的数据，达到分页的效果
        render1(); //重新渲染页面
    }
});

let changePageClass1 = ()=>{
    for(let j=0;j<asAll1.length;j++){
        asAll1[j].classList.remove('active');
    }
    asAll1[p-1].classList.add('active');
};
//上一页
let prev1 = document.getElementById('prev2');
prev1.onclick = function (e) {
        if(p<=1){
            console.log(p1);
            return;
        }else{
            p1=p1-1;
            changePageClass1();
            render1();
        }
};
//下一页
let next1 = document.getElementById('next2');
next1.onclick = function () {
    if(p1>=asAll1.length){
        return;
    }
    p1=p1+1;
    changePageClass1();
    render1();
}