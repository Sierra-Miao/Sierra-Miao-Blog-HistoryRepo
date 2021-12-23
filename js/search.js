var now=new Date();
var number = now.getYear().toString()+now.getMonth().toString()+now.getDate().toString()+now.getHours().toString()+now.getMinutes().toString()+now.getSeconds().toString();
document.write("\<script language=\"javascript\" type=\"text/javascript\" src=\"js/YearReportLuRu.js?"+number+"\"><\/script\>");
let allData = [
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
let searchResult = [{}];
let resultContainer = document.querySelector('.container');//容器
let searchContent = document.getElementById('search');//获取搜索内容

//渲染页面函数
let printer = ()=>{
    resultContainer.innerHTML = ' ';
    searchResult.forEach((item,index)=>{
        resultContainer.innerHTML += `
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

//开始搜索
searchContent.oninput = function(){
    resultContainer.innerHTML = ' ';
    searchResult = [{}];
    let j = 0;
    if(searchContent.value == 'undefined' || !searchContent.value || !/[^\s]/.test(searchContent.value)){
        resultContainer.innerHTML = ' ';
    }
    else{
            for(let i = 0;i < allData.length;i++){
            if(allData[i].title.includes(searchContent.value) || allData[i].date.includes(searchContent.value) || allData[i].content.includes(searchContent.value)){
                searchResult[j++] = allData[i];
            }
            if(j != 0){
                printer();
            }
            else{
                resultContainer.innerHTML = ' ';
            }
        }
    }
}
