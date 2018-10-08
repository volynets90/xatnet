$('#send-form').submit(function(e){
    e.preventDefault();
    $form=$('#send-form');
    
    $.ajax({
        success: function(){
            $('#exampleModal').modal("hide");
            $('#send-form')[0].reset();
            grecaptcha.reset();
            
        },
        error:function(){
            alert(':-( Щось пішло не так. Повторіть спробу пізніше');
        }
    });
     
});
var btnClose=document.querySelector(".close-form");
btnClose.addEventListener('click', e=>{
    $('#send-form')[0].reset();
})