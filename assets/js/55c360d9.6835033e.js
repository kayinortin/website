"use strict";(self.webpackChunkedison=self.webpackChunkedison||[]).push([[36],{1701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(4848),r=n(8453),s=n(147);const a={id:3,title:"Git Flow",description:"Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.",keywords:["Git","Git Flow","Git Order"]},o="Git Flow",l={id:"Git/3",title:"Git Flow",description:"Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.",source:"@site/docs/Git/3-Git Flow.md",sourceDirName:"Git",slug:"/Git/3",permalink:"/website/docs/Git/3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Git/3-Git Flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"3",title:"Git Flow",description:"Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository.",keywords:["Git","Git Flow","Git Order"]},sidebar:"tutorialSidebar",previous:{title:"Git References",permalink:"/website/docs/Git/2"}},c={},d=[{value:"Branches",id:"branches",level:2},{value:"Workflow",id:"workflow",level:2},{value:"A successful Git branching model",id:"a-successful-git-branching-model",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"git-flow",children:"Git Flow"}),"\n",(0,i.jsx)(t.p,{children:"Git Flow is a branching model for Git that helps teams manage their codebase and collaborate effectively. It provides a set of guidelines and best practices for organizing branches and releases in a Git repository."}),"\n",(0,i.jsx)(t.h2,{id:"branches",children:"Branches"}),"\n",(0,i.jsx)(t.p,{children:"Git Flow defines several types of branches:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Master"}),": The main branch that represents the production-ready code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Develop"}),": The branch where all the new features are integrated and tested before being merged into the master branch."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Feature"}),": Branches created for developing new features. They are based on the develop branch and merged back into it once the feature is complete."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Release"}),": Branches created for preparing a new release. They are based on the develop branch and merged into both the master and develop branches once the release is ready."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hotfix"}),": Branches created for fixing critical issues in the production code. They are based on the master branch and merged back into both the master and develop branches."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsx)(t.p,{children:"The typical workflow in Git Flow is as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a new feature branch from the develop branch: ",(0,i.jsx)(t.code,{children:"git flow feature start <feature-name>"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Work on the feature and commit your changes."}),"\n",(0,i.jsxs)(t.li,{children:["Finish the feature and merge it back into the develop branch: ",(0,i.jsx)(t.code,{children:"git flow feature finish <feature-name>"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Create a new release branch from the develop branch: ",(0,i.jsx)(t.code,{children:"git flow release start <release-version>"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Perform any necessary final adjustments and testing on the release branch."}),"\n",(0,i.jsxs)(t.li,{children:["Finish the release and merge it into both the master and develop branches: ",(0,i.jsx)(t.code,{children:"git flow release finish <release-version>"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Create a new hotfix branch from the master branch: ",(0,i.jsx)(t.code,{children:"git flow hotfix start <hotfix-version>"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Fix the critical issue on the hotfix branch and commit your changes."}),"\n",(0,i.jsxs)(t.li,{children:["Finish the hotfix and merge it back into both the master and develop branches: ",(0,i.jsx)(t.code,{children:"git flow hotfix finish <hotfix-version>"}),"."]}),"\n"]}),"\n","\n","\n",(0,i.jsx)(t.h2,{id:"a-successful-git-branching-model",children:"A successful Git branching model"}),"\n",(0,i.jsx)(s.A,{src:"https://gitbook.tw/images/tw/gitflow/why-need-git-flow/flow.png"})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},147:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var i=n(4848);const r=e=>{let{src:t}=e;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"20px"},children:(0,i.jsx)("img",{src:t,alt:"center-image",width:"75%",style:{margin:"0 auto"}})})}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);