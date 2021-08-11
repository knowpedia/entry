import Knowpedia from 'knowpedia';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入样式
import "@hai2007/style/normalize.css";
import "./styles/common.css";

import App from './App.paper';

// 打开新页面
Knowpedia.prototype.loadPage = url => {
    let aDom = document.createElement('a');
    aDom.setAttribute('href', url);
    aDom.setAttribute('target', '_blank');
    aDom.click();
};

// 创建对象
window.knowpedia = new Knowpedia({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
