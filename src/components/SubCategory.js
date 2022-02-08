import React, { useContext } from 'react'
import tourism from '../images/tourism.png';
import party from '../images/party.jpg';
import basic from '../images/basic.jpg';
import food from '../images/food.jpeg';
import shopping from '../images/shopping.jpg';
import grocery from '../images/grocery.jpg';
import electronic from '../images/electronic.jpeg';
import gediRoute from '../images/gediRoute.jpg';
import PlaceContext from '../Context/places/PlaceContext';
import { useNavigate } from 'react-router-dom';
function SubCategory() {
    const context = useContext(PlaceContext);
    const navigate = useNavigate();

    const displayCategory = (e) => {
        if(localStorage.getItem('token') !== null){
            navigate(`/${e.target.id}`);
        }
        else{
            navigate("/login");
        }
    }

    return (
        <div>
            <div className="flex flex-col shadow-md mt-16 bg-gray-200 pt-4">
                <div className="flex pb-5 ">
                    <div className="flex flex-nowrap lg:ml-10 md:ml-5 lg:mr-10 ">
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img id="Tourism" src={tourism} style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Tourism" className="leading-normal tracking-wide text-gray-200" >Tourism</p>
                                </div>
                            </div>

                        </div>
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img src={party} id="Party"  style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p  id="Party"  className="leading-normal tracking-wider text-gray-200">Party</p>
                                </div>
                            </div>

                        </div>
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img id="Basic" src={basic} style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Basic" className="leading-normal tracking-wider text-gray-200">Basic</p>
                                </div>
                            </div>

                        </div>
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img id="Food" src={food} style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Food" className="leading-normal tracking-wider text-gray-100">Food</p>
                                </div>
                            </div>

                        </div>
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} id="Shopping" className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img src={shopping} id="Shopping" style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Shopping" className="leading-normal tracking-wide text-gray-200">Shopping</p>
                                </div>
                            </div>

                        </div>
                        <div onClick={displayCategory} className="inline-block px-3 mr-10">
                            <div className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img id="Grocery" src={grocery} style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Grocery" className="leading-normal tracking-wide text-gray-200">Grocery</p>
                                </div>
                            </div>

                        </div>

                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img id="Electronics" src={electronic} style={{ width: 96, height: 96 }}></img>
                                <div className="absolute bottom-0 right-0 mr-2">
                                    <p id="Electronics" className="leading-normal tracking-wide text-gray-200">Electronics</p>
                                </div>
                            </div>

                        </div>
                        <div className="inline-block px-3 mr-10">
                            <div onClick={displayCategory} className="relative cursor-pointer w-24 h-24 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:opacity-75 transition-shadow duration-300 ease-in-out">
                                <img src={gediRoute} style={{ width: 96, height: 96 }}></img>
                                <div id="Gedi" className="absolute bottom-0 right-0 mr-2">
                                    <p id="Gedi" className="leading-normal tracking-wide text-gray-200">Gedi</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubCategory
