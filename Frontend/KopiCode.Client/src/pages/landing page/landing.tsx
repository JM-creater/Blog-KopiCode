import './landing.css'
import Navigation from '../../components/navigation';
import BlogContainer from '../../components/blogContainer';
import Categories from '../../components/categories/categories';

function Landing (){
    return <div className="landing-container">
                <Navigation/>
                <div>
                        <div className="header-container">
                                <h2>Trending on KopiCode</h2>
                                <div className="blogs__trending">
                                        <BlogContainer title={'Sample Trending Blog title'} description={'aasdh bashdbajsb hjdbasjh bdjhasbdhjbas jhdbhhjawsbhdjasbhjd asbdj'}/>
                                        <BlogContainer title={'Sample Trending Blog title'} description={'aasdh bashdbajsb hjdbasjh bdjhasbdhjbas jhdbhhjawsbhdjasbhjd asbdj'}/>
                                        <BlogContainer title={'Sample Trending Blog title'} description={'aasdh bashdbajsb hjdbasjh bdjhasbdhjbas jhdbhhjawsbhdjasbhjd asbdj'}/>
                                </div>
                        </div>
                        {/* CATEGORY FOR BLOGS */}
                        <div className="categories-container">
                                <h1>Categories</h1>
                                <Categories></Categories>
                        </div>
                        <div className="display-blogs-container">
                                <BlogContainer title={'Sample Blog Title'} description='asbdahjsbdasb hajsbdh jasbdhjbashjkdbasjb dhjasbdhjasb djabshjkd '/>
                                <BlogContainer title={'blog title Sample'} description='asbdahjsbdasb hajsbdh jasbdhjbashjkdbasjb dhjasbdhjasb djabshjkd '/>
                                <BlogContainer title={'Haduken'} description='asbdahjsbdasb hajsbdh jasbdhjbashjkdbasjb dhjasbdhjasb djabshjkd '/>
                        </div>
                </div>
               
        </div>
}
export default Landing;