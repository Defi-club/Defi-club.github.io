(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3c0a":function(e,t,n){"use strict";var a=n("c550"),i=n.n(a);i.a},4:function(e,t){},"544d":function(e,t,n){"use strict";var a=n("a115"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},s=[],r={name:"app"},o=r,l=(n("034f"),n("2877")),c=Object(l["a"])(o,i,s,!1,null,null,null),u=c.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[a("div",{staticClass:"pbox"},[a("div",[a("p",{staticClass:"pbox_title"},[e._v(" "+e._s(e.$t("fov.logan_name"))+" ")])]),a("img",{staticClass:"pagopa_icon",attrs:{src:n("87ce")}}),a("div",{staticClass:"pagopa-info"},[a("p",{staticClass:"pagopa-label"},[e._v(e._s(e.$t("fov.level"))+": M"+e._s(e.level))]),e.levelCount>0?a("p",{staticClass:"rate-label"},[e._v(e._s(e.$t("fov.level_count"))+": "+e._s(e.levelCount)+"ETH")]):a("p",{staticClass:"rate-label"},[e._v(" "+e._s(e.$t("fov.start_des"))+" ")])]),a("div",{staticClass:"lan"},[a("el-link",{on:{click:e.langToggle}},[e._v(e._s(e.$t("fov.lang")))])],1)]),a("div",{staticClass:"content"},[a("div",{staticClass:"open-info"},[a("p",[e._v(e._s(e.$t("fov.join"))),a("label",{staticClass:"day gold-font "},[e._v(e._s(e.invest))]),e._v("eth, "),a("b",[e._v(e._s(e.earnDay))]),e._v(e._s(e.$t("fov.day_earn"))),a("b",[e._v(e._s(e.earnP))]),e._v("%")])]),a("div",[a("el-slider",{attrs:{type:"info","show-tooltip":!1,"format-tooltip":e.formatTooltip,min:10,max:80},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("div",{staticClass:"jbox"},[a("el-button",{staticClass:"join",attrs:{size:"big",round:""},on:{click:e.join}},[e._v("\n            "+e._s(e.$t("fov.join_now"))+"\n        ")])],1),a("div",{staticClass:"title-space"},[a("b",[e._v(e._s(e.$t("fov.earned_title")))]),a("div",{staticClass:"link_right"},[a("el-link",{attrs:{size:"small",type:"info",href:"#/order"}},[e._v(e._s(e.$t("fov.mine_log"))+" ")])],1)]),a("div",{staticClass:"card-bkg "},[a("div",{staticClass:"mine-box"},[a("div",{staticClass:"award-des"},[a("span",[e._v(e._s(e.$t("fov.mine_done"))+":")]),a("b",[e._v(" "+e._s(e.canWdEth)+"  ")]),e._v(" eth\n        ")]),a("el-button",{attrs:{size:"small",type:"warning"},on:{click:e.withdraw}},[e._v(e._s(e.$t("fov.wd_btn")))])],1),a("div",{staticClass:"mine-box"},[a("div",{staticClass:"award-des"},[a("span",[e._v(e._s(e.$t("fov.earned"))+":")]),a("b",[e._v(" "+e._s(e.withdrawEarned)+" ")]),e._v("eth\n        ")])])]),a("div",{staticClass:"title"},[a("b",[e._v(e._s(e.$t("fov.partners")))])]),a("div",{staticClass:"card-bkg"},[a("div",{staticClass:"mine-box"},[a("div",{staticClass:"award-des"},[a("span",[e._v(" "+e._s(e.$t("fov.partner_count"))+": ")]),a("b",[e._v(" "+e._s(e.parnerNum))])]),a("el-link",{attrs:{type:"info",href:"#/node"}},[e._v(e._s(e.$t("fov.details"))+" ")])],1),a("div",{staticClass:"mine-box"},[a("div",{staticClass:"award-des"},[a("span",[e._v(e._s(e.$t("fov.invite"))+":")]),a("b",{staticClass:"copylinktext"},[e._v("  "+e._s(e.uLink)+" ")])])])])])])},p=[],v=(n("9e1f"),n("450d"),n("6ed5")),h=n.n(v),b=(n("0fb7"),n("f529")),m=n.n(b),_=(n("96cf"),n("3b8d")),w=(n("28a5"),n("a481"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";e=(e+"").replace(/[^0-9+-Ee.]/g,"");var i=isFinite(+e)?+e:0,s=isFinite(+t)?Math.abs(t):0,r="undefined"===typeof a?",":a,o="undefined"===typeof n?".":n,l="",c=function(e,t){var n=Math.pow(10,t);return""+Math.floor(e*n)/n};l=(s?c(i,s):""+Math.round(i)).split(".");var u=/(-?\d+)(\d{3})/;while(u.test(l[0]))l[0]=l[0].replace(u,"$1"+r+"$2");return(l[1]||"").length<s&&(l[1]=l[1]||"",l[1]+=new Array(s-l[1].length+1).join("0")),l.join(o)}),y=w,g=n("6314"),C=n.n(g),k=n("f616"),x=n.n(k),$=n("dc6a"),j={initWeb3Account:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=12;break}return this.provider=window.ethereum,e.prev=2,e.next=5,window.ethereum.enable();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.error("User denied account access");case 10:e.next=13;break;case 12:window.web3?this.provider=window.web3.currentProvider:this.provider=new C.a.providers.HttpProvider("http://127.0.0.1:7545");case 13:this.web3=new C.a(this.provider),web3.eth.getAccounts((function(e,a){if(null!=e)return console.error("无法获取账号， 是否安装了 Metamask"),void(n.message="");0!==a.length?t(n.web3,a[0]):console.error("无法获取账号，Metamask 时候正确配置.")}));case 15:case"end":return e.stop()}}),e,this,[[2,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getFov:function(){var e=x()($);return e.setProvider(this.provider),e.deployed()}},T={name:"Fov",data:function(){return{web3:null,fov:null,value:25,invest:2.5,earnDay:7,earnP:4,level:null,levelCount:null,withdrawEarned:null,parnerNum:0,canWdEth:0,uLink:null,uLinkShort:null,loading:!1}},created:function(){var e=this,t=this.$route.params.p;t&&42===t.length?this.parentAddr=t:console.log("no parent"),j.initWeb3Account((function(t,n){console.log("my account address:"+n),e.account=n,e.uLink="https://defi-club.github.io/#/p/"+e.account,e.uLink.substr(0,20),e.uLinkShort=e.uLink.substr(0,20)+"..."+e.uLink.substr(e.uLink.length-4,e.uLink.length),e.web3=t,e.init()}))},methods:{fn:function(e){return y(e,2)},fnd:function(e,t){return y(e,t)},formatTooltip:function(e){return this.invest=(e/10).toFixed(1),e<=30?(this.earnP=4,this.earnDay=7):e<=50?(this.earnP=10,this.earnDay=15):(this.earnP=25,this.earnDay=30),e/10},init:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.getFov();case 2:this.fov=e.sent,console.log(this.fov.address),this.loading=!1,this.info(),this.getParner();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),langToggle:function(){"zh_CN"==this.$i18n.locale?(this.$i18n.locale="en_US",localStorage.setItem("langs","en_US")):(this.$i18n.locale="zh_CN",localStorage.setItem("langs","zh_CN"))},info:function(){var e=this;this.fov.investInfo(this.account,{from:this.account}).then((function(t){e.level=t[0].toNumber(),e.levelCount=e.web3.utils.fromWei(t[1])})),this.fov.withdrawEarned(this.account,{from:this.account}).then((function(t){e.withdrawEarned=e.fn(e.web3.utils.fromWei(t),4)})),this.fov.canWd({from:this.account}).then((function(t){e.canWdEth=e.fnd(e.web3.utils.fromWei(t),4)}))},getParner:function(){var e=this;this.fov.childNum(this.account,{from:this.account}).then((function(t){e.parnerNum=t.toNumber(),console.log(e.parnerNum)}))},copyUlink:function(){if(navigator.clipboard)navigator.clipboard.writeText(this.uLink).then((function(){m.a.info({message:i18n.t("fov.msg_link_copyed")})}),(function(e){m.a.info({message:i18n.t("fov.msg_link_copyed_fail")})}));else{var e=document.createElement("textarea");e.value=this.uLink,e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var t=document.execCommand("copy"),n=t?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n),m.a.info({message:i18n.t("fov.msg_link_copyed")})}catch(a){}document.body.removeChild(e)}},withdraw:function(){var e=this;this.fov.withdraw({from:this.account}).then((function(t){e.info()}))},join:function(){var e=this;this.parentAddr?this.fov.join(this.parentAddr,{from:this.account,value:this.web3.utils.toWei(this.invest,"ether")}).then((function(t){e.info()})):h.a.alert("无效的邀请链接! ","提示",{confirmButtonText:"确定"})}}},E=T,O=(n("3c0a"),Object(l["a"])(E,f,p,!1,null,"b0cebffa",null)),M=O.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isown?n("div",{staticClass:"content content-on-tab"},[n("h2",[e._v("管理员后台")]),n("div",[e._v("合约当前总资金: "),n("b",[e._v(" "+e._s(e.totalBalance)+" ETH ")])]),n("div",{staticStyle:{"text-align":"left"}},[e._v("当前管理员： "+e._s(e.owner))]),n("div",{staticClass:"row-center"},[n("el-input",{attrs:{placeholder:"请输新管理员地址"},model:{value:e.newOwner,callback:function(t){e.newOwner=t},expression:"newOwner"}}),n("el-button",{on:{click:e.setMgr}},[e._v(" 转移管理员 ")])],1),n("div",{staticClass:"row-center"},[n("el-input",{attrs:{placeholder:"提取数量"},model:{value:e.wdValue,callback:function(t){e.wdValue=t},expression:"wdValue"}}),n("el-button",{on:{click:e.wdFund}},[e._v(" 割 ")])],1),n("div",[e._v("\n        起始推广链接: "),n("el-link",{attrs:{type:"primary",href:e.uLink}},[e._v(" "+e._s(e.uLink)+" ")])],1),e._m(0)]):e._e()},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"left"}},[n("p",{staticClass:"tips-font "},[e._v("温馨提示："),n("br"),e._v("\n        1. 转移管理员前，应该先把管理员收益提出。 "),n("br"),e._v("\n        2. 当合约资金不足时，会导致用户提取资金失败。 "),n("br"),n("br")])])}],F={name:"Admin",data:function(){return{owner:null,account:null,uLink:null,fund:0,isown:null,totalBalance:null,wdValue:null,newOwner:null}},created:function(){var e=this;j.initWeb3Account((function(t,n){e.account=n,e.web3=t,e.init()}))},methods:{init:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.getFov();case 2:this.fov=e.sent,this.info();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),info:function(){var e=this;this.uLink="https://defi-club.github.io/#/p/"+this.fov.address,this.web3.eth.getBalance(this.fov.address).then((function(t){e.totalBalance=e.web3.utils.fromWei(t)})),this.fov.owner({from:this.account}).then((function(t){e.owner=t,e.owner.toLowerCase()==e.account.toLowerCase()&&(e.isown=!0)}))},setMgr:function(){var e=this;this.fov.transferOwnership(this.newOwner,{from:this.account}).then((function(t){e.info()}))},wdFund:function(){var e=this;this.fov.wdFee(this.web3.utils.toWei(this.wdValue),{from:this.account}).then((function(t){e.info()}))}}},B=F,W=(n("e5ac"),Object(l["a"])(B,L,N,!1,null,"de238a12",null)),S=W.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[a("div",{staticClass:"header"},[a("span",{staticClass:"el-icon-back back",on:{click:e.goBack}}),a("div",{staticClass:"header-title"},[e._v(" "+e._s(e.$t("order.title"))+" ")]),a("span",{staticClass:"back",on:{click:e.goBack}})]),a("div",{staticClass:"content content-on-tab"},[a("div",{staticClass:"title"},[a("img",{attrs:{src:n("bc38")}}),a("span",[e._v(e._s(e.$t("order.account")))])]),a("div",{staticClass:"balance-content"},[a("div",[a("div",{staticClass:"icon-content"},[a("span",{staticClass:"gold-font"},[e._v(e._s(e.$t("order.level")))])]),a("p",{staticClass:"gold-font"},[e._v("M"+e._s(e.level)+" ")])]),a("div",[a("div",{staticClass:"icon-content"},[a("span",{staticClass:"gold-font"},[e._v(e._s(e.$t("order.balance")))])]),a("p",{staticClass:"gold-font"},[e._v(e._s(e.balance)+" ")])])]),e._l(e.orders,(function(t,n){return a("div",{key:n,staticClass:"card"},[a("div",{staticClass:"box_top"},[a("span",[e._v(e._s(e.$t("order.date"))+" "+e._s(t.date))]),a("el-tag",{attrs:{type:t.tagtype}},[e._v(" "+e._s(t.wd)+" ")])],1),a("div",{staticClass:"box_top"},[a("span",[e._v(e._s(e.$t("order.period"))+e._s(t.period)+e._s(e.$t("order.day")))])]),a("div",{staticClass:"card-divider"}),a("div",{staticClass:"box_content"},[a("span",[e._v(e._s(e.$t("order.invest"))),a("b",[e._v(e._s(t.value)+" ETH")])]),a("span",[e._v(e._s(e.$t("order.lv"))),a("b",[e._v("M"+e._s(t.level))])])]),a("div",{staticClass:"box_content"},[a("span",[e._v(e._s(e.$t("order.earn_rate"))),a("b",[e._v(e._s(t.percent)+" %")])]),a("span",[e._v(e._s(e.$t("order.earn_value"))),a("b",[e._v(e._s(t.earn)+"ETH")])])])])})),a("p",{staticClass:"tips-font "},[e._v(e._s(e.$t("order.directions"))),a("br"),e._v("\n        "+e._s(e.$t("order.des_1"))),a("br"),e._v("\n        "+e._s(e.$t("order.des_2"))),a("br")])],2)])},D=[],A={name:"Order",data:function(){return{web3:null,level:null,balance:null,levelCount:null,loading:!0,orders:[],orderNums:null}},created:function(){var e=this;j.initWeb3Account((function(t,n){console.log("account:"+n),e.account=n,e.web3=t,e.init()}))},methods:{fn:function(e){return y(e,2)},goBack:function(){this.$router.back(-1)},init:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.getFov();case 2:this.fov=e.sent,console.log(this.fov.address),this.loading=!1,this.info(),this.myOrders();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),info:function(){var e=this;this.fov.investInfo(this.account,{from:this.account}).then((function(t){e.level=t[0].toNumber(),e.levelCount=e.web3.utils.fromWei(t[1])})),this.web3.eth.getBalance(this.account).then((function(t){e.balance=e.fn(e.web3.utils.fromWei(t),4)}))},myOrders:function(){var e=this;this.orders=[],this.fov.orderNum({from:this.account}).then((function(t){e.orderNums=t.toNumber(),e.orderNums>0&&e.getOrder(e.orderNums-1),e.$forceUpdate()}))},getOrder:function(e){var t=this;this.fov.order(e,{from:this.account}).then((function(n){var a,i=1e3*n[1],s=new Date(i),r=s.toLocaleDateString().replace(/\//g,"-")+" "+s.toTimeString().substr(0,8),o=0,l=i18n.t("order.status_doing"),c="success",u=4,d=0,f=864e5,p=parseFloat(t.web3.utils.fromWei(n[0])),v=(new Date).getTime();if(p<3.1){o=1,u=4,a=7,d=t.fn(p+p*u/100,3);var h=i+a*f;v>h&&(l=i18n.t("order.status_done"),c="success")}else if(p>=3.1&&p<5.1){o=2,u=10,d=p+p*u/100,a=15;h=i+a*f;v>h&&(l=i18n.t("order.status_done"),c="success")}else{o=3,u=25,d=p+p*u/100,a=30;h=i+a*f;v>h&&(l=i18n.t("order.status_done"),c="success")}n[2]&&(l=i18n.t("order.status_wd"),c="info");var b={value:t.web3.utils.fromWei(n[0]),date:r,wd:l,level:o,percent:u,period:a,earn:d,tagtype:c};t.orders.push(b),e>0&&t.getOrder(e-1),t.$forceUpdate()}))}}},R=A,I=(n("9cb0"),Object(l["a"])(R,P,D,!1,null,"d0e7b1b2",null)),U=I.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:e.loading,expression:"loading",modifiers:{fullscreen:!0}}]},[n("div",{staticClass:"header"},[n("span",{staticClass:"el-icon-back back",on:{click:e.goBack}}),n("div",{staticClass:"header-title"},[e._v(" "+e._s(e.$t("fov.partners"))+" ")]),n("span",{staticClass:"back",on:{click:e.goBack}})]),n("div",{staticClass:"table-content"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.nodes,align:"center",stripe:""}},[n("el-table-column",{attrs:{prop:"addr",label:e.addrLabel,align:"left",width:"180"}}),n("el-table-column",{attrs:{prop:"level",label:e.levelLabel,align:"center",width:"50"}}),n("el-table-column",{attrs:{prop:"joined",label:e.joinedLabel,align:"center",width:"90"}})],1)],1)])},z=[],V={name:"Node",data:function(){return{addrLabel:i18n.t("node.addr"),levelLabel:i18n.t("node.level"),joinedLabel:i18n.t("node.joined"),lastAwardEth:"~",round:0,title:null,loading_more:!1,nodes:[],parnerNum:0,loading:!1}},created:function(){var e=this;j.initWeb3Account((function(t,n){e.account=n,e.web3=t,e.init()}))},methods:{goBack:function(){this.$router.back(-1)},init:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.getFov();case 2:this.fov=e.sent,this.loading=!1,this.loadChilds(this.account);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fn:function(e){return y(e,4)},loadChilds:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fov.myChilds({from:t});case 2:n=e.sent,a=0;case 4:if(!(a<n.length)){e.next=10;break}return e.next=7,this.loadNodeInfo(n[a]);case 7:a++,e.next=4;break;case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),loadNodeInfo:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fov.investInfo(t,{from:this.account});case 2:return n=e.sent,e.next=5,this.fov.childNum(t,{from:this.account});case 5:a=e.sent,i={addr:t.substring(0,16)+"..",level:n[0].toNumber(),joined:this.web3.utils.fromWei(n[2])+"ETH",num:a.toNumber()},this.nodes.push(i),this.$forceUpdate();case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},J=V,q=(n("544d"),Object(l["a"])(J,H,z,!1,null,"480b6948",null)),G=q.exports;a["default"].use(d["a"]);var K=new d["a"]({routes:[{path:"/p",name:"fov",component:M},{path:"/p/:p",name:"fov",component:M},{path:"/order",name:"order",component:U},{path:"/admin",name:"admin",component:S},{path:"/node",name:"node",component:G}]}),Q=n("0a46");a["default"].use(Q["a"]);var X={zh_CN:n("734e"),en_US:n("5939")},Y=localStorage.getItem("langs")||"zh_CN",Z=new Q["a"]({locale:Y,messages:X}),ee=(n("5466"),n("ecdf")),te=n.n(ee),ne=(n("38a0"),n("ad41")),ae=n.n(ne),ie=(n("be4f"),n("896a")),se=n.n(ie),re=(n("f92a"),n("d775")),oe=n.n(re),le=(n("a7cc"),n("df33")),ce=n.n(le),ue=(n("915d"),n("e04d")),de=n.n(ue),fe=(n("10cb"),n("f3ad")),pe=n.n(fe),ve=(n("e3ea"),n("7bc3")),he=n.n(ve),be=(n("cbb5"),n("8bbc")),me=n.n(be),_e=(n("fd71"),n("a447")),we=n.n(_e),ye=(n("b8e0"),n("a4c4")),ge=n.n(ye),Ce=(n("b5c2"),n("20cf")),ke=n.n(Ce),xe=(n("1951"),n("eedf")),$e=n.n(xe);a["default"].use($e.a),a["default"].use(ke.a),a["default"].use(ge.a),a["default"].use(we.a),a["default"].use(me.a),a["default"].use(he.a),a["default"].use(pe.a),a["default"].use(de.a),a["default"].use(ce.a),a["default"].use(oe.a),a["default"].use(se.a),a["default"].use(ae.a),a["default"].use(te.a);var je=n("d56f");a["default"].component(je["a"].name,je["a"]),a["default"].config.productionTip=!1,window.i18n=Z,new a["default"]({i18n:Z,router:K,render:function(e){return e(u)}}).$mount("#app")},"56e7":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="56e7"},5939:function(e,t){e.exports={fov:{logan_name:" DEFI CLUB ",level:"Level",lang:"中文",level_count:"Mine value",start_des:"Let's join now",join:"Invest ",day_earn:" day Earn ",join_now:"Start Mint",earned_title:"Mine Earned",mine_log:"more >",mine_done:"Mined",wd_btn:"Withdraw",earned:"Earned",partners:"Partners",partner_count:"Count",details:"details >",invite:"Link",copy_btn:"Copy",msg_link_copyed:"URL copyed",msg_link_copyed_fail:"Copy url failed"},node:{addr:"Addr.",level:"Lv.",joined:"Ethers"},order:{title:"Mines",account:"Account",level:"Level",balance:"Balance",date:"Join: ",day:"day",lv:"Level: ",period:"Period: ",invest:"Invest: ",earn_rate:"Earn: ",earn_value:"Value: ",directions:"Directions:",des_1:"1. Level depending on the invested ether.",des_2:"2. Higher the level, then time will longer and earn more.",status_done:"Done",status_wd:"Withdrawed",status_doing:"Mining"}}},"64a9":function(e,t,n){},"734e":function(e,t){e.exports={fov:{logan_name:" DEFI CLUB ",level:"级别",lang:" En ",level_count:"挖矿金额",start_des:"立即参与开始挖矿",join:"参与",day_earn:"天挖矿",join_now:"立即挖矿",earned_title:"挖矿收益",mine_log:"挖矿记录 >",mine_done:"已挖矿",wd_btn:"提取",earned:"共挖矿",partners:"矿工伙伴",partner_count:"直推矿工",details:"查看 >",invite:"邀请链接",copy_btn:"复制",msg_link_copyed:"链接已复制",msg_link_copyed_fail:"复制邀请链接失败"},node:{addr:"地址",level:"级别",joined:"当前挖矿"},order:{title:"挖矿合约",account:"账户详情",level:"当前级别",balance:"钱包余额",date:"挖矿日期:",day:"天",lv:"级别:",period:"挖矿周期:",invest:"挖矿投入:",earn_rate:"收益率:",earn_value:"金额:",directions:"说明：",des_1:"1. 根据投入挖矿资金不同，合约将计算出对应的级别。",des_2:"2. 级别越高，挖矿周期越长，挖矿收益也更高。",status_done:"已完成",status_wd:"已到账",status_doing:"挖矿中"}}},"87ce":function(e,t,n){e.exports=n.p+"img/ether2.4e79ec86.png"},"9cb0":function(e,t,n){"use strict";var a=n("edbf"),i=n.n(a);i.a},a115:function(e,t,n){},bc38:function(e,t,n){e.exports=n.p+"img/wallet.3b56ef31.svg"},c550:function(e,t,n){},dc6a:function(e){e.exports=JSON.parse('{"contractName":"Fov","abi":[{"inputs":[{"internalType":"address","name":"own","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"childs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"stateMutability":"payable","type":"receive","payable":true},{"inputs":[{"internalType":"address","name":"own","type":"address"}],"name":"childNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"myChilds","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"p","type":"address"}],"name":"join","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"own","type":"address"}],"name":"investInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"wdFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"b","type":"bool"}],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"canWd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"orderNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"order","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"immutableReferences":{},"networks":{"1":{"events":{},"links":{},"address":"0xBd25f0Bb60eFBe401b5725704B440ea019e4d2a3","transactionHash":"0x156095aef8dc9505fba508030eb53db6f907156b2cfb9a9044c79345ec22973d"},"3":{"events":{},"links":{},"address":"0x464EFb530bdA4a3Cf6658F83dC21Cdfb9C02a9a9","transactionHash":"0x7378336aea020a3d328749bff933c8b203e3417fd6d6f4758706ca5b1c1458f3"},"1337":{"events":{},"links":{},"address":"0x8A24FbcEB8B4d4E9b6ED6A5e3B38e3eD52C15090","transactionHash":"0x8f1498b196d714b2d66a4a2a59020d963480a1db683901e4fc289ea3ff6f05ca"},"2337":{"events":{},"links":{},"address":"0xEF1042B40dD6f5E7809E3f8091600b50080d9fF9","transactionHash":"0xcd4bc0c773329b7cdf2515aa3bd309d5f7f69418b2504e541992121978eb4156"},"12337":{"events":{},"links":{},"address":"0xEF1042B40dD6f5E7809E3f8091600b50080d9fF9","transactionHash":"0x7166bf8c82bf1948352110a355c12637015304a05c605f6e9278ee1a0dd62ae7"}},"networkType":"ethereum"}')},e5ac:function(e,t,n){"use strict";var a=n("ed5f"),i=n.n(a);i.a},ed5f:function(e,t,n){},edbf:function(e,t,n){}});
//# sourceMappingURL=app.b4da7243.js.map