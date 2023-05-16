"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[1083],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="rclone",l={unversionedId:"products/Object-Storage/Tools/rclone",id:"products/Object-Storage/Tools/rclone",title:"rclone",description:"rclone is a free tool for manging files and folders on cloud storage on Windows, macOS, linux and FreeBSD. This includes protocols including S3 compatible Object Storage.",source:"@site/docs/products/Object-Storage/Tools/rclone.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/rclone",permalink:"/docs/products/Object-Storage/Tools/rclone",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/rclone.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"productSidebar",previous:{title:"aws cli",permalink:"/docs/products/Object-Storage/Tools/aws-cli"},next:{title:"Cyberduck",permalink:"/docs/products/Object-Storage/Tools/cyberduck"}},c={},s=[{value:"Configuration for Contabo&#39;s S3 compatible Object Storage",id:"configuration-for-contabos-s3-compatible-object-storage",level:2},{value:"Example values",id:"example-values",level:3},{value:"Steps",id:"steps",level:3},{value:"rclone config",id:"rclone-config",level:3},{value:"Usage",id:"usage",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rclone"},"rclone"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rclone.org/"},"rclone")," is a free tool for manging files and folders on cloud storage on Windows, macOS, linux and FreeBSD. This includes protocols including S3 compatible Object Storage."),(0,r.kt)("p",null,"Please follow the installation instruction like described on ",(0,r.kt)("a",{parentName:"p",href:"https://rclone.org/downloads/"},"rclone"),". We generally recommend using the latest stable release from there and ",(0,r.kt)("strong",{parentName:"p"},"not")," installing rclone via your distro's package manager. E.g. the download/upload speed can suffer from older rclone versions."),(0,r.kt)("p",null,"All you will need is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,r.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,r.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,r.kt)("h2",{id:"configuration-for-contabos-s3-compatible-object-storage"},"Configuration for Contabo's S3 compatible Object Storage"),(0,r.kt)("h3",{id:"example-values"},"Example values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,r.kt)("li",{parentName:"ul"},"S3 URL = ",(0,r.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com"))),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"rclone config")),(0,r.kt)("li",{parentName:"ol"},"specify ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"n) New remote")),(0,r.kt)("li",{parentName:"ol"},"specify a name, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"eu2")),(0,r.kt)("li",{parentName:"ol"},"specify ",(0,r.kt)("inlineCode",{parentName:"li"},"4")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Amazon S3 Compliant Storage Providers including AWS, Alibaba, Ceph, Digital Ocean, Dreamhost, IBM COS, Minio, SeaweedFS, and Tencent COS")),(0,r.kt)("li",{parentName:"ol"},"specify ",(0,r.kt)("inlineCode",{parentName:"li"},"2")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Ceph Object Storage")),(0,r.kt)("li",{parentName:"ol"},"speficy ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Enter AWS credentials in the next step.")),(0,r.kt)("li",{parentName:"ol"},"specify your access_key, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"82046e8110804a43bf29c1ae426a724d")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key_id")),(0,r.kt)("li",{parentName:"ol"},"specify your secret_key, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"82e69bd7a52076c527154297a76c2233")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"secret_access_key")),(0,r.kt)("li",{parentName:"ol"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("inlineCode",{parentName:"li"},"region")),(0,r.kt)("li",{parentName:"ol"},"specifiy the S3 URL, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://eu2.contabostorage.com")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint")),(0,r.kt)("li",{parentName:"ol"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("inlineCode",{parentName:"li"},"location_constraint")),(0,r.kt)("li",{parentName:"ol"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skil ",(0,r.kt)("inlineCode",{parentName:"li"},"acl")),(0,r.kt)("li",{parentName:"ol"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("inlineCode",{parentName:"li"},"server_side_encryption")),(0,r.kt)("li",{parentName:"ol"},"press ",(0,r.kt)("inlineCode",{parentName:"li"},"return")," to skip ",(0,r.kt)("inlineCode",{parentName:"li"},"sse_kms_key_id")),(0,r.kt)("li",{parentName:"ol"},"specify ",(0,r.kt)("inlineCode",{parentName:"li"},"n")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit advanced config")),(0,r.kt)("li",{parentName:"ol"},"specify ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"Yes this is OK (default)")),(0,r.kt)("li",{parentName:"ol"},"optionally specify ",(0,r.kt)("inlineCode",{parentName:"li"},"q")," to quit configuration mode")),(0,r.kt)("h3",{id:"rclone-config"},"rclone config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[eu2]\ntype = s3\nprovider = Ceph\naccess_key_id = 82046e8110804a43bf29c1ae426a724d\nsecret_access_key = 82e69bd7a52076c527154297a76c2233\nendpoint = https://eu2.contabostorage.com/\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Example to sync the entire current folder to Object Storage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rclone sync -P . eu2:bucketname/folder\n")))}d.isMDXComponent=!0}}]);