import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
           <div className="w-4/5 mx-auto flex justify-between items-center py-8">
           <h2 className="text-2xl font-extrabold text-rose-400">MZ Cafe</h2>
           <Header></Header>
           </div>
           <main className="w-11/12 mx-auto">
            <div className="lg:w-11/12 mx-auto mb-12">
            <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src="/assets/breakfast.jpg"
                className="bg-cover bg-center w-full lg:h-[400px] md:h-[300px] h-72 rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="/assets/beef.jpg"
                className="bg-cover bg-center w-full lg:h-[400px] md:h-[300px] h-72 rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="/assets/dessert.jpg"
                className="bg-cover bg-center w-full lg:h-[400px] md:h-[300px] h-72 rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src="/assets/vegetarian.jpg"
                className="bg-cover bg-center w-full lg:h-[400px] md:h-[300px] h-72 rounded-2xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>
         </div>
          {
            navigation.state === "loading" ? <p className="text-center my-8 text-gray-700 text-2xl font-semibold">loading...</p> : <Outlet></Outlet>
          }
    </main>
    <Footer></Footer>
 </div>
);
};

export default Home;