"use strict";(self.webpackChunkvoicevox_blog=self.webpackChunkvoicevox_blog||[]).push([[691],{389:function(e,t,a){var s=a(8014),n=a(7606),c=a(7294);t.Z=function(e){var t=e.url,a=e.color,i=e.className,l=e.style,r=(0,c.useState)(null),m=r[0],u=r[1],d=(0,c.useState)(!1),o=d[0],b=d[1],p=(0,c.useState)(!1),f=p[0],E=p[1];(0,c.useEffect)((function(){u(new Audio(t))}),[t]);var w=(0,c.useMemo)((function(){return a?Object.assign({},l,{backgroundColor:"white",borderColor:a,color:a}):l}),[a,l]);(0,c.useEffect)((function(){if(m){m.load();var e=function(){b(!0)},t=function(){b(!1)},a=function(){E(!0)};return m.addEventListener("play",e),m.addEventListener("pause",t),m.addEventListener("canplaythrough",a),function(){m.removeEventListener("play",e),m.removeEventListener("pause",t),m.removeEventListener("canplaythrough",a)}}}),[m]),(0,c.useEffect)((function(){return function(){m&&(m.pause(),b(!1),E(!1))}}),[m]);return c.createElement("button",{onClick:o?function(){m.pause(),m.currentTime=0}:function(){m.play()},className:"button circle-icon "+(a||"is-primary")+" "+(f?"":"is-loading")+" "+i,disabled:!f,style:w,type:"button"},f?c.createElement(n.G,{icon:o?s.Bg$:s.zc}):void 0)}},8659:function(e,t,a){a.r(t),a.d(t,{default:function(){return ae}});var s=a(7190),n=a(8014),c=a(7606),i=a(5444),l=a(6125),r=a(7294),m=a.p+"static/hau-001-f6f5cf0f0d7cbaef5a220df94766973b.wav",u=a.p+"static/hau-002-3bbd7cf6fbce45332fe3257113d49d7b.wav",d=a.p+"static/hau-003-99cb3d5601c39c7cb45ec80044c9406c.wav",o=a.p+"static/metan-ama-001-ff9c42b5bdfc9a99df2b166bfc93c23a.wav",b=a.p+"static/metan-ama-002-41d93b2feca31bbb0df0bbdc6c5a307f.wav",p=a.p+"static/metan-ama-003-4cdd3afc3544d974b9298568764c7399.wav",f=a.p+"static/metan-normal-001-872667e3d918802fdd36b63ffa122aa8.wav",E=a.p+"static/metan-normal-002-107da15c46a149082bad586fa579ef8f.wav",w=a.p+"static/metan-normal-003-ce1547d93af661fdbbff65a650d0ccd4.wav",A=a.p+"static/metan-sexy-001-3801fe95dad536bdcc4f0dcb52c8f4c4.wav",h=a.p+"static/metan-sexy-002-1a29d65676446a121561e6dcfe3f4aa5.wav",v=a.p+"static/metan-sexy-003-06862b616045f7962ff211b4e8646731.wav",g=a.p+"static/metan-tsun-001-95aff6dc27afbfc7b96a6b67ff1ee663.wav",N=a.p+"static/metan-tsun-002-6a8697a2eab72b23f1f0820d232c07f1.wav",y=a.p+"static/metan-tsun-003-de183a9bad8abc5f79ca316771011cc3.wav",x=a.p+"static/ritsu-001-7cb3278e19e4ff0ffb0b6f85006abe6d.wav",k=a.p+"static/ritsu-002-0cce35ab9fe1e34d57ebd09784c8305d.wav",C=a.p+"static/ritsu-003-5e9b66d35b8e2c22a842b165676987ae.wav",z=a.p+"static/tsumugi-001-3558cc77e3348a0f74a74d75c0350a96.wav",O=a.p+"static/tsumugi-002-8a9f2d4f7df6d5377b89b0da29d9f9d9.wav",X=a.p+"static/tsumugi-003-f8506505e296aedc4ecf52f093f819c0.wav",V=a.p+"static/zundamon-ama-001-746b3231af9988d224da59b5f58d1e9b.wav",R=a.p+"static/zundamon-ama-002-4ae3624ee088173cbc1628ac248ad4e5.wav",B=a.p+"static/zundamon-ama-003-0920a40ea307f82ac9fc6320edf07328.wav",F=a.p+"static/zundamon-normal-001-00804e8a3c329802c4181b4989efed29.wav",I=a.p+"static/zundamon-normal-002-2cdfed5942ec489c1180860c92947509.wav",S=a.p+"static/zundamon-normal-003-24a0057305db4b80e4e1ac421e969f39.wav",W=a.p+"static/zundamon-sexy-001-96107c2a3f5d6d21d6a70cfaf8560dd7.wav",Q=a.p+"static/zundamon-sexy-002-e6caa32acebab30d2fb1d1bcda0ab867.wav",U=a.p+"static/zundamon-sexy-003-486f4202c40db2a331e9886e912c75c4.wav",T=a.p+"static/zundamon-tsun-001-f7ba22a17e87e7f0de99c1dfd6cbea1b.wav",Z=a.p+"static/zundamon-tsun-002-8c7aea0366aa09f9a93f873a231ae46c.wav",J=a.p+"static/zundamon-tsun-003-f8ab7cc8041d9a3f3e5f226ac06f63d0.wav",Y=a(389),j=function(e){var t=e.audioSamples,a=e.className,s=(0,r.useState)(t[0].style),i=s[0],l=s[1],m=(0,r.useState)(!1),u=m[0],d=m[1],o=(0,r.useMemo)((function(){return t.map((function(e){return e.style}))}),[t]),b=(0,r.useMemo)((function(){return t.find((function(e){return e.style==i})).urls}),[i]);return r.createElement("div",{className:"audio-sample "+a},r.createElement("hr",{className:"my-3"}),r.createElement("div",{className:"columns is-vcentered py-0 my-2"},r.createElement("div",{className:"column is-5 py-0 my-1"},r.createElement("p",null,"音声サンプル")),r.createElement("div",{className:"column is-7 py-0 my-1"},b.map((function(e,t){return r.createElement(Y.Z,{key:t,url:e,className:"ml-1 mr-1"})})))),o.length>1&&r.createElement("div",{className:"columns is-vcentered py-0 my-2"},r.createElement("div",{className:"column is-5 py-0 my-1"},r.createElement("p",null,"スタイル")),r.createElement("div",{className:"column is-7 py-0 my-1"},r.createElement("div",{className:"dropdown "+(u?"is-active":""),onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},onFocus:function(){return d(!0)},onBlur:function(){return d(!1)}},r.createElement("div",{className:"dropdown-trigger"},r.createElement("button",{className:"button is-rounded","aria-haspopup":"true","aria-controls":"dropdown-menu",type:"button"},r.createElement("span",null,i),r.createElement("span",{className:"icon"},r.createElement(c.G,{icon:n.gc2})))),r.createElement("div",{className:"dropdown-menu",role:"menu"},r.createElement("div",{className:"dropdown-content"},o.map((function(e,t){return r.createElement("a",{key:t,className:"dropdown-item is-primary "+(e==i?"is-active":""),onClick:function(){l(e),d(!1)},onFocus:function(){l(e),d(!1)},tabIndex:0},e)}))))))),r.createElement("hr",{className:"my-3"}))},K=a(2511),q=function(e){var t=(0,i.useStaticQuery)("1412461055").markdownRemark.html;return r.createElement(K.Z,{title:"雨晴はう 利用規約",html:t,isActive:e.isActive,hide:e.hide})},M=function(e){var t=(0,i.useStaticQuery)("2541831264").markdownRemark.html;return r.createElement(K.Z,{title:"波音リツ 利用規約",html:t,isActive:e.isActive,hide:e.hide})},P=function(e){var t=(0,i.useStaticQuery)("1441076949").markdownRemark.html;return r.createElement(K.Z,{title:"四国めたん・ずんだもん 利用規約",html:t,isActive:e.isActive,hide:e.hide})},H=function(e){var t=(0,i.useStaticQuery)("866350258").markdownRemark.html;return r.createElement(K.Z,{title:"春日部つむぎ 利用規約",html:t,isActive:e.isActive,hide:e.hide})},D=a(9974),L=a(6179),G=a(4138),_=a.p+"static/landing-movie-thumb-1b9af402783915bf57ce0d4ff0bdd305.png",$=a(1775),ee=a.p+"static/landing-69ef7841f8ed79ae999dc6cfb49e0a77.mp4",te=function(e){var t=e.setShowingHeader,Y=(0,r.useContext)(G.k),K=(0,r.useRef)(null);(0,r.useEffect)((function(){K.current&&new IntersectionObserver((function(e){e.forEach((function(e){t(!e.isIntersecting)}))})).observe(K.current)}),[K]);var D=(0,r.useState)(void 0),te=D[0],ae=D[1],se=function(e){document.documentElement.classList.add("is-clipped"),ae(e)},ne=function(){document.documentElement.classList.remove("is-clipped"),ae(void 0)};return r.createElement(r.Fragment,null,r.createElement(L.Z,{title:"VOICEVOX | 無料で使える中品質なテキスト読み上げソフトウェア",description:"無料で使える中品質なテキスト読み上げソフトウェア",image:$.Z}),r.createElement("div",{className:"landing"},r.createElement("div",{ref:K,className:"first-view"},r.createElement("header",{className:"hero is-primary is-small"},r.createElement("div",{className:"hero-body"},r.createElement("div",{className:"container has-text-centered"},r.createElement("h1",{className:"title top-title"},"VOICEVOX"),r.createElement("h2",{className:"subtitle has-text-weight-semibold"},"無料で使える中品質なテキスト読み上げソフトウェア")))),r.createElement("section",{className:"section not-header is-flex is-justify-content-center"},r.createElement("div",{className:"container is-max-desktop columns is-desktop is-vcentered"},r.createElement("div",{className:"column has-text-centered"},r.createElement("video",{controls:!0,poster:_},r.createElement("source",{src:ee,type:"video/mp4"}))),r.createElement("div",{className:"column is-narrow is-flex is-flex-direction-column"},r.createElement("h2",{id:"feature",className:"title"},"特徴"),r.createElement("div",{className:"content"},r.createElement("ul",{className:"mt-0"},r.createElement("li",null,"商用・非商用問わず無料"," ",r.createElement("span",{style:{fontSize:"0.7em"}},"(※1)")),r.createElement("li",null,"すぐに使えるソフトウェア"," ",r.createElement("span",{style:{fontSize:"0.7em"}},"(※2)")),r.createElement("li",null,"イントネーションの詳細な調整が可能"))),r.createElement("p",{className:"is-size-7"},"※1 詳しくは各キャラクターの利用規約をご参照ください"),r.createElement("p",{className:"is-size-7"},"※2 現在は Windows / Linux に対応しています"),r.createElement("a",{className:"button is-align-self-center mt-5 is-primary is-rounded is-large",onClick:function(){Y.downloadModal.show(),Y.sendEvent("download","software")},target:"_blank",rel:"noreferrer",tabIndex:0},r.createElement("span",{className:"icon"},r.createElement(c.G,{icon:n.q7m})),r.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード")),r.createElement("p",{className:"is-align-self-center is-size-6"},"Version 0.10.4"))))),r.createElement("main",null,r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"characters",className:"title"},"キャラクター一覧"),r.createElement("div",{className:"tile is-ancestor is-justify-content-center"},r.createElement("div",{className:"tile is-parent is-6"},r.createElement("div",{className:"tile is-child card"},r.createElement(l.S,{className:"card-image",src:"../images/bustup-metan.png",alt:"四国めたん",width:640,__imageData:a(635)}),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},"四国めたん"),r.createElement("p",{className:"subtitle is-5"},"はっきりした芯のある声が特徴的"),r.createElement(j,{audioSamples:[{style:"ノーマル",urls:[f,E,w]},{style:"あまあま",urls:[o,b,p]},{style:"ツンツン",urls:[g,N,y]},{style:"セクシー",urls:[A,h,v]}]}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:function(){return se("東北")},className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,"四国めたん 利用規約")))))),r.createElement("div",{className:"tile is-parent is-6"},r.createElement("div",{className:"tile is-child card"},r.createElement(l.S,{className:"card-image",src:"../images/bustup-zundamon.png",alt:"ずんだもん",width:640,__imageData:a(5981)}),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},"ずんだもん"),r.createElement("p",{className:"subtitle is-5"},"子供っぽい高めの声が特徴的"),r.createElement(j,{audioSamples:[{style:"ノーマル",urls:[F,I,S]},{style:"あまあま",urls:[V,R,B]},{style:"ツンツン",urls:[T,Z,J]},{style:"セクシー",urls:[W,Q,U]}]}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:function(){return se("東北")},className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,"ずんだもん 利用規約"))))))),r.createElement("div",{className:"tile is-ancestor is-justify-content-center"},r.createElement("div",{className:"tile is-parent is-6"},r.createElement("div",{className:"tile is-child card"},r.createElement(l.S,{className:"card-image",src:"../images/bustup-tsumugi.png",alt:"春日部つむぎ",width:640,__imageData:a(5550)}),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},"春日部つむぎ"),r.createElement("p",{className:"subtitle is-5"},"元気な明るい声が特徴的"),r.createElement(j,{audioSamples:[{style:"ノーマル",urls:[z,O,X]}]}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:function(){return se("春日部つむぎ")},className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,"春日部つむぎ 利用規約")))))),r.createElement("div",{className:"tile is-parent is-6"},r.createElement("div",{className:"tile is-child card"},r.createElement(l.S,{className:"card-image",src:"../images/bustup-hau.png",alt:"雨晴はう",width:640,__imageData:a(422)}),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},"雨晴はう"),r.createElement("p",{className:"subtitle is-5"},"優しく可愛い声が特徴的"),r.createElement(j,{audioSamples:[{style:"ノーマル",urls:[m,u,d]}]}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:function(){return se("雨晴はう")},className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,"雨晴はう 利用規約"))))))),r.createElement("div",{className:"tile is-ancestor is-justify-content-center"},r.createElement("div",{className:"tile is-parent is-6"},r.createElement("div",{className:"tile is-child card"},r.createElement(l.S,{className:"card-image",src:"../images/bustup-ritsu.png",alt:"波音リツ",width:640,__imageData:a(2228)}),r.createElement("div",{className:"card-content has-text-centered"},r.createElement("h3",{className:"title is-4"},"波音リツ"),r.createElement("p",{className:"subtitle is-5"},"低めのクールな声が特徴的"),r.createElement(j,{audioSamples:[{style:"ノーマル",urls:[x,k,C]}]}),r.createElement("div",{className:"pt-3"},r.createElement("button",{onClick:function(){return se("波音リツ")},className:"button is-normal is-rounded",type:"button"},r.createElement("span",null,"波音リツ 利用規約"))))))))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"oss",className:"title"},"オープンソース"),r.createElement("p",{className:"is-size-5"},"VOICEVOX は OSS（オープンソース・ソフトウェア）版 VOICEVOX をもとに構築されています。"),r.createElement("p",{className:"is-size-5"},"製品版と OSS 版の違いやモジュール構成は ",r.createElement("a",{href:"https://github.com/VOICEVOX/voicevox/blob/main/docs/%E5%85%A8%E4%BD%93%E6%A7%8B%E6%88%90.md",target:"_blank",rel:"noreferrer"},"VOICEVOX の全体構成")," をご参照ください。"),r.createElement("p",{className:"is-size-5"},"ソフトウェア部分は Electron + Vue 、音声合成エンジン部分は Python + FastAPI です。"),r.createElement("p",{className:"is-size-5"},"追加したい・改善したい機能があれば、ぜひ開発にご参加ください。"),r.createElement("div",{className:"buttons mt-3"},r.createElement("a",{className:"button is-outlined",href:"https://github.com/VOICEVOX/voicevox",target:"_blank",rel:"noreferrer",type:"button",role:"button"},r.createElement("span",{className:"icon"},r.createElement(c.G,{icon:s.zhw})),r.createElement("span",null,"VOICEVOX エディター")),r.createElement("a",{className:"button is-outlined",href:"https://github.com/VOICEVOX/voicevox_engine",target:"_blank",rel:"noreferrer",type:"button",role:"button"},r.createElement("span",{className:"icon"},r.createElement(c.G,{icon:s.zhw})),r.createElement("span",null,"VOICEVOX エンジン"))))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{id:"core_library",className:"title"},"コアライブラリ"),r.createElement("p",{className:"is-size-5"},"VOICEVOXの音声合成をアプリケーションやサービスに組み込める、VOICEVOXのコアライブラリを配布しています。"),r.createElement("p",{className:"is-size-5"},"詳しくは ",r.createElement("a",{href:"https://github.com/VOICEVOX/voicevox_core",className:"has-text-primary has-text-weight-bold is-underlined",target:"_blank",rel:"noreferrer"},"VOICEVOX CORE")," をご参照ください。"))),r.createElement("section",{className:"section"},r.createElement("div",{className:"container is-max-desktop is-flex is-flex-direction-column"},r.createElement("h2",{className:"title"},"リンク"),r.createElement("ul",{className:"is-size-5"},r.createElement("li",null,r.createElement(i.Link,{to:"/term",className:"has-text-primary has-text-weight-bold is-underlined"},"利用規約")),r.createElement("li",null,r.createElement(i.Link,{to:"/how_to_use",className:"has-text-primary has-text-weight-bold is-underlined"},"使い方")),r.createElement("li",null,r.createElement(i.Link,{to:"/qa",className:"has-text-primary has-text-weight-bold is-underlined"},"Q&A")),r.createElement("li",null,r.createElement(i.Link,{to:"/dormitory",className:"has-text-primary has-text-weight-bold is-underlined"},"ボイボ寮")),r.createElement("li",null,r.createElement(i.Link,{to:"/update_history",className:"has-text-primary has-text-weight-bold is-underlined"},"変更履歴")),r.createElement("li",null,r.createElement("a",{href:"https://hiho.fanbox.cc/",target:"_blank",rel:"noreferrer",className:"has-text-primary has-text-weight-bold is-underlined"},"pixivFANBOX"))))))),r.createElement(P,{isActive:"東北"==te,hide:ne}),r.createElement(H,{isActive:"春日部つむぎ"==te,hide:ne}),r.createElement(q,{isActive:"雨晴はう"==te,hide:ne}),r.createElement(M,{isActive:"波音リツ"==te,hide:ne}))},ae=function(){var e=(0,r.useState)(!1),t=e[0],a=e[1];return r.createElement(D.T,{showingHeader:t},r.createElement(te,{setShowingHeader:a}))}},1775:function(e,t,a){t.Z=a.p+"static/landing-share-thumb-bae003080155cf8cc56d1fd7bf826bff.jpg"},5981:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAADXTAAA10wEMIUN3AAAFK0lEQVQ4y3XTfTDUeRwH8M8uU3fXTfdXNY3G2G41asqtCqUnoaQHFeIkYctzq5KRWOUaOdaeIg+7m+JaxCasuibsHTZau1Y5K9zmKdld2bKEnIf9fW7opjsz+fz3/cx8X/Od97y/AP+bvRxz2J6yHjYnmC3yLrO2MkmhLmvSxwKAI3DRj/REx4QRTAVEBBf+5q/teDSS2z1rcMg0hy/OYf4mEngug8Unjb49X7dTzu0+jsLhC2ekGANlGAWisZ+WCnUXuKkdbqMBVTYiACDP3nPk0RYAczdCUKUD6WihFRzMt16Z/dovoXQoXJ2hCW24rg76PVsd8vzRSER3WqcX31NotdbjkSVclO4juQutvwwe5W8CRvUeiGxwMWTUOIPfY2czVv/pj6nvgjBjKAQT1XQMqHX2Sn99AryFNDgv20NiKQ/BsdIFQOe7m8ClcBv8gfEGYkyELFXI7bTeICzqjvq7VHd5kvPXWSwajJHMZpgxFUKWKnKA3X0EnO5YwILDlP9Iss+jgRPPctn1N4E9KQWhWFR8daZczibY7BCi6P2VGX+R/Rr6U3uIb/EhbWWvXxjLrxfDtSZfUpzwJGTXRKzwlTgW8msvovZZDerkMn1FXRLGdpyQXZP7WkY2uEK84iS5S9X/ZawyORGI7m5oG2yCwvZcg8TO5Nm1QdKL6DhdY612rL4aBUoOB/zgmzs9xVDX9ZiMHxBQrYGRtpfzsdJTfjAia4TR5y/gbU8PubJdAYKupuWEHlMfyoqqS6r4nSKRANOfJD0n9Fgh6e/ZohpQw0hnlwFq3wFqtTBQeH8+qJPKQdsoJ7V7n5or7rBmgNenVWNudSw2KaUobq8jyiRp2Nz7AifefmjteJi+ZFwqgUlVPwmH3oMmJ38+ONgg/Xz+qFJlonoA6+pLqkv+ZE3iFEHgNBKyLiHmiFmtOmUzgSpNu6aqgvpB0QITSiVJlZXzH1h2ig7j9c8MxuslMFYjPj3T24tEd587ABgyC736NcPDSCASBWI2rosAh+svg+LGX7W+nmxWzFXoEZaTn3QwQYZn/30h3RdGGySkkdoa0Imq1kz39kwPd71ybK0qBk/mjuxovg8m3A9Gxo1DnbNAnNb9uKpPgjMKJWtsqAMcRj85gc3b5r4ilNB953LDgQEyajQw0dEWPqloVqKobl8xh9m2P3Y5HohfipybPuOo6NvbJy2j61rrEVNbljrhd0tYGpd18BTg3CvbT7L4UhSgHuFZxBnAwUEy9g8BSqQRPZUlREamG3qlUPTeaSYEm22HclE+oqylJlMS9PLnVtewo2UWzf7tW5A57FB7oHaDyeccB6oq4E3eXeBy/aEUk0FRnAC+aevFPmmr0OemyQw9nUKcSFuFfulmE7kF54wOlNMOB1ba4bYsqp6WaURsv0/BI5Xmynl9xCGEsNyN5HC+JUQX7NodzDNF+k0T4liyMeHBNib8MyjTs7tLApuwoHIauJVsfrCDZ4rmLKMps6srJnbyqTgP9EqygRiBtWGMwBou3dsaE5a9BkM4lClXljHhmmhMhHBXTzNuUTGmyKYgIHclhEs2fnWk1EKwX7AB7fPM0PM3q/lgZMFBuCL8weCy0AJiHuzKZtw2xTNcylQwl4qBnO+RwVs9zcimYrRgx+PIPACvpuNAjV8OoY22royG3b8mKlxT5oG+v9hCVJ4DmZl/EC7edfIIzqKhfxaF8LuxdtLnhulUMJeiD8jcgKE8u9CIAkcIK7E1XOyxCBhNu8G93hKSe4/BP00G0yVnStQSAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/7da24e15118528310d0270a29ef82165/eadd3/bustup-zundamon.png","srcSet":"/static/7da24e15118528310d0270a29ef82165/e9a79/bustup-zundamon.png 160w,\\n/static/7da24e15118528310d0270a29ef82165/5f035/bustup-zundamon.png 320w,\\n/static/7da24e15118528310d0270a29ef82165/eadd3/bustup-zundamon.png 640w,\\n/static/7da24e15118528310d0270a29ef82165/0be83/bustup-zundamon.png 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/7da24e15118528310d0270a29ef82165/60b4d/bustup-zundamon.webp 160w,\\n/static/7da24e15118528310d0270a29ef82165/5e011/bustup-zundamon.webp 320w,\\n/static/7da24e15118528310d0270a29ef82165/90d07/bustup-zundamon.webp 640w,\\n/static/7da24e15118528310d0270a29ef82165/9e21f/bustup-zundamon.webp 1280w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')},422:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAADXTAAA10wEMIUN3AAAFXklEQVQ4y4XUeUzTVxwA8O+vqAu6bIpOZjbFeWF0m7BozGSe25xxExxBDXIpAhM5CgNEzlorIIdCCaWcFpBSQK5wtghKC6XKYSkCViwIyg2icsVC+74LYy7Z/uGbvLzk5b1P3jff73sA/4tZRJiYRXgy+E5H2Dv291pkRrmp3MnNBJseQh2OQ2WVjKoRN0MctxgWDUSEkfFpGk7NwHhb68boJ6PS6NQSbL/MwPHbaVwEgEREED1oohJTKhYHe/tGaOMDI6DqGdw7PDY57Cd7hbvvtsw5h9/R5hTUYmFxI//D3piEksVBycAUbWB0Ahrl7bYeiiFcld0+u7FuhKyRvtVsEPUgI6u2r5PBXv3iKhtucwqoRUG9omc0vVIVrOA3muoLX6JRVBHZLOwhRmlSzc6yTlwn6n1E23J4KfxgB3pJ4sVvaMCT0lamymANp/LErnIVhsXGaw1ji8n5wBtaE5druDa+fnS9T7zBGvc40PdLpyyOmUPgt7uA/t1u+Ex3+X+x9RkSMMiXU5DbAUtzFCu357d0l1YKsVlSplWV8+dusrmoGyrMWpI3CPsnkVqd266DNjaUwskNXp53gu4LzgvQF6FpYJCvAIP8FvgyrozSL+6jQbICdP5ML3TPqUT1gELz9kUzsc4Qor6oT7Ojpt/FHBFWCAcArc9CB90Xus45whNbhwXw69hC2HanDrby66mv7vfCx1mPYR2v1mzv3caUwwlVMyURYSiKjiRnY0rIHnEfbqgdQUPpcJtebtsJpZn5EbFX8Eql/UWot77wT64ZHbBW8JhaltEC2+OLl20VKq8Dp9pyeHqW35+dj6+FAs1YQjTO1T3EwoEZsqmiS72puh/1Y2u6+s/aFD61sz+Fvl6AjKsLVddJkgKwSufbGjanSwLWZtQfmXjV59E9OontZTVEeesGafZnEXlrD0FELeteOy5lFDbud4/JDnfw7RVZOp4XXw6H0itRC+DvQRG0k4GRcJoR6bDH+6bl9YIikEg7nlVJOzErs04jcAwkkVbe5EZMIZEXS7ThjCT8hFkyuo6eZLOTJVAfjUhLO1bVD/vE0wtgVvAlHUHQJeAz3fxzPK1kRW4nnHjmVg9S3fxRLFPN5bN4WJVZTph+bJJtYYUZvixC3XiAxr7cigJ2sEYQHxKJknggNVwKnI/+BMpgc1CxLKA7ym55i4/puYZkRtBEi2jUy5FZKmwZ0ir5OViY00CMvUrQOoD7vqtVTI5filDHsW9N1DHt3rob6n3lc3AXcM8dpwHpqoOmu7HADqAv+fA5PFVUV1SLpbjNqWzK2K8Jf2VKyc/BYrLXMg53WCTO9Txv1cRzkvCAa5hI6G16cN9RC935swFmB+aBHpA3V1ANeQnQykuGwyY/hlja2uEptzhs6HyDHrwOcsi3hkRwykmLopNECeR4xpunoV9joq5nwv32EAcAzwRYZR8Mt73tAJ7dy6IQe6FRwDmQ6OH+KMPcCl2/MUn0TbpfpSaI795MauQl1WRsGsksIs7PRkF3tOa/WGCErb26RJDqTL8SAmHeIVRjPnchxflRkxJ9TZ6ZzFbS6WF8d5Z5nuS5cGIOcWhoUtNT34QTWsQ3aiS9vaPEhc3HqiiGutrV46ksJ7Gd4+NilBlEB/51P+pfcEbMgywOD7bkNX++4TRvxNZXgO+HVZqXcjkqqyWa0fEpfP2iE/tkFdrfHBKQ53d5+FGoXUyzt+mt7fahHwGoINHVauGhfGrsB4gNlKd/+HLDM+m1+sdT0Du6XKaeHFQPdTSiODuXq6gWFoz3tOHQSJ/m+4s52o1mKRj6h/tEP+vkoQ7mKRAH2dM4zKvwF1UcF4T6cMWzAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/787b7910f89088ba30dc089704a2a6a5/eadd3/bustup-hau.png","srcSet":"/static/787b7910f89088ba30dc089704a2a6a5/e9a79/bustup-hau.png 160w,\\n/static/787b7910f89088ba30dc089704a2a6a5/5f035/bustup-hau.png 320w,\\n/static/787b7910f89088ba30dc089704a2a6a5/eadd3/bustup-hau.png 640w,\\n/static/787b7910f89088ba30dc089704a2a6a5/0be83/bustup-hau.png 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/787b7910f89088ba30dc089704a2a6a5/60b4d/bustup-hau.webp 160w,\\n/static/787b7910f89088ba30dc089704a2a6a5/5e011/bustup-hau.webp 320w,\\n/static/787b7910f89088ba30dc089704a2a6a5/90d07/bustup-hau.webp 640w,\\n/static/787b7910f89088ba30dc089704a2a6a5/9e21f/bustup-hau.webp 1280w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')},2228:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/75549daa4535e332de0123efa8709624/eadd3/bustup-ritsu.png","srcSet":"/static/75549daa4535e332de0123efa8709624/e9a79/bustup-ritsu.png 160w,\\n/static/75549daa4535e332de0123efa8709624/5f035/bustup-ritsu.png 320w,\\n/static/75549daa4535e332de0123efa8709624/eadd3/bustup-ritsu.png 640w,\\n/static/75549daa4535e332de0123efa8709624/0be83/bustup-ritsu.png 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/75549daa4535e332de0123efa8709624/60b4d/bustup-ritsu.webp 160w,\\n/static/75549daa4535e332de0123efa8709624/5e011/bustup-ritsu.webp 320w,\\n/static/75549daa4535e332de0123efa8709624/90d07/bustup-ritsu.webp 640w,\\n/static/75549daa4535e332de0123efa8709624/9e21f/bustup-ritsu.webp 1280w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')},635:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/b9bbbddf72b000c5ee85aa3a3671ea3a/37301/bustup-metan.png","srcSet":"/static/b9bbbddf72b000c5ee85aa3a3671ea3a/c2b3e/bustup-metan.png 137w,\\n/static/b9bbbddf72b000c5ee85aa3a3671ea3a/67025/bustup-metan.png 274w,\\n/static/b9bbbddf72b000c5ee85aa3a3671ea3a/37301/bustup-metan.png 548w","sizes":"(min-width: 548px) 548px, 100vw"},"sources":[{"srcSet":"/static/b9bbbddf72b000c5ee85aa3a3671ea3a/97a45/bustup-metan.webp 137w,\\n/static/b9bbbddf72b000c5ee85aa3a3671ea3a/f0a21/bustup-metan.webp 274w,\\n/static/b9bbbddf72b000c5ee85aa3a3671ea3a/32ce6/bustup-metan.webp 548w","type":"image/webp","sizes":"(min-width: 548px) 548px, 100vw"}]},"width":640,"height":640}')},5550:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAADXTAAA10wEMIUN3AAAFQElEQVQ4y33UeUzTdxQA8FdgarJkif6z7Y9lmzNLlmzxD3dkWebwAkcUIcgUKKdYbspdW46KWKBIQSwIiD1ca4HSlraUuwfQUi4plLvllsNp0GVu6pD29xZlWbJs+P5933zyvi/vPYAdQiOvA5lECLd4fOhvl7vYuwQwM9DyKkUya+6CkseBzT83ABFh2WaGp49X4I2hUdRDs1QAdWIe9Bk6YFZf88nyuC7MYlBUdNzlsqryMt5FdLzNSQ4l1UoF8OLJEtwoyd8ZbJTehSqeCCTShr06xR2P6b7m6fsz/bhiv4ej3aqXygqOaaBNnvFrpxJwqAfkEt6bK9RqFFDBU0JNfdM7Zo24Zdaiw/XFsc2VWYtjedrs7FUIsVcjnejQ/HxwqK8R+rUNpPS0pJ3BlspikuQKA1q51w/o7pSNTnTJcHa40zluUhEmJd9hrK/EwXbZeGeT2H1otAcGdXJSk0y4M8hJin7dcHo4Y7esOLuoofIamrvbnRazlpBKBIQ4n4YWrcI5MqR3f/VuY9UGuibxzuDlcArUlbNdRCUsqKsuOqiuKX35+8o0vlibdvaqRCguYf1hNSgJm0V/dnHSDLZhvZvNavp/LPhbXyigUcEgKiHZh+tBXJrLFOZloqyY5TCWZTtllRw0yPkL7ZIqtn24SzW7ZNs9P2uFmRHjf7HPv/gMZKe50CVlkxbm+iHuhnDP0vD14XImBTmXcxzWJjGRT0t2VOUznl1LIntZu5v5VoOaOW1uh0lji+u/sCkVDVb7UmDiyRlYt9NddfIU+KW/kLo+cQPpcWTH7VIm0a0qc2bFX8CQc6EPqRcCvzKKqi93i6uvWNW1YFGIXP7BJJm+cN9QAGtmJmRE+bgd+e4QuMCBkxkRZ3BSl4OXUlOIYmY4MpIjnQlRVAwnR87/6B2911Bd+mH84aO7bsZchIoYyjY2xEuCxRYWrHVxYEHPcEGsAMSs9wQ08oMcylGc689wREVSMDs1jIimJDkDAqLx9KlzD66keb9/KzcRYC4OqhNjoDoxFqBVXgDyVB/oYTNgpJbmgvgUJLkAc9qE3nvSn3Cy8eKWpSUBgwNDiXJWCBFCjiKCAsMcrYp0fGhlhGyuZsC4juYqZxeA8tXqTbV9A7+t7gN7i49rMzMbbtMOw6K2iDsqjcQe3rnNpQ46dt2JJvz9zhO32IGYSCET44asraWhFLTrUxssaj+Y0YW6TnWWbX93bmAXSPwJWNB6gbYo6SMDN9LcWRaMqkI/7OWHo02e45Tk0jH2gj9yc/1QI8wgHg1mb9naqGhry2SNKmJgqjnZdUTA2Abt5g/AXP/xngejJ0tNgjC7gklGaY7fc3bo17LWkuDeGTkNNZV0J53qT5RknkUTP46YkMdv2TU0tKnTbs5pssCuprnNKQv+PgJX6aBOS9s7Kvd8YRQeQl7CiY3CwCPH2gso+wdq0hZXNFextfKS0+PEaYIS4Y+TrbloFacQpuooHBQmPB+ry/Htu02FIWHq9sg8GrfAxtRwgYmXbWvM22dUsfZ7iGhfAj/51HnltSgcF9O2riZF4Pc/eKPHcU/UC9KJ1eZCNHCjtzpLI3ChiR1rk+fCmCRze6gfz9+D+9Zud3y+tW+yhQWHyhGCvDyB7HW8SJJHwY7SRIfvcS/C192D8D7qiYrCeBwRpRPq/ADCWBmL6+3Fny43F8KYhL5d4bO1adIj2+DryzLfU0sS0yPcGvLSgc+gBjWwMpGbmuCg+AUQQSe80OfIMVRyqETvrRhHW2kY6rkRPRZhxlumm7GgvR7+uod/AUN4A7AzH4H/AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/046153ad2a4ff3b8f3b238fbb6c3024a/eadd3/bustup-tsumugi.png","srcSet":"/static/046153ad2a4ff3b8f3b238fbb6c3024a/e9a79/bustup-tsumugi.png 160w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/5f035/bustup-tsumugi.png 320w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/eadd3/bustup-tsumugi.png 640w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/0be83/bustup-tsumugi.png 1280w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/046153ad2a4ff3b8f3b238fbb6c3024a/60b4d/bustup-tsumugi.webp 160w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/5e011/bustup-tsumugi.webp 320w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/90d07/bustup-tsumugi.webp 640w,\\n/static/046153ad2a4ff3b8f3b238fbb6c3024a/9e21f/bustup-tsumugi.webp 1280w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d994cc30eb6363fc70a0.js.map