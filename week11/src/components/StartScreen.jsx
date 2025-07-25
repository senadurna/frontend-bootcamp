import React from "react";

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Bilgi Testine Hoş Geldin!</h1>
      <p>
        Bu test 10 sorudan oluşmaktadır. Her soru 30 saniye boyunca görünür. İlk 4 saniye boyunca şıklar gizlenir.
      </p>
      <button onClick={onStart}>Teste Başla</button>
    </div>
  );
}

export default StartScreen;
