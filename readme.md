#web-clipper

> 网页剪报，类似有道云剪报。可实现点击书签对网页进行采集，并存储。

```bash
npm install -g reasy
npm install -g fis3-hook-cmdpack
cd web-clipper/
reasy -cw
```

# 二次开发说明

> 开发前，请将`client/bookmark.js`里面的代码进行适当修改，并将其保存至书签栏，然后点击书签栏即可。

> 剪报工具在点击`保存`按钮时，会将数据发送至`server/index.php`文件，该文件可以根据需要自行编写。

> `client.conf`里的网址表示`client`目录下的代码存放路径，如果你想共用本github.io, 可以不用修改
> `server.conf`里的网址代表`server`目录下的代码存放路径，一般放在博客路径上。两个路径可以相同。

注意：有些网站标止跨域资源加载(https也是如此)，所以点击书签后不会有任何反应。开发过程中建议打开控制台查看开发信息。还有就是暂不考虑支持非chrome浏览器。

