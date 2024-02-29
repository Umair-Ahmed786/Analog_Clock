let hr = document.getElementById("hr");
let mn = document.getElementById('min');
let sc = document.getElementById('sec');

function updateClock(){
 
  let now = new Date();

const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

let h_rotate = 30*hour + (min/2);
let m_rotate = 6 * min;
let sec_rotate = 6 * sec; 

hr.style.transform = `rotate(${h_rotate}deg)`;
mn.style.transform = `rotate(${m_rotate}deg)`;
sc.style.transform = `rotate(${sec_rotate}deg)`;

}

setInterval(updateClock,1000);
  