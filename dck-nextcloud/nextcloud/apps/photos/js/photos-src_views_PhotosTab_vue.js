"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_PhotosTab_vue"],{58430:(t,e,i)=>{i.d(e,{A:()=>s});var a=i(71354),o=i.n(a),n=i(76314),r=i.n(n)()(o());r.push([t.id,".location-map[data-v-28ef7c58]{position:relative;margin:16px;border-radius:var(--border-radius-large);height:250px;width:90%}","",{version:3,sources:["webpack://./src/components/LocationMap.vue"],names:[],mappings:"AAEA,+BACC,iBAAA,CACA,WAAA,CACA,wCAAA,CACA,YAAA,CACA,SAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.location-map {\n\tposition: relative;\n\tmargin: 16px;\n\tborder-radius: var(--border-radius-large);\n\theight: 250px;\n\twidth: 90%;\n}\n'],sourceRoot:""}]);const s=r},73660:(t,e,i)=>{i.d(e,{A:()=>s});var a=i(71354),o=i.n(a),n=i(76314),r=i.n(n)()(o());r.push([t.id,".photo-details-container[data-v-208d3321]{padding:8px}.photo-details-container .photo-detail[data-v-208d3321]{margin:16px 0;display:flex;flex-direction:row}.photo-details-container .photo-detail--secondary[data-v-208d3321]{color:var(--color-text-lighter)}.photo-details-container .photo-detail__gps[data-v-208d3321]{flex-direction:column}.photo-details-container .photo-detail__gps__title[data-v-208d3321]{display:flex}.photo-details-container .photo-detail__gps__map[data-v-208d3321]{display:flex}.photo-details-container .photo-detail .material-design-icon[data-v-208d3321]{margin-right:8px}","",{version:3,sources:["webpack://./src/views/PhotosTab.vue"],names:[],mappings:"AAEA,0CACC,WAAA,CAEA,wDACC,aAAA,CACA,YAAA,CACA,kBAAA,CAEA,mEACC,+BAAA,CAGD,6DACC,qBAAA,CAEA,oEACC,YAAA,CAGD,kEACC,YAAA,CAIF,8EACC,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n.photo-details-container {\n\tpadding: 8px;\n\n\t.photo-detail {\n\t\tmargin: 16px 0;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\n\t\t&--secondary {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\n\t\t&__gps {\n\t\t\tflex-direction: column;\n\n\t\t\t&__title {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\n\t\t\t&__map {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t}\n\n\t\t.material-design-icon {\n\t\t\tmargin-right: 8px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const s=r},22634:(t,e,i)=>{i.d(e,{default:()=>S});var a=i(93506),o=i(47912),n=i(71618),r=i(53334),s=i(27529),l=i(51651),p=i(47323),d=i(13544),m=i(80715),c=i(85551),u=i(12730);i(92389),i(92274),i(40939);const g={name:"LocationMap",components:{LControlAttribution:p.A,LTileLayer:d.A,LMap:m.A,LMarker:c.A,LTooltip:u.A},props:{latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},name:{type:String,default:""}},data:()=>({url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",previewZoom:13,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),computed:{center(){return[this.latitude,this.longitude]}}};var h=i(85072),A=i.n(h),f=i(97825),_=i.n(f),v=i(77659),C=i.n(v),x=i(55056),T=i.n(x),b=i(10540),I=i.n(b),W=i(41113),y=i.n(W),L=i(58430),M={};M.styleTagTransform=y(),M.setAttributes=T(),M.insert=C().bind(null,"head"),M.domAPI=_(),M.insertStyleElement=I();A()(L.A,M);L.A&&L.A.locals&&L.A.locals;var k=i(14486);const E=(0,k.A)(g,(function(){var t=this,e=t._self._c;return e("LMap",{staticClass:"location-map",attrs:{zoom:t.previewZoom,center:t.center,options:{scrollWheelZoom:!1,zoomControl:!1,dragging:!1,attributionControl:!1}},on:{scroll:function(t){t.preventDefault()}}},[e("LTileLayer",{attrs:{url:t.url}}),t._v(" "),e("LControlAttribution",{attrs:{position:"bottomright",prefix:t.attribution}}),t._v(" "),e("LMarker",{attrs:{"lat-lng":t.center}},[e("LTooltip",{attrs:{options:{direction:"top",permanent:"true",offset:[-16,-14]}}},[t._v("\n\t\t\t"+t._s(t.name)+"\n\t\t")])],1)],1)}),[],!1,null,"28ef7c58",null).exports,w={name:"PhotosTab",components:{CalendarOutline:a.A,MapMarker:o.A,CameraIris:n.A,LocationMap:E},data:()=>({fileInfo:null,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",previewZoom:13,linkZoom:18,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),computed:{exif(){return this.fileInfo["metadata-photos-exif"]},ifd0(){return this.fileInfo["metadata-photos-ifd0"]},place(){return this.fileInfo["metadata-photos-place"]},gps(){const t=this.fileInfo["metadata-photos-gps"];if(t)return{latitude:Number.parseFloat(t.latitude||0),longitude:Number.parseFloat(t.longitude||0),altitude:Number.parseFloat(t.altitude||0)}},originalDateTime(){return 1e3*this.fileInfo["metadata-photos-original_date_time"]},takenDate(){return(0,l.A)(this.originalDateTime).format("ll")},takenTime(){return(0,l.A)(this.originalDateTime).format("LT")},focal(){if(!this.exif?.FNumber)return 0;const[t,e]=this.exif.FNumber.split("/");return t/e},focalLength(){if(!this.exif?.FocalLength)return 0;const[t,e]=this.exif.FocalLength.split("/");return t/e},size(){return(0,s.v7)(this.fileInfo.size)},normalizedExposureTime(){if(!this.exif?.ExposureTime)return 0;const[t,e]=this.exif.ExposureTime.split("/");return Math.round(e/t)},irisInfo(){const t=[];return this.focal&&t.push(`ƒ/${this.focal}`),this.normalizedExposureTime&&t.push(`1/${this.normalizedExposureTime}`),this.focalLength&&t.push(`${this.focalLength}mm`),this.exif&&this.exif.ISOSpeedRatings&&t.push(`ISO${this.exif.ISOSpeedRatings}`),t.join(" ⸱ ")},pixelCount(){let t=this.ifd0.ImageWidth*this.ifd0.ImageLength,e=0;for(;t/1e3>1;)t/=1e3,e++;return`${Math.round(t)} ${["","K","M"][e]}P`}},methods:{async update(t){this.fileInfo=t},t:r.Tl}};var z=i(73660),D={};D.styleTagTransform=y(),D.setAttributes=T(),D.insert=C().bind(null,"head"),D.domAPI=_(),D.insertStyleElement=I();A()(z.A,D);z.A&&z.A.locals&&z.A.locals;const S=(0,k.A)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"photo-details-container"},[t.originalDateTime||t.ifd0&&t.ifd0.ImageWidth&&t.ifd0.ImageLength?e("div",{staticClass:"photo-detail photo-detail__file"},[e("CalendarOutline"),t._v(" "),e("span",[t.originalDateTime?e("div",[t._v(t._s(t.t("photos","Taken on {date} at {time}",{date:t.takenDate,time:t.takenTime})))]):t._e(),t._v(" "),e("div",{staticClass:"photo-detail--secondary"},[t._v(t._s(t.size)),t.ifd0&&t.ifd0.ImageWidth&&t.ifd0.ImageLength?e("span",[t._v(" ⸱ "+t._s(t.pixelCount)+" ⸱ "+t._s(t.ifd0.ImageWidth)+" x "+t._s(t.ifd0.ImageLength))]):t._e()])])],1):t._e(),t._v(" "),t.place?e("div",{staticClass:"photo-detail photo-detail__gps"},[e("div",{staticClass:"photo-detail__gps__title"},[e("MapMarker"),t._v(" "+t._s(t.place)+"\n\t\t")],1),t._v(" "),e("LocationMap",{staticClass:"photo-detail__gps__map",attrs:{latitude:t.gps.latitude,longitude:t.gps.longitude,name:t.place}})],1):t._e(),t._v(" "),t.ifd0&&(t.ifd0.Make||t.ifd0.Model)||0!==t.irisInfo.length?e("div",{staticClass:"photo-detail photo-detail__camera"},[e("CameraIris"),t._v(" "),e("span",[t.ifd0.Make||t.ifd0.Model?e("div",[t._v(t._s(t.ifd0.Make)+" "+t._s(t.ifd0.Model))]):t._e(),t._v(" "),0!==t.irisInfo.length?e("div",{staticClass:"photo-detail--secondary"},[t._v(t._s(t.irisInfo))]):t._e()])],1):t._e()])}),[],!1,null,"208d3321",null).exports}}]);
//# sourceMappingURL=photos-src_views_PhotosTab_vue.js.map?v=79376f50b88333e6facf