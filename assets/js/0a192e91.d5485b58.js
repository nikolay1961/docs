"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[9917],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(o),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return o?n.createElement(d,s(s({ref:t},u),{},{components:o})):n.createElement(d,s({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<a;i++)s[i]=o[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3615:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:7},s="s3fs-fuse",c={unversionedId:"products/Object-Storage/Tools/s3fs-fuse",id:"products/Object-Storage/Tools/s3fs-fuse",title:"s3fs-fuse",description:"Using s3fs-fuse you can mount a bucket of your S3 compatible Object Storage as a folder on Linux, macOS and FreeBSD machine.",source:"@site/docs/products/Object-Storage/Tools/s3fs-fuse.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/s3fs-fuse",permalink:"/docs/products/Object-Storage/Tools/s3fs-fuse",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/s3fs-fuse.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"productSidebar",previous:{title:"Goofys",permalink:"/docs/products/Object-Storage/Tools/goofys"},next:{title:"WinSCP",permalink:"/docs/products/Object-Storage/Tools/winscp"}},l={},i=[{value:"Example",id:"example",level:2}],u={toc:i};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"s3fs-fuse"},"s3fs-fuse"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse")," you can mount a bucket of your S3 compatible Object Storage as a folder on Linux, macOS and FreeBSD machine."),(0,r.kt)("p",null,"Please follow the installation instruction like described on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/s3fs-fuse/s3fs-fuse"},"s3fs-fuse"),"."),(0,r.kt)("p",null,"In case of Debian / Ubuntu system please perform following action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install s3fs\n")),(0,r.kt)("p",null,"Here the way to mount a bucket which is not reboot safe is shown. All you will need is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,r.kt)("li",{parentName:"ul"},"Contabo's S3 URL"),(0,r.kt)("li",{parentName:"ul"},"your bucket name"),(0,r.kt)("li",{parentName:"ul"},"folder (mount point) where you want make your bucket contents available")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,r.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,r.kt)("li",{parentName:"ul"},"S3 URL = ",(0,r.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com")),(0,r.kt)("li",{parentName:"ul"},"bucket name = foo"),(0,r.kt)("li",{parentName:"ul"},"mount point = ${HOME}/foo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# create a settings file with your access_key:secret_key\necho 82046e8110804a43bf29c1ae426a724d:82e69bd7a52076c527154297a76c2233 > ${HOME}/.passwd-s3fs\nchmod 600 ${HOME}/.passwd-s3fs\n# create mount point\nmkdir ${HOME}/foo\n# mount bucket foo to ${HOME}/foo\ns3fs foo ${HOME}/foo -o passwd_file=${HOME}/.passwd-s3fs -o url=https://eu2.contabostorage.com -o use_path_request_style\n# access contents\nls -la ${HOME}/foo\n")))}p.isMDXComponent=!0}}]);