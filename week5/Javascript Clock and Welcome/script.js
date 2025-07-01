let name = prompt("Adınız nedir?");
document.getElementById("myName").innerText = name;

function showTime() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, '0');
  let minute = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');

  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  let day = days[now.getDay()];

  let time = `${hour}:${minute}:${second} ${day}`;
  document.getElementById("myClock").innerText = time;
}

setInterval(showTime, 1000);
showTime(); // sayfa yüklenince hemen göstersin
