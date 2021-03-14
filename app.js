let btn = document.getElementById('btn');

btn.addEventListener('click', e => {
  let changecolor = e.target.classList.toggle('active');
  if (changecolor === true) {
    document.body.style.background = 'lightblue';
    e.target.style.background = 'white';
    e.target.style.border = 'none';
    e.target.style.background = '#111';
  } else if (changecolor === true) {
    document.body.style.background = '#a1d7c9';
    e.target.style.background = 'crimson';
    e.target.style.border = 'crimson';
    e.target.style.background = '#fff';
  } else if (changecolor === true) {
    document.body.style.background = '#efc0fe';
    e.target.style.background = 'crimson';
    e.target.style.border = 'crimson';
    e.target.style.background = '#fff';
  } else {
    document.body.style.background = '#ffd1df';
    e.target.style.background = 'crimson';
    e.target.style.border = 'crimson';
    e.target.style.background = '#fff';
  }
});
