import React  from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { getAllMeals } from "../actions/mealAction";
import Meal from "../components/Meal";
import  meals  from "../mealsdata";
//import { getAllMealsReducer } from "../reducers/mealReducers";

export default function Homescreen() {

  
    return (
        <div>
            <div className="row ">

                {  (

                    meals.map((meal) => {
                        return (<div className="col-md-4 bg-white" key={meal._id}>
                            <div >
                                <Meal meal={meal} />
                            </div>
                        </div>
                        );
                    })

                )}


                <div className="footer">
                    <h1>here goes the footer</h1>
                </div>
            </div>
        </div>
    )
}