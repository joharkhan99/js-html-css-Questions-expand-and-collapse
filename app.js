
const btns = document.querySelectorAll('.question');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const answer = e.currentTarget.nextSibling.nextSibling; // answer <p> tag
    answer.classList.toggle('show');
  });
})
