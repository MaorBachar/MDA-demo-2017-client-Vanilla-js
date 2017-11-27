
var btn=document.querySelector('button');
var messages=document.querySelectorAll('.Message')
var IsSelected=0;

btn.addEventListener('click',function(){
    if(document.querySelectorAll('.selected').length>=1){
        ajax();
    }
})

function merge(arr){
    var textToMerge="";
    if(arr.length>1 )
    {
        arr.forEach(function (message) {
            console.log("this is the object in arr: " + message)
            textToMerge+= message.textContent;
            console.log("this is after merge:" + textToMerge)
        })
    }else{
        textToMerge=arr[0].textContent;
    }

    return textToMerge;
}

function ajax (){
    var SelectedToArr=document.querySelectorAll('.selected div:last-child');
    $.ajax({
        type: 'POST',
        url: '/message',
        data: {'text': merge(SelectedToArr),/*'edit': true*/},
        success:setTimeout(function(){alert('המערכת המלאה מעבירה את ההודעות שסימנת לחלון העריכה הראשי')
            window.location.href="../index.html"
        },2000)
    });
}


messages.forEach(function(message,index){
    message.addEventListener('click',function(){

        if(IsSelected<2&& message.className!=="Message selected")
        {
            IsSelected++;
            console.log("now we selected message")
            message.className+=" selected";
            this.style.background='yellow';



        }
        else if(message.className==="Message selected")
        {
            IsSelected--;
            this.style.background='white';
            message.className="Message"
        }




    });

})
$(document).ready(function(){
    $('html, body').animate({scrollTop:$(document).height()}, 10);

});;