import './landing.css'
import Navigation from '../../components/navigation';
import Footer from '../../components/footer/footer';
import TrendBlogs from '../../components/trending blogs/trendBlogs';

function Landing (){
    return <>
        <Navigation/>
        <div className="landing-container">
                <TrendBlogs/>
        </div>
        <Footer/>
    </>
}
export default Landing;