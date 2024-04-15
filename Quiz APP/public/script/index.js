const start_btn=document.querySelector(".QuizAPP")
const quiz_box=document.querySelector(".quiz_box")
const remove=document.querySelector(".next_btn")
const TimeCount=quiz_box.querySelector(".timer .timer_sec")
const scor_box=document.querySelector(".scor-box")

let data=[]
let arrcou=0
let que_count=0
let que_num=1
let arrlen;
let counter;
let TimeValue=15
let userScor=0;
let wrong=0
let btncount=1
let timeOut=0
start_btn.addEventListener("click",(e)=>{
    quiz_box.classList.add("active_quiz")
    quecount(que_num)
    showQueston(que_count)
    startTimer(15)
    
})

const next_btn=quiz_box.querySelector(".next_btn")


console.log(next_btn.innerHTML);
next_btn.addEventListener("click",(e)=>{
    console.log("btncount",btncount);
    if(que_count<arrlen-1){
        btncount++
        que_count++
        que_num++
        showQueston(que_count)
        quecount(que_num)
        clearInterval(counter)
        startTimer(TimeValue)
        next_btn.style.display="none"
    }
    if(next_btn.innerHTML!=='Next Que' ||next_btn.innerHTML =='complet'){
        
        console.log("Completed....");
        showRejust()
        btncount++
        quiz_box.style.display="none"
    }

})
const ok=()=>{
    window.location.reload()
}
function showRejust(){
    scor_box.style.display="block"
    let scorR=document.querySelector(".scor-box")
    let Scortag=`<h2>User Result</h2>`+
    `<p>Total Ans = ${arrlen}</p>`+
    `<p>wrong answer =${wrong} </p>`+
    `<p>TimeOut answer =${timeOut} </p>`+
    `<div class="hr"></div>`+
    `<p>Currect Ans = ${userScor} </p>`+
    `<button onclick="ok()">ok</button>`
    scorR.innerHTML=Scortag
}
const option_list=document.querySelector(".option_list")
function get()
{
    fetch("http://localhost:8080/all")
    .then((res)=>res.json())
    .then((dat)=>{
        data.push(...dat)
        console.log(data);
        arrlen=data.length
    })
}

get()
function showQueston(index){
        console.log("data",data);
        const que_text=document.querySelector(".que_text")
       
        let que_tag=` <span>${data[index].num}.${data[index].questions}</span>`
        que_text.innerHTML=que_tag
        let option_tag=` <div class="option" onclick="optionselect(this)"><span>${data[index].option1}</span></div>`
                        + `<div class="option"><span>${data[index].option2}</span></div>`
                        +`<div class="option"><span>${data[index].option3}</span></div>`
                        +`<div class="option"><span>${data[index].option4}</span></div>`
                        
        option_list.innerHTML=option_tag
        const option=option_list.querySelectorAll(".option")
       for(let i=0;i< option.length;i++){
        option[i].setAttribute("onclick","optionselect(this)")
       }
    // })

}
function quecount(index){

    console.log(arrlen);
    const total_que=document.querySelector(".total_que")
    let totalQuesCount=`<span><p>${index}</p>of<p>${arrlen}</p>Questions</span>`
    total_que.innerHTML=totalQuesCount

}

function optionselect(ans){
    clearInterval(counter)

    let userAns=ans.textContent;
    let current=data[que_count].Answer
    let allOption=option_list.children.length
    if(userAns == current){
        userScor +=1
        ans.classList.add("correct")
    }
    else{
        ans.classList.add("incorrect")
        wrong++;
        for(let i=0;i<allOption;i++){
            if(option_list.children[i].textContent==current){
                option_list.children[i].setAttribute("class","option correct")
            }
        }
    }

    for(let i=0;i<allOption;i++){
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display="block"
    if(btncount==arrlen){
        next_btn.innerHTML="complet"
    }
    else{

    }
}


const startTimer=(time)=>{
 counter=setInterval(timer,1000)
 function timer() {
    TimeCount.textContent=time 
    time--; 
    if(time<9){
        TimeCount.textContent=`0${time}`
    }
    if(time<0){
        clearInterval(counter)
        TimeCount.textContent="00"
        timeOut++;
        let current=data[que_count].Answer
        let allOption=option_list.children.length
        for(let i=0;i<allOption;i++){
            if(option_list.children[i].textContent==current){
                option_list.children[i].setAttribute("class","option correct")
            }
        }
        for(let i=0;i<allOption;i++){
            // option_list.children[i].classList.add("not_allowed")
            option_list.children[i].classList.add("disabled")
        }
        if(btncount==arrlen){
            
            next_btn.style.display="block"
            next_btn.innerHTML="complet " 
        }
        else{
            next_btn.style.display="block"

             
        }
    }
 }
}

