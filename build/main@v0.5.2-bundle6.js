
/*************************** [bundle] ****************************/
// Original file:./src/pages/Quick-List/Trigonometric-Function-Table.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('49');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('50');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-6166903c":""},[createElement('h2',{"id":"fixed-top","data-quickpaper-6166903c":""},["常用三角函数变换公式"]),createElement('ul',{"data-quickpaper-6166903c":""},[createElement('li',{"data-quickpaper-6166903c":""},["sinαsinβ=-",createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-6166903c":""},[]),"[cos(α+β)-cos(α-β)]"]),createElement('li',{"data-quickpaper-6166903c":""},["cosαcosβ=",createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-6166903c":""},[]),"[cos(α+β)+cos(α-β)]"]),createElement('li',{"data-quickpaper-6166903c":""},["sinαcosβ=",createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-6166903c":""},[]),"[sin(α+β)+sin(α-β)]"]),createElement('li',{"data-quickpaper-6166903c":""},["cosαsinβ=",createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-6166903c":""},[]),"[sin(α+β)-sin(α-β)]"]),createElement('li',{"data-quickpaper-6166903c":""},["sinθ+sinφ=2sin",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-6166903c":""},[]),"cos",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-6166903c":""},[])]),createElement('li',{"data-quickpaper-6166903c":""},["sinθ-sinφ=2cos",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-6166903c":""},[]),"sin",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-6166903c":""},[])]),createElement('li',{"data-quickpaper-6166903c":""},["cosθ+cosφ=2cos",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-6166903c":""},[]),"cos",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-6166903c":""},[])]),createElement('li',{"data-quickpaper-6166903c":""},["cosθ-cosφ=-2sin",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-6166903c":""},[]),"sin",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-6166903c":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/Quick-List/Trigonometric-Function-Table.paper?QuickPaper&type=script&lang=js&hash=6166903c
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                mathFormulas: {}
            };
        },
        mounted() {
            this.mathFormulas = [
                this.$mathFormula.division(1, 2),
                this.$mathFormula.division('θ+φ', 2),
                this.$mathFormula.division('θ-φ', 2)
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/Quick-List/Trigonometric-Function-Table.paper?QuickPaper&type=style&lang=css&hash=6166903c
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n ul[data-quickpaper-6166903c]{\n\npadding: 10px;\n\n}\n\n ul li[data-quickpaper-6166903c]{\n\ndisplay: inline-block;\n\nmargin: 20px;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
