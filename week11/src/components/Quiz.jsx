import { useEffect, useState } from "react";
import questions from "../data/questions";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  //  Confetti için pencere boyutları
  const currentQuestion = questions[index];
  const [width, height] = useWindowSize();

  //  Soru başladığında zamanlayıcı ve şık gösterimi
  useEffect(() => {
    if (!currentQuestion) return;

    setShowOptions(false);
    setSelectedOption(null);
    setTimeLeft(30);

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    const reveal = setTimeout(() => {
      setShowOptions(true);
    }, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(reveal);
    };
  }, [index]);


  //  Süre biterse boş cevap olarak kaydet ve ileri geç
  useEffect(() => {
    if (timeLeft === 0) {
      setAnswers((prev) => [...prev, null]);
      setIndex((prev) => prev + 1);
    }
  }, [timeLeft]);
  

  //  Cevap işleme fonksiyonu
  function handleAnswer(answer) {
    if (selectedOption !== null) return;
    const correct = currentQuestion.answer;
    const result = answer === correct ? "correct" : "wrong";
    setAnswers((prev) => [...prev, result]);
    setSelectedOption(answer);
    setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1000);
  }

  //  Test Bittiyse Sonuçları Göster
  if (!currentQuestion) {
    const correctCount = answers.filter((a) => a === "correct").length;
    const wrongCount = answers.filter((a) => a === "wrong").length;
    const emptyCount = answers.filter((a) => a === null).length;

    let message = "";
    if (correctCount >= 8) {
      message = "🎉 Harikasın! Çok başarılı bir test sonucu!";
    } else if (correctCount >= 5) {
      message = "😊 Fena değil, biraz daha dikkat!";
    } else {
      message = "😔 Daha çok çalışman gerek.";
    }

    return (
    <div className="results">
      {correctCount >= 5 && <Confetti width={width} height={height} />}
      <h2 style={{ color: "lightgreen" }}>{message}</h2>
      <p>✅ Doğru: {correctCount}</p>
      <p>❌ Yanlış: {wrongCount}</p>
      <p>❓ Boş: {emptyCount}</p>
    </div>
  );
}

  const imagePath = `/assets/${currentQuestion.media}`;

  return (
    <div className="quiz">
      <h2>Soru {index + 1}</h2>

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${(timeLeft / 30) * 100}%` }}
        ></div>
      </div>

      <img src={imagePath} alt="soru görseli" width="400" />
      <p>{currentQuestion.question}</p>

      {showOptions ? (
        <ul className="options">
          {currentQuestion.options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleAnswer(option)}
              className={selectedOption === option ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : (
        <p>Şıklar birazdan gelecek...</p>
      )}

      <p>Kalan süre: {timeLeft} saniye</p>
    </div>
  );
}

export default Quiz;
