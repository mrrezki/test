(self.webpackChunk_pyviz_jupyterlab_pyviz=self.webpackChunk_pyviz_jupyterlab_pyviz||[]).push([[979],{979:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>h});var n=i(129),s=i(373);class o{constructor(e,t){this._context=e,this._wManager=t,this._comm=null,e.sessionContext.statusChanged.connect(((e,t)=>{"restarting"!==t&&"dead"!==t||(this._comm=null)}),this)}get context(){return this._context}get comm(){var e,t;return null===this._comm&&null!==(null===(e=this._context.sessionContext.session)||void 0===e?void 0:e.kernel)&&(this._comm=null===(t=this._context.sessionContext.session)||void 0===t?void 0:t.kernel.createComm("hv-extension-comm"),null!=this._comm&&this._comm.open()),this._comm}set comm(e){this._comm=e}get isDisposed(){return null===this._context}dispose(){this.isDisposed||(this._context=null,this._comm=null)}}var r=i(510);const d="application/vnd.holoviews_load.v0+json",c="application/vnd.holoviews_exec.v0+json";class a extends r.Widget{constructor(e,t){super(),this._load_mimetype=d,this._script_element=document.createElement("script"),this._manager=t}renderModel(e){const t=e.data[this._load_mimetype];return this._script_element.textContent=t,this.node.appendChild(this._script_element),this._manager.comm,Promise.resolve()}}class m extends r.Widget{constructor(e,t){super(),this._html_mimetype="text/html",this._js_mimetype="application/javascript",this._exec_mimetype=c,this._createNodes(),this._manager=t,this._displayed=!1,this._dispose=!0}_createNodes(){this._div_element=document.createElement("div"),this._script_element=document.createElement("script"),this._script_element.setAttribute("type","text/javascript")}_registerKernel(e){var t;const i={create_view:(e,t)=>this._manager._wManager.create_view(e,t),set_state:e=>this._manager._wManager.set_state(e)};window.PyViz.widget_manager=i;const n=null===(t=this._manager.context.sessionContext.session)||void 0===t?void 0:t.kernel,s={connectToComm:(e,t)=>{if(void 0===n)return console.log("Kernel not found, could not connect to comm target ",e),{open:function(){},send:function(){},onMsg:function(){}};const i=n.createComm(e,t);return{set onMsg(e){i.onMsg=e},open:(e,t,n)=>{i.open(e,t,n)},send:(e,t,n,s)=>{i.isDisposed||i.send(e,t,n,s)}}},registerCommTarget:(e,t)=>{if(void 0!==n)return n.registerCommTarget(e,t);console.log("Kernel not found, could not register comm target ",e)}};window.PyViz.kernels[e]=s,this._manager.context.sessionContext.statusChanged.connect(((t,i)=>{"restarting"!==i&&"dead"!==i||(delete window.PyViz.kernels[e],this._dispose=!1)}),this)}renderModel(e){const t=e.metadata[this._exec_mimetype],i=t.id;if(this._displayed&&(this._disposePlot(),this.node.removeChild(this._div_element),this.node.removeChild(this._script_element),this._createNodes()),this._dispose=!0,void 0!==i){void 0===window.PyViz?window.PyViz={comms:{},comm_status:{},kernels:{},receivers:{},plot_index:[]}:void 0===window.PyViz.plot_index&&(window.PyViz.plot_index={});const t=e.data[this._html_mimetype];this._div_element.innerHTML=t;const n=[],s=this._div_element.querySelectorAll("script");for(const e in s)s.hasOwnProperty(e)&&n.push(s[e]);if(n.forEach((e=>{const t=document.createElement("script"),i=[],n=e.attributes;for(const e in n)n.hasOwnProperty(e)&&i.push(n[e]);i.forEach((e=>t.setAttribute(e.name,e.value))),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)})),this.node.appendChild(this._div_element),this._js_mimetype in e.data){const t=e.data[this._js_mimetype];this._script_element.textContent=t,this.node.appendChild(this._script_element)}this._registerKernel(i),this._displayed=!0,this._document_id=i}else if(void 0!==t.server_id){this._server_id=t.server_id;const i=e.data[this._html_mimetype],n=document.createElement("div");n.innerHTML=i;const s=n.children[0],o=[],r=s.attributes;for(const e in r)r.hasOwnProperty(e)&&o.push(r[e]);o.forEach((e=>this._script_element.setAttribute(e.name,e.value))),this._script_element.appendChild(document.createTextNode(s.innerHTML)),this.node.appendChild(this._script_element)}return Promise.resolve().then((()=>{void 0!==window.Bokeh&&i in window.Bokeh.index?window.PyViz.plot_index[i]=window.Bokeh.index[i]:window.PyViz.plot_index[i]=null}))}_disposePlot(){if(this._server_id)null!=this._manager.comm&&this._dispose&&this._manager.comm.send({event_type:"server_delete",id:this._server_id}),this._server_id=null;else if(this._document_id){const e=this._document_id;if(null!=this._manager.comm&&this._dispose&&this._manager.comm.send({event_type:"delete",id:e}),void 0!==window.PyViz&&(void 0!==window.PyViz.kernels&&delete window.PyViz.kernels[e],void 0!==window.PyViz.plot_index&&delete window.PyViz.plot_index[e]),void 0!==window.Bokeh&&e in window.Bokeh.index){const t=window.Bokeh.index[e].model.document;t.clear();const i=window.Bokeh.documents.indexOf(t);i>-1&&window.Bokeh.documents.splice(i,1)}this._document_id=null}}dispose(){this.isDisposed||(super.dispose(),this._disposePlot(),this._manager=null)}}let l=null;try{const e=i(292);l=e.registerWidgetManager}catch(e){console.log("Could not load ipywidgets support for @pyviz/jupyterlab_pyviz")}class _{createNew(e,t){const i=this._docmanager._findContext(t.path,"notebook"),s={manager:null};null!=l&&l(i,e.content.rendermime,[s]);const r=new o(t,s.manager);return e.content.rendermime.addFactory({safe:!1,mimeTypes:[d],createRenderer:e=>new a(e,r)},-1),e.content.rendermime.addFactory({safe:!1,mimeTypes:[c],createRenderer:e=>new m(e,r)},-1),new n.DisposableDelegate((()=>{e.content.rendermime&&e.content.rendermime.removeMimeType(c),r.dispose()}))}}const h={id:"@pyviz/jupyterlab_pyviz",autoStart:!0,requires:[s.IDocumentManager],activate:(e,t)=>{const i=new _;i._docmanager=t,e.docRegistry.addWidgetExtension("Notebook",i)}}}}]);