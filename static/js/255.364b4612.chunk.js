"use strict";(self.webpackChunkgoit_command_project_yourPet=self.webpackChunkgoit_command_project_yourPet||[]).push([[255],{2255:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(4942),s=a(5861),r=a(9439),o=a(4687),l=a.n(o),i={form:"addPetForm_form__lw7GB",title:"addPetForm_title__ElJmj",stepTitleContainer:"addPetForm_stepTitleContainer__3x+TA",stepTitle:"addPetForm_stepTitle__Gibl5",stepOneTitleAfter:"addPetForm_stepOneTitleAfter__oNFuF",stepTwoTitleAfter:"addPetForm_stepTwoTitleAfter__Gb6kl",stepThreeTitleAfter:"addPetForm_stepThreeTitleAfter__CgGQP",oneSelected:"addPetForm_oneSelected__Hyl6N",twoSelected:"addPetForm_twoSelected__o8EtP",threeSelected:"addPetForm_threeSelected__iDTR2",passed:"addPetForm_passed__LOfpo",radios:"addPetForm_radios__5SDHS",flexContainer:"addPetForm_flexContainer__2OH9B",inputs:"addPetForm_inputs__jnk8p",input:"addPetForm_input__4IsKX",sexRadioBtns:"addPetForm_sexRadioBtns__ACivJ",radioBtnsTitle:"addPetForm_radioBtnsTitle__nGUue",sexRadioLabel:"addPetForm_sexRadioLabel__NvUIW",photoInput:"addPetForm_photoInput__3za5F"},c="buttons_buttonsContainer__Ct93d",d="buttons_btnLearn__q62Px",u=a(1413),p=a(3329),m=function(e){var t=e.data,a=e.setData,n=function(e){var t=e.target.value;a((function(e){return(0,u.Z)((0,u.Z)({},e),{},{option:t})}))},s=t.option;return(0,p.jsxs)("div",{className:i.radios,children:[(0,p.jsxs)("label",{children:["your pet",(0,p.jsx)("input",{type:"radio",checked:"pet"===s,value:"pet",onChange:n})]}),(0,p.jsxs)("label",{children:["sell",(0,p.jsx)("input",{type:"radio",checked:"sell"===s,value:"sell",onChange:n})]}),(0,p.jsxs)("label",{children:["lost/found",(0,p.jsx)("input",{type:"radio",checked:"lostFound"===s,value:"lostFound",onChange:n})]}),(0,p.jsxs)("label",{children:["in good hands ",(0,p.jsx)("input",{type:"radio",checked:"hands"===s,value:"hands",onChange:n})]})]})},h=function(e){var t=e.data,a=e.setData,s=function(e){var t=e.target.name,s=e.target.value;a((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,n.Z)({},t,s))}))};return(0,p.jsxs)("div",{className:i.inputs,children:["pet"!==t.option&&(0,p.jsxs)("label",{children:["Title of add",(0,p.jsx)("input",{autoFocus:!0,type:"text",required:!0,value:t.addTitle,name:"addTitle",onChange:s,className:i.input})]}),(0,p.jsxs)("label",{children:["Pet's name",(0,p.jsx)("input",{autoFocus:"pet"===t.option,type:"text",required:!0,value:t.name,name:"name",onChange:s,className:i.input})]}),(0,p.jsxs)("label",{children:["Date of birth",(0,p.jsx)("input",{type:"text",value:t.birth,required:!0,name:"birth",onChange:s,className:i.input})]}),(0,p.jsxs)("label",{children:["Breed",(0,p.jsx)("input",{type:"text",value:t.breed,required:!0,name:"breed",onChange:s,className:i.input})]})]})},x=function(e){var t=e.data,a=e.setData,s=e.fileInputRef,r=function(e){console.log(s.current.files[0]);var t=e.target.name,r=e.target.value;a((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,n.Z)({},t,r))})),console.log(e.target.value)};return(0,p.jsxs)("div",{className:i.inputs,children:[(0,p.jsxs)("label",{children:["Add photo",(0,p.jsx)("input",{type:"file",required:!0,value:t.photo,ref:s,name:"photo",alt:"pet`s photo",onChange:r,className:i.photoInput})]}),(0,p.jsxs)("label",{children:["Comments",(0,p.jsx)("input",{type:"text",required:!0,value:t.comments,name:"comments",onChange:r})]})]})},f=function(e){var t=e.data,a=e.setData,s=e.fileInputRef,r=function(e){var t=e.target.name,s=e.target.value;a(t?function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,n.Z)({},t,s))}:function(e){return(0,u.Z)((0,u.Z)({},e),{},{sex:s})}),console.log(e.target.value)};return(0,p.jsxs)("div",{className:i.flexContainer,children:[(0,p.jsxs)("div",{className:i.sexRadioBtns,children:[(0,p.jsx)("h3",{className:i.radioBtnsTitle,children:"The sex"}),(0,p.jsxs)("label",{className:i.sexRadioLabel,children:[(0,p.jsx)("input",{type:"radio",checked:"female"===t.sex,value:"female",onChange:r}),"Female"]}),(0,p.jsxs)("label",{className:i.sexRadioLabel,children:[(0,p.jsx)("input",{type:"radio",checked:"male"===t.sex,value:"male",onChange:r}),"Male"]}),(0,p.jsxs)("label",{children:["Add photo",(0,p.jsx)("input",{type:"file",ref:s,required:!0,value:t.photo,name:"photo",alt:"pet`s photo",onChange:r,className:i.photoInput})]})]}),(0,p.jsxs)("div",{className:i.inputs,children:[(0,p.jsxs)("label",{children:["Location",(0,p.jsx)("input",{type:"text",required:!0,value:t.location,name:"location",onChange:r,className:i.input})]}),"sell"===t.option&&(0,p.jsxs)("label",{children:["Price",(0,p.jsx)("input",{type:"text",required:!0,value:t.price,name:"price",onChange:r,className:i.input})]}),(0,p.jsxs)("label",{children:["Comments",(0,p.jsx)("input",{type:"text",required:!0,value:t.comments,name:"comments",onChange:r,className:i.input})]})]})]})},_=function(e,t,a,n){var s;switch(e){case 2:s=(0,p.jsx)(h,{data:t,setData:a});break;case 3:s="pet"!==t.option?(0,p.jsx)(f,{fileInputRef:n,data:t,setData:a}):(0,p.jsx)(x,{data:t,setData:a,fileInputRef:n});break;default:s=(0,p.jsx)(m,{data:t,setData:a})}return s},b=function(e,t){var a=Object.values(t).filter((function(e){return!!e})).length,n=!1;return 2===e?("pet"===t.option&&a<4||"pet"!==t.option&&a<5)&&(n=!0):3===e&&("pet"===t.option&&a<6||"sell"===t.option&&a<10||"hands"===t.option&&a<9||"lostFound"===t.option&&a<9)&&(n=!0),n},j=function(e){var t="Add pet";switch(e.option){case"sell":t="".concat(t," for sell");break;case"lostFound":t="".concat(t," for lost/found category");break;case"hands":t="".concat(t," for in good hands category");break;default:t="Add pet"}return t},v=a(2791),g=a(7689),N=a(1087),T=a(8182),C=a(1243);C.Z.defaults.baseURL="https://petprojectonrendercom.onrender.com/api";var F=function(){var e=(0,s.Z)(l().mark((function e(t,a){var n,s,r,o,i,c,d,u,p,m,h,x;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.birth,s=t.breed,r=t.comments,o=t.name,"pet"===t.option){e.next=15;break}return e.prev=2,i=t.addTitle,c=t.location,d=t.option,u=t.price,p=void 0===u?null:u,m=t.sex,e.next=6,C.Z.postForm("/notice",{name:o,breed:s,sex:m,location:c,price:p,comments:r,date:n,title:i,category:d,image:a.current.files[0]});case 6:return h=e.sent,e.abrupt("return",console.log(h.data));case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:e.next=25;break;case 15:return e.prev=15,e.next=18,C.Z.postForm("/yourPets",{comments:r,breed:s,name:o,birthDate:n,petsAvatar:a.current.files[0]});case 18:return x=e.sent,e.abrupt("return",console.log(x.data));case 22:e.prev=22,e.t1=e.catch(15),console.log(e.t1);case 25:case"end":return e.stop()}}),e,null,[[2,10],[15,22]])})));return function(t,a){return e.apply(this,arguments)}}(),k=F,P=function(){var e,t,a=(0,g.TH)(),o=(0,v.useRef)(null),u=(0,v.useState)(1),m=(0,r.Z)(u,2),h=m[0],x=m[1],f=(0,v.useState)({option:"pet"}),C=(0,r.Z)(f,2),F=C[0],P=C[1],y=function(){var e=(0,s.Z)(l().mark((function e(t){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.innerHTML,console.log("BBTTTNNNNN",t.target),console.log("STTEEEP",h),e.t0=a,e.next="Next"===e.t0?6:"Done"===e.t0?8:"Back"===e.t0?11:13;break;case 6:return x(2===h?3:2),e.abrupt("break",14);case 8:return t.preventDefault(),k(F,o),e.abrupt("break",14);case 11:return x((function(e){return e-1})),e.abrupt("break",14);case 13:return e.abrupt("return");case 14:console.log("fileInputRef",o.current);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=j(F),A=1===h?null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/user":"";return(0,p.jsxs)("form",{className:i.form,onClick:y,children:[(0,p.jsx)("h2",{className:i.title,children:Z}),(0,p.jsxs)("div",{className:i.stepTitleContainer,children:[(0,p.jsxs)("span",{className:i.stepTitle,children:["Choose option"," ",(0,p.jsx)("span",{className:(0,T.Z)(i.stepOneTitleAfter,(0,n.Z)({},i.oneSelected,1===h),(0,n.Z)({},i.passed,h>1))})]}),(0,p.jsxs)("span",{className:i.stepTitle,children:["Personal details",(0,p.jsx)("span",{className:(0,T.Z)(i.stepTwoTitleAfter,(0,n.Z)({},i.twoSelected,2===h),(0,n.Z)({},i.passed,h>2))})]}),(0,p.jsxs)("span",{className:i.stepTitle,children:["More info",(0,p.jsx)("span",{className:(0,T.Z)(i.stepThreeTitleAfter,(0,n.Z)({},i.threeSelected,3===h))})]})]}),_(h,F,P,o),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)(N.rU,{to:A,children:(0,p.jsx)("button",{type:"button",className:i.backButton,children:1===h?"Cancel":"Back"})}),(0,p.jsx)("button",{type:F.comments?"submit":"button",disabled:b(h,F),className:d,children:3===h?"Done":"Next"})]})]})},y=function(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(P,{})})}}}]);
//# sourceMappingURL=255.364b4612.chunk.js.map