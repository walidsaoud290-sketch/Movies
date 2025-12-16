import { useEffect, useRef, useState } from "react";
import "./TrendingMovies.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import './TrendingMovies.css'
const TrendingMovies = ({ TrendingMovieList }) => {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 0.6;

  let startX = 0;
  let currentX = 0;
  let position = 0;

  useEffect(() => {
    const track = trackRef.current;
    let animationId;

    const animate = () => {
      if (!isPaused) {
        position -= speed;
        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  /* === TOUCH EVENTS === */
  const onTouchStart = (e) => {
    setIsPaused(true);
    startX = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    currentX = e.touches[0].clientX;
    const delta = currentX - startX;
    trackRef.current.style.transform = `translateX(${position + delta}px)`;
  };

  const onTouchEnd = () => {
    position += currentX - startX;
    setIsPaused(false);
  };
  return (
    <section className="trending-section">
      <div
        className="trending-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="trending-carousel-wrapper">
          <div className="trending-carousel-track" ref={trackRef}>
            {[...TrendingMovieList, ...TrendingMovieList].map(
              (movie, index) => (
                <a key={index} className="movie-item">
                  <img src={movie.poster_path} alt={movie.title} />
                  <div className="movie-title">{movie.title}</div>
                  <div className="movie-link">
                    View Details →
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;