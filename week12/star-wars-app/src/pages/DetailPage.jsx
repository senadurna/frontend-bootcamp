import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.tech/api/starships/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShip(data.result.properties);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="card-title mb-3">{ship.name}</h2>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Model:</strong> {ship.model}
          </li>
          <li className="list-group-item">
            <strong>Yolcu Kapasitesi:</strong> {ship.passengers}
          </li>
          <li className="list-group-item">
            <strong>Maksimum Hız:</strong> {ship.max_atmosphering_speed}
          </li>
          <li className="list-group-item">
            <strong>Üretici:</strong> {ship.manufacturer}
          </li>
          <li className="list-group-item">
            <strong>Mürettebat:</strong> {ship.crew}
          </li>
          <li className="list-group-item">
            <strong>Kargo Kapasitesi:</strong> {ship.cargo_capacity}
          </li>
        </ul>

        <button
          className="btn btn-dark mt-4"
          onClick={() => navigate("/")}
        >
          ← Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
