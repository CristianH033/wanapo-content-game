import{d as c,g as d,z as x,D as m,p as u,v as f,o as p,c as _,b as t,m as a,Q as w,e,t as g,w as h,B as v,y as b,G as y,q as B,x as j,E as S}from"./index-Dfw_ArRc.js";import{Q as C}from"./QR-BrPlTJEo.js";const G="/wanapo-content-game/assets/grey-arc-Bs1BwXmH.webp",Q="/wanapo-content-game/assets/doctor-BGlZScQh.webp",V={initial:{opacity:0},enter:{opacity:1,transition:{delay:100,duration:500}},class:"h-dvh w-full overflow-x-hidden grid grid-cols-1 grid-rows-[1fr_1fr_10rem_10rem]"},k=b('<div class="w-full flex flex-col justify-center items-center"><img src="'+S+'" class="max-h-32 max-w-[50%]"></div><div class="w-full flex flex-col justify-start items-center relative"><img class="w-full -mt-[40%] xs:-mt-[30%]" src="'+G+'" alt="" srcset=""><div class="w-full grow bg-geyser"><img class="absolute bottom-0 left-0 max-w-[50%] max-h-[120%] self-end" src="'+Q+'" alt=""><div class="w-full h-full min-h-[150px] flex flex-row justify-end items-center"><div class="w-[60%]"><p class="font-bold text-4xl sm:text-5xl text-center text-resolution-blue italic"> ¡Muy Bien! </p><p class="font-bold text-3xl sm:text-4xl text-center text-resolution-blue italic"> felicitaciones </p></div></div></div></div>',2),D={class:"p-4 w-full grow bg-geyser border-t-[8px] border-iron-500"},N=e("p",{class:"leading-8 text-center text-2xl sm:text-3xl italic font-bold text-mosque"}," Lograste armar ",-1),q={class:"leading-8 text-center text-4xl sm:text-5xl italic font-bold text-resolution-blue"},L={class:"w-full flex flex-col justify-center items-center bg-mosque"},R={class:"w-full h-full flex flex-row justify-end items-center gap-10 px-5"},A={class:"w-24 h-24 bg-white p-2 rounded-se-[15px_15px] rounded-es-[15px_15px]"},H=c({__name:"CongratsView",setup(E){const s=d(),i=x(),o=y(),r=()=>{s.newGame(),o.push({name:"home"})};return m(async()=>{await i.rippleTransition()}),u(()=>{}),(M,l)=>{const n=B("motion");return f((p(),_("div",V,[t(w,{onClick:l[0]||(l[0]=T=>a(o).push({name:"config"})),class:"absolute top-2 left-2 w-16 max-w-[15%] h-16 fill-resolution-blue"}),k,e("div",D,[N,e("p",q,g(a(s).getPairsFound)+" parejas ",1)]),e("div",L,[t(v,{class:"shadow-xl -mt-8",type:"button",onClick:r},{default:h(()=>[j("Aceptar")]),_:1}),e("div",R,[e("div",A,[t(C)])])])])),[[n]])}}});export{H as default};