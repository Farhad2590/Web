import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bgimg1 from '../../assets/home/01.jpg'
import bgimg2 from '../../assets/home/02.jpg'
import bgimg3 from '../../assets/home/03.png'
import bgimg4 from '../../assets/home/04.jpg'
import bgimg5 from '../../assets/home/05.png'
import bgimg6 from '../../assets/home/06.png'
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={bgimg1} />
            </div>
            <div>
                <img src={bgimg2} />
            </div>
            <div>
                <img src={bgimg3} />
            </div>
            <div>
                <img src={bgimg4} />
            </div>
            <div>
                <img src={bgimg5} />
            </div>
            <div>
                <img src={bgimg6} />
            </div>
        </Carousel>
    );
};

export default Banner;