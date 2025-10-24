import React, { useState } from "react";

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addMovie({ title, poster, year });
    setTitle("");
    setPoster("");
    setYear("");
    alert("🎬 Movie added successfully!");
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poster URL (optional)"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
