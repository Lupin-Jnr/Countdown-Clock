const finalDate = newDate("Sep 12,2022 00:00:00").getTime();

timer= () =>{
    const now = newDate().getTime();
    const diff = finalDate - now;
    if(diff < 0){
        document.getElementById('container')
    }
}