const toolbar = Vue.createApp({})
toolbar.component('toolbar',{
    props:['title'],
    template:`
    <div class="mdui-toolbar background-pink mdui-appbar-fixed mdui-shadow-0" style="z-index:1;">
        <a href="javascript:;" class="mdui-btn mdui-btn-icon">
            <i mdui-drawer="{target: '#main-drawer'}" class="mdui-icon material-icons">menu</i></button>
        </a><a href="./index.html">
        <span class="mdui-typo-title">Sierra-Miao</span>
        </a>
        <span class="mdui-typo-title">{{ title }}</span>
        <div class="mdui-toolbar-spacer" style="z-index:1;"></div>
        <a href="./search_blog.html" class="mdui-textfield-icon mdui-btn mdui-btn-icon">
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
                  <a href="./blog-index.html" class="mdui-list-item mdui-ripple">All</a>
                  <a href="./blog-C_C++.html" class="mdui-list-item mdui-ripple">C/C++</a>
                  <a href="./blog-HCJ.html" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</a>
                  <a href="./blog-Others.html" class="mdui-list-item mdui-ripple">Others</a>
                </div>
            </div>
            <div class="mdui-collapse-item">
                <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
                  <div class="mdui-list-item-content">狗粮篇</div>
                  <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                </div>
                <div class="mdui-collapse-item-body mdui-list">
                  <a href="./dogfood-daily.html" class="mdui-list-item mdui-ripple">小日常</a>
                  <a href="./dogfood-ps.html" class="mdui-list-item mdui-ripple">奇奇怪怪的图</a>
                  <a href="./dogfood-novel.html" class="mdui-list-item mdui-ripple">番外篇</a>
                  <a href="./dogfood-huabook.html" class="mdui-list-item mdui-ripple">滑滑乱翻书</a>
                </div>
            </div>
        </div>
      </div>
    `
})
toolbar.mount('#toolbar');