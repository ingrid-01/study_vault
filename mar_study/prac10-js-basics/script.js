const btn = document.getElementById('btn');
const cafeList = document.getElementById('cafe-list');

const cafes = ["포일 청년발전소", "스타벅스", "오픈커피"];

btn.addEventListener('click', () => {
  cafes.forEach((cafe) => {
    const li = document.createElement('li');
    li.textContent = cafe;
    cafeList.appendChild(li);
  });
});