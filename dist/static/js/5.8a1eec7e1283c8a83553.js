webpackJsonp([5],{"2wl4":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("B9rx"),n=e("c2Ch"),a={data:function(){return{id:this.$route.params.id,name:"",songList:[]}},mounted:function(){this.getSongList()},methods:{getSongList:function(){var t=this;Object(n.e)({idx:this.id}).then(function(s){200==s.code&&(t.songList=[],console.log(s),t.name=s.playlist.name,s.playlist.tracks.forEach(function(s){var e=[];s.ar.forEach(function(t){e.push(t.name)}),t.songList.push({id:s.id,name:s.name,pic:s.al.picUrl,album:s.al.name,songer:e.join("/")})}))})},getBack:function(){this.$router.go(-1)},getId:function(t){console.log(t),i.a.$emit("songListId",this.songList),i.a.$emit("musicUrl",t)}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ListDetail"},[e("div",{staticClass:"title"},[e("div",{staticClass:"el-icon-d-arrow-left icon titleBox",on:{click:t.getBack}},[t._v("返回")]),t._v(" "),e("div",{staticClass:"titleBox"},[t._v(t._s(t.name))])]),t._v(" "),t._l(t.songList,function(s,i){return e("div",{key:i,staticClass:"search_result",on:{click:function(e){return t.getId(s)}}},[e("div",{staticClass:"search_result_name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"search_result_songer"},[t._v(t._s(s.songer)+" - "+t._s(s.album))])])})],2)},staticRenderFns:[]};var c=e("VU/8")(a,o,!1,function(t){e("O7vN")},"data-v-1cf355e8",null);s.default=c.exports},O7vN:function(t,s){}});
//# sourceMappingURL=5.8a1eec7e1283c8a83553.js.map