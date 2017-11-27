var txtarea=document.querySelector('.txtarea');
var txtareanow= txtarea.value;
var clnall=document.querySelector('.btn-clean-all');
var cleanfrom=document.querySelector('.clean-from');
var runbtn=document.querySelector(".btn-run-editor");
var runbtn1=document.querySelector(".btn-run-editor2");
var paramedic=document.querySelector(".paramedics");
var qoute=document.querySelector(".qoute");
var param=document.querySelector(".param");
var firstupdate=document.querySelector(".first-update");
var btncopy=document.querySelector(".btn-copy");
var btnwhatsapp=document.querySelector(".whatsapp");
var gmail=document.querySelectorAll(".gmail");
var AfSelectedEmail=document.querySelector(".active");
var emailLayer=document.querySelector(".layer");
var address=["1885","1887","1888","1884","1886","1887","1889","1880","1882","1883","1881"];
var hospitalname=['תל השומר','תה"ש','יוספטל','וולפסון','דנה','בלינסון','בילינסון','שניידר','אסף הרופא','אסה"ר','שיבא','יצחק שמיר','מאיר','לניאדו','ברזילי','סורוקה','לוינשטיין',
    'שערי צדק','שע"צ','הלל יפה','הדסה עין כרם','הע"כ','זיו','ע"כ','ע"כ הדסה','הרצוג','קפלן','העמק','איכילוב','פוריה','פדה','רמב"ם','בני ציון','בנ"צ','נהריה','רוטשילד','הלל - יפה','הלל יפה','השרון','הדסה הר הצופים','נצרת','הצרפתי','האנגלי','הה"צ','הדסה הה"צ','מעיני הישועה'];


var IsOpen=true;
$('.email').on('click',function(){
    if(IsOpen===true)
    {
        $('.layer').css({'display':'block'})
        IsOpen=false;
    }else{
        $('.layer').css({'display':'none'})
        IsOpen=true;
    }

})

$(window).ready(function(){
    if(document.cookie!=="")
    {
        var message = $('<div class="MessageInCookie"><div class="MessageInCookieContainer"><div class="MessageInCookieText"">המערכת מזהה שיש הודעה שהתחלת לערוך , מעוניין לשחזר אותה? <div class="MessageInCookieText2">(ההודעה תשמר במשך עשר דקות)</div></div><button class="yes">כן,שחזר</button><br><button class="no"">לא, הצג הודעה חדשה</button></div></div>');
        $('body').append(message);
        $('.yes').click(function(){txtarea.value=decodeURI(document.cookie)
            $('.MessageInCookie').fadeOut(300);
        })
        $('.no').click(function () {$('.MessageInCookie').fadeOut(300);})


    }

})

function check (){
    setTimeout(function(){
        if(txtarea.value!==txtareanow) {
            txtareanow = txtarea.value;
            var time= new Date();
            time.setMinutes(time.getMinutes()+10);
            console.log("this message will save in cookie for 10 minutes"+time.toUTCString());
            document.cookie = encodeURI(txtareanow)+ "; expires="+time.toUTCString();;
        }

        check();
    },1000)
}
check();

AfSelectedEmail.addEventListener("click",function(addr){
    function subject(txt)
    {
        if(txtarea.value.indexOf("ת.ד.")!==-1) {
            console.log("ת.ד.");
            txt = txtarea.replace("ת.ד.", 'תאונת דרכים');
        }
        if(txtarea.value.indexOf("ת.ד")!==-1) {
            console.log("ת.ד");
            txt = txtarea.value.replace("ת.ד", 'תאונת דרכים');
        }
        return remove(txt,"*","").substring(0, remove(txt,"*","").indexOf(".") + 1);
    }

    function remove(txt,char,afterchar){
        while(txt.indexOf(char)!==-1){
            txt=txt.replace(char,afterchar);
        }
        return txt;
    }
    addr="";
    for(var i=0;i<gmail.length;i++)
    {
        if(gmail[i].checked===true)
        {
            addr+=address[i]+"mda@doali.co.il;";
        }
    }
    location.href = "mailto:?bcc=" + addr+ "&body=" + remove(encodeURI(txtarea.value),"*","") + "&subject=" + subject(encodeURI(txtarea.value));
    emailLayer.style.display="none";

})

//when button click it will change the color to gray.. when clicked on clean all button it wil change all buttons to green again.
function ActiveColor(bt,is) {is ? bt.style.backgroundColor = "#cdcdcd" : bt.style.backgroundColor = "#cc060e"// is by default true
}

//pushing the message in textarea to whatsapp
btnwhatsapp.addEventListener("click",function () {
    // location.href = "whatsapp://send?text="+txtarea.value+"&phone=+972523696444";
    location.href="whatsapp://send?text="+encodeURI(txtarea.value);

})

runbtn.addEventListener("click",function(){
    if(txtarea.value.indexOf(":")!==-1) {
        let text= '*דובר מד"א, זכי הלר :*';
        txtarea.value = text + txtarea.value.substring(txtarea.value.indexOf(":") + 1, txtarea.value.length);
        pos = txtarea.value.indexOf(text)+text.length;
        $(txtarea).caret(pos);
    }
    else if(txtarea.value.length===0)
    {
        let text='*דובר מד"א, זכי הלר :* בהמשך לאירוע ';
        replaceIt($('.txtarea')[0], text)
        pos = txtarea.value.indexOf(text)+text.length;
        $(txtarea).caret(pos);
    }
    //ActiveColor(runbtn,true);
    $(runbtn).fadeOut(400);

})

runbtn1.addEventListener("click",function(){
    if(txtarea.value.indexOf(":")!==-1) {
        let text='*דוברות מד"א :*';
        txtarea.value = text + txtarea.value.substring(txtarea.value.indexOf(":") + 1, txtarea.value.length);
        pos = txtarea.value.indexOf(text)+text.length;
        $(txtarea).caret(pos);
    }
    else if(txtarea.value.length===0)
    {
        let text='*דוברות מד"א :* בהמשך לאירוע ';
        replaceIt($('.txtarea')[0], text);
        pos = txtarea.value.indexOf(text)+text.length;
        $(txtarea).caret(pos);
    }
    //ActiveColor(runbtn1,true);
    $(runbtn1).fadeOut(400);

});

clnall.addEventListener("click",function () {
    if(txtarea.value!="") {
        var message = $('<div class="MessageIfDelete"><div class="MessageIfDeleteContainer"><div class="MessageIfDeleteText"">אתה בטוח שאתה רוצה לנקות הכל? </div><button class="yes-del">כן, מחק</button><br><button class="no-del"">לא, בטל</button></div></div>');
        $('body').append(message);
        $('.yes-del').click(function () {
            txtarea.value = ""
            $('.MessageIfDelete').fadeOut(300);
        })
        $('.no-del').click(function () {
            $('.MessageIfDelete').fadeOut(300);
        })
    }

});


cleanfrom.addEventListener("click",function(){
    txtarea.value=txtarea.value.substring(0,txtarea.selectionStart);
    pos = txtarea.value.indexOf(txtarea.selectionStart);
    $(txtarea).caret(pos);
    $(cleanfrom).fadeOut(400);
});

//copy textarea message
$(btncopy).click(function(){
    $(txtarea).select();
    document.execCommand('copy');
    ActiveColor(btncopy,true);

});


//replace text method by jquery
function replaceIt(txtarea, newtxt) {
    $(txtarea).val(
        $(txtarea).val().substring(0, txtarea.selectionStart)+
        newtxt+
        $(txtarea).val().substring(txtarea.selectionEnd)

    );
}



$(paramedic).on('touchstart click', function() {
    event.stopPropagation();
    event.preventDefault();
    var text='חובשים ופראמדיקים של מד"א מעניקים במקום טיפול רפואי ';
    replaceIt($('.txtarea')[0], text);
    pos = txtarea.value.indexOf(text)+text.length;
    $(txtarea).caret(pos);
    //ActiveColor(paramedic,true);
    $(paramedic).fadeOut(400)
})


$(param).on('touchstart click', function() {
    function hospital(){
        var result="";
        for(var i=0;i<hospitalname.length;i++) {
            if (txtarea.value.indexOf(hospitalname[i]) !== -1)
            {
                if(hospitalname[i]==='הע"כ'||hospitalname[i]==='ע"כ') {
                    result = "הדסה עין כרם ";
                }
                else if(hospitalname[i]==='שע"צ'){
                    result = "שערי צדק ";
                }
                else if(hospitalname[i]==='בלינסון'){
                    result= "בילינסון ";

                }
                else if(hospitalname[i]==='תה"ש'||hospitalname[i]==='תל השומר')
                {
                    result="שיבא בתל השומר ";
                }
                else if(hospitalname[i]==='אסה"ר')
                {
                    result="אסף הרופא ";
                }
                else {
                    result = hospitalname[i] + " ";
                }
            }
        }
        return result;
    }
    var maintxt='חובשים ופראמדיקים של מד"א מעניקים טיפול רפואי ומפנים לבי"ח ';
    var text = maintxt+hospital();
    event.stopPropagation();
    event.preventDefault();
    replaceIt($('.txtarea')[0],text)
    pos = txtarea.value.indexOf(text)+text.length;
    $(txtarea).caret(pos);
    //   ActiveColor(param,true);
    $(param).fadeOut(400);
})

$(qoute).on('touchstart click', function() {
    event.stopPropagation();
    event.preventDefault();
    var text='*מדיווח ראשוני בלבד !!!* ';
    replaceIt($('.txtarea')[0], text)
    pos = txtarea.value.indexOf(text)+text.length;
    $(txtarea).caret(pos);
    //ActiveColor(qoute,true);
    $(qoute).fadeOut(400);

})

$(firstupdate).on('touchstart click', function() {
    event.stopPropagation();
    event.preventDefault();
    var text='עדכון בהמשך ';
    replaceIt($('.txtarea')[0],text);
    pos = txtarea.value.indexOf(text)+text.length;
    $(txtarea).caret(pos);
    //ActiveColor(firstupdate,true);
    $(firstupdate).fadeOut(400);

})

$('.reset-buttons').on('touchstart click', function() {
    event.stopPropagation();
    event.preventDefault();
    document.querySelectorAll('.buttons-after-textarea button').forEach(function (button,index){
        $('button').fadeIn(400).css('display',"block")
    });
});



