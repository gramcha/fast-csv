(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(6),r=(a(0),a(137)),o={title:"Options"},c={id:"formatting/options",title:"Options",description:"All of the following options can be passed to any of the formatting methods.",source:"@site/docs/formatting/options.md",permalink:"/fast-csv/docs/formatting/options",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/formatting/options.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/fast-csv/docs/formatting/getting-started"},next:{title:"Row Types",permalink:"/fast-csv/docs/formatting/row-types"}},b=[{value:"delimiter",id:"delimiter",children:[]},{value:"rowDelimiter",id:"rowdelimiter",children:[]},{value:"quote",id:"quote",children:[]},{value:"escape",id:"escape",children:[]},{value:"includeEndRowDelimiter",id:"includeendrowdelimiter",children:[]},{value:"writeBOM",id:"writebom",children:[]},{value:"headers",id:"headers",children:[]},{value:"writeHeaders",id:"writeheaders",children:[]},{value:"alwaysWriteHeaders",id:"alwayswriteheaders",children:[]},{value:"quoteColumns",id:"quotecolumns",children:[]},{value:"quoteHeaders",id:"quoteheaders",children:[]},{value:"transform",id:"transform",children:[]}],l={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All of the following options can be passed to any of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/methods"}),"formatting methods"),"."),Object(r.b)("h2",{id:"delimiter"},"delimiter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"','")),Object(r.b)("p",null,"Specify an alternate field delimiter such as ",Object(r.b)("inlineCode",{parentName:"p"},";")," or ",Object(r.b)("inlineCode",{parentName:"p"},"\\t"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#alternate-delimiter"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When specifying an alternate ",Object(r.b)("inlineCode",{parentName:"p"},"delimiter")," you may only pass in a single character delimiter"))),Object(r.b)("h2",{id:"rowdelimiter"},"rowDelimiter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'\\n'")),Object(r.b)("p",null,"Specify an alternate row delimiter (i.e ",Object(r.b)("inlineCode",{parentName:"p"},"\\r\\n"),"). ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#alternate-rowdelimiter"}),"Example")),Object(r.b)("h2",{id:"quote"},"quote"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string|boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'\"'")),Object(r.b)("p",null,"If provided as a string it will be used to quote fields that contain a delimiter. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#alternate-quote"}),"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'"first,name",last name`\n')),Object(r.b)("p",null,"If set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the default quote will be used. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is the same as not providing the option"))),Object(r.b)("p",null,"If set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," then quoting will be disabled "),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If your field could contain a delimiter then you may end up with extra columns"))),Object(r.b)("h2",{id:"escape"},"escape"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'\"'")),Object(r.b)("p",null,"The character to use when escaping a value that is ",Object(r.b)("inlineCode",{parentName:"p"},"quoted")," and contains a ",Object(r.b)("inlineCode",{parentName:"p"},"quote")," character that is not the end of the field. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#alternate-escape"}),"Example")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"i.e"),": ",Object(r.b)("inlineCode",{parentName:"p"},'First,"Name"\' => \'"First,""Name"""')),Object(r.b)("h2",{id:"includeendrowdelimiter"},"includeEndRowDelimiter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to include a row delimiter at the end of the csv."),Object(r.b)("h2",{id:"writebom"},"writeBOM"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want the first character written to the stream to be a utf-8 BOM character."),Object(r.b)("h2",{id:"headers"},"headers"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"null|boolean|string[]")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"null")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true")," then the headers will be auto detected from the first row. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#auto-discovery"}),"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"* If the row is a one-dimensional array then headers is a no-op\n* If the row is an object then the keys will be used.\n* If the row is an array of two element arrays (`[ ['header', 'column'], ['header2', 'column2'] ]`) then the first element in each array will be used.\n")),Object(r.b)("p",null,"If there is not a headers row and you want to provide one then set to a ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#provided-headers"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"If the row is an object the headers must match fields in the object, otherwise you will end up with empty fields"),Object(r.b)("li",{parentName:"ul"},"If there are more headers than columns then additional empty columns will be added")))),Object(r.b)("h2",{id:"writeheaders"},"writeHeaders"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,"Set to false you dont want to write headers."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This option can be used to append to an existing csv."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"If the ",Object(r.b)("strong",{parentName:"li"},"headers")," option is set to ",Object(r.b)("strong",{parentName:"li"},"true")," and the ",Object(r.b)("strong",{parentName:"li"},"writeHeaders")," option set to ",Object(r.b)("strong",{parentName:"li"},"false")," then any auto discovered headers will not be written in the output. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/examples#do-not-write-headers"}),"Example")),Object(r.b)("li",{parentName:"ul"},"If ",Object(r.b)("strong",{parentName:"li"},"headers")," is a ",Object(r.b)("strong",{parentName:"li"},"string[]")," and ",Object(r.b)("strong",{parentName:"li"},"writeHeaders")," is ",Object(r.b)("strong",{parentName:"li"},"false")," then they will not be written. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/examples#specify-column-order-without-headers"}),"Example"))))),Object(r.b)("h2",{id:"alwayswriteheaders"},"alwaysWriteHeaders"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to true if you always want headers written, even if no rows are written."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This will throw an error if headers are not specified as an array."))),Object(r.b)("h2",{id:"quotecolumns"},"quoteColumns"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean|boolean[]|{[string]: boolean}")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true")," then columns and headers will be quoted (unless ",Object(r.b)("inlineCode",{parentName:"p"},"quoteHeaders")," is specified). "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/examples#boolean"}),"Example")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/fast-csv/docs/formatting/examples#quote-columns-not-headers"}),"Quote Columns NOT Headers Example"))),Object(r.b)("p",null,"If it is an object then each key that has a true value will be quoted ((unless ",Object(r.b)("inlineCode",{parentName:"p"},"quoteHeaders")," is specified). ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#object"}),"Example")),Object(r.b)("p",null,"If it is an array then each item in the array that is true will have the column at the corresponding index quoted (unless ",Object(r.b)("inlineCode",{parentName:"p"},"quoteHeaders")," is specified). ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/fast-csv/docs/formatting/examples#boolean-1"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If ",Object(r.b)("inlineCode",{parentName:"p"},"quoteHeaders")," is not specified this option will apply to both columns and headers."))),Object(r.b)("h2",{id:"quoteheaders"},"quoteHeaders"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean|boolean[]|{[string]: boolean}")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": the ",Object(r.b)("inlineCode",{parentName:"p"},"quoteColumns")," value"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true")," then all headers will be quoted."),Object(r.b)("p",null,"If it is an object then each key that has a true value will be quoted (see example below)"),Object(r.b)("p",null,"If it is an array then each item in the array that is true will have the header at the corresponding index quoted"),Object(r.b)("h2",{id:"transform"},"transform"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"(row) => Row | (row, cb) => void")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"null")),Object(r.b)("p",null,"A function that accepts a row and returns a transformed one to be written, or your function can accept an optional callback to do async transformations."))}s.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return a?i.a.createElement(O,c(c({ref:t},l),{},{components:a})):i.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);