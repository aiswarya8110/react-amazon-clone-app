import React from 'react';
import './Home.css';
import Product from './Product';
import { useHistory } from 'react-router-dom';

function Home(){
    console.log(useHistory());
    return(
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="amazon-banner"/>
            <div className="home__row">
                <Product 
                id="12321378"
                title="The Lean Startup: How Contestant Innovation Creates Radically Successful business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"/>

                <Product 
                id="12321341"
                title="Iphone X"
                price={81.96}
                rating={5}
                image="https://www.transparentpng.com/thumb/-iphone-x/v8dHCT-apple-iphone.png"/>
            </div>
            <div className="home__row">
                <Product 
                id="12321342"
                title="The Lean Startup: How Contestant Innovation Creates Radically Successful business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"/>

                <Product 
                id="12321343"
                title="The Lean Startup: How Contestant Innovation Creates Radically Successful business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"/>

                <Product 
                id="12321346"
                title="The Lean Startup: How Contestant Innovation Creates Radically Successful business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"/>
            </div>
            <div className="home__row">
                <Product id="12321356"
                title="The Lean Startup: How Contestant Innovation Creates Radically Successful business Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"/>
            </div>
        </div>
    )
}

export default Home;