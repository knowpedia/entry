
/*************************** [bundle] ****************************/
// Original file:./src/App.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('31');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('40');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-347ecaca":""},[createElement('header',{"data-quickpaper-347ecaca":""},["Knowpedia",createElement('div',{"data-quickpaper-347ecaca":""},["本网站是为了方便日常查询，内容比较随意，你可以",createElement('a',{"href":"https://github.com/knowpedia/entry/issues","target":"_blank","data-quickpaper-347ecaca":""},["加入我们"]),"一起整理～"]),createElement('span',{"data-quickpaper-347ecaca":""},[createElement('ui-search',{"data-quickpaper-347ecaca":""},[])])]),createElement('nav',{"data-quickpaper-347ecaca":""},[createElement('span',{"@click":"changeNav(\"home\")",":active":"pagename==\"home\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["首页"]),createElement('span',{"@click":"changeNav(\"mathematics\")",":active":"pagename==\"mathematics\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["数学"]),createElement('span',{"@click":"changeNav(\"english\")",":active":"pagename==\"english\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["英语"]),createElement('span',{"@click":"changeNav(\"computer\")",":active":"pagename==\"computer\"?\"yes\":\"no\"","data-quickpaper-347ecaca":""},["计算机"])]),createElement('div',{"data-quickpaper-347ecaca":""},[createElement('component',{":is":"page","data-quickpaper-347ecaca":""},[])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=script&lang=js&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('32');
var uiSearch =__etcpack__scope_args__.default;

    __etcpack__scope_args__=window.__etcpack__getBundle('26');
var urlFormat =__etcpack__scope_args__.default;

    let pages = {

        home: () => window.__etcpack__getLazyBundle('./build/main@v0.5.2-bundle2.js','35'),

        // 读书笔记
        mathematics: () => window.__etcpack__getLazyBundle('./build/main@v0.5.2-bundle3.js','36'),
        english: () => window.__etcpack__getLazyBundle('./build/main@v0.5.2-bundle4.js','37'),
        computer: () => window.__etcpack__getLazyBundle('./build/main@v0.5.2-bundle5.js','38'),

        // 速查表
        "Trigonometric-Function-Table": () => window.__etcpack__getLazyBundle('./build/main@v0.5.2-bundle6.js','39')

    };
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                page: null,
                pagename: ""
            };
        },
        methods: {
            changeNav(pagename) {
                window.location.href = "#/" + pagename;
                this.pagename = pagename;
                this.loadPage();
            },
            loadPage() {
                pages[this.pagename]().then(data => {
                    this.page = data.default;
                });
            },
        },
        mounted() {
            let routers = urlFormat(window.location.href).router;
            this.pagename = routers[0] in pages ? routers[0] : 'home';
            this.loadPage();
        },
        component: {
            uiSearch
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('33');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('34');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-04c380ac":""},[createElement('input',{"placeholder":"输入内容后回车查询","@keydown":"goSearch","q-model":"wd","data-quickpaper-04c380ac":""},[])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=script&lang=js&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                wd: ""
            };
        },
        methods: {
            goSearch(event) {

                // 如果是回车就带着数据跳转到查询界面
                if (event.keyCode == 13) this.loadPage("https://hai2007.gitee.io/sweethome/#/search?wd=" + encodeURIComponent(this.wd));

            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/components/ui-search.paper?QuickPaper&type=style&lang=css&hash=04c380ac
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper][data-quickpaper-04c380ac]{\n\ndisplay: inline-block;\n\n}\n\n input[data-quickpaper-04c380ac]{\n\nheight: 30px;\n\nborder: none;\n\noutline: none;\n\npadding: 0 10px;\n\npadding-right: 35px;\n\nbackground-image: url('./image/search.svg');\n\nbackground-position: center right;\n\nbackground-repeat: no-repeat;\n\nborder-radius: 3px;\n\nbackground-color: rgb(243 240 240);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App.paper?QuickPaper&type=style&lang=css&hash=347ecaca
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper]>header[data-quickpaper-347ecaca]{\n\nfont-size: 30px;\n\nfont-weight: 800;\n\ncolor: #989a94;\n\nfont-family: serif;\n\nbackground-image: url('./image/logo.png');\n\nbackground-repeat: no-repeat;\n\nbackground-position: 60px center;\n\nbackground-size: auto 90%;\n\npadding-left: 140px;\n\npadding-right: 20px;\n\nline-height: 74px;\n\nheight: 74px;\n\nbackground-color: white;\n\nwhite-space: nowrap;\n\n}\n\n [quickpaper]>header>div[data-quickpaper-347ecaca]{\n\ndisplay: inline-block;\n\nfont-size: 16px;\n\nbackground: #4ca6bc;\n\ncolor: white;\n\npadding: 5px 30px;\n\nfont-weight: 200;\n\nfont-family: cursive;\n\nline-height: 2em;\n\nmargin-left: 50px;\n\noutline: 1px dashed #4ca6bc;\n\n}\n\n [quickpaper]>header>div>a[data-quickpaper-347ecaca]{\n\nbackground-color: white;\n\ncolor: #4ca6bc;\n\nmargin: 0 10px;\n\npadding: 5px;\n\n}\n\n [quickpaper]>header>span[data-quickpaper-347ecaca]{\n\nfloat: right;\n\nline-height: 1em;\n\nmargin-top: 16px;\n\n}\n\n [quickpaper]>nav[data-quickpaper-347ecaca]{\n\nbackground-color: #3c7c78;\n\ncolor: white;\n\npadding-left: 50px;\n\n}\n\n [quickpaper]>nav>span[data-quickpaper-347ecaca]{\n\nmargin: 0 5px;\n\npadding: 0 10px;\n\nline-height: 34px;\n\ndisplay: inline-block;\n\nfont-size: 12px;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>nav>span[active='yes'][data-quickpaper-347ecaca]{\n\nbackground-color: #285f5b;\n\n}\n\n [quickpaper]>div[data-quickpaper-347ecaca]{\n\nmin-height: calc(100vh - 208px);\n\npadding: 0 70px 0 70px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
