// const logdiv=document.getElementById('log');
// const statediv=document.getElementById('state');
// const start=document.getElementById('start');
// const stop=document.getElementById('stop');

// start.addEventListener('click',()=>{
//     document.addEventListener("keydown",handledown);
//     document.addEventListener("keyup",handleup);
// })

// stop.addEventListener("click",()=>{
//     document.removeEventListener("keydown",handledown);
//     document.removeEventListener("keyup",handleup);
//     logdiv.textContent="";
//     statediv.textContent="";
// })

// function handledown(e){
//     logdiv.textContent=`key ${e.key} pressed down`;
//     statediv.textContent="key is down";
// }
// function handleup(e){
//     logdiv.textContent=`key ${e.key} pressed up`;
//     statediv.textContent="key is up";
// }

const shuru=document.querySelector("#shuru");
const khatam=document.querySelector("#khatam");
const log=document.querySelector("#log");
const state=document.querySelector("#state");


shuru.addEventListener("click",()=>{
    document.addEventListener("keydown",handledowm);
    document.addEventListener("keyup",handleup);
})

khatam.addEventListener("click",()=>{
    removeEventListener("keydown",handledowm);
    removeEventListener("keyup",handleup);
})

function handledowm(e){
    log.textContent=`key ${e.key} is pressed down`
    state.textContent=`key is down`;
}

function handleup(e){
    log.textContent=`key ${e.key} pressed up`;
    state.textContent=`key is up`;
}
