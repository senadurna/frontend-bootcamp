// Class butonlarını ve görsel alanını seç
const classButtons = document.querySelectorAll('.class-buttons button');
const classContent = document.getElementById('class-content');

// Her butona tıklanınca çalışacak olay
classButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Tıklanan butondan data-class değerini al
    const selectedClass = button.getAttribute('data-class');

    // İlgili görselin yolunu oluştur
    let imagePath = `images/${selectedClass}.jpg`;

    // Görseli ekrana bastır
    classContent.innerHTML = `<img src="${imagePath}" alt="${selectedClass}" style="max-width: 100%; border-radius: 8px;" />`;

  });
});
// Değerlendirme formu 6 – BMI hesaplama fonksiyonu

// Gerekli HTML elementlerini seç
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate-btn');
const bmiResult = document.getElementById('bmi-result');

// Hesapla butonuna tıklanınca çalışacak olay
calculateBtn.addEventListener('click', () => {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiResult.textContent = 'Lütfen geçerli boy ve kilo girin.';
    return;
  }

  // BMI = kilo / (boy * boy) [m cinsinden]
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else if (bmi < 35) category = 'Obese';
  else category = 'Extremely Obese';

  // Sonucu göster
  bmiResult.textContent = `Your BMI: ${bmi} → ${category}`;
});
