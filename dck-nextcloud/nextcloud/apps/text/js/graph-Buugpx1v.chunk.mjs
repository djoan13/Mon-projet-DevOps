import{aq as N,ar as E,as as g,at as v,au as b}from"./mermaid.core-B5Ttp9Rj.chunk.mjs";import{a as L,c as j,k as _,f as p,d as a,i as l,v as f,r as D}from"./_baseUniq-BQtPZKT8.chunk.mjs";var P=N(function(o){return L(j(o,1,E,!0))}),F="\0",d="\0",C="";class w{constructor(t={}){this._isDirected=Object.prototype.hasOwnProperty.call(t,"directed")?t.directed:!0,this._isMultigraph=Object.prototype.hasOwnProperty.call(t,"multigraph")?t.multigraph:!1,this._isCompound=Object.prototype.hasOwnProperty.call(t,"compound")?t.compound:!1,this._label=void 0,this._defaultNodeLabelFn=g(void 0),this._defaultEdgeLabelFn=g(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[d]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(t){return this._label=t,this}graph(){return this._label}setDefaultNodeLabel(t){return v(t)||(t=g(t)),this._defaultNodeLabelFn=t,this}nodeCount(){return this._nodeCount}nodes(){return _(this._nodes)}sources(){var t=this;return p(this.nodes(),function(e){return b(t._in[e])})}sinks(){var t=this;return p(this.nodes(),function(e){return b(t._out[e])})}setNodes(t,e){var s=arguments,i=this;return a(t,function(r){s.length>1?i.setNode(r,e):i.setNode(r)}),this}setNode(t,e){return Object.prototype.hasOwnProperty.call(this._nodes,t)?(arguments.length>1&&(this._nodes[t]=e),this):(this._nodes[t]=arguments.length>1?e:this._defaultNodeLabelFn(t),this._isCompound&&(this._parent[t]=d,this._children[t]={},this._children[d][t]=!0),this._in[t]={},this._preds[t]={},this._out[t]={},this._sucs[t]={},++this._nodeCount,this)}node(t){return this._nodes[t]}hasNode(t){return Object.prototype.hasOwnProperty.call(this._nodes,t)}removeNode(t){if(Object.prototype.hasOwnProperty.call(this._nodes,t)){var e=s=>this.removeEdge(this._edgeObjs[s]);delete this._nodes[t],this._isCompound&&(this._removeFromParentsChildList(t),delete this._parent[t],a(this.children(t),s=>{this.setParent(s)}),delete this._children[t]),a(_(this._in[t]),e),delete this._in[t],delete this._preds[t],a(_(this._out[t]),e),delete this._out[t],delete this._sucs[t],--this._nodeCount}return this}setParent(t,e){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(l(e))e=d;else{e+="";for(var s=e;!l(s);s=this.parent(s))if(s===t)throw new Error("Setting "+e+" as parent of "+t+" would create a cycle");this.setNode(e)}return this.setNode(t),this._removeFromParentsChildList(t),this._parent[t]=e,this._children[e][t]=!0,this}_removeFromParentsChildList(t){delete this._children[this._parent[t]][t]}parent(t){if(this._isCompound){var e=this._parent[t];if(e!==d)return e}}children(t){if(l(t)&&(t=d),this._isCompound){var e=this._children[t];if(e)return _(e)}else{if(t===d)return this.nodes();if(this.hasNode(t))return[]}}predecessors(t){var e=this._preds[t];if(e)return _(e)}successors(t){var e=this._sucs[t];if(e)return _(e)}neighbors(t){var e=this.predecessors(t);if(e)return P(e,this.successors(t))}isLeaf(t){var e;return this.isDirected()?e=this.successors(t):e=this.neighbors(t),e.length===0}filterNodes(t){var e=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});e.setGraph(this.graph());var s=this;a(this._nodes,function(n,h){t(h)&&e.setNode(h,n)}),a(this._edgeObjs,function(n){e.hasNode(n.v)&&e.hasNode(n.w)&&e.setEdge(n,s.edge(n))});var i={};function r(n){var h=s.parent(n);return h===void 0||e.hasNode(h)?(i[n]=h,h):h in i?i[h]:r(h)}return this._isCompound&&a(e.nodes(),function(n){e.setParent(n,r(n))}),e}setDefaultEdgeLabel(t){return v(t)||(t=g(t)),this._defaultEdgeLabelFn=t,this}edgeCount(){return this._edgeCount}edges(){return f(this._edgeObjs)}setPath(t,e){var s=this,i=arguments;return D(t,function(r,n){return i.length>1?s.setEdge(r,n,e):s.setEdge(r,n),n}),this}setEdge(){var t,e,s,i,r=!1,n=arguments[0];typeof n=="object"&&n!==null&&"v"in n?(t=n.v,e=n.w,s=n.name,arguments.length===2&&(i=arguments[1],r=!0)):(t=n,e=arguments[1],s=arguments[3],arguments.length>2&&(i=arguments[2],r=!0)),t=""+t,e=""+e,l(s)||(s=""+s);var h=c(this._isDirected,t,e,s);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,h))return r&&(this._edgeLabels[h]=i),this;if(!l(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(t),this.setNode(e),this._edgeLabels[h]=r?i:this._defaultEdgeLabelFn(t,e,s);var u=M(this._isDirected,t,e,s);return t=u.v,e=u.w,Object.freeze(u),this._edgeObjs[h]=u,O(this._preds[e],t),O(this._sucs[t],e),this._in[e][h]=u,this._out[t][h]=u,this._edgeCount++,this}edge(t,e,s){var i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,t,e,s);return this._edgeLabels[i]}hasEdge(t,e,s){var i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,t,e,s);return Object.prototype.hasOwnProperty.call(this._edgeLabels,i)}removeEdge(t,e,s){var i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,t,e,s),r=this._edgeObjs[i];return r&&(t=r.v,e=r.w,delete this._edgeLabels[i],delete this._edgeObjs[i],y(this._preds[e],t),y(this._sucs[t],e),delete this._in[e][i],delete this._out[t][i],this._edgeCount--),this}inEdges(t,e){var s=this._in[t];if(s){var i=f(s);return e?p(i,function(r){return r.v===e}):i}}outEdges(t,e){var s=this._out[t];if(s){var i=f(s);return e?p(i,function(r){return r.w===e}):i}}nodeEdges(t,e){var s=this.inEdges(t,e);if(s)return s.concat(this.outEdges(t,e))}}w.prototype._nodeCount=0,w.prototype._edgeCount=0;function O(o,t){o[t]?o[t]++:o[t]=1}function y(o,t){--o[t]||delete o[t]}function c(o,t,e,s){var i=""+t,r=""+e;if(!o&&i>r){var n=i;i=r,r=n}return i+C+r+C+(l(s)?F:s)}function M(o,t,e,s){var i=""+t,r=""+e;if(!o&&i>r){var n=i;i=r,r=n}var h={v:i,w:r};return s&&(h.name=s),h}function m(o,t){return c(o,t.v,t.w,t.name)}export{w as G};
