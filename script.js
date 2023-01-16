function main(){
let count = document.querySelector("h2")
let increase = document.querySelector(".increase")
let dicrease = document.querySelector(".dicrease")
let reset = document.querySelector(".reset")
let countNumber =  0
increase.addEventListener("click",function(){
    countNumber += 1
    count.innerText = countNumber
})
dicrease.addEventListener("click",function(){
    count.innerText>0 ? count.innerText -=1: count.innerText
})
reset.addEventListener("click",function(){
    countNumber = 0
    count.innerText = countNumber
})
count.innerText=countNumber
};
main();