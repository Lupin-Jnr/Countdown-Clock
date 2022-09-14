const finalDate = newDate("May 05,2023 00:00:00").getTime();

timer= () =>{
    const now = newDate().getTime();
    const diff = finalDate - now;
    if(diff < 0){
        document.getElementById('container').style.display="None"
        document.getElementById('if-expired').style.display="block"
    }
    let days=math.floor(diff/(1000 * 60 * 60 * 24));
    let hours=math.floor(diff%(1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let minutes=math.floor(diff%(1000 * 60 * 60)/(1000 * 60));
    let seconds=math.floor(diff/(1000 * 60)/1000);

    days <= 9 ? days = `00${days}`:
    days <= 99 ? days = `0${days}`:
    hours <= 99 ? days = `0${hours}`:
    minutes <= 99 ? days = `0${minutes}`:
    seconds <= 99 ? days = `0${seconds}`:
}