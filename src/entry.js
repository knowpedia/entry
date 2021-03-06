import QuickPaper from 'quick-paper';
import mathFormula from 'knowpedia/mathFormula/index';

QuickPaper.use(mathFormula);

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 引入样式
import "@hai2007/style/normalize.css";
import "@hai2007/style/doc-view.css";
import "./styles/style.scss";

import urlFormat from './services/urlFormat';

// 启动界面
let pages = {
    app: () => import('./App.paper'),
};

// 打开新页面
QuickPaper.prototype.loadPage = url => {
    let aDom = document.createElement('a');
    aDom.setAttribute('href', url);
    aDom.setAttribute('target', '_blank');
    aDom.click();
};

// 获取启动页面名称
let pagename = urlFormat(window.location.href).router[0];

// 请求页面
(pagename in pages ? pages[pagename] : pages.app)().then(data => {

    // 创建对象
    window.quickPaper = new QuickPaper({

        // 挂载点
        el: document.getElementById('root'),

        // 启动组件
        render: createElement => createElement(data.default)

    });

});

import helper from './helper.paper';

// 启动辅助页面

new QuickPaper({
    el: document.getElementById('sub-root'),
    render: createElement => createElement(helper)
});
