(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(t,e){},255:function(t,e){},273:function(t,e){},275:function(t,e){},294:function(t,e){},295:function(t,e){},358:function(t,e){},360:function(t,e){},393:function(t,e){},395:function(t,e){},396:function(t,e){},401:function(t,e){},403:function(t,e){},409:function(t,e){},411:function(t,e){},424:function(t,e){},436:function(t,e){},439:function(t,e){},444:function(t,e){},452:function(t,e){},461:function(t,e){},463:function(t,e){},533:function(t,e,n){},534:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,d,j,u,x,h,b,g,p,O,f,y=n(2),v=n(85),m=n.n(v),C=n(16),A=n.n(C),w=n(43),S=n(69),_=n(13),E=n(58),T=n(68),N=n.n(T),k=n(220),M=n.n(k),D=n(70),L=n(221),I=n(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},P),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},U=Object(D.b)({blockchain:K,data:F}),W=[L.a],z=Object(D.c)(D.a.apply(void 0,W)),B=Object(D.d)(U,z),Y=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},H=function(){return function(){var t=Object(w.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(Y("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},G=function(t){return{type:"CONNECTION_FAILED",payload:t}},q=function(t){return function(){var e=Object(w.a)(A.a.mark((function e(n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(H());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=n(14),X=(Q.a.div(c||(c=Object(_.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Q.a.div(r||(r=Object(_.a)(["\n  height: 8px;\n  width: 8px;\n"])))),J=Q.a.div(a||(a=Object(_.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(_.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(_.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(_.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),tt=Q.a.p(l||(l=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(Q.a.p(d||(d=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),Q.a.p(j||(j=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 14px;\n  line-height: 1.2;\n"])))),nt=(Q.a.div(u||(u=Object(_.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),ct=Q.a.button(x||(x=Object(_.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--secondary);\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(h||(h=Object(_.a)(["\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--secondary);\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.div(b||(b=Object(_.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  @media (min-width: 0px) {\n    width: 100%;\n  }\n  @media (min-width: 800px) {\n    width: 60%;\n  }\n  @media (min-width: 1000px) {\n    width: 40%;\n  }\n  @media (min-width: 1300px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(g||(g=Object(_.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=Q.a.img(p||(p=Object(_.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n\n  align-self: end;\n"]))),st=Q.a.img(O||(O=Object(_.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 2px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 150px;\n  @media (min-width: 900px) {\n    width: 128px;\n  }\n  @media (min-width: 1000px) {\n    width: 200px;\n  }\n  transition: width 0.5s;\n"]))),lt=Q.a.a(f||(f=Object(_.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var dt=function(){var t,e,n=Object(E.b)(),c=Object(E.c)((function(t){return t.blockchain})),r=Object(E.c)((function(t){return t.data})),a=Object(y.useState)(!1),o=Object(S.a)(a,2),i=o[0],s=o[1],l=Object(y.useState)("Click BUY to mint your NFTs."),d=Object(S.a)(l,2),j=d[0],u=d[1],x=Object(y.useState)(1),h=Object(S.a)(x,2),b=h[0],g=h[1],p=Object(y.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(S.a)(p,2),f=O[0],v=O[1],m=function(){""!==c.account&&null!==c.smartContract&&n(H(c.account))},C=function(){var t=Object(w.a)(A.a.mark((function t(){var e,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,v(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(y.useEffect)((function(){C()}),[]),Object(y.useEffect)((function(){m()}),[c.account]),Object(nt.jsxs)($,{flex:1,ai:"center",style:{padding:18,backgroundColor:"var(--primary)"},image:f.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)($,{jc:"left",ai:"left",style:{width:"100%",backgroundColor:"var(--accent)",padding:20,borderRadius:25},children:Object(nt.jsx)(ot,{alt:"logo",src:"/config/images/logo.png"})}),Object(nt.jsx)(X,{}),Object(nt.jsx)(at,{flex:1,style:{padding:18},test:!0,children:Object(nt.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:0,borderRadius:25,border:"2px dotted var(--secondary)"},children:[Object(nt.jsx)(tt,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",color:"var(--accent-text)"},children:"Mint a Blob"}),Object(nt.jsxs)(at,{flex:1,style:{padding:0,width:"100%"},test:!0,children:[Object(nt.jsxs)($,{flex:1,ai:"center",jc:"center",children:[Object(nt.jsx)(st,{alt:"example",src:"/config/images/example.gif",style:{transform:"scale(0.8)"}}),Object(nt.jsxs)(tt,{style:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",f.MAX_SUPPLY]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(lt,{target:"_blank",href:f.SCAN_LINK,children:(t=f.CONTRACT_ADDRESS,e=25,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(nt.jsx)(J,{})]}),Object(nt.jsxs)($,{flex:1,ai:"center",jc:"center",children:[Number(r.totalSupply)>=f.MAX_SUPPLY?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",f.NFT_NAME," on"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(lt,{target:"_blank",href:f.MARKETPLACE_LINK,children:f.MARKETPLACE})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",f.SYMBOL," costs ",f.DISPLAY_COST," ",f.NETWORK.SYMBOL,"."]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(nt.jsx)(J,{}),""===c.account||null===c.smartContract?Object(nt.jsxs)($,{ai:"center",jc:"center",children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",f.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ct,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(w.a)(A.a.mark((function t(e){var n,c,r,a,o,i,s,l,d;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new M.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){e(q(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(G("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(G("Something went wrong."));case 31:t.next=34;break;case 33:e(G("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),m()},children:"CONNECT"}),""!==c.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(nt.jsx)(X,{}),Object(nt.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(nt.jsx)(rt,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b-1;t<1&&(t=1),g(t)}()},children:"-"}),Object(nt.jsx)(V,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(nt.jsx)(V,{}),Object(nt.jsx)(rt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b+1;t>10&&(t=10),g(t)}()},children:"+"})]}),Object(nt.jsx)(J,{}),Object(nt.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(nt.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=f.WEI_COST,e=f.GAS_LIMIT,r=String(t*b),a=String(e*b);console.log("Cost: ",r),console.log("Gas limit: ",a),u("Minting your ".concat(f.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(a),to:f.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),u("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),u("WOW, the ".concat(f.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(H(c.account))}))}(),m()},children:i?"BUSY":"BUY"})})]})]}),Object(nt.jsx)(V,{})]})]})]})}),Object(nt.jsxs)($,{jc:"center",ai:"center",style:{width:"90%"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",f.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",f.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]}),Object(nt.jsx)(Z,{}),Object(nt.jsx)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",padding:10,borderRadius:25},children:Object(nt.jsxs)(at,{flex:1,style:{padding:18,width:"75%"},test:!0,children:[Object(nt.jsx)($,{flex:1,style:{height:300,backgroundColor:"var(--accent)",padding:10,borderRadius:25},image:"/config/images/Splash_600x400.png",children:Object(nt.jsx)(Z,{style:{height:100}})}),Object(nt.jsxs)($,{flex:1,style:{backgroundColor:"var(--accent)",padding:25},children:[Object(nt.jsx)(ot,{alt:"logo",src:"/config/images/OpenSea-Full-Logo (light).png"}),Object(nt.jsx)(V,{}),Object(nt.jsx)(tt,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:22,fontWeight:"bold"},children:"View and trade your NFTs on OpenSea"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Every Blob a unique colour"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Explore various materials, traits and rare accessories"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Some even glow ;)"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(lt,{target:"_blank",href:f.MARKETPLACE_LINK,children:"Go to the Lucid Blobs OpenSea collection"})]})]})}),Object(nt.jsx)(J,{}),Object(nt.jsx)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",padding:10,borderRadius:25,textAlign:"right"},children:Object(nt.jsxs)(at,{flex:1,style:{padding:18,width:"75%",textAlign:"right"},test:!0,children:[Object(nt.jsxs)($,{flex:1,jc:"right",ai:"right",style:{backgroundColor:"var(--accent)",padding:25},children:[Object(nt.jsx)($,{flex:1,jc:"right",ai:"right",children:Object(nt.jsx)(it,{alt:"logo",src:"/config/images/Gnosis_Safe_2019_logo_all_rgb_horizontal_left_white.png"})}),Object(nt.jsx)(V,{}),Object(nt.jsx)(tt,{style:{textAlign:"right",color:"var(--accent-text)",fontSize:22,fontWeight:"bold"},children:"insert DAO stuff"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"right",color:"var(--accent-text)"},children:"50% of sales goest to the vault"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"right",color:"var(--accent-text)"},children:"more DAO stuff"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"right",color:"var(--accent-text)"},children:"bla bla bla"}),Object(nt.jsx)(J,{}),Object(nt.jsx)(lt,{target:"_blank",href:f.SNAPSHOT_LINK,children:"Go to the Lucid Spectre Snapshot Space"})]}),Object(nt.jsx)($,{flex:1,style:{height:300,backgroundColor:"var(--accent)",padding:10,borderRadius:25},image:"/config/images/Splash_600x400.png",children:Object(nt.jsx)(Z,{style:{height:100}})})]})})]})},jt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(533);m.a.render(Object(nt.jsx)(E.a,{store:B,children:Object(nt.jsx)(dt,{})}),document.getElementById("root")),jt()}},[[534,1,2]]]);
//# sourceMappingURL=main.1d8acd5f.chunk.js.map