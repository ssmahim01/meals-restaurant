import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
    const meal = useLoaderData();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
       <div>
            <img src={meal.strMealThumb} alt="Image of Meal" className="rounded-2xl"/>

        <div>
            <h2>{meal.strMeal}</h2>
            <h3>{meal.strArea}</h3>

            <button onClick={handleBack} className="btn bg-slate-400 px-6 font-bold">Go Back</button>
        </div>
       </div>
    );
};

export default MealDetails;