const toolbar = Vue.createApp({})
toolbar.component('toolbar',{
    props:['title'],
    template:`
    <div class="mdui-toolbar background-pink mdui-appbar-fixed mdui-shadow-0">
        <a href="javascript:;" class="mdui-btn mdui-btn-icon">
            <i mdui-drawer="{target: '#main-drawer'}" class="mdui-icon material-icons">menu</i></button>
        </a>
        <span class="mdui-typo-title">{{ title }}</span>
        <div class="mdui-toolbar-spacer"></div>
        <a mdui-dialog="{target: '#advertisement'}" id="ad">公告</a>
        <a href="../../search_blog.html" class="mdui-textfield-icon mdui-btn mdui-btn-icon">
          <i class="mdui-icon material-icons">search</i>
        </a>
      </div>
      <div class="mdui-drawer background-pink" style="margin-top: -8px;" id="main-drawer">
        <div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 76px;">
          <div class="mdui-collapse-item">
            <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
                <div class="mdui-list-item-content">Blog</div>
                  <i class="mdui-collapse-item-arrow mdui-icon mdui-ripple material-icons">keyboard_arrow_down</i>
                </div>
                <div class="mdui-collapse-item-body mdui-list">
                  <a href="../../blog-index.html" class="mdui-list-item mdui-ripple">All</a>
                  <a href="../../blog-C_C++.html" class="mdui-list-item mdui-ripple">C/C++</a>
                  <a href="../../blog-HCJ.html" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</a>
                  <a href="../../blog-Others.html" class="mdui-list-item mdui-ripple">Others</a>
                </div>
            </div>
            <div class="mdui-collapse-item">
                <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
                  <div class="mdui-list-item-content">狗粮篇</div>
                  <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                </div>
                <div class="mdui-collapse-item-body mdui-list">
                  <a href="../../dogfood-daily.html" class="mdui-list-item mdui-ripple">小日常</a>
                  <a href="../../dogfood-ps.html" class="mdui-list-item mdui-ripple">奇奇怪怪的的图</a>
                  <a href="../../dogfood-novel.html" class="mdui-list-item mdui-ripple">番外篇</a>
                  <a href="../../dogfood-huabook.html" class="mdui-list-item mdui-ripple">滑滑乱翻书</a>
                </div>
            </div>
        </div>
      </div>
      <div class="mdui-dialog" id="advertisement">
      <div class="mdui-dialog-title">广告</div>
      <div class="mdui-dialog-content">
          知名游戏制作者康康发布新手游《贪吃猴大作战》！快来玩吧！
          <br/>现在玩游戏，歼灭boss起飞之后还能领取好耶绝版同款皮肤哦!是兄弟就一起来吃吃吃!
          <br/>
          <img src="../../dogfood/novel/0.jpg" style="width:50%;margin: 10px 25%;">
          <br/>
          <div class="mdui-typo">
            <hr/>
          </div>
          <br/>
          拖更致歉：三兄弟的故事在宇宙各地广受欢迎，但是也被一部分别有用心的人举报，考虑到可能对青年儿童带来的不良影响，文化部门将三兄弟抓到学院去塑造正确三观并且参加正能量测试。由于好耶太过邪恶，测试了八十一次才通过。。。。。。起飞太蠢，不知道怎么使用电脑答题，工作人员教他如何操作花了二十天。
          <br/>起飞：“好耶哥，我学会玩电脑啦！”
          <br/>
      </div>
      <div class="mdui-dialog-actions">
        <button class="mdui-btn mdui-ripple" mdui-dialog-close>好！</button>
      </div>
  </div>
    `
})
toolbar.mount('#toolbar');