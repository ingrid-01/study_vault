const cafeList = document.getElementById("cafe-list");

const cafes = [
  { name: "포일 청년발전소", region: "의왕", parking: true },
  { name: "스타벅스", region: "의왕", parking: false },
  { name: "오픈커피", region: "의왕", parking: true },
];

cafes.forEach((cafe) => {
  const li = document.createElement("li");
  li.textContent = `${cafe.name} - ${cafe.region} - 주차: ${cafe.parking ? `✅` : `❌`}`;
  cafeList.appendChild(li);
});
