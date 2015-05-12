(function(e,t){e("JC.Tree",["JC.common"],function(){function e(r,i){if(r&&$(r).length){r=$(r);if(e.getInstance(r))return e.getInstance(r);r.data(e.Model._instanceName,this)}this._model=new t(r,i),this._view=new n(this._model)}function t(e,n){this._container=e,this._data=n,this._id=JC.f.printf("tree_{0}_{1}_",(new Date).getTime(),t._insCount++),this._highlight,this._events={},this._init()}function n(e){this._model=e,this._treeRoot}return window.Tree=JC.Tree=e,e.getInstance=function(t){return t=$(t),t.data(e.Model._instanceName)},e.dataFilter,e.prototype={init:function(){return this._view.init(),this._view.treeRoot().data(e.Model._instanceName,this),this},open:function(e){return typeof e=="undefined"?(this._view.openAll(),this):(this._view.open(e),this)},close:function(e){return typeof e=="undefined"?(this._view.closeAll(),this):(this._view.close(e),this)},idPrefix:function(){return this._model.idPrefix()},getItem:function(e){var t;return e&&(t=$("#"+this._model.id(e))),t},on:function(e,t){return!e||!t?this:(this._model.addEvent(e,t),this)},event:function(e){if(!e)return;return this._model.event(e)},selectedItem:function(e){return this._view.selectedItem(e)},highlight:function(){return this.selectedItem.apply(this,JC.f.sliceArgs(arguments))}},e.Model=t,e.View=n,e.Model._instanceName="TreeIns",t._insCount=1,t.prototype={_init:function(){return e.dataFilter&&(this._data=e.dataFilter(this._data)),this},container:function(){return this._container},id:function(e){return this._id+e},idPrefix:function(){return this._id},data:function(){return this._data},root:function(){return this._data.root},child:function(e){var t=this._data.data[e];return(!t||!t.length)&&(t=[]),t},hasChild:function(e){return e in this._data.data},event:function(e){return e=e.toLowerCase(),this._events[e]},addEvent:function(e,t){e=e.toLowerCase(),e in this._events||(this._events[e]=[]),this._events[e].unshift(t)},highlight:function(e){return e&&(this._highlight=$(e)),this._highlight}},n.prototype={init:function(){if(!this._model.data()||!this._model.root())return;return this._model.container().addClass("js_compTree"),this._process(this._model.child(this._model.root()[0]),this._initRoot()),this},treeRoot:function(e){return e&&(this._treeRoot=e),this._treeRoot},_process:function(e,t){for(var n=0,r=e.length,i,s;n<r;n++)i=e[n],s=n===r-1,this._model.hasChild(i[0])?this._initFolder(t,i,s):this._initFile(t,i,s)},_initRoot:function(){var e=this;if(!e._model.data().root)return;var t=e._model.data().root,n=$('<ul class="tree_wrap"></ul>'),r=this._initLabel(t),i=$('<li class="folder_open"></li>');i.html('<span class="folder_img_root folderRoot folder_img_open">&nbsp;</span>'),r.appendTo(i),i.appendTo(n),n.appendTo(e._model.container()),this.treeRoot(n);var s=$('<ul style="" class="tree_wrap_inner"></ul>');return s.appendTo(i),s},_initFolder:function(e,t,n){var r="",i="";n&&(r="folder_span_lst ",i="folder_last");var s=this._initLabel(t),o=$(JC.f.printf('<li><span class="folder_img_closed folder {1}">&nbsp;</span></li>',t[1],r));o.addClass(JC.f.printf("folder_closed {0} folder",i)),s.appendTo(o);var u=$('<ul style="display:none;" class="folder_ul_lst" ></ul>');u.appendTo(o),o.appendTo(e),this._process(this._model.child(t[0]),u)},_initFile:function(e,t,n){var r="folder_img_bottom ",i="";n&&(r="folder_img_last ",i="");var s=this._initLabel(t),o=$(JC.f.printf('<li><span class="{1}file">&nbsp;</span></li>',t[1],r));o.addClass("folder_closed file"),s.appendTo(o),o.appendTo(e)},_initLabel:function(e){var t=$('<div class="node_ctn"></div>');return t.attr("id",this._model.id(e[0])).attr("dataid",e[0]).attr("dataname",e[1]).data("nodeData",e),this._model.event("RenderLabel")?$.each(this._model.event("RenderLabel"),function(n,r){if(r.call(t,e,t)===!1)return!1}):t.html(e[1]||"没有标签"),t},openAll:function(){if(!this.treeRoot())return;this.treeRoot().find("span.folder_img_closed").each(function(){$(this).trigger("click")})},closeAll:function(){if(!this.treeRoot())return;this.treeRoot().find("span.folder_img_open, span.folder_img_root").each(function(){if($(this).hasClass("folder_img_closed"))return;$(this).trigger("click")})},open:function(e){if(!e)return;var t=$("#"+this._model.id(e));if(!t.length)return;var n=t.parents("li");this.selectedItem(t),n.each(function(){var e=$(this),t=e.find("> span.folderRoot, > span.folder");if(t.length){if(t.hasClass("folder_img_open"))return;t.trigger("click")}})},selectedItem:function(e){return e&&(e=$(e)),!e||!e.length?this._model.highlight():(this._model.highlight()&&this._model.highlight().removeClass("highlight").removeClass("selectedTreeNode"),e.addClass("highlight").addClass("selectedTreeNode"),this._model.highlight(e),e)},close:function(e){if(!e)return;var t=$("#"+this._model.id(e));if(!t.length)return;var n=t.parent("li").find("> span.folderRoot, > span.folder");if(n.length){if(n.hasClass("folder_img_closed"))return;n.trigger("click")}}},e.lastHover=null,$(document).delegate(".js_compTree ul.tree_wrap div.node_ctn","mouseenter",function(){e.lastHover&&e.lastHover.removeClass("ms_over"),$(this).addClass("ms_over"),e.lastHover=$(this)}),$(document).delegate(".js_compTree ul.tree_wrap div.node_ctn","mouseleave",function(){e.lastHover&&e.lastHover.removeClass("ms_over")}),$(document).delegate(".js_compTree ul.tree_wrap div.node_ctn","click",function(t){var n=$(this),r=n.parents("ul.tree_wrap"),i=r.data(e.Model._instanceName);if(!i)return;var s=i.event("click");s&&s.length&&$.each(s,function(e,r){if(r.call(n,t)===!1)return!1}),i.selectedItem(n);var s=i.event("change");s&&s.length&&$.each(s,function(e,r){if(r.call(n,t)===!1)return!1})}),$(document).delegate(".js_compTree ul.tree_wrap span.folder, ul.tree_wrap span.folderRoot","click",function(t){var n=$(this),r=n.parent("li"),i=r.find("> ul"),s=n.parents("ul.tree_wrap"),o=s.data(e.Model._instanceName),u=o.event("FolderClick");u&&u.length&&$.each(u,function(e,r){if(r.call(n,t)===!1)return!1}),n.hasClass("folder_img_open")?(n.removeClass("folder_img_open").addClass("folder_img_closed"),i.hide()):n.hasClass("folder_img_closed")&&(n.addClass("folder_img_open").removeClass("folder_img_closed"),i.show()),r.hasClass("folder_closed")?r.addClass("folder_open").removeClass("folder_closed"):r.hasClass("folder_open")&&r.removeClass("folder_open").addClass("folder_closed")}),JC.Tree})})(typeof define=="function"&&define.amd?define:function(e,t,n){typeof e=="function"&&(n=e),typeof t=="function"&&(n=t),n&&n()},window);