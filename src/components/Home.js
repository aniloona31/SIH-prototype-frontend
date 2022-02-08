import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoginContext from '../Context/login/LoginContext';
import PlaceContext from '../Context/places/PlaceContext'
import Place from './Place'

function Home() {
    
    const navigate = useNavigate();
    let { category } = useParams();
    let location = useLocation();

    const context = useContext(PlaceContext);
    const { places, getAllPlaces, getPlacesByCategory,getLikedAndDisliked} = context;

    const contextTwo = useContext(LoginContext);
    const {getWishlist} = contextTwo;

    useEffect(async () => {
        // console.log(category);
        if (localStorage.getItem('token') !== null) {
            await getLikedAndDisliked();
            await getWishlist();
            if (category === undefined) {
                getAllPlaces();
            }
            else {
                getPlacesByCategory(category);
            }
        }
        else {
            navigate("/login");
        }
        // console.log(places); 
    },[location]);

    return (
        <h1 className="bg-gray-100 pt-8 pb-8">
            {places.length > 0 ? places.map((item)=>{
                return (
                    <div key={item.placeId}>
                        <Place place={item}></Place>
                    </div>
                )
            }) : <div className='font-bold text-xl'>No Items To Show</div>}
        </h1>
    )
}

export default Home
