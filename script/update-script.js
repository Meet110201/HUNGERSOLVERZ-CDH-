function update(a,s){
    if(s=="IN PROGRESS" || s=="INCOMPLETE AND OPEN"){
    document.getElementById('update').style.display='block';
    document.getElementById('sno').value = parseInt(a);
    }
}

document.getElementById('back').onclick=function(){
     document.getElementsByClassName('update').style.display='none';
}