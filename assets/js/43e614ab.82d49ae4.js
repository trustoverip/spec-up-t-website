"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1319],{2557:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),t=n(8453);const o={sidebar_position:15},d="Developers Guide",r={id:"Roles/developers-guide",title:"Developers Guide",description:"This is the developers guide for the Spec-Up-T system.",source:"@site/docs/Roles/developers-guide.md",sourceDirName:"Roles",slug:"/Roles/developers-guide",permalink:"/spec-up-t-website/docs/Roles/developers-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/blockchainbird/spec-up-t-website/tree/main/docs/Roles/developers-guide.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Readers Guide",permalink:"/spec-up-t-website/docs/Roles/readers-guide/introduction"},next:{title:"Spec-Up-T demo",permalink:"/spec-up-t-website/docs/spec-up-t-demo-site"}},l={},c=[{value:"How do you get a new version of Spec-Up-T live?",id:"how-do-you-get-a-new-version-of-spec-up-t-live",level:2},{value:"Adding client-side functionality",id:"adding-client-side-functionality",level:2},{value:"Gulp",id:"gulp",level:2},{value:"Adding server-side functionality",id:"adding-server-side-functionality",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"developers-guide",children:"Developers Guide"}),"\n",(0,s.jsx)(i.p,{children:"This is the developers guide for the Spec-Up-T system."}),"\n",(0,s.jsxs)(i.p,{children:["The repo can be found ",(0,s.jsx)(i.a,{href:"https://github.com/blockchainbird/spec-up-t",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"how-do-you-get-a-new-version-of-spec-up-t-live",children:"How do you get a new version of Spec-Up-T live?"}),"\n",(0,s.jsx)(i.p,{children:"If you want to add new functionality to Spec-Up-T you will find below how to proceed."}),"\n",(0,s.jsx)(i.p,{children:"There are two repos that come into play:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/blockchainbird/spec-up-t",children:"The Spec-Up-T repo"}),", with ",(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/spec-up-t",children:"associated NPM package"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://github.com/blockchainbird/spec-up-t-starter-pack",children:"The Spec-Up-T installer repo"}),", with ",(0,s.jsx)(i.a,{href:"https://www.npmjs.com/package/create-spec-up-t",children:"associated NPM package"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The Spec-Up-T installer uses Spec-Up-T as a package in node_modules, which is installed via ",(0,s.jsx)(i.code,{children:"npm install"})," after you install the Spec-Up-T installer itself (see Admin section for this)."]}),"\n",(0,s.jsx)(i.p,{children:"How to update Git repositories goes too far here, you can find a lot of info about that online."}),"\n",(0,s.jsx)(i.p,{children:"How to publish an updated package version to NPM:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:['Update the "version" in ',(0,s.jsx)(i.code,{children:"package.json"})," to a higher number (use ",(0,s.jsx)(i.a,{href:"https://semver.org/",children:"SemVer"}),"), for example go from\n",(0,s.jsx)(i.code,{children:'"version": "0.11.29"'})," to ",(0,s.jsx)(i.code,{children:'"version": "0.11.30"'})]}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"npm publish"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Note: The The Spec-Up-T installer repo has two ",(0,s.jsx)(i.code,{children:"package.json"}),"s. One in the root, it belongs to the repo itself. The other inside the directory that contains a full Spec-Up-T installation. This is the ",(0,s.jsx)(i.code,{children:"package.json"})," that will be used later. The first one is only used for the installation itself. For simplicity, keep both version numbers the same."]}),"\n",(0,s.jsx)(i.p,{children:"The new package will usually be available as soon as it is uploaded."}),"\n",(0,s.jsx)(i.h2,{id:"adding-client-side-functionality",children:"Adding client-side functionality"}),"\n",(0,s.jsxs)(i.p,{children:["Client-side JavaScript and CSS can be found in these directories: ",(0,s.jsx)(i.code,{children:"/assets/js"})," and ",(0,s.jsx)(i.code,{children:"/assets/css"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["This code must first be \u201ccompiled\u201d before it enters ",(0,s.jsx)(i.code,{children:"index.html"}),". Compiling in this case means that it will end up in the directory ",(0,s.jsx)(i.code,{children:"/assets/compiled"}),". If it is there, it will end up in a newly generated ",(0,s.jsx)(i.code,{children:"index.html"})," via the ",(0,s.jsx)(i.code,{children:"render"})," step. For rendering, see the admin section."]}),"\n",(0,s.jsxs)(i.p,{children:["This is the command to compile: ",(0,s.jsx)(i.code,{children:"gulp compile"})]}),"\n",(0,s.jsx)(i.p,{children:"So, if you have written client-side JavaScript, or custom CSS you need to take the following steps to get this code working (the \u201c$\u201d at the beginning is the command prompt, and you should not type it):"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"$ gulp compile\n"})}),"\n",(0,s.jsx)(i.p,{children:"Wait for the code to finish. Then:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"$ npm run render\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Now your ",(0,s.jsx)(i.code,{children:"index.html"})," file should be created or updated."]}),"\n",(0,s.jsx)(i.h2,{id:"gulp",children:"Gulp"}),"\n",(0,s.jsxs)(i.p,{children:["Of course, you can only use Gulp if you have it ",(0,s.jsx)(i.a,{href:"https://gulpjs.com/docs/en/getting-started/quick-start",children:"installed"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"If Gulp suddenly stops working even though it worked before, it could be because you are using NVM and have a different Node.js version active."})}),"\n",(0,s.jsx)(i.h2,{id:"adding-server-side-functionality",children:"Adding server-side functionality"}),"\n",(0,s.jsx)(i.p,{children:"To be written."})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>r});var s=n(6540);const t={},o=s.createContext(t);function d(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);