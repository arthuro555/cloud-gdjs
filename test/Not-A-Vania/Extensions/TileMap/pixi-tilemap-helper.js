(function(A,p){typeof exports=="object"&&typeof exports.nodeName!="string"?p(exports):p(A.PixiTileMapHelper={})})(typeof self!="undefined"?self:this,function(A){const p=GlobalPIXIModule.PIXI,x={},L=(i,t,l)=>{if(!i.tiledversion)return console.warn("The loaded Tiled map does not contain a 'tiledversion' key. Are you sure this file has been exported from Tiled (mapeditor.org)?"),null;if(!i.tilesets.length||"source"in i.tilesets[0])return console.warn("The loaded Tiled map seems not to contain any tileset data (nothing in 'tilesets' key)."),null;const{tilewidth:c,tileheight:o,tilecount:e,tiles:d,image:s,columns:f,spacing:n,margin:r}=i.tilesets[0];t||(t=l(s));const h=e/f,m=c*f+n*(f-1)+r*2,a=o*h+n*(h-1)+r*2;if(t.width!==1&&m!==t.width||t.height!==1&&a!==t.height){const u=m+"x"+a,y=t.width+"x"+t.height;return console.warn("It seems the atlas file was resized, which is not supported. It should be "+u+"px, but it's "+y+" px."),null}const w={};for(let u=0;u<=e;u++){const y=Math.floor((u-1)%f),P=Math.floor((u-1)/f),C=r+y*(c+n),H=r+P*(o+n);try{const g=new p.Rectangle(C,H,c,o),v=new p.Texture(t,g);w[u]=v}catch(g){console.error("An error occurred while creating a PIXI.Texture to be used in a TileMap:",g),w[u]=null}}return{width:t.width,height:t.height,tileWidth:c,tileHeight:o,atlasTexture:t,textureCache:w,layers:i.layers,tiles:d}},F=(i,t)=>{const{data:l,compression:c}=i;let o=4;const e=[];let d=atob(l).split("").map(function(s){return s.charCodeAt(0)});try{const s=(n,r)=>n.charCodeAt(r)+(n.charCodeAt(r+1)<<8)+(n.charCodeAt(r+2)<<16)+(n.charCodeAt(r+3)<<24)>>>0,f=(n,r)=>n[r]+(n[r+1]<<8)+(n[r+2]<<16)+(n[r+3]<<24)>>>0;if(c==="zlib"){const n=new Uint8Array(d);for(d=t.inflate(n);o<=d.length;)e.push(f(d,o-4)),o+=4}else{if(c==="zstd")return console.error("Zstandard compression is not supported for layers in a Tilemap. Use instead zlib compression or no compression."),null;for(;o<=d.length;)e.push(s(d,o-4)),o+=4}return e}catch(s){return console.error("Failed to decompress and unzip base64 layer.data string",s),null}},b=i=>{const t=2147483648,l=1073741824,c=536870912,o=i&t,e=i&l,d=i&c;return[i&~(t|l|c),!!o,!!e,!!d]},z=(i,t)=>{if(t===0)return null;if(i[t])return i[t];const l=b(t),c=l[0],o=l[1],e=l[2],d=l[3];if(c===0)return null;const s=i[c];if(!s)return null;const f=s.frame.clone(),n=s.orig.clone();if(d){const a=n.width;n.width=n.height,n.height=a}const r=n.clone();let h=0;d?(h=10,!o&&e?h=2:o&&!e?h=6:o&&e&&(h=14)):(h=0,!o&&e?h=8:o&&!e?h=12:o&&e&&(h=4));const m=new p.Texture(s.baseTexture,f,n,r,h);return i[t]=m};A.updatePixiTileMap=(i,t,l,c,o)=>{!i||!t||(i.clear(),t.layers.forEach(function(e,d){if(!(l==="index"&&c!==d)&&!(l==="visible"&&!e.visible)){if(e.type==="objectgroup")e.objects.forEach(function(s){const{gid:f,x:n,y:r,visible:h}=s;l==="visible"&&!h||t.textureCache[f]&&i.addFrame(t.textureCache[f],n,r-t.tileHeight)});else if(e.type==="tilelayer"){let s=0,f=e.data;if(e.encoding==="base64"&&(f=F(e,o),!f)){console.warn("Failed to uncompress layer.data");return}for(let n=0;n<e.height;n++)for(let r=0;r<e.width;r++){const h=t.tileWidth*r,m=t.tileHeight*n,a=f[s],w=b(a)[0],I=z(t.textureCache,a);if(I){const u=t.tiles&&t.tiles.find(function(P){return P.id===w-1}),y=i.addFrame(I,h,m);u&&u.animation&&y.tileAnimX(t.tileWidth,u.animation.length)}s+=1}}}}))},A.loadPixiTileMapData=(i,t,l,c,o)=>{const e=c+"@"+o+"@"+l;if(x[e])return x[e];const d=l?i(l):null,s=L(t,d,i);return s&&(x[e]=s),s}});
//# sourceMappingURL=pixi-tilemap-helper.js.map
