import dev1 from './DevImages/martin-prof.jpg';
import dev2 from './DevImages/racel-prof.png';
import './AboutUs.css'
import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import Footer from "../../components/footer/footer";

function AboutUs () {
    return <>
        <div className="aboutUs__mainContainer">
            <h1 id="aboutUs__headerText">What is KopiCode?</h1>
            <p>Welcome to KopiCode – your go-to community for programmers, especially students.
                 Share your coding journey with photos and captions, and connect with peers through engaging comments.
                  Inspired by the focus coffee brings,
                 KopiCode is here to boost your productivity and support your growth.
                  Join us to learn, share, and code together!</p>
            <h1 id="aboutUs__devsHeaderText">About the Developers</h1>
            <div className="dev__infoContainer">
                <div className="about__devs-card">
                    <img id="dev_prof" src={dev1} alt="Backend Developer" />
                    <h2 id="dev_name">Joseph Martin Garado</h2>
                    <span id="role">BACKEND DEVELOPER</span>
                    <span id="role">SOFTWARE AND WEB DEVELOPMENT</span>
                    <span id="role">SOFTWARE ENGINEERING ASSOCIATE</span>
                    <div className="contacts-container">
                        <span>Connect Through:</span>
                        <a id="contacts-icon" href="https://www.linkedin.com/in/joseph-martin-garado-19b5a6202/" title="LinkedIn"><LinkedinFilled /></a>
                        <a id="contacts-icon" href="https://github.com/JM-creater" title="GitHub"><GithubFilled /></a>                      
                        <a id="contacts-icon" href="https://www.instagram.com/martin.garado/?hl=en" title="Instagram"><InstagramFilled /></a>
                        <a id="contacts-icon" href="https://www.facebook.com/josephmartin.garado" title="Facebook"><FacebookFilled /></a>
                    </div>
                </div>
                <div className="about__devs-card">
                    <img id="dev_prof" src={dev2} alt="Frontend Developer" />
                    <h2 id="dev_name">Racel Anne Pitogo</h2>
                    <span id="role">FRONTEND DEVELOPER</span>
                    <span id="role">UI / UX DESIGNER</span>
                    <span id="role">SOFTWARE ENGINEERING ASSOCIATE</span>
                    <div className="contacts-container">
                        <span>Connect Through:</span>
                        <a id="contacts-icon" href="www.linkedin.com/in/pitogo-racel-anne-b74b922a2" title="LinkedIn"><LinkedinFilled /></a>
                        <a id="contacts-icon" href="https://github.com/RacelAnne" title="GitHub"><GithubFilled /></a>                      
                        <a id="contacts-icon" href="https://www.instagram.com/rcelann/?hl=en" title="Instagram"><InstagramFilled /></a>
                        <a id="contacts-icon" href="https://www.facebook.com/racelanne.pitogo.7" title="Facebook"><FacebookFilled /></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
}

export default AboutUs;