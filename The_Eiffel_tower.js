const title_h1_arr = document.getElementById("main-title").getElementsByTagName("h1");
const title_p_arr = document.getElementById("main-title-p-cont").getElementsByTagName("p");
const title_input_arr = document.getElementById("main-title-button-cont").getElementsByTagName("p");
 

setTimeout(() => {
    let anim_time = 0;
    let time;
    for (let a =0; a < title_h1_arr.length; a++, time = 110 * (a + 1))
        setTimeout(() => {
            title_h1_arr[a].classList.add("main-title-word-vis");
        }, time);
    anim_time += time;
    time = 110 + anim_time;
    for (let a =0; a < title_p_arr.length; a++, time = 110 * (a + 1) + anim_time)
        setTimeout(() => {
            title_p_arr[a].classList.add("main-title-word-vis");
        }, time);
    anim_time =+ time;
    time= 110 + anim_time;

    setTimeout(() => {
        document.getElementById("main-title-button").classList.add("main-title-input-vis");
    }, anim_time);
    for (let a =title_input_arr.length - 1; a >= 0; a--, time = 110 * (title_input_arr.length - a) + anim_time)
        setTimeout(() => {
            title_input_arr[a].classList.add("main-title-word-vis");
        }, time);

}, 300);






