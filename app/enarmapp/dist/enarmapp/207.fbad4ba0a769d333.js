"use strict";(self.webpackChunkenarmapp=self.webpackChunkenarmapp||[]).push([[207],{4968:(Y,L,l)=>{l.d(L,{R:()=>T});var S=l(8421),C=l(9751),e=l(5577),Q=l(1144),h=l(576),v=l(3268);const o=["addListener","removeListener"],a=["addEventListener","removeEventListener"],d=["on","off"];function T(f,q,y,x){if((0,h.m)(y)&&(x=y,y=void 0),x)return T(f,q,y).pipe((0,v.Z)(x));const[F,N]=function R(f){return(0,h.m)(f.addEventListener)&&(0,h.m)(f.removeEventListener)}(f)?a.map(H=>j=>f[H](q,j,y)):function w(f){return(0,h.m)(f.addListener)&&(0,h.m)(f.removeListener)}(f)?o.map(b(f,q)):function V(f){return(0,h.m)(f.on)&&(0,h.m)(f.off)}(f)?d.map(b(f,q)):[];if(!F&&(0,Q.z)(f))return(0,e.z)(H=>T(H,q,y))((0,S.Xf)(f));if(!F)throw new TypeError("Invalid event target");return new C.y(H=>{const j=(...I)=>H.next(1<I.length?I:I[0]);return F(j),()=>N(j)})}function b(f,q){return y=>x=>f[y](q,x)}},4999:(Y,L,l)=>{l.d(L,{b:()=>o});var S=l(4408);const e=new(l(7565).v)(S.o);var h=l(4482),v=l(5403);function o(a,d=e){return(0,h.e)((T,b)=>{let w=null,V=null,R=null;const f=()=>{if(w){w.unsubscribe(),w=null;const y=V;V=null,b.next(y)}};function q(){const y=R+a,x=d.now();if(x<y)return w=this.schedule(void 0,y-x),void b.add(w);f()}T.subscribe((0,v.x)(b,y=>{V=y,R=d.now(),w||(w=d.schedule(q,a),b.add(w))},()=>{f(),b.complete()},void 0,()=>{V=w=null}))})}},4408:(Y,L,l)=>{l.d(L,{o:()=>h});var S=l(727);class C extends S.w0{constructor(o,a){super()}schedule(o,a=0){return this}}const e={setInterval(v,o,...a){const{delegate:d}=e;return d?.setInterval?d.setInterval(v,o,...a):setInterval(v,o,...a)},clearInterval(v){const{delegate:o}=e;return(o?.clearInterval||clearInterval)(v)},delegate:void 0};var Q=l(8737);class h extends C{constructor(o,a){super(o,a),this.scheduler=o,this.work=a,this.pending=!1}schedule(o,a=0){var d;if(this.closed)return this;this.state=o;const T=this.id,b=this.scheduler;return null!=T&&(this.id=this.recycleAsyncId(b,T,a)),this.pending=!0,this.delay=a,this.id=null!==(d=this.id)&&void 0!==d?d:this.requestAsyncId(b,this.id,a),this}requestAsyncId(o,a,d=0){return e.setInterval(o.flush.bind(o,this),d)}recycleAsyncId(o,a,d=0){if(null!=d&&this.delay===d&&!1===this.pending)return a;null!=a&&e.clearInterval(a)}execute(o,a){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const d=this._execute(o,a);if(d)return d;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,a){let T,d=!1;try{this.work(o)}catch(b){d=!0,T=b||new Error("Scheduled action threw falsy error")}if(d)return this.unsubscribe(),T}unsubscribe(){if(!this.closed){const{id:o,scheduler:a}=this,{actions:d}=a;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Q.P)(d,this),null!=o&&(this.id=this.recycleAsyncId(a,o,null)),this.delay=null,super.unsubscribe()}}}},7565:(Y,L,l)=>{l.d(L,{v:()=>e});var S=l(6063);class C{constructor(h,v=C.now){this.schedulerActionCtor=h,this.now=v}schedule(h,v=0,o){return new this.schedulerActionCtor(this,h).schedule(o,v)}}C.now=S.l.now;class e extends C{constructor(h,v=C.now){super(h,v),this.actions=[],this._active=!1}flush(h){const{actions:v}=this;if(this._active)return void v.push(h);let o;this._active=!0;do{if(o=h.execute(h.state,h.delay))break}while(h=v.shift());if(this._active=!1,o){for(;h=v.shift();)h.unsubscribe();throw o}}}},5207:(Y,L,l)=>{l.d(L,{g6:()=>J,fi:()=>U});var S=l(5861),C=l(6895),e=l(4650),Q=l(1481),h=l(9770),v=l(727),o=l(4968),a=l(4707),d=l(3099),b=l(4999),w=l(433);function V(i,m){1&i&&e._UZ(0,"div",2)}function R(i,m){1&i&&e._UZ(0,"pre",2)}function f(i,m){if(1&i&&(e.ynx(0),e.YNc(1,V,1,0,"div",1),e.YNc(2,R,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}function q(i,m){1&i&&e._UZ(0,"div",2)}function y(i,m){1&i&&e._UZ(0,"pre",2)}function x(i,m){if(1&i&&(e.ynx(0),e.YNc(1,q,1,0,"div",1),e.YNc(2,y,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}const F=[[["","quill-editor-toolbar",""]]],N=["[quill-editor-toolbar]"],I={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},_=(i,m)=>i||m||"html",k=new e.OlP("config",{providedIn:"root",factory:()=>({modules:I})});let W=(()=>{class i{constructor(t,s){var n=this;this.config=s,this.quill$=(0,h.P)((0,S.Z)(function*(){if(!n.Quill){const r=n.document.addEventListener;n.document.addEventListener=n.document.__zone_symbol__addEventListener||n.document.addEventListener;const u=yield l.e(971).then(l.t.bind(l,9971,19));n.document.addEventListener=r,n.Quill=u.default?u.default:u}return n.config.customOptions?.forEach(r=>{const u=n.Quill.import(r.import);u.whitelist=r.whitelist,n.Quill.register(u,!0,n.config.suppressGlobalRegisterWarning)}),n.config.customModules?.forEach(({implementation:r,path:u})=>{n.Quill.register(u,r,n.config.suppressGlobalRegisterWarning)}),n.Quill})).pipe(function T(i,m,t){let s,n=!1;return i&&"object"==typeof i?({bufferSize:s=1/0,windowTime:m=1/0,refCount:n=!1,scheduler:t}=i):s=i??1/0,(0,d.B)({connector:()=>new a.t(s,m,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:n})}({bufferSize:1,refCount:!0})),this.document=t.get(C.K0),this.config||(this.config={modules:I})}getQuill(){return this.quill$}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.zs3),e.LFG(k,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),G=(()=>{class i{constructor(t,s,n,r,u,O,M,z){this.elementRef=s,this.cd=n,this.domSanitizer=r,this.platformId=u,this.renderer=O,this.zone=M,this.service=z,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new e.vpe,this.onEditorChanged=new e.vpe,this.onContentChanged=new e.vpe,this.onSelectionChanged=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(E,g)=>{let c=g.querySelector(".ql-editor").innerHTML;("<p><br></p>"===c||"<div><br></div>"===c)&&(c=this.defaultEmptyValue);let p=c;const A=_(this.format,this.service.config.format);if("text"===A)p=E.getText();else if("object"===A)p=E.getContents();else if("json"===A)try{p=JSON.stringify(E.getContents())}catch{p=E.getText()}return p},this.valueSetter=(E,g)=>{const c=_(this.format,this.service.config.format);if("html"===c)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(g=this.domSanitizer.sanitize(e.q3G.HTML,g)),E.clipboard.convert(g);if("json"===c)try{return JSON.parse(g)}catch{return[{insert:g}]}return g},this.selectionChangeHandler=(E,g,c)=>{const p=!E&&!!this.onModelTouched;!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!p||this.zone.run(()=>{null===E?this.onBlur.emit({editor:this.quillEditor,source:c}):null===g&&this.onFocus.emit({editor:this.quillEditor,source:c}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:g,range:E,source:c}),p&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(E,g,c)=>{const p=this.quillEditor.getText(),A=this.quillEditor.getContents();let P=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===P||"<div><br></div>"===P)&&(P=this.defaultEmptyValue);const D=this.trackChanges||this.service.config.trackChanges,B=("user"===c||D&&"all"===D)&&!!this.onModelChange;!this.onContentChanged.observed&&!B||this.zone.run(()=>{B&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:A,delta:E,editor:this.quillEditor,html:P,oldDelta:g,source:c,text:p}),this.cd.markForCheck()})},this.editorChangeHandler=(E,g,c,p)=>{if(this.onEditorChanged.observed)if("text-change"===E){const A=this.quillEditor.getText(),P=this.quillEditor.getContents();let D=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===D||"<div><br></div>"===D)&&(D=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:P,delta:g,editor:this.quillEditor,event:E,html:D,oldDelta:c,source:p,text:A}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:E,oldRange:c,range:g,source:p}),this.cd.markForCheck()})},this.document=t.get(C.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((n,r)=>{const u=r.trim();return u&&n.push(u),n},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,C.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const s=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),n=Object.assign({},this.modules||this.service.config.modules);s?n.toolbar=s:void 0===n.toolbar&&(n.toolbar=I.toolbar);let r=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===r&&(r="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(c=>{this.renderer.setStyle(this.editorElem,c,this.styles[c])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(c=>{const p=t.import(c.import);p.whitelist=c.whitelist,t.register(p,!0)}),this.customModules.forEach(({implementation:c,path:p})=>{t.register(p,c)});let u=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;u||(u=this.service.config.bounds?this.service.config.bounds:this.document.body);let O=this.debug;!O&&!1!==O&&this.service.config.debug&&(O=this.service.config.debug);let M=this.readOnly;!M&&!1!==this.readOnly&&(M=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let z=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(z=this.service.config.defaultEmptyValue);let E=this.scrollingContainer;!E&&null!==this.scrollingContainer&&(E=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let g=this.formats;if(!g&&void 0===g&&(g=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:u,debug:O,formats:g,modules:n,placeholder:r,readOnly:M,defaultEmptyValue:z,scrollingContainer:E,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const p=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");p?.dataset&&(p.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===_(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const p=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(p,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observed||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const s=t.styles.currentValue,n=t.styles.previousValue;n&&Object.keys(n).forEach(r=>{this.renderer.removeStyle(this.editorElem,r)}),s&&Object.keys(s).forEach(r=>{this.renderer.setStyle(this.editorElem,r,this.styles[r])})}if(t.classes){const s=t.classes.currentValue,n=t.classes.previousValue;n&&this.removeClasses(n),s&&this.addClasses(s)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){i.normalizeClassNames(t).forEach(s=>{this.renderer.addClass(this.editorElem,s)})}removeClasses(t){i.normalizeClassNames(t).forEach(s=>{this.renderer.removeClass(this.editorElem,s)})}writeValue(t){if(this.filterNull&&null===t||(this.content=t,!this.quillEditor))return;const s=_(this.format,this.service.config.format),n=this.valueSetter(this.quillEditor,t);if(this.compareValues){const r=this.quillEditor.getContents();if(JSON.stringify(r)===JSON.stringify(n))return}t?"text"===s?this.quillEditor.setText(t):this.quillEditor.setContents(n):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let s=!0;const n=this.quillEditor.getText(),r=this.trimOnValidation?n.trim().length:1===n.length&&0===n.trim().length?0:n.length-1,u=this.quillEditor.getContents().ops,O=u&&1===u.length&&["\n",""].includes(u[0].insert);return this.minLength&&r&&r<this.minLength&&(t.minLengthError={given:r,minLength:this.minLength},s=!1),this.maxLength&&r>this.maxLength&&(t.maxLengthError={given:r,maxLength:this.maxLength},s=!1),this.required&&!r&&O&&(t.requiredError={empty:!0},s=!1),s?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new v.w0,this.subscription.add((0,o.R)(this.quillEditor,"selection-change").subscribe(([n,r,u])=>{this.selectionChangeHandler(n,r,u)}));let t=(0,o.R)(this.quillEditor,"text-change"),s=(0,o.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe((0,b.b)(this.debounceTime)),s=s.pipe((0,b.b)(this.debounceTime))),this.subscription.add(t.subscribe(([n,r,u])=>{this.textChangeHandler(n,r,u)})),this.subscription.add(s.subscribe(([n,r,u,O])=>{this.editorChangeHandler(n,r,u,O)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(Q.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(W))},i.\u0275dir=e.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[e.TTD]}),i})(),J=(()=>{class i extends G{constructor(t,s,n,r,u,O,M,z){super(t,s,n,r,u,O,M,z)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(Q.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(W))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-editor"]],features:[e._Bn([{multi:!0,provide:w.JU,useExisting:(0,e.Gpc)(()=>i)},{multi:!0,provide:w.Cf,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj],ngContentSelectors:N,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(t,s){1&t&&(e.F$t(F),e.YNc(0,f,3,2,"ng-container",0),e.Hsn(1),e.YNc(2,x,3,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","top"!==s.toolbarPosition),e.xp6(2),e.Q6J("ngIf","top"===s.toolbarPosition))},dependencies:[C.O5],styles:[":host{display:inline-block}\n"],encapsulation:2}),i})(),U=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:k,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[C.ez]}),i})()}}]);