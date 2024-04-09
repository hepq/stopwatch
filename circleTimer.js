function circleTimer(){
    let min_rotation = 6 * (count / 60000 % 60);
    let sec_rotation = 6 * (count / 1000 % 60);

    document.getElementById('minute').style.transform = `rotate(${min_rotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${sec_rotation}deg)`;
}