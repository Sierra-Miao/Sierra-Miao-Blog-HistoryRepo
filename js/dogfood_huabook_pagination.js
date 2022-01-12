let cardData = [
    {
        title:"1《锦衣卫》熊建平",
        star:"二星",
        content:"很拉跨的书，作者纯纯地黑老朱家，把各种来源不明的传说故事拿来乱用。通俗作品，有点意思，打发时间还行。"
    },
    {
        title:"2《明帝国与倭寇》三田村泰勋",
        star:"三星",
        content:"作者是内藤湖南的助手，对中国历史了解挺深。把明帝国的兴衰说了一遍，通俗有趣但是不失严谨。因为是日本人，讲了很多同时期中日关系的内容，有意思。抗倭援朝战争中，三方都没有胜利，明浪费大量人力物力，朝鲜战乱不断，丰臣氏则因朝鲜战争而衰，侵略战争真是害人啊！沈惟敬和小西行长在中日两方反复行骗，成功周旋了数年，真是不可思议的奇人。"
    },
    {
        title:"3《显微镜下的大明》马伯庸",
        star:"三星",
        content:"马亲王在写作圈内很有名，有不少拥趸。不过我不喜欢他那种过于虚浮的文笔与严谨考据相结合的做法。这本书纯粹是炫技之作。三星给作者博览群书以搜寻资料之功。"
    },
    {
        title:"4《浮世悲歌》简雄",
        star:"二星",
        content:"此书基本以《板桥杂记》中的内容展开论调。有点意思。不过我不太喜欢满页都是对轻浮人士的赞美。"
    },
    {
        title:"5《酉阳杂俎》段成式",
        star:"五星",
        content:"还没看完。非常有趣，天方夜谭。"
    },
    {
        title:"6《明史十讲》陈梧桐",
        star:"二星",
        content:"作者急于抨击扬清抑明者，抨击清宫剧，批评《万历十五年》，这是好的。但是全书的马克思主义史观过于迂腐无味，论调基本是课本里面的，怪不得被一些大学作为明史教材。"
    },
    {
        title:"7《莫奈，光的印象》",
        star:"四星",
        content:"莫奈的画很好看。简述莫奈生平，有趣。印象最深的是，莫奈喜欢日本浮世绘和日本桥，晚年修了个私家花园。莫奈在艺术上的野心很大，企图用光影和画笔进行伟大的实验，并且取得了很大的成果。他晚年失明，一只眼睛做了手术，病眼看东西是红色，好眼看东西是蓝色，也不知道是什么样的特殊体验。"
    },
    {
        title:"8《日本史，南北朝到战国》乔治桑塞姆",
        star:"二星",
        content:"太过枯燥无味，弃。"
    },
    {
        title:"9《中国当代艺术1》",
        star:"五星",
        content:"变革之际飞速发展的中国艺术。喜欢吴冠中的画，把抽象派和国画相结合的艺术。"
    },
    {
        title:"10《老梁批水浒》",
        star:"一星",
        content:"无趣。营销号口吻。满满的“纪连海”，到底是老梁谈水浒，还是纪连海谈？怀疑老梁和纪连海有基情。"
    },
    {
        title:"11《李自成》",
        star:"三星",
        content:"历史小说。考据详实，然而描写过于丰富，篇幅冗长，弃。"
    },
    {
        title:"12《中国当代艺术2》",
        star:"四星",
        content:"艺术的走向越来越迷了，达达派创作让人看了感觉很迷。"
    },
    {
        title:"13《日本四季》",
        star:"三星",
        content:"有作者的思考。我想看日本的美食，但是很少。文笔比较有意思，但是没有心思读下去。、"
    },
    {
        title:"14《我是漫画家》",
        star:"四星",
        content:"手冢治虫的自传。后面的漫画部分挺有趣。他偷偷从教管所逃回家，吃饱饭，然后又在母亲劝说下溜回去的事情属实传奇。"
    },
    {
        title:"15《名画里的中国史1，2，3，4》",
        star:"三星",
        content:"图画很好看。文字没多少意思。但是觉得有点可爱。打发时间，就看完一套了。看完感觉，沈周是个很厉害的画家。同时也晓得董其昌是个烂人。"
    },
    {
        title:"16《知中，再认识丰子恺》",
        star:"三星",
        content:"古代飞行棋那个，有趣。丰子恺先生的小猫很可爱，他的画也极可爱。但杂志没有太多有趣的地方。"
    },
    {
        title:"17《伦理学与生活》",
        star:"四星",
        content:"只看了关于死亡的一部分。是本好书。外国有这样的教材用，真是幸福啊。"
    },
    {
        title:"18《玩笑堂画传》",
        star:"四星",
        content:"人物画的有趣，明朝的人物很威猛神气。但是部分人物变形了。刘邦穿着道袍，手持羽扇，不晓得作者是什么意思。"
    },
    {
        title:"19《饮料食品》",
        star:"二星",
        content:"略知饮食文化。余无可取。"
    },
    {
        title:"20《知堂谈吃》",
        star:"四星",
        content:"有趣。看完更喜欢吃油条了。碳水夹碳水吃真是美味。虽然周作人写吃意不在吃，但是确实写得很诱人。"
    },
    {
        title:"21《多雷插画集》",
        star:"五星",
        content:"木刻艺术的祖师爷作品集,很棒。"
    },
    {
        title:"22《读史的智慧》",
        star:"四星",
        content:"姚大力老师研究元史的功底是很深厚的，但是本书属实难懂。收获最大的是关于读书的那一篇，老师为朱熹的《朱子语类》正名。"
    },
    {
        title:"23《生而为奴》",
        star:"三星",
        content:"很多猫猫，可爱。有点意思，随手翻过。"
    },
    {
        title:"24《迪克·布鲁纳》",
        star:"三星",
        content:"米菲兔是小时候很喜欢的小动物。通过这本书才晓得，他的创作很不容易。"
    },
    {
        title:"25《男孩，鼹鼠，狐狸和马》",
        star:"五星",
        content:"温暖人心的小绘本，最喜欢鼹鼠了。永远要有童心。"
    },
    {
        title:"26《澳洲细道》",
        star:"三星",
        content:"松尾芭蕉到底是不是忍者？"
    },
    {
        title:"27《云》山村暮鸟",
        star:"三星",
        content:"有点可爱，但是内容不深。"
    },
    {
        title:"28《华丽食物志》",
        star:"四星",
        content:"很有意思。古代的美食家们真是猎奇。"
    },
    {
        title:"29《断案集》",
        star:"四星",
        content:"飞虎团的故事变化骤然，出乎意料。早上的猿猴这一篇，设计得很巧妙。高罗佩与小猴子木木的故事很感人。"
    },
    {
        title:"30《项链案》",
        star:"四星",
        content:"狄仁杰的断案故事。很喜欢。带胡子的太监，类似童贯。葫芦道人，很有意思。"
    },
    {
        title:"31《唐诗杂论》",
        star:"四星",
        content:"诗人论诗人。很有热情。作者将旧的宫体诗痛斥为靡靡之音，盛赞初唐四杰，好！"
    },
    {
        title:"32《爱弥儿》",
        star:"二星",
        content:"看不下去。如果不是为了做教育学ppt，不看。"
    },
    {
        title:"33《广州案》",
        star:"五星",
        content:"政治漩涡与断案的结合。看到最后才晓得，狄仁杰的所有推论都几乎正入犯人手心。"
    },
    {
        title:"34《大观红楼》",
        star:"二星",
        content:"很多人推崇欧丽娟，但是我不喜欢。"
    },
    {
        title:"35《物语日本》",
        star:"四星",
        content:"很有趣。了解到不少小故事。"
    },
    {
        title:"36《漆屏案》",
        star:"四星",
        content:"通过苍蝇判断砖头下有尸体然后上手就挖的狄仁杰真是聪明。"
    },
    {
        title:"37《红楼案》",
        star:"五星",
        content:"极具人情与浪漫主义。"
    },
    {
        title:"38《御珠案》",
        star:"四星",
        content:"读狄仁杰系列的起点。"
    },
    {
        title:"39《唐才子传》",
        star:"五星",
        content:"有意思，但是没有看多少。"
    },
    {
        title:"40《中国史学入门》",
        star:"四星",
        content:"顾先生知识渊博，然而小书深入浅出。"
    },
    {
        title:"41《门外文谈》鲁迅",
        star:"五星",
        content:"魏晋风度一篇，很幽默"
    },
    {
        title:"42《水浒梁山英雄谱》",
        star:"二星",
        content:"水浒传里的人物有趣。但是作者实在迂腐得很。"
    },
    {
        title:"43《古典小说漫稿》",
        star:"二星",
        content:"翻过，阶级史观害人。"
    },
    {
        title:"44《政治的逻辑》",
        star:"二星",
        content:"挺没意思。"
    },
    {
        title:"45《水浒寻宋》",
        star:"五星",
        content:"考据详实，通俗又严谨，写得好！"
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
            <div class="mdui-card-primary mdui-ripple card_title" style="background-color: rgba(253, 188, 199,0.5);">
                <div class="mdui-card-primary-title">${item.title}</div>
                <div class="mdui-card-primary-subtitle">${item.star}</div>
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