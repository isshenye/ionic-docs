(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[34354],{91280:function(t,n,l){"use strict";l.r(n),l.d(n,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var e=l(22122),i=l(19756),o=(l(67294),l(3905)),a={title:"build",sidebar_label:"build"},u={unversionedId:"cli/commands/build",id:"cli/commands/build",isDocsHomePage:!1,title:"ionic build",description:"Build web assets and prepare your app for any platform targets",source:"@site/docs/cli/commands/build.md",sourceDirName:"cli/commands",slug:"/cli/commands/build",permalink:"/docs/cli/commands/build",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/commands/build.md",version:"current",sidebar_label:"build",frontMatter:{title:"build",sidebar_label:"build"},sidebar:"cli",previous:{title:"Using a Proxy",permalink:"/docs/cli/using-a-proxy"},next:{title:"ionic capacitor add",permalink:"/docs/cli/commands/capacitor-add"}},d=[{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"Advanced Options",id:"advanced-options",children:[]}],r={toc:d};function p(t){var n=t.components,l=(0,i.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,e.Z)({},r,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Build web assets and prepare your app for any platform targets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic build [options]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic build")," will perform an Ionic build, which compiles web assets and prepares them for deployment."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic build")," uses the Angular CLI. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"ng build --help")," to list all Angular CLI options for building your app. See the ",(0,o.kt)("inlineCode",{parentName:"p"},"ng build")," ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/cli/build"},"docs")," for explanations. Options not listed below are considered advanced and can be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ng")," CLI using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," separator after the Ionic CLI arguments. See the examples."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic build \n$ ionic build --prod\n$ ionic build --watch\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-prod",id:"option-prod"},"--prod"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("p",null,"Flag to use the ",(0,o.kt)("code",null,"production")," configuration"))))),(0,o.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("table",{className:"reference-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-configuration",id:"option-configuration"},"--configuration",(0,o.kt)("span",{class:"option-spec"}," =<conf>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Specify the configuration to use.")))),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Aliases"),(0,o.kt)("td",null,(0,o.kt)("code",null,"-c")))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-source-map",id:"option-source-map"},"--source-map"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Output source maps"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-watch",id:"option-watch"},"--watch"))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Rebuild when files change"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-engine",id:"option-engine"},"--engine",(0,o.kt)("span",{class:"option-spec"}," =<engine>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Target engine (e.g. ",(0,o.kt)("code",null,"browser"),", ",(0,o.kt)("code",null,"cordova"),")"))))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{colSpan:"2"},(0,o.kt)("h3",null,(0,o.kt)("a",{href:"#option-platform",id:"option-platform"},"--platform",(0,o.kt)("span",{class:"option-spec"}," =<platform>")))))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Description"),(0,o.kt)("td",null,(0,o.kt)("div",null,(0,o.kt)("p",null,"Target platform on chosen engine (e.g. ",(0,o.kt)("code",null,"ios"),", ",(0,o.kt)("code",null,"android"),")")))))))}p.isMDXComponent=!0}}]);