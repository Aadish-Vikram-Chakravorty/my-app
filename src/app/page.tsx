import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        const bookNowButton = document.querySelector('.book-now') as HTMLAnchorElement;
        
        if (bookNowButton) {
            bookNowButton.addEventListener('click', (event) => {
                event.preventDefault();
                alert('Book Now button clicked!');
            });
        }

        return () => {
            if (bookNowButton) {
                bookNowButton.removeEventListener('click', () => {});
            }
        };
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <ul className="nav-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Show</a></li>
                        <li><a href="#">Competition</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#" className="search">🔍</a></li>
                        <li><a href="#" className="designer-portal">Designer Portal</a></li>
                        <li><a href="#" className="book-now">Book Now</a></li>
                    </ul>
                </nav>
                <div className="hero">
                    <video autoPlay muted loop className="hero-video">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-text">
                        <h1>Enter Our World</h1>
                        <h2>A World Like No Other</h2>
                    </div>
                </div>
            </header>
            <section className="info">
                <div className="show-details">
                    <h3>2024 World of WearableArt Show</h3>
                    <p>26 September - 13 October</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
