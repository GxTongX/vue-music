webpackJsonp([6],{BRgg:function(t,n,e){"use strict";n.b=function(){var t=s()({},c.b,{uin:0,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.c)},n.a=function(t){var n=s()({},c.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,c.c)};var i=e("woOf"),s=e.n(i),o=e("Gak4"),c=e("T452")},s3x3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),c=e("BRgg"),a=e("T452"),r=e("NYxO"),u=e("PvFA"),g={computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(r.c)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(c.a)(this.topList.id).then(function(n){n.code===a.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albummid&&n.push(Object(u.a)(e))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var p=e("VU/8")(g,f,!1,function(t){e("zReY")},"data-v-3f8c6306",null);n.default=p.exports},zReY:function(t,n){}});
//# sourceMappingURL=6.f688a3ea9a27292534b2.js.map