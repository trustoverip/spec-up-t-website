"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6819],{1896:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var d=i(4848),r=i(8453);const o={sidebar_position:3},c="Command Line Menu",s={id:"general/command-line-menu",title:"Command Line Menu",description:"You don't have to be a command-line wizard to use Spec-Up-T. There's even a menu, so all you have to do is type in a number, which makes a difference, right?",source:"@site/docs/general/command-line-menu.md",sourceDirName:"general",slug:"/general/command-line-menu",permalink:"/spec-up-t-website/docs/general/command-line-menu",draft:!1,unlisted:!1,editUrl:"https://github.com/blockchainbird/spec-up-t-website/tree/main/docs/general/command-line-menu.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/spec-up-t-website/docs/general/configuration"},next:{title:"How To's",permalink:"/spec-up-t-website/docs/general/how-to"}},t={},l=[{value:"Start command line menu",id:"start-command-line-menu",level:2},{value:"<code>[0] Publish</code>",id:"0-publish",level:3},{value:"Info",id:"info",level:4},{value:"<code>[1] Render specification</code>",id:"1-render-specification",level:3},{value:"Info",id:"info-1",level:4},{value:"Direct command",id:"direct-command",level:4},{value:"<code>[2] Export to PDF</code>",id:"2-export-to-pdf",level:3},{value:"Info",id:"info-2",level:4},{value:"Direct command",id:"direct-command-1",level:4},{value:"<code>[3] Look up xrefs</code>",id:"3-look-up-xrefs",level:3},{value:"Info",id:"info-3",level:4},{value:"Direct command",id:"direct-command-2",level:4},{value:"<code>[4] Remove xref</code>",id:"4-remove-xref",level:3},{value:"Info",id:"info-4",level:4},{value:"Direct command",id:"direct-command-3",level:4},{value:"<code>[5] Validate config file</code>",id:"5-validate-config-file",level:3},{value:"Info",id:"info-5",level:4},{value:"Direct command",id:"direct-command-4",level:4},{value:"<code>[6] Add new terms</code>",id:"6-add-new-terms",level:3},{value:"Info",id:"info-6",level:4},{value:"Direct command",id:"direct-command-5",level:4},{value:"<code>[7] Open documentation website</code>",id:"7-open-documentation-website",level:3},{value:"Info",id:"info-7",level:4},{value:"Direct command",id:"direct-command-6",level:4},{value:"<code>[8] Freeze specification</code>",id:"8-freeze-specification",level:3},{value:"Direct command",id:"direct-command-7",level:4},{value:"<code>[Q] Quit</code>",id:"q-quit",level:3},{value:"Info",id:"info-8",level:4},{value:"Direct command",id:"direct-command-8",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"command-line-menu",children:"Command Line Menu"})}),"\n",(0,d.jsx)(n.p,{children:"You don't have to be a command-line wizard to use Spec-Up-T. There's even a menu, so all you have to do is type in a number, which makes a difference, right?"}),"\n",(0,d.jsx)(n.p,{children:"Still, it can be confusing. And if you're used to a regular application you control with your mouse, it takes some getting used to."}),"\n",(0,d.jsx)(n.h2,{id:"start-command-line-menu",children:"Start command line menu"}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsx)(n.p,{children:"Currently, the menu is only tested on MacOs and has not been tested on Windows OS."})}),"\n",(0,d.jsxs)(n.p,{children:["Assuming you already ",(0,d.jsx)(n.a,{href:"/spec-up-t-website/docs/general/installation",children:"installed"})," Spec-Up-T, here you find further instructions."]}),"\n",(0,d.jsx)(n.p,{children:"To start, run this command in the terminal:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run menu\n"})}),"\n",(0,d.jsx)(n.p,{children:"You will now see this menu:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"Please choose one of the following options:\n\n    [0] Publish \xb9\n\n    [1] Render specification\n    [2] Export to PDF\n    [3] Look up xrefs\n    [4] Remove xref\n    [5] Validate config file\n    [6] Add new terms\n    [7] Open documentation website\n    [8] Freeze specification\n    [Q] Quit\n\n    \xb9 Publish = [6]+[2]+[3]+[1]\n\n\n    Enter your choice (0/1/2/3/4/5/6/7/8/Q)?\n"})}),"\n",(0,d.jsxs)(n.p,{children:["These menu options act as shortcuts to the below commands, such as ",(0,d.jsx)(n.code,{children:"npm run render"})," and others. You can choose between using the menu or entering the direct commands yourself."]}),"\n",(0,d.jsx)(n.h3,{id:"0-publish",children:(0,d.jsx)(n.code,{children:"[0] Publish"})}),"\n",(0,d.jsx)(n.h4,{id:"info",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Runs the below options in given order: [6]+[2]+[3]+[1]."})}),"\n",(0,d.jsx)(n.p,{children:"Use this if you use a GitHub token and, therefore, don't have to worry about the limited number of GitHub API calls you can make per hour."}),"\n",(0,d.jsx)(n.h3,{id:"1-render-specification",children:(0,d.jsx)(n.code,{children:"[1] Render specification"})}),"\n",(0,d.jsx)(n.h4,{id:"info-1",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["Creates the specification, an index.html, in the ",(0,d.jsx)(n.code,{children:"docs"})," directory, as specified in the ",(0,d.jsx)(n.code,{children:"specs.json"})," file."]})}),"\n",(0,d.jsxs)(n.p,{children:["To view the ",(0,d.jsx)(n.code,{children:"index.html"})," file, you can:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Open it via ",(0,d.jsx)(n.code,{children:"file:///"})," in your file manager or"]}),"\n",(0,d.jsx)(n.li,{children:"Access it via HTTP by placing it on a web server."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"The easiest way is to double-click the file in your file manager, which should open it in your browser."}),"\n",(0,d.jsxs)(n.p,{children:["By the way, there are ",(0,d.jsx)(n.strong,{children:"three"})," modes for rendering the specification:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Command"}),(0,d.jsx)(n.th,{children:"Behavior"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"npm run edit"})})}),(0,d.jsx)(n.td,{children:"Renders the site and watches for changes, re-rendering automatically when you save a file."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"npm run render"})})}),(0,d.jsx)(n.td,{children:"Renders the site once without watching for changes."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"npm run dev"})})}),(0,d.jsx)(n.td,{children:"Enables debugging features."})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"direct-command",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run render\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"2-export-to-pdf",children:(0,d.jsx)(n.code,{children:"[2] Export to PDF"})}),"\n",(0,d.jsx)(n.h4,{id:"info-2",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["Creates a PDF. The PDF will be created in the same directory as the ",(0,d.jsx)(n.code,{children:"index.html"})," file."]})}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-1",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run topdf\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"3-look-up-xrefs",children:(0,d.jsx)(n.code,{children:"[3] Look up xrefs"})}),"\n",(0,d.jsx)(n.h4,{id:"info-3",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Creates an \u201cxref\u201d (external reference)."})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"xrefs"})," are references to external glossaries (specifications). Each ",(0,d.jsx)(n.code,{children:"xref"})," is checked against a local data collection to see if a reference exists, maintaining an external term's original version."]}),"\n",(0,d.jsx)(n.p,{children:"This separate command is not just used when generating a specification (option [1]) because, without a GitHub token, you are only allowed a limited number of calls to the GitHub API. So, you may choose not to create the xrefs until the end of your work session."}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-2",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run xrefs\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"4-remove-xref",children:(0,d.jsx)(n.code,{children:"[4] Remove xref"})}),"\n",(0,d.jsx)(n.h4,{id:"info-4",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Removes an \u201cxref\u201d (external reference)."})}),"\n",(0,d.jsxs)(n.p,{children:["After removing the old reference, you can run ",(0,d.jsx)(n.code,{children:"npm run xrefs"})," again to get the latest reference."]}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-3",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'npm run removexref -- "termValue" "externalSpecValue"\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"5-validate-config-file",children:(0,d.jsx)(n.code,{children:"[5] Validate config file"})}),"\n",(0,d.jsx)(n.h4,{id:"info-5",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["Tests the ",(0,d.jsx)(n.code,{children:"spec.json"})," for missing keys."]})}),"\n",(0,d.jsxs)(n.p,{children:["Once you've edited the ",(0,d.jsx)(n.code,{children:"spec.json"}),", you can test it to check for missing keys. If a key is missing, you'll receive a notification."]}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-4",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run validatespec\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"6-add-new-terms",children:(0,d.jsx)(n.code,{children:"[6] Add new terms"})}),"\n",(0,d.jsx)(n.h4,{id:"info-6",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:"Adds a new file (with a term) to the specification."}),"\n",(0,d.jsx)(n.p,{children:"If you create a new Markdown file with a term and definition in it, it is not automatically included in the final product. It can be included in the index only if you want it to be. With this command, you add it to the index."}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-5",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run addterms\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"7-open-documentation-website",children:(0,d.jsx)(n.code,{children:"[7] Open documentation website"})}),"\n",(0,d.jsx)(n.h4,{id:"info-7",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:"This command will redirect to the documentation website (the site you are reading right now)."}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-6",children:"Direct command"}),"\n",(0,d.jsx)(n.p,{children:"No Direct command."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"8-freeze-specification",children:(0,d.jsx)(n.code,{children:"[8] Freeze specification"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["Makes a copy of the ",(0,d.jsx)(n.code,{children:"index.html"})," file and adds a version number to the file name."]})}),"\n",(0,d.jsxs)(n.p,{children:["Example: ",(0,d.jsx)(n.code,{children:"index-v1.html"}),", ",(0,d.jsx)(n.code,{children:"index-v2.html"})," etc. These files are placed in the same folder as the ",(0,d.jsx)(n.code,{children:"index.html"})," but in a subfolder called ",(0,d.jsx)(n.code,{children:"versions"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-7",children:"Direct command"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"npm run freeze\n"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"q-quit",children:(0,d.jsx)(n.code,{children:"[Q] Quit"})}),"\n",(0,d.jsx)(n.h4,{id:"info-8",children:"Info"}),"\n",(0,d.jsx)(n.p,{children:"This command will take you out of the menu."}),"\n",(0,d.jsx)(n.h4,{id:"direct-command-8",children:"Direct command"}),"\n",(0,d.jsx)(n.p,{children:"No Direct command."}),"\n",(0,d.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var d=i(6540);const r={},o=d.createContext(r);function c(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);