#web-clipper

> 网页剪报，类似有道云剪报。可实现点击书签对网页进行采集，并存储。

# 测试
请将如下代码保存至书签:

<input type="text" style="width:100%" value="javascript:(function(){if(!window.__clipper){var a=document.createElement('script');a.src='http://lwdgit.github.io/web-clipper/dist/link.js';document.getElementsByTagName('body')[0].appendChild(a);}else{window.__clipper.toggle();}}());">

# 二次开发说明

> 开发前，请将`dist/bookmark.js`里面的代码进行适当修改，并将其保存至书签栏，然后点击书签栏即可。

> 剪报工具在点击`保存`按钮时，会将数据发送至`backend/index.php`文件，该文件可以根据需要自行编写。

> 更改domain.conf里面的url可以自定义主机域名，工具采用`FIS3`编译。

注意：有些网站标止跨域资源加载(https也是如此)，所以点击书签后不会有任何反应。开发过程中建议打开控制台查看开发信息。还有就是暂不考虑支持非chrome浏览器。

