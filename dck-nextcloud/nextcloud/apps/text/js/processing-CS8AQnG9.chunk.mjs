import{g as p}from"./emoji-picker-Coav-X6q.chunk.mjs";function u(t,a){for(var s=0;s<a.length;s++){const e=a[s];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function h(t){const a=t.regex,s=["displayHeight","displayWidth","mouseY","mouseX","mousePressed","pmouseX","pmouseY","key","keyCode","pixels","focused","frameCount","frameRate","height","width","size","createGraphics","beginDraw","createShape","loadShape","PShape","arc","ellipse","line","point","quad","rect","triangle","bezier","bezierDetail","bezierPoint","bezierTangent","curve","curveDetail","curvePoint","curveTangent","curveTightness","shape","shapeMode","beginContour","beginShape","bezierVertex","curveVertex","endContour","endShape","quadraticVertex","vertex","ellipseMode","noSmooth","rectMode","smooth","strokeCap","strokeJoin","strokeWeight","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseWheel","keyPressed","keyPressedkeyReleased","keyTyped","print","println","save","saveFrame","day","hour","millis","minute","month","second","year","background","clear","colorMode","fill","noFill","noStroke","stroke","alpha","blue","brightness","color","green","hue","lerpColor","red","saturation","modelX","modelY","modelZ","screenX","screenY","screenZ","ambient","emissive","shininess","specular","add","createImage","beginCamera","camera","endCamera","frustum","ortho","perspective","printCamera","printProjection","cursor","frameRate","noCursor","exit","loop","noLoop","popStyle","pushStyle","redraw","binary","boolean","byte","char","float","hex","int","str","unbinary","unhex","join","match","matchAll","nf","nfc","nfp","nfs","split","splitTokens","trim","append","arrayCopy","concat","expand","reverse","shorten","sort","splice","subset","box","sphere","sphereDetail","createInput","createReader","loadBytes","loadJSONArray","loadJSONObject","loadStrings","loadTable","loadXML","open","parseXML","saveTable","selectFolder","selectInput","beginRaw","beginRecord","createOutput","createWriter","endRaw","endRecord","PrintWritersaveBytes","saveJSONArray","saveJSONObject","saveStream","saveStrings","saveXML","selectOutput","popMatrix","printMatrix","pushMatrix","resetMatrix","rotate","rotateX","rotateY","rotateZ","scale","shearX","shearY","translate","ambientLight","directionalLight","lightFalloff","lights","lightSpecular","noLights","normal","pointLight","spotLight","image","imageMode","loadImage","noTint","requestImage","tint","texture","textureMode","textureWrap","blend","copy","filter","get","loadPixels","set","updatePixels","blendMode","loadShader","PShaderresetShader","shader","createFont","loadFont","text","textFont","textAlign","textLeading","textMode","textSize","textWidth","textAscent","textDescent","abs","ceil","constrain","dist","exp","floor","lerp","log","mag","map","max","min","norm","pow","round","sq","sqrt","acos","asin","atan","atan2","cos","degrees","radians","sin","tan","noise","noiseDetail","noiseSeed","random","randomGaussian","randomSeed"],e=t.IDENT_RE,r={variants:[{match:a.concat(a.either(...s),a.lookahead(/\s*\(/)),className:"built_in"},{relevance:0,match:a.concat(/\b(?!for|if|while)/,e,a.lookahead(/\s*\(/)),className:"title.function"}]},o={match:[/new\s+/,e],className:{1:"keyword",2:"class.title"}},n={relevance:0,match:[/\./,e],className:{2:"property"}},l={variants:[{match:[/class/,/\s+/,e,/\s+/,/extends/,/\s+/,e]},{match:[/class/,/\s+/,e]}],className:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},c=["boolean","byte","char","color","double","float","int","long","short"],d=["BufferedReader","PVector","PFont","PImage","PGraphics","HashMap","String","Array","FloatDict","ArrayList","FloatList","IntDict","IntList","JSONArray","JSONObject","Object","StringDict","StringList","Table","TableRow","XML"];return{name:"Processing",aliases:["pde"],keywords:{keyword:["abstract","assert","break","case","catch","const","continue","default","else","enum","final","finally","for","if","import","instanceof","long","native","new","package","private","private","protected","protected","public","public","return","static","strictfp","switch","synchronized","throw","throws","transient","try","void","volatile","while"],literal:"P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI null true false",title:"setup draw",variable:"super this",built_in:[...s,...d],type:c},contains:[l,o,r,n,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,t.C_NUMBER_MODE]}}var i=h;const m=p(i),b=u({__proto__:null,default:m},[i]);export{i as a,b as p};
