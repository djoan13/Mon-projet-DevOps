import{L as on,M as rn,N as l,O as un,P as I,Q as L,R as S,S as an,T as cn,V as k,W as y,X as V,Y as sn,Z as yn,$ as en}from"./mermaid.core-B5Ttp9Rj.chunk.mjs";function fn(o){return o.innerRadius}function ln(o){return o.outerRadius}function pn(o){return o.startAngle}function gn(o){return o.endAngle}function xn(o){return o&&o.padAngle}function mn(o,v,X,M,d,T,_,r){var $=X-o,s=M-v,n=_-d,g=r-T,a=g*$-n*s;if(!(a*a<l))return a=(n*(v-T)-g*(o-d))/a,[o+a*$,v+a*s]}function z(o,v,X,M,d,T,_){var r=o-X,$=v-M,s=(_?T:-T)/k(r*r+$*$),n=s*$,g=-s*r,a=o+n,i=v+g,e=X+n,f=M+g,D=(a+e)/2,u=(i+f)/2,x=e-a,p=f-i,R=x*x+p*p,q=d-T,A=a*f-e*i,G=(p<0?-1:1)*k(en(0,q*q*R-A*A)),O=(A*p-x*G)/R,P=(-A*x-p*G)/R,Q=(A*p+x*G)/R,m=(-A*x+p*G)/R,h=O-D,t=P-u,c=Q-D,E=m-u;return h*h+t*t>c*c+E*E&&(O=Q,P=m),{cx:O,cy:P,x01:-n,y01:-g,x11:O*(d/q-1),y11:P*(d/q-1)}}function vn(){var o=fn,v=ln,X=V(0),M=null,d=pn,T=gn,_=xn,r=null,$=on(s);function s(){var n,g,a=+o.apply(this,arguments),i=+v.apply(this,arguments),e=d.apply(this,arguments)-rn,f=T.apply(this,arguments)-rn,D=an(f-e),u=f>e;if(r||(r=n=$()),i<a&&(g=i,i=a,a=g),!(i>l))r.moveTo(0,0);else if(D>un-l)r.moveTo(i*I(e),i*L(e)),r.arc(0,0,i,e,f,!u),a>l&&(r.moveTo(a*I(f),a*L(f)),r.arc(0,0,a,f,e,u));else{var x=e,p=f,R=e,q=f,A=D,G=D,O=_.apply(this,arguments)/2,P=O>l&&(M?+M.apply(this,arguments):k(a*a+i*i)),Q=S(an(i-a)/2,+X.apply(this,arguments)),m=Q,h=Q,t,c;if(P>l){var E=sn(P/a*L(O)),H=sn(P/i*L(O));(A-=E*2)>l?(E*=u?1:-1,R+=E,q-=E):(A=0,R=q=(e+f)/2),(G-=H*2)>l?(H*=u?1:-1,x+=H,p-=H):(G=0,x=p=(e+f)/2)}var W=i*I(x),b=i*L(x),J=a*I(q),K=a*L(q);if(Q>l){var U=i*I(p),j=i*L(p),B=a*I(R),C=a*L(R),N;if(D<cn)if(N=mn(W,b,B,C,U,j,J,K)){var F=W-N[0],Y=b-N[1],Z=U-N[0],w=j-N[1],nn=1/L(yn((F*Z+Y*w)/(k(F*F+Y*Y)*k(Z*Z+w*w)))/2),tn=k(N[0]*N[0]+N[1]*N[1]);m=S(Q,(a-tn)/(nn-1)),h=S(Q,(i-tn)/(nn+1))}else m=h=0}G>l?h>l?(t=z(B,C,W,b,i,h,u),c=z(U,j,J,K,i,h,u),r.moveTo(t.cx+t.x01,t.cy+t.y01),h<Q?r.arc(t.cx,t.cy,h,y(t.y01,t.x01),y(c.y01,c.x01),!u):(r.arc(t.cx,t.cy,h,y(t.y01,t.x01),y(t.y11,t.x11),!u),r.arc(0,0,i,y(t.cy+t.y11,t.cx+t.x11),y(c.cy+c.y11,c.cx+c.x11),!u),r.arc(c.cx,c.cy,h,y(c.y11,c.x11),y(c.y01,c.x01),!u))):(r.moveTo(W,b),r.arc(0,0,i,x,p,!u)):r.moveTo(W,b),!(a>l)||!(A>l)?r.lineTo(J,K):m>l?(t=z(J,K,U,j,a,-m,u),c=z(W,b,B,C,a,-m,u),r.lineTo(t.cx+t.x01,t.cy+t.y01),m<Q?r.arc(t.cx,t.cy,m,y(t.y01,t.x01),y(c.y01,c.x01),!u):(r.arc(t.cx,t.cy,m,y(t.y01,t.x01),y(t.y11,t.x11),!u),r.arc(0,0,a,y(t.cy+t.y11,t.cx+t.x11),y(c.cy+c.y11,c.cx+c.x11),u),r.arc(c.cx,c.cy,m,y(c.y11,c.x11),y(c.y01,c.x01),!u))):r.arc(0,0,a,q,R,u)}if(r.closePath(),n)return r=null,n+""||null}return s.centroid=function(){var n=(+o.apply(this,arguments)+ +v.apply(this,arguments))/2,g=(+d.apply(this,arguments)+ +T.apply(this,arguments))/2-cn/2;return[I(g)*n,L(g)*n]},s.innerRadius=function(n){return arguments.length?(o=typeof n=="function"?n:V(+n),s):o},s.outerRadius=function(n){return arguments.length?(v=typeof n=="function"?n:V(+n),s):v},s.cornerRadius=function(n){return arguments.length?(X=typeof n=="function"?n:V(+n),s):X},s.padRadius=function(n){return arguments.length?(M=n==null?null:typeof n=="function"?n:V(+n),s):M},s.startAngle=function(n){return arguments.length?(d=typeof n=="function"?n:V(+n),s):d},s.endAngle=function(n){return arguments.length?(T=typeof n=="function"?n:V(+n),s):T},s.padAngle=function(n){return arguments.length?(_=typeof n=="function"?n:V(+n),s):_},s.context=function(n){return arguments.length?(r=n!=null?n:null,s):r},s}export{vn as d};
