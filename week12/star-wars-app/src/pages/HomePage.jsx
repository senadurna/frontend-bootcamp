import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    fetch("https://swapi.tech/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
        setNextUrl(data.next);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const loadMoreStarships = () => {
    if (!nextUrl) return;

    fetch(nextUrl)
      .then((res) => res.json())
      .then((data) => {
        setStarships((prev) => [...prev, ...data.results]);
        setNextUrl(data.next);
      })
      .catch((err) => console.error(err));
  };

  const filteredStarships = starships.filter((ship) => {
    const name = ship.name.toLowerCase();
    const model = ship.model?.toLowerCase() || "";
    const term = searchTerm.toLowerCase();
    return name.includes(term) || model.includes(term);
  });

  if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;

  return (
  <div className="container-fluid mt-4">


    {/* Navbar */}
    <nav className="navbar navbar-dark bg-dark mb-4 rounded ps-0">
      <div className="container justify-content-center">
        <span className="navbar-brand mb-0 h1 text-center">Star Wars App</span>
      </div>
    </nav>

    {/* Arama kutusu */}
    <div className="mb-4 d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Ara: Ad veya Model"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>

    {/* Gemi listesi */}
    {filteredStarships.length > 0 ? (
      <div className="row g-4 justify-content-center">
        {filteredStarships.map((ship) => (
          <div className="col-12 col-md-6 col-lg-4" key={ship.uid}>
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{ship.name}</h5>
                <p className="card-text">UID: {ship.uid}</p>
                <Link
                  to={`/starships/${ship.uid}`}
                  className="btn btn-primary mt-auto"
                >
                  Detayları Gör
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-muted text-center">Sonuç bulunamadı.</p>
    )}

    {/* Daha fazla butonu */}
    {nextUrl && (
      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary" onClick={loadMoreStarships}>
          Daha Fazla Yükle
        </button>
      </div>
    )}
  </div>
);
}

export default HomePage;
