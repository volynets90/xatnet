document.body.onload=function(){
    setTimeout(function(){
      var loaderArea=document.getElementsByClassName('loaderArea');
      if(!loaderArea.classList.contains('done')){
          console.log('yes');
          loaderArea.classList.add('done');
      }
      else{
          console.log('oops');
      }
      console.log('oops2')
    }, 1000);
    console.log('oop03s')
}