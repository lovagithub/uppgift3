import {Link} from 'react-router-dom';
import img1 from '../assets/images/img-1.svg';
import img2 from '../assets/images/img-2.svg';


const ShowCaseSection: React.FC = () => {
    return (
      <section className="showcase">
        
        <img src={img1} className="img-left" alt="img1" />
        <div className="showcase-body">
            <h1>Sale Up </h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
          <Link to="/products" className="btn-theme">SHOP NOW</Link>
       
        <img src={img2} className="img-right" alt="img2" />
        </div>

        </section>
    )

}

export default ShowCaseSection


