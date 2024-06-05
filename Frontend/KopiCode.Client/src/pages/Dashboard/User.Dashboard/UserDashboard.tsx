
import './userDashboard.css'
import sample from './wuthering-waves.jpg';

const UserDashboard: React.FC = () => {
    return <>
    <div className="userDashboard__container">
        <div id="Trending">
            <h3>Featured</h3>
            <img src={sample} alt="trending blog thumbnail" />
            <div id="Trending__context">
                <p>"Wuthering Waves" is an upcoming open-world action RPG developed by Kuro Game, the creators of "Punishing: Gray Raven." The game has garnered attention for its visually stunning graphics, dynamic combat system, and intricate storyline set in a post-apocalyptic world. Players can explore expansive environments, engage in real-time battles, and experience deep narrative elements. The impact of "Wuthering Waves" is significant in the gaming community due to its promise of high-quality gameplay, innovative mechanics, and the reputation of its developer for delivering engaging and polished gaming experiences. It has generated excitement and anticipation among fans of the genre and those looking for new, immersive RPGs.
                </p>
            </div>
        </div>

        <div id="blogs__other">
            <h3>Recent blog posts</h3>
        </div>
    </div>
    </>
};

export default UserDashboard;