const registrationButton = document.querySelector('#registration');
const bestSongsElement = document.getElementsByClassName('best-songs');
const bestSongs = [];

for (let i = 0; i < bestSongsElement.length; i++) {
  bestSongs.push(bestSongsElement[i].innerText);
}

registrationButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;

  if (name.trim() === '') {
    alert('이름을 입력하세요! (공백 X)');
    return;
  }

  const checkboxs = document.querySelectorAll('input[type="checkbox"]');
  const checked = [];

  checkboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      const title = document.querySelector(`label[for="${checkbox.id}"]`).innerText;
      checked.push(title);
    }
  });

  alert(`${name} 님, 저와 ${checked.length}개의 취향이 같으시네요!\n ${checked.map((title, idx) => `${idx + 1}. ${title}`).join('\n')}`);
});
