(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,l,d,j,x,h,u,b,g,p,O,f,y=n(2),m=n(85),v=n.n(m),w=n(16),C=n.n(w),A=n(43),S=n(69),_=n(13),E=n(58),T=n(68),N=n.n(T),k=n(220),L=n.n(k),M=n(70),R=n(221),D=n(19),I={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},I),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},I),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},e),{},{account:t.payload.account});default:return e}},W={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},W),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},P=Object(M.b)({blockchain:K,data:F}),U=[R.a],B=Object(M.c)(M.a.apply(void 0,U)),z=Object(M.d)(P,B),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(A.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},G=function(e){return{type:"CONNECTION_FAILED",payload:e}},q=function(e){return function(){var t=Object(A.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(H());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=n(14),X=(Q.a.div(c||(c=Object(_.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q.a.div(r||(r=Object(_.a)(["\n  height: 8px;\n  width: 8px;\n"])))),J=Q.a.div(a||(a=Object(_.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(i||(i=Object(_.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(o||(o=Object(_.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(_.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=Q.a.p(l||(l=Object(_.a)(["\n  color: var(--primary-text);\n  font-family: quicksand;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=(Q.a.p(d||(d=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),Q.a.p(j||(j=Object(_.a)(["\n  color: var(--primary-text);\n  font-size: 14px;\n  line-height: 1.2;\n"])))),ne=(Q.a.div(x||(x=Object(_.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(0)),ce=Q.a.button(h||(h=Object(_.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--secondary);\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 14px;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=Q.a.button(u||(u=Object(_.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: 1px solid var(--secondary);\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ae=Q.a.div(b||(b=Object(_.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  @media (min-width: 0px) {\n    width: 100%;\n  }\n  @media (min-width: 800px) {\n    width: 60%;\n  }\n  @media (min-width: 1000px) {\n    width: 40%;\n  }\n  @media (min-width: 1300px) {\n    flex-direction: row;\n  }\n"]))),ie=Q.a.img(g||(g=Object(_.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),oe=Q.a.img(p||(p=Object(_.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n\n  align-self: end;\n"]))),se=Q.a.img(O||(O=Object(_.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 2px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 150px;\n  @media (min-width: 900px) {\n    width: 128px;\n  }\n  @media (min-width: 1000px) {\n    width: 200px;\n  }\n  transition: width 0.5s;\n"]))),le=Q.a.a(f||(f=Object(_.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var de=function(){var e,t,n=Object(E.b)(),c=Object(E.c)((function(e){return e.blockchain})),r=Object(E.c)((function(e){return e.data})),a=Object(y.useState)(!1),i=Object(S.a)(a,2),o=i[0],s=i[1],l=Object(y.useState)("Click BUY to mint your NFTs."),d=Object(S.a)(l,2),j=d[0],x=d[1],h=Object(y.useState)(1),u=Object(S.a)(h,2),b=u[0],g=u[1],p=Object(y.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(S.a)(p,2),f=O[0],m=O[1],v=function(){""!==c.account&&null!==c.smartContract&&n(H(c.account))},w=function(){var e=Object(A.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,m(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.useEffect)((function(){w()}),[]),Object(y.useEffect)((function(){v()}),[c.account]),Object(ne.jsxs)($,{flex:1,ai:"center",style:{padding:18,backgroundColor:"var(--primary)"},image:f.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)($,{jc:"left",ai:"left",style:{width:"100%",backgroundColor:"var(--accent)",padding:20,borderRadius:25},children:Object(ne.jsx)(ie,{alt:"logo",src:"/config/images/logo.png"})}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:42,fontWeight:"bold",color:"var(--accent-text)"},children:"Mint a Blob"}),Object(ne.jsx)(ae,{flex:1,style:{padding:18},test:!0,children:Object(ne.jsx)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:10,borderRadius:25,border:"2px dotted var(--secondary)"},children:Object(ne.jsxs)(ae,{flex:1,style:{padding:0,width:"100%"},test:!0,children:[Object(ne.jsx)($,{flex:1,ai:"center",jc:"center"}),Object(ne.jsxs)($,{flex:0,ai:"center",jc:"center",children:[Object(ne.jsx)(se,{alt:"example",src:"/config/images/example.gif",style:{transform:"scale(0.8)"}}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:22,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",f.MAX_SUPPLY]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)(le,{target:"_blank",href:f.SCAN_LINK,children:(e=f.CONTRACT_ADDRESS,t=25,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ne.jsx)(J,{})]}),Object(ne.jsx)(V,{}),Object(ne.jsxs)($,{flex:1,ai:"center",jc:"center",children:[Number(r.totalSupply)>=f.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",f.NFT_NAME," on"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(le,{target:"_blank",href:f.MARKETPLACE_LINK,children:f.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",f.SYMBOL," costs ",f.DISPLAY_COST," ",f.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ne.jsx)(J,{}),""===c.account||null===c.smartContract?Object(ne.jsxs)($,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",f.NETWORK.NAME," network"]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ce,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(A.a)(C.a.mark((function e(t){var n,c,r,a,i,o,s,l,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,i=window,!(o=i.ethereum)||!o.isMetaMask){e.next=33;break}return N.a.setProvider(o),s=new L.a(o),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),o.on("accountsChanged",(function(e){t(q(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(G("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(G("Something went wrong."));case 31:e.next=34;break;case 33:t(G("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ne.jsx)(X,{}),Object(ne.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(re,{style:{lineHeight:.4},disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),g(e)}()},children:"-"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(ne.jsx)(V,{}),Object(ne.jsx)(re,{disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>10&&(e=10),g(e)}()},children:"+"})]}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(ce,{disabled:o?1:0,onClick:function(e){e.preventDefault(),function(){var e=f.WEI_COST,t=f.GAS_LIMIT,r=String(e*b),a=String(t*b);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(f.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(a),to:f.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(e){console.log(e),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),x("WOW, the ".concat(f.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(H(c.account))}))}(),v()},children:o?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(V,{})]}),Object(ne.jsx)($,{flex:1,ai:"center",jc:"center"})]})})}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"90%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",f.NETWORK.NAME," Testnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",f.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]}),Object(ne.jsx)(Z,{}),Object(ne.jsx)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",padding:10,borderRadius:25},children:Object(ne.jsxs)(ae,{flex:1,style:{padding:18,width:"75%"},test:!0,children:[Object(ne.jsx)($,{flex:1,style:{height:300,backgroundColor:"var(--accent)",padding:10,borderRadius:25},image:"/config/images/Splash_600x400.png",children:Object(ne.jsx)(Z,{style:{height:100}})}),Object(ne.jsxs)($,{flex:1,style:{backgroundColor:"var(--accent)",padding:25},children:[Object(ne.jsx)(ie,{alt:"logo",src:"/config/images/OpenSea-Full-Logo (light).png"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(ee,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:22,fontWeight:"bold"},children:"View and trade your NFTs on OpenSea"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Every Blob a unique colour"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Explore various materials, traits and rare accessories"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Some even glow!"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(le,{target:"_blank",href:f.MARKETPLACE_LINK,children:"Go to the Lucid Blobs OpenSea collection"})]})]})}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",padding:10,borderRadius:25,textAlign:"right"},children:Object(ne.jsxs)(ae,{flex:1,style:{padding:18,width:"75%",textAlign:"right"},test:!0,children:[Object(ne.jsxs)($,{flex:1,jc:"right",ai:"right",style:{backgroundColor:"var(--accent)",padding:25},children:[Object(ne.jsx)($,{flex:1,jc:"right",ai:"right",children:Object(ne.jsx)(oe,{alt:"logo",src:"/config/images/Gnosis_Safe_2019_logo_all_rgb_horizontal_left_white.png",style:{transform:"scale(0.9)"}})}),Object(ne.jsx)(ee,{style:{textAlign:"right",color:"var(--accent-text)",fontSize:22,fontWeight:"bold"},children:"DAO stuff"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"right",color:"var(--accent-text)"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"right",color:"var(--accent-text)"},children:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"right",color:"var(--accent-text)"},children:"Dignissim suspendisse in est ante in nibh."}),Object(ne.jsx)(J,{}),Object(ne.jsx)(le,{target:"_blank",href:f.SNAPSHOT_LINK,children:"Go to the Lucid Spectre Snapshot Space"})]}),Object(ne.jsx)($,{flex:1,style:{height:300,backgroundColor:"var(--accent)",padding:10,borderRadius:25},image:"/config/images/coinPile2.png",children:Object(ne.jsx)(Z,{style:{height:100}})})]})}),Object(ne.jsx)(J,{}),Object(ne.jsx)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",padding:10,borderRadius:25},children:Object(ne.jsxs)(ae,{flex:1,style:{padding:18,width:"75%"},test:!0,children:[Object(ne.jsx)($,{flex:1,style:{height:300,backgroundColor:"var(--accent)",padding:10,borderRadius:25},image:"/config/images/RoadToNEXUS.png",children:Object(ne.jsx)(Z,{style:{height:100}})}),Object(ne.jsxs)($,{flex:1,style:{backgroundColor:"var(--accent)",padding:25},children:[Object(ne.jsx)(ie,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(V,{}),Object(ne.jsx)(ee,{style:{textAlign:"left",color:"var(--accent-text)",fontSize:22,fontWeight:"bold"},children:"Our vision"}),Object(ne.jsx)(J,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"We believe in a decentralised, open, metaverse future."}),Object(ne.jsx)(X,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:'All efforts must be made to prevent Big Tech from ushering in a "Snow Crash" dystopia.'}),Object(ne.jsx)(X,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"Lucid Spectre's ultimate goal is to build an open source, Web3, social VR platform powered by Ethereum. A metaverse owned by the users."}),Object(ne.jsx)(X,{}),Object(ne.jsx)(te,{style:{textAlign:"left",color:"var(--accent-text)"},children:"One NFT collection won't make this dream happen. But it's enough to research and plan our next steps. Enough to build an army. Are you with us?"})]})]})}),Object(ne.jsx)(J,{}),Object(ne.jsxs)($,{jc:"center",ai:"center",style:{width:"100%",backgroundColor:"var(--accent)",borderRadius:25},children:[Object(ne.jsx)(X,{}),Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)",fontSize:30,fontWeight:"bold",padding:5},children:"Become a Spectre"}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)",padding:5},children:"Stay up to date with the latest news about our project or become an active member of our community"}),Object(ne.jsxs)($,{flex:1,ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)($,{ai:"center",jc:"center",style:{padding:32},children:Object(ne.jsx)("a",{href:"https://discord.gg/SpectreLucid",children:Object(ne.jsx)("img",{alt:"Discord",src:"/config/images/Discord-Logo-White.png",width:"64",height:"72"})})}),Object(ne.jsx)($,{ai:"center",jc:"center",style:{padding:32},children:Object(ne.jsx)("a",{href:"https://twitter.com/spectrelucid",children:Object(ne.jsx)("img",{alt:"Twitter",src:"/config/images/2021 Twitter logo - white.png",width:"64",height:"53"})})})]})]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)($,{flex:1,ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(te,{children:"This website was built on top of the"}),Object(ne.jsx)(X,{}),Object(ne.jsx)(le,{target:"_blank",href:"https://github.com/HashLips/hashlips_nft_minting_dapp",children:"HashLips NFT minting dapp"})]})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(533);v.a.render(Object(ne.jsx)(E.a,{store:z,children:Object(ne.jsx)(de,{})}),document.getElementById("root")),je()}},[[534,1,2]]]);
//# sourceMappingURL=main.be6b1dd2.chunk.js.map