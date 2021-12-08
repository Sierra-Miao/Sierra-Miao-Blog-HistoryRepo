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
(function flexible (window, document) {
   var docEl = document.documentElement
   var dpr = window.devicePixelRatio || 1
 
   // adjust body font size
   function setBodyFontSize () {
     if (document.body) {
       document.body.style.fontSize = (12 * dpr) + 'px'
     }
     else {
       document.addEventListener('DOMContentLoaded', setBodyFontSize)
     }
   }
  setBodyFontSize();
 
   // set 1rem = viewWidth / 10
   function setRemUnit () {
     var rem = docEl.clientWidth / 10
     docEl.style.fontSize = rem + 'px'
   }
 
   setRemUnit()
 
   // reset rem unit on page resize
   window.addEventListener('resize', setRemUnit)
   window.addEventListener('pageshow', function (e) {
     if (e.persisted) {
       setRemUnit()
     }
   })
 
   // detect 0.5px supports
   if (dpr >= 2) {
     var fakeBody = document.createElement('body')
     var testElement = document.createElement('div')
     testElement.style.border = '.5px solid transparent'
     fakeBody.appendChild(testElement)
     docEl.appendChild(fakeBody)
     if (testElement.offsetHeight === 1) {
       docEl.classList.add('hairlines')
     }
     docEl.removeChild(fakeBody)
 }(window, document)})