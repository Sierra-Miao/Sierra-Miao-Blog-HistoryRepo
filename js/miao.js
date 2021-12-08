const bar = Vue.createApp({})
bar.component('blogbar', {
  template: `
  <div onclick="setTimeout(function(){window.location.href='index.html'},250);" class="navigation_bar_option mdui-ripple">Sierra-Miao</div>
  <div onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="navigation_bar_option mdui-ripple"><b>Blog</b></div>
  <div onclick="setTimeout(function(){window.location.href='dogfood-index.html'},250);" class="navigation_bar_option mdui-ripple">Dog Food</div>
`
})
bar.component('dogfoodbar', {
  template: `
  <div onclick="setTimeout(function(){window.location.href='index.html'},250);" class="navigation_bar_option mdui-ripple">Sierra-Miao</div>
  <div onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="navigation_bar_option mdui-ripple">Blog</div>
  <div onclick="setTimeout(function(){window.location.href='dogfood-index.html'},250);" class="navigation_bar_option mdui-ripple"><b>Dog Food</b></div>
`
})
bar.mount('#bar')

const guidebox = Vue.createApp({})
guidebox.component('allindex', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox.component('cindex', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='blog-C_C++.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox.component('hcjindex', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='blog-HCJ.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox.component('othersindex', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='blog-Others.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">Others</li>
  </ul>
`
})
guidebox.mount('#guidebox')

const guidebox1 = Vue.createApp({})
guidebox1.component('allindex1', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='../blog-index.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox1.component('cindex1', {
  template: `
  <ul class="mdui-list background-pink">
  <li onclick="setTimeout(function(){window.location.href='../blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-C_C++.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox1.component('hcjindex1', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='../blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-HCJ.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-Others.html'},250);" class="mdui-list-item mdui-ripple">Others</li>
  </ul>
`
})
guidebox1.component('othersindex1', {
  template: `
  <ul class="mdui-list list">
  <li onclick="setTimeout(function(){window.location.href='../blog-index.html'},250);" class="mdui-list-item mdui-ripple">All</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-C_C++.html'},250);" class="mdui-list-item mdui-ripple">C/C++</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-HCJ.html'},250);" class="mdui-list-item mdui-ripple">HTML/CSS/JavaScript</li>
  <li onclick="setTimeout(function(){window.location.href='../blog-Others.html'},250);" class="mdui-list-item mdui-list-item-active mdui-ripple">Others</li>
  </ul>
`
})
guidebox1.mount('#guidebox1')