const countdown = document.querySelector('.countdown');

// set launch date (millisecond)
const launchDate = new Date('Oct 20, 2020 09:00:00').getTime();

// update evry second
const intvl = setInterval(() => {
  // get todays date and time (ms)
  const now = new Date().getTime();
  // distance from now and lansh date
  const distance = launchDate - now;
  // time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;
  // if launch date passed
  if (distance < 0) {
    // stop coundown
    clearInterval(intvl);
    countdown.style.color = '#17a2b8';
    countdown.textContent = 'Lanuched!';
  }
}, 1000);
