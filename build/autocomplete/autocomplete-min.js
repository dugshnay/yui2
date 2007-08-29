YAHOO.widget.AutoComplete=function(w,e,K,Z){if(w&&e&&K){if(K instanceof YAHOO.widget.DataSource){this.dataSource=K;}else{return ;}if(YAHOO.util.Dom.inDocument(w)){if(YAHOO.lang.isString(w)){this._sName="instance"+YAHOO.widget.AutoComplete._nIndex+" "+w;this._oTextbox=document.getElementById(w);}else{this._sName=(w.id)?"instance"+YAHOO.widget.AutoComplete._nIndex+" "+w.id:"instance"+YAHOO.widget.AutoComplete._nIndex;this._oTextbox=w;}YAHOO.util.Dom.addClass(this._oTextbox,"yui-ac-input");}else{return ;}if(YAHOO.util.Dom.inDocument(e)){if(YAHOO.lang.isString(e)){this._oContainer=document.getElementById(e);}else{this._oContainer=e;}if(this._oContainer.style.display=="none"){}var c=this._oContainer.parentNode;var g=c.tagName.toLowerCase();if(g=="div"){YAHOO.util.Dom.addClass(c,"yui-ac");}else{}}else{return ;}if(Z&&(Z.constructor==Object)){for(var D in Z){if(D){this[D]=Z[D];}}}this._initContainer();this._initProps();this._initList();this._initContainerHelpers();var N=this;var W=this._oTextbox;var X=this._oContainer._oContent;YAHOO.util.Event.addListener(W,"keyup",N._onTextboxKeyUp,N);YAHOO.util.Event.addListener(W,"keydown",N._onTextboxKeyDown,N);YAHOO.util.Event.addListener(W,"focus",N._onTextboxFocus,N);YAHOO.util.Event.addListener(W,"blur",N._onTextboxBlur,N);YAHOO.util.Event.addListener(X,"mouseover",N._onContainerMouseover,N);YAHOO.util.Event.addListener(X,"mouseout",N._onContainerMouseout,N);YAHOO.util.Event.addListener(X,"scroll",N._onContainerScroll,N);YAHOO.util.Event.addListener(X,"resize",N._onContainerResize,N);if(W.form){YAHOO.util.Event.addListener(W.form,"submit",N._onFormSubmit,N);}YAHOO.util.Event.addListener(W,"keypress",N._onTextboxKeyPress,N);this.textboxFocusEvent=new YAHOO.util.CustomEvent("textboxFocus",this);this.textboxKeyEvent=new YAHOO.util.CustomEvent("textboxKey",this);this.dataRequestEvent=new YAHOO.util.CustomEvent("dataRequest",this);this.dataReturnEvent=new YAHOO.util.CustomEvent("dataReturn",this);this.dataErrorEvent=new YAHOO.util.CustomEvent("dataError",this);this.containerExpandEvent=new YAHOO.util.CustomEvent("containerExpand",this);this.typeAheadEvent=new YAHOO.util.CustomEvent("typeAhead",this);this.itemMouseOverEvent=new YAHOO.util.CustomEvent("itemMouseOver",this);this.itemMouseOutEvent=new YAHOO.util.CustomEvent("itemMouseOut",this);this.itemArrowToEvent=new YAHOO.util.CustomEvent("itemArrowTo",this);this.itemArrowFromEvent=new YAHOO.util.CustomEvent("itemArrowFrom",this);this.itemSelectEvent=new YAHOO.util.CustomEvent("itemSelect",this);this.unmatchedItemSelectEvent=new YAHOO.util.CustomEvent("unmatchedItemSelect",this);this.selectionEnforceEvent=new YAHOO.util.CustomEvent("selectionEnforce",this);this.containerCollapseEvent=new YAHOO.util.CustomEvent("containerCollapse",this);this.textboxBlurEvent=new YAHOO.util.CustomEvent("textboxBlur",this);W.setAttribute("autocomplete","off");YAHOO.widget.AutoComplete._nIndex++;}else{}};YAHOO.widget.AutoComplete.prototype.dataSource=null;YAHOO.widget.AutoComplete.prototype.minQueryLength=1;YAHOO.widget.AutoComplete.prototype.maxResultsDisplayed=10;YAHOO.widget.AutoComplete.prototype.queryDelay=0.2;YAHOO.widget.AutoComplete.prototype.highlightClassName="yui-ac-highlight";YAHOO.widget.AutoComplete.prototype.prehighlightClassName=null;YAHOO.widget.AutoComplete.prototype.delimChar=null;YAHOO.widget.AutoComplete.prototype.autoHighlight=true;YAHOO.widget.AutoComplete.prototype.typeAhead=false;YAHOO.widget.AutoComplete.prototype.animHoriz=false;YAHOO.widget.AutoComplete.prototype.animVert=true;YAHOO.widget.AutoComplete.prototype.animSpeed=0.3;YAHOO.widget.AutoComplete.prototype.forceSelection=false;YAHOO.widget.AutoComplete.prototype.allowBrowserAutocomplete=true;YAHOO.widget.AutoComplete.prototype.alwaysShowContainer=false;YAHOO.widget.AutoComplete.prototype.useIFrame=false;YAHOO.widget.AutoComplete.prototype.useShadow=false;YAHOO.widget.AutoComplete.prototype.toString=function(){return "AutoComplete "+this._sName;};YAHOO.widget.AutoComplete.prototype.isContainerOpen=function(){return this._bContainerOpen;};YAHOO.widget.AutoComplete.prototype.getListItems=function(){return this._aListItems;};YAHOO.widget.AutoComplete.prototype.getListItemData=function(g){if(g._oResultData){return g._oResultData;}else{return false;}};YAHOO.widget.AutoComplete.prototype.setHeader=function(g){if(g){if(this._oContainer._oContent._oHeader){this._oContainer._oContent._oHeader.innerHTML=g;this._oContainer._oContent._oHeader.style.display="block";}}else{this._oContainer._oContent._oHeader.innerHTML="";this._oContainer._oContent._oHeader.style.display="none";}};YAHOO.widget.AutoComplete.prototype.setFooter=function(g){if(g){if(this._oContainer._oContent._oFooter){this._oContainer._oContent._oFooter.innerHTML=g;this._oContainer._oContent._oFooter.style.display="block";}}else{this._oContainer._oContent._oFooter.innerHTML="";this._oContainer._oContent._oFooter.style.display="none";}};YAHOO.widget.AutoComplete.prototype.setBody=function(g){if(g){if(this._oContainer._oContent._oBody){this._oContainer._oContent._oBody.innerHTML=g;this._oContainer._oContent._oBody.style.display="block";this._oContainer._oContent.style.display="block";}}else{this._oContainer._oContent._oBody.innerHTML="";this._oContainer._oContent.style.display="none";}this._maxResultsDisplayed=0;};YAHOO.widget.AutoComplete.prototype.formatResult=function(e,X){var g=e[0];if(g){return g;}else{return "";}};YAHOO.widget.AutoComplete.prototype.doBeforeExpandContainer=function(g,e,Z,X){return true;};YAHOO.widget.AutoComplete.prototype.sendQuery=function(g){this._sendQuery(g);};YAHOO.widget.AutoComplete.prototype.doBeforeSendQuery=function(g){return g;};YAHOO.widget.AutoComplete.prototype.destroy=function(){var e=this.toString();var g=this._oTextbox;var Z=this._oContainer;this.textboxFocusEvent.unsubscribe();this.textboxKeyEvent.unsubscribe();this.dataRequestEvent.unsubscribe();this.dataReturnEvent.unsubscribe();this.dataErrorEvent.unsubscribe();this.containerExpandEvent.unsubscribe();this.typeAheadEvent.unsubscribe();this.itemMouseOverEvent.unsubscribe();this.itemMouseOutEvent.unsubscribe();this.itemArrowToEvent.unsubscribe();this.itemArrowFromEvent.unsubscribe();this.itemSelectEvent.unsubscribe();this.unmatchedItemSelectEvent.unsubscribe();this.selectionEnforceEvent.unsubscribe();this.containerCollapseEvent.unsubscribe();this.textboxBlurEvent.unsubscribe();YAHOO.util.Event.purgeElement(g,true);YAHOO.util.Event.purgeElement(Z,true);Z.innerHTML="";for(var X in this){if(YAHOO.lang.hasOwnProperty(this,X)){this[X]=null;}}};YAHOO.widget.AutoComplete.prototype.textboxFocusEvent=null;YAHOO.widget.AutoComplete.prototype.textboxKeyEvent=null;YAHOO.widget.AutoComplete.prototype.dataRequestEvent=null;YAHOO.widget.AutoComplete.prototype.dataReturnEvent=null;YAHOO.widget.AutoComplete.prototype.dataErrorEvent=null;YAHOO.widget.AutoComplete.prototype.containerExpandEvent=null;YAHOO.widget.AutoComplete.prototype.typeAheadEvent=null;YAHOO.widget.AutoComplete.prototype.itemMouseOverEvent=null;YAHOO.widget.AutoComplete.prototype.itemMouseOutEvent=null;YAHOO.widget.AutoComplete.prototype.itemArrowToEvent=null;YAHOO.widget.AutoComplete.prototype.itemArrowFromEvent=null;YAHOO.widget.AutoComplete.prototype.itemSelectEvent=null;YAHOO.widget.AutoComplete.prototype.unmatchedItemSelectEvent=null;YAHOO.widget.AutoComplete.prototype.selectionEnforceEvent=null;YAHOO.widget.AutoComplete.prototype.containerCollapseEvent=null;YAHOO.widget.AutoComplete.prototype.textboxBlurEvent=null;YAHOO.widget.AutoComplete._nIndex=0;YAHOO.widget.AutoComplete.prototype._sName=null;YAHOO.widget.AutoComplete.prototype._oTextbox=null;YAHOO.widget.AutoComplete.prototype._bFocused=true;YAHOO.widget.AutoComplete.prototype._oAnim=null;YAHOO.widget.AutoComplete.prototype._oContainer=null;YAHOO.widget.AutoComplete.prototype._bContainerOpen=false;YAHOO.widget.AutoComplete.prototype._bOverContainer=false;YAHOO.widget.AutoComplete.prototype._aListItems=null;YAHOO.widget.AutoComplete.prototype._nDisplayedItems=0;YAHOO.widget.AutoComplete.prototype._maxResultsDisplayed=0;YAHOO.widget.AutoComplete.prototype._sCurQuery=null;YAHOO.widget.AutoComplete.prototype._sSavedQuery=null;YAHOO.widget.AutoComplete.prototype._oCurItem=null;YAHOO.widget.AutoComplete.prototype._bItemSelected=false;YAHOO.widget.AutoComplete.prototype._nKeyCode=null;YAHOO.widget.AutoComplete.prototype._nDelayID=-1;YAHOO.widget.AutoComplete.prototype._iFrameSrc="javascript:false;";YAHOO.widget.AutoComplete.prototype._queryInterval=null;YAHOO.widget.AutoComplete.prototype._sLastTextboxValue=null;YAHOO.widget.AutoComplete.prototype._initProps=function(){var e=this.minQueryLength;if(!YAHOO.lang.isNumber(e)){this.minQueryLength=1;}var Z=this.maxResultsDisplayed;if(!YAHOO.lang.isNumber(Z)||(Z<1)){this.maxResultsDisplayed=10;}var c=this.queryDelay;if(!YAHOO.lang.isNumber(c)||(c<0)){this.queryDelay=0.2;}var g=this.delimChar;if(YAHOO.lang.isString(g)&&(g.length>0)){this.delimChar=[g];}else{if(!YAHOO.lang.isArray(g)){this.delimChar=null;}}var X=this.animSpeed;if((this.animHoriz||this.animVert)&&YAHOO.util.Anim){if(!YAHOO.lang.isNumber(X)||(X<0)){this.animSpeed=0.3;}if(!this._oAnim){this._oAnim=new YAHOO.util.Anim(this._oContainer._oContent,{},this.animSpeed);}else{this._oAnim.duration=this.animSpeed;}}if(this.forceSelection&&g){}};YAHOO.widget.AutoComplete.prototype._initContainerHelpers=function(){if(this.useShadow&&!this._oContainer._oShadow){var e=document.createElement("div");e.className="yui-ac-shadow";this._oContainer._oShadow=this._oContainer.appendChild(e);}if(this.useIFrame&&!this._oContainer._oIFrame){var g=document.createElement("iframe");g.src=this._iFrameSrc;g.frameBorder=0;g.scrolling="no";g.style.position="absolute";g.style.width="100%";g.style.height="100%";g.tabIndex=-1;this._oContainer._oIFrame=this._oContainer.appendChild(g);}};YAHOO.widget.AutoComplete.prototype._initContainer=function(){YAHOO.util.Dom.addClass(this._oContainer,"yui-ac-container");if(!this._oContainer._oContent){var Z=document.createElement("div");Z.className="yui-ac-content";Z.style.display="none";this._oContainer._oContent=this._oContainer.appendChild(Z);var e=document.createElement("div");e.className="yui-ac-hd";e.style.display="none";this._oContainer._oContent._oHeader=this._oContainer._oContent.appendChild(e);var X=document.createElement("div");X.className="yui-ac-bd";this._oContainer._oContent._oBody=this._oContainer._oContent.appendChild(X);var g=document.createElement("div");g.className="yui-ac-ft";g.style.display="none";this._oContainer._oContent._oFooter=this._oContainer._oContent.appendChild(g);}else{}};YAHOO.widget.AutoComplete.prototype._initList=function(){this._aListItems=[];while(this._oContainer._oContent._oBody.hasChildNodes()){var e=this.getListItems();if(e){for(var g=e.length-1;g>=0;g--){e[g]=null;}}this._oContainer._oContent._oBody.innerHTML="";}var c=document.createElement("ul");c=this._oContainer._oContent._oBody.appendChild(c);for(var X=0;X<this.maxResultsDisplayed;X++){var Z=document.createElement("li");Z=c.appendChild(Z);this._aListItems[X]=Z;this._initListItem(Z,X);}this._maxResultsDisplayed=this.maxResultsDisplayed;};YAHOO.widget.AutoComplete.prototype._initListItem=function(X,e){var g=this;X.style.display="none";X._nItemIndex=e;X.mouseover=X.mouseout=X.onclick=null;YAHOO.util.Event.addListener(X,"mouseover",g._onItemMouseover,g);YAHOO.util.Event.addListener(X,"mouseout",g._onItemMouseout,g);YAHOO.util.Event.addListener(X,"click",g._onItemMouseclick,g);};YAHOO.widget.AutoComplete.prototype._onIMEDetected=function(g){g._enableIntervalDetection();};YAHOO.widget.AutoComplete.prototype._enableIntervalDetection=function(){var g=this._oTextbox.value;var e=this._sLastTextboxValue;if(g!=e){this._sLastTextboxValue=g;this._sendQuery(g);}};YAHOO.widget.AutoComplete.prototype._cancelIntervalDetection=function(g){if(g._queryInterval){clearInterval(g._queryInterval);}};YAHOO.widget.AutoComplete.prototype._isIgnoreKey=function(g){if((g==9)||(g==13)||(g==16)||(g==17)||(g>=18&&g<=20)||(g==27)||(g>=33&&g<=35)||(g>=36&&g<=40)||(g>=44&&g<=45)){return true;}return false;};YAHOO.widget.AutoComplete.prototype._sendQuery=function(w){if(this.minQueryLength==-1){this._toggleContainer(false);return ;}var X=(this.delimChar)?this.delimChar:null;if(X){var c=-1;for(var e=X.length-1;e>=0;e--){var W=w.lastIndexOf(X[e]);if(W>c){c=W;}}if(X[e]==" "){for(var g=X.length-1;g>=0;g--){if(w[c-1]==X[g]){c--;break;}}}if(c>-1){var Z=c+1;while(w.charAt(Z)==" "){Z+=1;}this._sSavedQuery=w.substring(0,Z);w=w.substr(Z);}else{if(w.indexOf(this._sSavedQuery)<0){this._sSavedQuery=null;}}}if((w&&(w.length<this.minQueryLength))||(!w&&this.minQueryLength>0)){if(this._nDelayID!=-1){clearTimeout(this._nDelayID);}this._toggleContainer(false);return ;}w=encodeURIComponent(w);this._nDelayID=-1;w=this.doBeforeSendQuery(w);this.dataRequestEvent.fire(this,w);this.dataSource.getResults(this._populateList,w,this);};YAHOO.widget.AutoComplete.prototype._populateList=function(E,Q,D){if(Q===null){D.dataErrorEvent.fire(D,E);}if(!D._bFocused||!Q){return ;}var g=(navigator.userAgent.toLowerCase().indexOf("opera")!=-1);var U=D._oContainer._oContent.style;U.width=(!g)?null:"";U.height=(!g)?null:"";var N=decodeURIComponent(E);D._sCurQuery=N;D._bItemSelected=false;if(D._maxResultsDisplayed!=D.maxResultsDisplayed){D._initList();}var X=Math.min(Q.length,D.maxResultsDisplayed);D._nDisplayedItems=X;if(X>0){D._initContainerHelpers();var Z=D._aListItems;for(var w=X-1;w>=0;w--){var I=Z[w];var e=Q[w];I.innerHTML=D.formatResult(e,N);I.style.display="list-item";I._sResultKey=e[0];I._oResultData=e;}for(var W=Z.length-1;W>=X;W--){var B=Z[W];B.innerHTML=null;B.style.display="none";B._sResultKey=null;B._oResultData=null;}var K=D.doBeforeExpandContainer(D._oTextbox,D._oContainer,E,Q);D._toggleContainer(K);if(D.autoHighlight){var c=Z[0];D._toggleHighlight(c,"to");D.itemArrowToEvent.fire(D,c);D._typeAhead(c,E);}else{D._oCurItem=null;}}else{D._toggleContainer(false);}D.dataReturnEvent.fire(D,E,Q);};YAHOO.widget.AutoComplete.prototype._clearSelection=function(){var X=this._oTextbox.value;var e=(this.delimChar)?this.delimChar[0]:null;var g=(e)?X.lastIndexOf(e,X.length-2):-1;if(g>-1){this._oTextbox.value=X.substring(0,g);}else{this._oTextbox.value="";}this._sSavedQuery=this._oTextbox.value;this.selectionEnforceEvent.fire(this);};YAHOO.widget.AutoComplete.prototype._textMatchesOption=function(){var Z=null;for(var g=this._nDisplayedItems-1;g>=0;g--){var X=this._aListItems[g];var e=X._sResultKey.toLowerCase();if(e==this._sCurQuery.toLowerCase()){Z=X;break;}}return (Z);};YAHOO.widget.AutoComplete.prototype._typeAhead=function(c,w){if(!this.typeAhead||(this._nKeyCode==8)){return ;}var e=this._oTextbox;var W=this._oTextbox.value;if(!e.setSelectionRange&&!e.createTextRange){return ;}var X=W.length;this._updateValue(c);var Z=e.value.length;this._selectText(e,X,Z);var g=e.value.substr(X,Z);this.typeAheadEvent.fire(this,w,g);};YAHOO.widget.AutoComplete.prototype._selectText=function(g,e,X){if(g.setSelectionRange){g.setSelectionRange(e,X);}else{if(g.createTextRange){var Z=g.createTextRange();Z.moveStart("character",e);Z.moveEnd("character",X-g.value.length);Z.select();}else{g.select();}}};YAHOO.widget.AutoComplete.prototype._toggleContainerHelpers=function(e){var Z=false;var X=this._oContainer._oContent.offsetWidth+"px";var g=this._oContainer._oContent.offsetHeight+"px";if(this.useIFrame&&this._oContainer._oIFrame){Z=true;if(e){this._oContainer._oIFrame.style.width=X;this._oContainer._oIFrame.style.height=g;}else{this._oContainer._oIFrame.style.width=0;this._oContainer._oIFrame.style.height=0;}}if(this.useShadow&&this._oContainer._oShadow){Z=true;if(e){this._oContainer._oShadow.style.width=X;this._oContainer._oShadow.style.height=g;}else{this._oContainer._oShadow.style.width=0;this._oContainer._oShadow.style.height=0;}}};YAHOO.widget.AutoComplete.prototype._toggleContainer=function(K){var Q=this._oContainer;if(this.alwaysShowContainer&&this._bContainerOpen){return ;}if(!K){this._oContainer._oContent.scrollTop=0;var X=this._aListItems;if(X&&(X.length>0)){for(var w=X.length-1;w>=0;w--){X[w].style.display="none";}}if(this._oCurItem){this._toggleHighlight(this._oCurItem,"from");}this._oCurItem=null;this._nDisplayedItems=0;this._sCurQuery=null;}if(!K&&!this._bContainerOpen){Q._oContent.style.display="none";return ;}var e=this._oAnim;if(e&&e.getEl()&&(this.animHoriz||this.animVert)){if(!K){this._toggleContainerHelpers(K);}if(e.isAnimated()){e.stop();}var N=Q._oContent.cloneNode(true);Q.appendChild(N);N.style.top="-9000px";N.style.display="block";var W=N.offsetWidth;var Z=N.offsetHeight;var g=(this.animHoriz)?0:W;var c=(this.animVert)?0:Z;e.attributes=(K)?{width:{to:W},height:{to:Z}}:{width:{to:g},height:{to:c}};if(K&&!this._bContainerOpen){Q._oContent.style.width=g+"px";Q._oContent.style.height=c+"px";}else{Q._oContent.style.width=W+"px";Q._oContent.style.height=Z+"px";}Q.removeChild(N);N=null;var D=this;var E=function(){e.onComplete.unsubscribeAll();if(K){D.containerExpandEvent.fire(D);}else{Q._oContent.style.display="none";D.containerCollapseEvent.fire(D);}D._toggleContainerHelpers(K);};Q._oContent.style.display="block";e.onComplete.subscribe(E);e.animate();this._bContainerOpen=K;}else{if(K){Q._oContent.style.display="block";this.containerExpandEvent.fire(this);}else{Q._oContent.style.display="none";this.containerCollapseEvent.fire(this);}this._toggleContainerHelpers(K);this._bContainerOpen=K;}};YAHOO.widget.AutoComplete.prototype._toggleHighlight=function(g,X){var e=this.highlightClassName;if(this._oCurItem){YAHOO.util.Dom.removeClass(this._oCurItem,e);}if((X=="to")&&e){YAHOO.util.Dom.addClass(g,e);this._oCurItem=g;}};YAHOO.widget.AutoComplete.prototype._togglePrehighlight=function(g,X){if(g==this._oCurItem){return ;}var e=this.prehighlightClassName;if((X=="mouseover")&&e){YAHOO.util.Dom.addClass(g,e);}else{YAHOO.util.Dom.removeClass(g,e);}};YAHOO.widget.AutoComplete.prototype._updateValue=function(W){var X=this._oTextbox;var c=(this.delimChar)?(this.delimChar[0]||this.delimChar):null;var e=this._sSavedQuery;var Z=W._sResultKey;X.focus();X.value="";if(c){if(e){X.value=e;}X.value+=Z+c;if(c!=" "){X.value+=" ";}}else{X.value=Z;}if(X.type=="textarea"){X.scrollTop=X.scrollHeight;}var g=X.value.length;this._selectText(X,g,g);this._oCurItem=W;};YAHOO.widget.AutoComplete.prototype._selectItem=function(g){this._bItemSelected=true;this._updateValue(g);this._cancelIntervalDetection(this);this.itemSelectEvent.fire(this,g,g._oResultData);this._toggleContainer(false);};YAHOO.widget.AutoComplete.prototype._jumpSelection=function(){if(this._oCurItem){this._selectItem(this._oCurItem);}else{this._toggleContainer(false);}};YAHOO.widget.AutoComplete.prototype._moveSelection=function(w){if(this._bContainerOpen){var Z=this._oCurItem;var W=-1;if(Z){W=Z._nItemIndex;}var X=(w==40)?(W+1):(W-1);if(X<-2||X>=this._nDisplayedItems){return ;}if(Z){this._toggleHighlight(Z,"from");this.itemArrowFromEvent.fire(this,Z);}if(X==-1){if(this.delimChar&&this._sSavedQuery){if(!this._textMatchesOption()){this._oTextbox.value=this._sSavedQuery;}else{this._oTextbox.value=this._sSavedQuery+this._sCurQuery;}}else{this._oTextbox.value=this._sCurQuery;}this._oCurItem=null;return ;}if(X==-2){this._toggleContainer(false);return ;}var e=this._aListItems[X];var c=this._oContainer._oContent;var g=((YAHOO.util.Dom.getStyle(c,"overflow")=="auto")||(YAHOO.util.Dom.getStyle(c,"overflowY")=="auto"));if(g&&(X>-1)&&(X<this._nDisplayedItems)){if(w==40){if((e.offsetTop+e.offsetHeight)>(c.scrollTop+c.offsetHeight)){c.scrollTop=(e.offsetTop+e.offsetHeight)-c.offsetHeight;}else{if((e.offsetTop+e.offsetHeight)<c.scrollTop){c.scrollTop=e.offsetTop;}}}else{if(e.offsetTop<c.scrollTop){this._oContainer._oContent.scrollTop=e.offsetTop;}else{if(e.offsetTop>(c.scrollTop+c.offsetHeight)){this._oContainer._oContent.scrollTop=(e.offsetTop+e.offsetHeight)-c.offsetHeight;}}}}this._toggleHighlight(e,"to");this.itemArrowToEvent.fire(this,e);if(this.typeAhead){this._updateValue(e);}}};YAHOO.widget.AutoComplete.prototype._onItemMouseover=function(g,e){if(e.prehighlightClassName){e._togglePrehighlight(this,"mouseover");}else{e._toggleHighlight(this,"to");}e.itemMouseOverEvent.fire(e,this);};YAHOO.widget.AutoComplete.prototype._onItemMouseout=function(g,e){if(e.prehighlightClassName){e._togglePrehighlight(this,"mouseout");}else{e._toggleHighlight(this,"from");}e.itemMouseOutEvent.fire(e,this);};YAHOO.widget.AutoComplete.prototype._onItemMouseclick=function(g,e){e._toggleHighlight(this,"to");e._selectItem(this);};YAHOO.widget.AutoComplete.prototype._onContainerMouseover=function(g,e){e._bOverContainer=true;};YAHOO.widget.AutoComplete.prototype._onContainerMouseout=function(g,e){e._bOverContainer=false;if(e._oCurItem){e._toggleHighlight(e._oCurItem,"to");}};YAHOO.widget.AutoComplete.prototype._onContainerScroll=function(g,e){e._oTextbox.focus();};YAHOO.widget.AutoComplete.prototype._onContainerResize=function(g,e){e._toggleContainerHelpers(e._bContainerOpen);};YAHOO.widget.AutoComplete.prototype._onTextboxKeyDown=function(g,e){var X=g.keyCode;switch(X){case 9:if(e._oCurItem){if(e.delimChar&&(e._nKeyCode!=X)){if(e._bContainerOpen){YAHOO.util.Event.stopEvent(g);}}e._selectItem(e._oCurItem);}else{e._toggleContainer(false);}break;case 13:if(e._oCurItem){if(e._nKeyCode!=X){if(e._bContainerOpen){YAHOO.util.Event.stopEvent(g);}}e._selectItem(e._oCurItem);}else{e._toggleContainer(false);}break;case 27:e._toggleContainer(false);return ;case 39:e._jumpSelection();break;case 38:YAHOO.util.Event.stopEvent(g);e._moveSelection(X);break;case 40:YAHOO.util.Event.stopEvent(g);e._moveSelection(X);break;default:break;}};YAHOO.widget.AutoComplete.prototype._onTextboxKeyPress=function(g,X){var Z=g.keyCode;var e=(navigator.userAgent.toLowerCase().indexOf("mac")!=-1);if(e){switch(Z){case 9:if(X._oCurItem){if(X.delimChar&&(X._nKeyCode!=Z)){YAHOO.util.Event.stopEvent(g);}}break;case 13:if(X._oCurItem){if(X._nKeyCode!=Z){if(X._bContainerOpen){YAHOO.util.Event.stopEvent(g);}}}break;case 38:case 40:YAHOO.util.Event.stopEvent(g);break;default:break;}}else{if(Z==229){X._queryInterval=setInterval(function(){X._onIMEDetected(X);},500);}}};YAHOO.widget.AutoComplete.prototype._onTextboxKeyUp=function(e,Z){Z._initProps();var c=e.keyCode;Z._nKeyCode=c;var X=this.value;if(Z._isIgnoreKey(c)||(X.toLowerCase()==Z._sCurQuery)){return ;}else{Z._bItemSelected=false;YAHOO.util.Dom.removeClass(Z._oCurItem,Z.highlightClassName);Z._oCurItem=null;Z.textboxKeyEvent.fire(Z,c);}if(Z.queryDelay>0){var g=setTimeout(function(){Z._sendQuery(X);},(Z.queryDelay*1000));if(Z._nDelayID!=-1){clearTimeout(Z._nDelayID);}Z._nDelayID=g;}else{Z._sendQuery(X);}};YAHOO.widget.AutoComplete.prototype._onTextboxFocus=function(g,e){e._oTextbox.setAttribute("autocomplete","off");e._bFocused=true;if(!e._bItemSelected){e.textboxFocusEvent.fire(e);}};YAHOO.widget.AutoComplete.prototype._onTextboxBlur=function(g,e){if(!e._bOverContainer||(e._nKeyCode==9)){if(!e._bItemSelected){var X=e._textMatchesOption();if(!e._bContainerOpen||(e._bContainerOpen&&(X===null))){if(e.forceSelection){e._clearSelection();}else{e.unmatchedItemSelectEvent.fire(e);}}else{if(e.forceSelection){e._selectItem(X);}}}if(e._bContainerOpen){e._toggleContainer(false);}e._cancelIntervalDetection(e);e._bFocused=false;e.textboxBlurEvent.fire(e);}};YAHOO.widget.AutoComplete.prototype._onFormSubmit=function(g,e){if(e.allowBrowserAutocomplete){e._oTextbox.setAttribute("autocomplete","on");}else{e._oTextbox.setAttribute("autocomplete","off");}};YAHOO.widget.DataSource=function(){};YAHOO.widget.DataSource.ERROR_DATANULL="Response data was null";YAHOO.widget.DataSource.ERROR_DATAPARSE="Response data could not be parsed";YAHOO.widget.DataSource.prototype.maxCacheEntries=15;YAHOO.widget.DataSource.prototype.queryMatchContains=false;YAHOO.widget.DataSource.prototype.queryMatchSubset=false;YAHOO.widget.DataSource.prototype.queryMatchCase=false;YAHOO.widget.DataSource.prototype.toString=function(){return "DataSource "+this._sName;};YAHOO.widget.DataSource.prototype.getResults=function(g,Z,e){var X=this._doQueryCache(g,Z,e);if(X.length===0){this.queryEvent.fire(this,e,Z);this.doQuery(g,Z,e);}};YAHOO.widget.DataSource.prototype.doQuery=function(g,X,e){};YAHOO.widget.DataSource.prototype.flushCache=function(){if(this._aCache){this._aCache=[];}if(this._aCacheHelper){this._aCacheHelper=[];}this.cacheFlushEvent.fire(this);};YAHOO.widget.DataSource.prototype.queryEvent=null;YAHOO.widget.DataSource.prototype.cacheQueryEvent=null;YAHOO.widget.DataSource.prototype.getResultsEvent=null;YAHOO.widget.DataSource.prototype.getCachedResultsEvent=null;YAHOO.widget.DataSource.prototype.dataErrorEvent=null;YAHOO.widget.DataSource.prototype.cacheFlushEvent=null;YAHOO.widget.DataSource._nIndex=0;YAHOO.widget.DataSource.prototype._sName=null;YAHOO.widget.DataSource.prototype._aCache=null;YAHOO.widget.DataSource.prototype._init=function(){var g=this.maxCacheEntries;if(!YAHOO.lang.isNumber(g)||(g<0)){g=0;}if(g>0&&!this._aCache){this._aCache=[];}this._sName="instance"+YAHOO.widget.DataSource._nIndex;YAHOO.widget.DataSource._nIndex++;this.queryEvent=new YAHOO.util.CustomEvent("query",this);this.cacheQueryEvent=new YAHOO.util.CustomEvent("cacheQuery",this);this.getResultsEvent=new YAHOO.util.CustomEvent("getResults",this);this.getCachedResultsEvent=new YAHOO.util.CustomEvent("getCachedResults",this);this.dataErrorEvent=new YAHOO.util.CustomEvent("dataError",this);this.cacheFlushEvent=new YAHOO.util.CustomEvent("cacheFlush",this);};YAHOO.widget.DataSource.prototype._addCacheElem=function(e){var g=this._aCache;if(!g||!e||!e.query||!e.results){return ;}if(g.length>=this.maxCacheEntries){g.shift();}g.push(e);};YAHOO.widget.DataSource.prototype._doQueryCache=function(g,D,I){var N=[];var w=false;var K=this._aCache;var W=(K)?K.length:0;var E=this.queryMatchContains;var Z;if((this.maxCacheEntries>0)&&K&&(W>0)){this.cacheQueryEvent.fire(this,I,D);if(!this.queryMatchCase){Z=D;D=D.toLowerCase();}for(var f=W-1;f>=0;f--){var c=K[f];var e=c.results;var X=(!this.queryMatchCase)?encodeURIComponent(c.query).toLowerCase():encodeURIComponent(c.query);if(X==D){w=true;N=e;if(f!=W-1){K.splice(f,1);this._addCacheElem(c);}break;}else{if(this.queryMatchSubset){for(var U=D.length-1;U>=0;U--){var A=D.substr(0,U);if(X==A){w=true;for(var B=e.length-1;B>=0;B--){var t=e[B];var Q=(this.queryMatchCase)?encodeURIComponent(t[0]).indexOf(D):encodeURIComponent(t[0]).toLowerCase().indexOf(D);if((!E&&(Q===0))||(E&&(Q>-1))){N.unshift(t);}}c={};c.query=D;c.results=N;this._addCacheElem(c);break;}}if(w){break;}}}}if(w){this.getCachedResultsEvent.fire(this,I,Z,N);g(Z,N,I);}}return N;};YAHOO.widget.DS_XHR=function(X,g,Z){if(Z&&(Z.constructor==Object)){for(var e in Z){this[e]=Z[e];}}if(!YAHOO.lang.isArray(g)||!YAHOO.lang.isString(X)){return ;}this.schema=g;this.scriptURI=X;this._init();};YAHOO.widget.DS_XHR.prototype=new YAHOO.widget.DataSource();YAHOO.widget.DS_XHR.TYPE_JSON=0;YAHOO.widget.DS_XHR.TYPE_XML=1;YAHOO.widget.DS_XHR.TYPE_FLAT=2;YAHOO.widget.DS_XHR.ERROR_DATAXHR="XHR response failed";YAHOO.widget.DS_XHR.prototype.connMgr=YAHOO.util.Connect;YAHOO.widget.DS_XHR.prototype.connTimeout=0;YAHOO.widget.DS_XHR.prototype.scriptURI=null;YAHOO.widget.DS_XHR.prototype.scriptQueryParam="query";YAHOO.widget.DS_XHR.prototype.scriptQueryAppend="";YAHOO.widget.DS_XHR.prototype.responseType=YAHOO.widget.DS_XHR.TYPE_JSON;YAHOO.widget.DS_XHR.prototype.responseStripAfter="\n<!-";YAHOO.widget.DS_XHR.prototype.doQuery=function(c,w,e){var K=(this.responseType==YAHOO.widget.DS_XHR.TYPE_XML);var Z=this.scriptURI+"?"+this.scriptQueryParam+"="+w;if(this.scriptQueryAppend.length>0){Z+="&"+this.scriptQueryAppend;}var X=null;var W=this;var D=function(E){if(!W._oConn||(E.tId!=W._oConn.tId)){W.dataErrorEvent.fire(W,e,w,YAHOO.widget.DataSource.ERROR_DATANULL);return ;}for(var I in E){}if(!K){E=E.responseText;}else{E=E.responseXML;}if(E===null){W.dataErrorEvent.fire(W,e,w,YAHOO.widget.DataSource.ERROR_DATANULL);return ;}var B=W.parseResponse(w,E,e);var Q={};Q.query=decodeURIComponent(w);Q.results=B;if(B===null){W.dataErrorEvent.fire(W,e,w,YAHOO.widget.DataSource.ERROR_DATAPARSE);B=[];}else{W.getResultsEvent.fire(W,e,w,B);W._addCacheElem(Q);}c(w,B,e);};var g=function(E){W.dataErrorEvent.fire(W,e,w,YAHOO.widget.DS_XHR.ERROR_DATAXHR);return ;};var N={success:D,failure:g};if(YAHOO.lang.isNumber(this.connTimeout)&&(this.connTimeout>0)){N.timeout=this.connTimeout;}if(this._oConn){this.connMgr.abort(this._oConn);}W._oConn=this.connMgr.asyncRequest("GET",Z,N,null);};YAHOO.widget.DS_XHR.prototype.parseResponse=function(sQuery,oResponse,oParent){var aSchema=this.schema;var aResults=[];var bError=false;var nEnd=((this.responseStripAfter!=="")&&(oResponse.indexOf))?oResponse.indexOf(this.responseStripAfter):-1;if(nEnd!=-1){oResponse=oResponse.substring(0,nEnd);}switch(this.responseType){case YAHOO.widget.DS_XHR.TYPE_JSON:var jsonList,jsonObjParsed;var isNotMac=(navigator.userAgent.toLowerCase().indexOf("khtml")==-1);if(oResponse.parseJSON&&isNotMac){jsonObjParsed=oResponse.parseJSON();if(!jsonObjParsed){bError=true;}else{try{jsonList=eval("jsonObjParsed."+aSchema[0]);}catch(e){bError=true;break;}}}else{if(window.JSON&&isNotMac){jsonObjParsed=JSON.parse(oResponse);if(!jsonObjParsed){bError=true;break;}else{try{jsonList=eval("jsonObjParsed."+aSchema[0]);}catch(e){bError=true;break;}}}else{try{while(oResponse.substring(0,1)==" "){oResponse=oResponse.substring(1,oResponse.length);}if(oResponse.indexOf("{")<0){bError=true;break;}if(oResponse.indexOf("{}")===0){break;}var jsonObjRaw=eval("("+oResponse+")");if(!jsonObjRaw){bError=true;break;}jsonList=eval("(jsonObjRaw."+aSchema[0]+")");}catch(e){bError=true;break;}}}if(!jsonList){bError=true;break;}if(!YAHOO.lang.isArray(jsonList)){jsonList=[jsonList];}for(var i=jsonList.length-1;i>=0;i--){var aResultItem=[];var jsonResult=jsonList[i];for(var j=aSchema.length-1;j>=1;j--){var dataFieldValue=jsonResult[aSchema[j]];if(!dataFieldValue){dataFieldValue="";}aResultItem.unshift(dataFieldValue);}if(aResultItem.length==1){aResultItem.push(jsonResult);}aResults.unshift(aResultItem);}break;case YAHOO.widget.DS_XHR.TYPE_XML:var xmlList=oResponse.getElementsByTagName(aSchema[0]);if(!xmlList){bError=true;break;}for(var k=xmlList.length-1;k>=0;k--){var result=xmlList.item(k);var aFieldSet=[];for(var m=aSchema.length-1;m>=1;m--){var sValue=null;var xmlAttr=result.attributes.getNamedItem(aSchema[m]);if(xmlAttr){sValue=xmlAttr.value;}else{var xmlNode=result.getElementsByTagName(aSchema[m]);if(xmlNode&&xmlNode.item(0)&&xmlNode.item(0).firstChild){sValue=xmlNode.item(0).firstChild.nodeValue;}else{sValue="";}}aFieldSet.unshift(sValue);}aResults.unshift(aFieldSet);}break;case YAHOO.widget.DS_XHR.TYPE_FLAT:if(oResponse.length>0){var newLength=oResponse.length-aSchema[0].length;if(oResponse.substr(newLength)==aSchema[0]){oResponse=oResponse.substr(0,newLength);}var aRecords=oResponse.split(aSchema[0]);for(var n=aRecords.length-1;n>=0;n--){aResults[n]=aRecords[n].split(aSchema[1]);}}break;default:break;}sQuery=null;oResponse=null;oParent=null;if(bError){return null;}else{return aResults;}};YAHOO.widget.DS_XHR.prototype._oConn=null;YAHOO.widget.DS_JSFunction=function(g,X){if(X&&(X.constructor==Object)){for(var e in X){this[e]=X[e];}}if(!YAHOO.lang.isFunction(g)){return ;}else{this.dataFunction=g;this._init();}};YAHOO.widget.DS_JSFunction.prototype=new YAHOO.widget.DataSource();YAHOO.widget.DS_JSFunction.prototype.dataFunction=null;YAHOO.widget.DS_JSFunction.prototype.doQuery=function(X,W,Z){var e=this.dataFunction;var c=[];c=e(W);if(c===null){this.dataErrorEvent.fire(this,Z,W,YAHOO.widget.DataSource.ERROR_DATANULL);return ;}var g={};g.query=decodeURIComponent(W);g.results=c;this._addCacheElem(g);this.getResultsEvent.fire(this,Z,W,c);X(W,c,Z);return ;};YAHOO.widget.DS_JSArray=function(g,X){if(X&&(X.constructor==Object)){for(var e in X){this[e]=X[e];}}if(!YAHOO.lang.isArray(g)){return ;}else{this.data=g;this._init();}};YAHOO.widget.DS_JSArray.prototype=new YAHOO.widget.DataSource();YAHOO.widget.DS_JSArray.prototype.data=null;YAHOO.widget.DS_JSArray.prototype.doQuery=function(c,D,g){var W;var X=this.data;var K=[];var Z=false;var e=this.queryMatchContains;if(D){if(!this.queryMatchCase){D=D.toLowerCase();}for(W=X.length-1;W>=0;W--){var N=[];if(YAHOO.lang.isString(X[W])){N[0]=X[W];}else{if(YAHOO.lang.isArray(X[W])){N=X[W];}}if(YAHOO.lang.isString(N[0])){var w=(this.queryMatchCase)?encodeURIComponent(N[0]).indexOf(D):encodeURIComponent(N[0]).toLowerCase().indexOf(D);if((!e&&(w===0))||(e&&(w>-1))){K.unshift(N);}}}}else{for(W=X.length-1;W>=0;W--){if(YAHOO.lang.isString(X[W])){K.unshift([X[W]]);}else{if(YAHOO.lang.isArray(X[W])){K.unshift(X[W]);}}}}this.getResultsEvent.fire(this,g,D,K);c(D,K,g);};YAHOO.register("autocomplete",YAHOO.widget.AutoComplete,{version:"@VERSION@",build:"@BUILD@"});