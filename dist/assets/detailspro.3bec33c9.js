import{t as h}from"./tete.10d07247.js";import{_ as p,l as u,f as s,g as n,m,j as t,L as r,t as i,F as g,v as b}from"./index.929bab21.js";const v={components:{tete:h},data(){return{post:null}},mounted(){this.fetchUser(),localStorage.getItem("Montoken")&&(this.isAuthenticated=!0)},methods:{async fetchUser(){try{const e=localStorage.getItem("Mon token"),c=this.$route.params.id,a=await(await fetch(`http://localhost:3004/pro/one/${c}`,{headers:{Authorization:`Bearer ${e}`}})).json();this.post=a}catch(e){console.error(e)}},handleLogout(){this.isAuthenticated=!1,localStorage.removeItem("Montoken"),location.reload()}}},f={key:0},k={class:"bg-gray-200 text-white text-center py-3"},y=["src"],x={class:"container mt-5"},w={class:"row"},A={class:"col-md-8"},I=t("h2",{class:"text-primary"},"Description du projet",-1),N={class:"lead"},S=t("strong",null,"Les partenaires : ",-1),j=b('<div class="row mt-4"><div class="col-md-6"><button class="btn btn-warning btn-lg btn-block">Investir</button></div><div class="col-md-6"><button class="btn btn-success btn-lg btn-block">Faire un don</button></div></div>',1),B={key:1},D=t("p",null,"Chargement en cours...",-1),L=[D];function V(e,c,l,a,o,d){const _=u("tete");return s(),n(g,null,[m(_,{isAuthenticated:e.isAuthenticated,onDeconnect:d.handleLogout},null,8,["isAuthenticated","onDeconnect"]),o.post?(s(),n("div",f,[t("header",k,[t("img",{src:o.post.files,alt:"Image du projet",id:"x",class:""},null,8,y)]),t("main",x,[t("div",w,[t("div",A,[I,r(" Nom : "),t("p",N,i(o.post.descriptionb),1),S,r(" "+i(o.post.partenaire),1)])]),j])])):(s(),n("div",B,L))],64)}const C=p(v,[["render",V]]);export{C as default};