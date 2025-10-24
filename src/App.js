import React, { useState } from "react";
import "../styles.css";

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addMovie({
      id: Date.now(),
      title,
      image,
      year,
      genre,
      rating: rating ? parseFloat(rating) : 0
    });

    setTitle(""); setImage(""); setYear(""); setGenre(""); setRating("");
    alert("🎬 Movie added successfully!");
  };

  return (
    <div className="add-movie-form">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Title:</label>
          <input type="text" placeholder="Movie Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Poster Filename:</label>
          <input type="text" placeholder="image.jpg" value={image} onChange={(e)=>setImage(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Year:</label>
          <input type="text" placeholder="2025" value={year} onChange={(e)=>setYear(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Genre:</label>
          <input type="text" placeholder="Drama, Horror..." value={genre} onChange={(e)=>setGenre(e.target.value)} />
        </div>
        <div className="form-row">
          <label>Rating:</label>
          <input type="number" placeholder="0-10" value={rating} onChange={(e)=>setRating(e.target.value)} />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}



