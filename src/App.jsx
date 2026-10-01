import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Clapperboard, Clock3, Film, MapPin, Minus, Plus, Popcorn, Sparkles, Ticket, UserRound } from 'lucide-react';
import TheaterScene from './theater-scene.jsx';
import { supabase } from './supabase.js';

const sampleMovies = [
  { id: 'last-light', title: 'The Last Light', genre: 'SCI-FI · ADVENTURE', duration_minutes: 128, rating: 'PG-13', image_url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=900&q=85', description: 'When the stars go quiet, one signal changes everything.' },
  { id: 'velvet-hour', title: 'A Velvet Hour', genre: 'DRAMA · ROMANCE', duration_minutes: 106, rating: 'PG-13', image_url: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85', description: 'Two strangers. One city. A night that feels like forever.' },
  { id: 'wild-country', title: 'Wild Country', genre: 'THRILLER · MYSTERY', duration_minutes: 114, rating: 'R', image_url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', description: 'Some places keep their secrets. This one keeps its guests.' },
];

const showtimes = ['6:15 PM', '7:40 PM', '9:05 PM'];
const dates = [
  { weekday: 'TODAY', day: '01' },
  { weekday: 'FRI', day: '02' },
  { weekday: 'SAT', day: '03' },
  { weekday: 'SUN', day: '04' },
];

export default function App() {
  const [movies, setMovies] = useState(sampleMovies);
  const [selectedMovie, setSelectedMovie] = useState(sampleMovies[0]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState(showtimes[1]);
  const [tickets, setTickets] = useState(2);
  const [bookingState, setBookingState] = useState('idle');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!supabase) return;
    supabase.from('movies').select('*').order('title').then(({ data, error }) => {
      if (error || !data?.length) return;
      setMovies(data);
      setSelectedMovie(data[0]);
    });
  }, []);

  async function bookTickets(event) {
    event.preventDefault();
    setBookingState('loading');
    setNotice('');

    if (supabase) {
      const { error } = await supabase.from('bookings').insert({
        movie_id: selectedMovie.id,
        customer_name: 'Guest',
        seats: tickets,
        showtime: `${dates[selectedDate].weekday} ${selectedTime}`,
      });
      if (error) {
        setBookingState('error');
        setNotice('Booking could not be saved. Check your Supabase setup and try again.');
        return;
      }
    }

    setBookingState('success');
    setNotice(supabase ? 'Your seats are booked. Enjoy the show.' : 'Demo booking confirmed. Add Supabase credentials to save bookings online.');
    window.setTimeout(() => setBookingState('idle'), 4500);
  }

  const posterStyle = (movie) => ({ backgroundImage: `linear-gradient(0deg, rgba(15, 10, 8, .86), transparent 66%), url("${movie.image_url || sampleMovies[0].image_url}")` });

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Midnight Cinema home"><span className="brand-mark"><Film size={19} strokeWidth={1.7} /></span><span>MIDNIGHT<span className="brand-light">CINEMA</span></span></a>
        <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#movies">Now showing</a><a href="#booking">Your tickets</a><a href="#about">Our cinema</a></nav>
        <button className="location-button" type="button"><MapPin size={15} /> NEW YORK <ChevronDown size={14} /></button>
        <button className="avatar-button" type="button" aria-label="Your profile"><UserRound size={17} /></button>
      </header>

      <section className="hero" id="home">
        <div className="hero-scene"><TheaterScene /></div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> A LITTLE MAGIC, RIGHT THIS WAY</div>
          <h1>Big stories.<br /><em>Better nights.</em></h1>
          <p>Your seat is waiting. Find a film, bring your favorite people, and let the outside world fade away.</p>
          <a className="hero-link" href="#movies">Find your film <ArrowDown size={16} /></a>
        </div>
        <div className="hero-caption"><span>THE MIDNIGHT AUDITORIUM</span><span>42° 21' N · 71° 03' W</span></div>
        <div className="hero-counter"><span>01</span><i /> 03</div>
      </section>

      <section className="now-showing page-section" id="movies">
        <div className="section-heading"><div><div className="eyebrow section-eyebrow">YOUR NEXT GREAT NIGHT</div><h2>Now showing</h2></div><a href="#booking" className="text-link">View all films <ArrowUpRight size={16} /></a></div>
        <div className="movie-layout">
          <div className="movie-list">
            {movies.map((movie, index) => (
              <button className={`movie-row ${selectedMovie.id === movie.id ? 'selected' : ''}`} key={movie.id} onClick={() => setSelectedMovie(movie)} type="button" aria-pressed={selectedMovie.id === movie.id}>
                <span className="movie-index">0{index + 1}</span>
                <span className="movie-info"><span className="movie-genre">{movie.genre}</span><span className="movie-title">{movie.title}</span><span className="movie-duration"><Clock3 size={12} /> {movie.duration_minutes} min <span>·</span> {movie.rating}</span></span>
                <ArrowUpRight className="movie-arrow" size={18} />
              </button>
            ))}
          </div>
          <div className="featured-movie" style={posterStyle(selectedMovie)}>
            <div className="featured-top"><span className="now-tag"><span /> NOW PLAYING</span><span className="featured-rating">{selectedMovie.rating}</span></div>
            <div className="featured-bottom"><span className="movie-genre">TONIGHT'S FEATURE</span><h3>{selectedMovie.title}</h3><p>{selectedMovie.description || `${selectedMovie.genre} · ${selectedMovie.duration_minutes} min`}</p><a href="#booking" className="poster-cta">Choose your seats <ArrowUpRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section className="booking-section page-section" id="booking">
        <div className="section-heading booking-heading"><div><div className="eyebrow section-eyebrow">THE GOOD PART</div><h2>Make it a movie night.</h2></div><div className="booking-note"><Sparkles size={15} /> Your favorite seat is just a few taps away</div></div>
        <form className="booking-panel" onSubmit={bookTickets}>
          <div className="booking-step"><span className="step-number">01</span><label>Pick a day</label><div className="date-picker">{dates.map((date, index) => <button className={`date-option ${selectedDate === index ? 'chosen' : ''}`} key={date.day} onClick={() => setSelectedDate(index)} type="button"><span>{date.weekday}</span><strong>{date.day}</strong></button>)}</div></div>
          <div className="booking-step"><span className="step-number">02</span><label>Choose a show</label><div className="time-picker">{showtimes.map((time) => <button className={`time-option ${selectedTime === time ? 'chosen' : ''}`} key={time} onClick={() => setSelectedTime(time)} type="button">{time}</button>)}</div></div>
          <div className="booking-step ticket-step"><span className="step-number">03</span><label>How many seats?</label><div className="ticket-picker"><span><Ticket size={16} /> Tickets <small>$16 / seat</small></span><div className="stepper"><button aria-label="Remove one ticket" disabled={tickets <= 1} onClick={() => setTickets(tickets - 1)} type="button"><Minus size={14} /></button><strong>{tickets}</strong><button aria-label="Add one ticket" disabled={tickets >= 8} onClick={() => setTickets(tickets + 1)} type="button"><Plus size={14} /></button></div></div></div>
          <div className="booking-submit"><div><span>TOTAL</span><strong>${tickets * 16}.00</strong></div><button className="book-button" disabled={bookingState === 'loading'} type="submit">{bookingState === 'loading' ? 'Booking…' : bookingState === 'success' ? <><Check size={17} /> Confirmed</> : <>Get tickets <ArrowUpRight size={16} /></>}</button></div>
          {notice && <p className={`booking-notice ${bookingState === 'error' ? 'error' : ''}`} role="status">{notice}</p>}
        </form>
        <div className="booking-footnote"><span><Clapperboard size={14} /> Dolby Atmos in every auditorium</span><span><Popcorn size={14} /> Fresh popcorn, always</span><span>Doors open 20 min before showtime</span></div>
      </section>

      <footer id="about"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Film size={18} /></span><span>MIDNIGHT<span className="brand-light">CINEMA</span></span></a><span className="footer-address">18 Mercer Street, New York, NY</span><span className="footer-hours">EVERY NIGHT, TIL LATE <Minus size={12} /> EST. 1987</span></footer>
    </main>
  );
}