(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d0cda7da"],{2888:function(s,t,i){},"4c41":function(s,t,i){"use strict";i.r(t);var n=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"my"},[i("ul",{staticClass:"menu"},[i("li",{staticClass:"menu-item",on:{click:function(t){return s.$router.push("/loved")}}},[i("i",{staticClass:"iconfont icon-love"}),i("span",{staticClass:"menu-item-lable"},[s._v("我喜欢")]),i("span",{staticClass:"memo"},[s._v(s._s(s.lovedList.length))])]),i("li",{staticClass:"menu-item",on:{click:function(t){return s.$router.push("/playHis")}}},[i("i",{staticClass:"iconfont icon-time"}),i("span",{staticClass:"menu-item-lable"},[s._v("最近播放")]),i("span",{staticClass:"memo"},[s._v(s._s(s.playHisList.length))])]),s._m(0)]),i("div",{staticClass:"song-bar"},[i("a",{staticClass:"song-bar-item active",on:{click:function(t){s.selectItem=2}}},[s._v("收藏歌单"),i("span",{directives:[{name:"show",rawName:"v-show",value:s.songsLovedList.length>0,expression:"songsLovedList.length>0"}]},[s._v(s._s(s.songsLovedList.length))])])]),s._l(s.songsLovedList,function(t,n){return i("ul",{key:n,staticClass:"song-list"},[s.songsLovedList.length>0?i("li",{staticClass:"song-list-item",on:{click:function(i){return s.toSongList(""+t.disstid,""+t.logo)}}},[i("img",{staticClass:"item-img",attrs:{src:t.logo}}),i("a",[s._v(s._s(t.dissname))]),i("span",[s._v(s._s(t.songlist.length)+"首")]),i("i",{staticClass:"iconfont icon-arrow-right"})]):s._e()])}),i("ul",{staticClass:"song-list"},[0==s.songsLovedList.length?i("li",{staticClass:"noting"},[s._v("什么都没有")]):s._e()])],2)},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("li",{staticClass:"menu-item"},[i("i",{staticClass:"iconfont icon-category"}),i("span",{staticClass:"menu-item-lable"},[s._v("仅占位")]),i("span",{staticClass:"memo"},[s._v("占位")])])}],a=i("cebc"),o=i("2f62"),l={name:"My",data:function(){return{}},methods:Object(a["a"])({},Object(o["b"])("playList",["getDefaultList"]),{toSongList:function(s,t){this.$router.push({name:"songList",params:{id:s},query:{imgUrl:t}})}}),mounted:function(){},computed:Object(a["a"])({},Object(o["e"])("playList",["list","index"]),Object(o["e"])("musicLoved",["lovedList","songsLovedList"]),Object(o["e"])("playHis",["playHisList"]))},c=l,u=(i("b486"),i("2877")),r=Object(u["a"])(c,n,e,!1,null,"4948863f",null);t["default"]=r.exports},b486:function(s,t,i){"use strict";var n=i("2888"),e=i.n(n);e.a}}]);
//# sourceMappingURL=chunk-d0cda7da.476fa496.js.map