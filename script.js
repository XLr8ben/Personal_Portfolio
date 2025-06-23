var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxSuHdBGGXINAxhbZA16iP0nN7GWXBUi3N02O8sv9dJaECiGixIw8ZHLmUhKO0D7AUQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thanks for Contacting"
        setInterval(function(){
            msg.innerHTML=""
        },3000)
        form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })


const dot = document.createElement('div');
dot.classList.add('cursor-dot');
document.body.appendChild(dot);

const ring = document.createElement('div');
ring.classList.add('cursor-ring');
document.body.appendChild(ring);

document.addEventListener('mousemove', e => {
  const { clientX: x, clientY: y } = e;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;
});

// Add pulse on click
document.addEventListener('click', () => {
  ring.classList.add('pulse');
  setTimeout(() => {
    ring.classList.remove('pulse');
  }, 400);
});
