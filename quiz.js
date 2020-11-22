function check() {
    var s=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
  
    var result=document.getElementById("result")
    var quiz=document.getElementById("quiz")

   if (q1==="c") {s++} 
   if (q2==="a") {s++}
   if (q3==="d") {s++}
   if (q4==="a") {s++}
   if (q5==="b") {s++}
   if (q6==="b") {s++}
   if (q7==="d") {s++}

   quiz.style.display ="none"
   

   if(s<=4){
       result.textContent = "You scored . It would be great if you read this website once again and tried this test agaim."
      
   }
   else{
       result.textContent = "You scored . Awesome, share this with as many people as you can."
   }

 
}