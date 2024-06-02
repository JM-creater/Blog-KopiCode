import './landing.css'
import NavigationBar from '../../components/Navbar.Landing/NavigationBar';
import Footer from '../../components/footer/footer';
import Lottie from 'lottie-react';
import bloggingAnimated from './lottieAnimations/hero-animation.json';
import feature1 from './lottieAnimations/blog-animation.json';
import feature2 from './lottieAnimations/notes-animation.json';
import feature3 from './lottieAnimations/thinking-animation.json';
import FilledButtonDark from '../../components/Buttons/FilledButtonDark';
import { Link } from 'react-router-dom';

function Landing (){
    return <>
        <NavigationBar/>
        {/* START OF HERO SECTION */}
            <div className="Hero">
                <div className="content1">
                    <h1 id='hero__text'>Share Your Coding Journey</h1>
                    <p id='hero__text2'>Your experiences and insights can inspire and help fellow developers. Share your coding journey today!</p>
                    <Link to='/signup'><FilledButtonDark label={'Get Started'}/></Link>
                </div>
                <div className="content2">
                    <Lottie id='hero-animation' animationData={bloggingAnimated}/>
                </div>
            </div>
            {/* END OF HERO SECTION */}

            {/* START OF FEATURES SECTION */}
            <div className="mainContent__features">
                <header id='header__feature'><h1 className='features__headerText'>Our Features</h1></header>
                <div className="feature1">
                    <Lottie id='feature__animation' animationData={feature1}/>
                    <h2>Share Your Coding Insights: Publish Your Blog on Kopicode</h2>
                </div>
                <div className="feature2">
                    <h2>Code Notes: Capture Your Insights and Ideas on Kopicode</h2>
                    <Lottie id='feature__animation' animationData={feature2}/>
                </div>
                <div className="feature3">
                    <Lottie id='feature__animation' animationData={feature3}/>
                    <h2>Stuck on a problem or have a question?
                         Interact with other programmers on Kopicode to ask for tips and solutions!</h2>
                </div>
            </div>
            {/* END OF FEATURES SECTION */}
        <Footer/>
    </>
}
export default Landing;