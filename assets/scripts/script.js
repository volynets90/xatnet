document.body.onload=function(){
    setTimeout(function(){
      var loaderArea=document.getElementById('loaderArea')
      if(!loaderArea.classList.contains('done')){
          loaderArea.classList.add('done');
      }
      else{
      }
    }, 1000);
};
var num = $('.navbar').offset().top;
console.log(num);
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 20) {
        $('.navbar').addClass('nav-style');
    } else {
        $('.navbar').removeClass('nav-style');
    }
});
$("#navbarNav").on("click", "a", function (event) {
    var id = $(this).attr('href'),
        top = $(id).offset().top-50;
    $('body,html').animate({ scrollTop: top }, 600);
});
if ($('body').width() > 750) {
    new WOW().init();  
};

$(function(){
    var DocumentTitle=document.title;
    switch (DocumentTitle) {
        case "Головна":
            $('#li-home').addClass('active')
            break;
        case "Тарифи":
        $('#li-servicces').addClass('active')
        break;

        default:
            break;
    }
});
var fullDate=new Date();
var year=fullDate.getFullYear();
var spanYear=document.querySelector('span.currentYear');
spanYear.textContent=year;

function insertTextToMessage(){
    let textMessage=document.querySelector('.inputMessage'); //text to text area
    let planName;
    let planSpeed;
    let planPrice;
    document.querySelector(".section-plans").onclick=function(event){
        var target=event.target;
        var all_td = target.closest('tr');
        var tdChild = all_td.childNodes;
        
        for (let i = 0; i < tdChild.length; i++) {
            planName=tdChild[1].innerText;
            planSpeed=tdChild[3].innerText;
            planPrice=tdChild[5].innerText;
        }
        planPrice=planPrice.replace("Замовити", "");
        textMessage.innerText = "Бажаю замовити тариф "+planName+
                                " зі швидкістю "+planSpeed +" МБіт/с "+ "вартістю "+ planPrice+"грн.";
                            
    }
}
insertTextToMessage();

