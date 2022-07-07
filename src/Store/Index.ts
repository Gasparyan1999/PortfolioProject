import { createSlice } from "@reduxjs/toolkit";

const initialState=localStorage.getItem("lang")=="eng"?{
        name:"Gasparyan Georgi",
        about:"About Me",
        education:"Education",
        skills:"My Skills",
        project:"My Projects",
        contact:"Contact and Links",
        age:"22 years old",
        exp:"Junior Front-End Developer",
        scroll:"To learn more, Scroll:",
        uni:"Bachelor's Degree in Software Engineering at the National Polytechnic University of Armenia",
        smart:"SmartCode Development School",
        aboutText:"I'm beginner Front-End programmer, I learn fast, I work well in a team and I'm ready to work to gain experience",
        overText:"This project was implemented for educational and demonstration purposes. This project was created using React, Redux, TypeScript and npm packages",
        option:"Find matching colors"
      }:{
        name:"Գասպարյան Գեորգի",
        about:"Իմ Մասին",
        education:"Կրթություն",
        skills:"Հմտություններ",
        project:"Իմ Պրոեկտները",
        contact:"Կապ և հղումներ",
        age:"22 տարեկան",
        exp:"Սկսնակ Front-End ծրագրավորող",
        scroll:"Ավելին Իմանալու համար՝Scroll",
        uni:"Հայաստանի ազգային պոլիտեխնիկական համալսարանում Ծրագրային ճարտարագիտության բակալավրի աստիճան",
        smart:"SmartCode Development School",
        aboutText:"Ես սկսնակ Front-End ծրագրավորող եմ, արագ սովորում եմ, լավ եմ աշխատում թիմում և պատրաստ եմ աշխատել փորձ ձեռք բերելու համար:",
        overText:"Այս նախագիծն իրականացվել է կրթական և ցուցադրական նպատակներով։ Այս նախագիծը ստեղծվել է React, Redux, TypeScript և npm փաթեթների միջոցով",
        option:"Գտնել համապատասխան գույները"
      }
      
const reducer =(state=initialState,action:any)=>{
    switch(action.type){
        case "Language":
            if(localStorage.getItem("lang")=="arm"){
                localStorage.setItem("lang","eng")
              }
              else{
               localStorage.setItem("lang","arm")
              }
           
              if(localStorage.getItem("lang")=="arm"){
              return {
               name:"Գասպարյան Գեորգի",
               about:"Իմ Մասին",
               education:"Կրթություն",
               skills:"Հմտություններ",
               project:"Իմ Պրոեկտները",
               contact:"Կապ և հղումներ",
               age:"22 տարեկան",
               exp:"Սկսնակ Front-End ծրագրավորող",
               scroll:"Ավելին Իմանալու համար՝Scroll",
               uni:"Հայաստանի ազգային պոլիտեխնիկական համալսարանում Ծրագրային ճարտարագիտության բակալավրի աստիճան",
               smart:"SmartCode Development School",
               aboutText:"Ես սկսնակ Front-End ծրագրավորող եմ, արագ սովորում եմ, լավ եմ աշխատում թիմում և պատրաստ եմ աշխատել փորձ ձեռք բերելու համար:",
               overText:"Այս նախագիծն իրականացվել է կրթական և ցուցադրական նպատակներով։Այս նախագիծը ստեղծելիս օգտագործվել է React գրադարանը, գրեթե բոլոր hook-երը և npm փաթեթները։",
               option:"Գտնել համապատասխան գույները"
              }
             }
             else{
               return {
                 name:"Gasparyan Georgi",
                 about:"About Me",
                 education:"Education",
                 skills:"My Skills",
                 project:"My Projects",
                 contact:"Contact and Links",
                 age:"22 years old",
                 exp:"Junior Front-End Developer",
                 scroll:"To learn more, Scroll:",
                 uni:"Bachelor's Degree in Software Engineering at the National Polytechnic University of Armenia",
                 smart:"SmartCode Development School",
                 aboutText:"I'm beginner Front-End programmer, I learn fast, I work well in a team and I'm ready to work to gain experience",
                  overText:"This project was implemented for educational and demonstration purposes. When creating this project, the React library was used, almost all hooks and npm packages",
                  option:"Find matching colors"
                }
             }
    }
}

const langSlice=createSlice({
    name:"lang",
    initialState:localStorage.getItem("lang")=="eng"?{
        name:"Gasparyan Georgi",
        about:"About Me",
        education:"Education",
        skills:"My Skills",
        project:"My Projects",
        contact:"Contact and Links",
        age:"22 years old",
        exp:"Junior Front-End Developer",
        scroll:"To learn more, Scroll:",
        uni:"Bachelor's Degree in Software Engineering at the National Polytechnic University of Armenia",
        smart:"SmartCode Development School",
        aboutText:"I'm beginner Front-End programmer, I learn fast, I work well in a team and I'm ready to work to gain experience",
        overText:"This project was implemented for educational and demonstration purposes. This project was created using React, Redux, TypeScript and npm packages",
        option:"Find matching colors"
      }:{
        name:"Գասպարյան Գեորգի",
        about:"Իմ Մասին",
        education:"Կրթություն",
        skills:"Հմտություններ",
        project:"Իմ Պրոեկտները",
        contact:"Կապ և հղումներ",
        age:"22 տարեկան",
        exp:"Սկսնակ Front-End ծրագրավորող",
        scroll:"Ավելին Իմանալու համար՝Scroll",
        uni:"Հայաստանի ազգային պոլիտեխնիկական համալսարանում Ծրագրային ճարտարագիտության բակալավրի աստիճան",
        smart:"SmartCode Development School",
        aboutText:"Ես սկսնակ Front-End ծրագրավորող եմ, արագ սովորում եմ, լավ եմ աշխատում թիմում և պատրաստ եմ աշխատել փորձ ձեռք բերելու համար:",
        overText:"Այս նախագիծն իրականացվել է կրթական և ցուցադրական նպատակներով։ Այս նախագիծը ստեղծվել է React, Redux, TypeScript և npm փաթեթների միջոցով",
        option:"Գտնել համապատասխան գույները"
      },
    reducers:{
        reload:(state)=>{
            if(localStorage.getItem("lang")=="arm"){
                localStorage.setItem("lang","eng")
              }
              else{
               localStorage.setItem("lang","arm")
              }
           
              if(localStorage.getItem("lang")=="arm"){
              return {
               name:"Գասպարյան Գեորգի",
               about:"Իմ Մասին",
               education:"Կրթություն",
               skills:"Հմտություններ",
               project:"Իմ Պրոեկտները",
               contact:"Կապ և հղումներ",
               age:"22 տարեկան",
               exp:"Սկսնակ Front-End ծրագրավորող",
               scroll:"Ավելին Իմանալու համար՝Scroll",
               uni:"Հայաստանի ազգային պոլիտեխնիկական համալսարանում Ծրագրային ճարտարագիտության բակալավրի աստիճան",
               smart:"SmartCode Development School",
               aboutText:"Ես սկսնակ Front-End ծրագրավորող եմ, արագ սովորում եմ, լավ եմ աշխատում թիմում և պատրաստ եմ աշխատել փորձ ձեռք բերելու համար:",
               overText:"Այս նախագիծն իրականացվել է կրթական և ցուցադրական նպատակներով։Այս նախագիծը ստեղծելիս օգտագործվել է React գրադարանը, գրեթե բոլոր hook-երը և npm փաթեթները։",
               option:"Գտնել համապատասխան գույները"
              }
             }
             else{
               return {
                 name:"Gasparyan Georgi",
                 about:"About Me",
                 education:"Education",
                 skills:"My Skills",
                 project:"My Projects",
                 contact:"Contact and Links",
                 age:"22 years old",
                 exp:"Junior Front-End Developer",
                 scroll:"To learn more, Scroll:",
                 uni:"Bachelor's Degree in Software Engineering at the National Polytechnic University of Armenia",
                 smart:"SmartCode Development School",
                 aboutText:"I'm beginner Front-End programmer, I learn fast, I work well in a team and I'm ready to work to gain experience",
                  overText:"This project was implemented for educational and demonstration purposes. When creating this project, the React library was used, almost all hooks and npm packages",
                  option:"Find matching colors"
                }
             }
        }
    }
})

export const {reload} =langSlice.actions
export default langSlice