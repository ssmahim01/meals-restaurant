import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
    const data = useLoaderData();
    const meal = data.meals[0];
    // console.log(meal);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
       <div className="lg:w-2/5 md:w-4/5 w-11/12 mx-auto flex flex-col justify-center items-center my-8">

        <div className="pb-6 bg-slate-200 rounded-2xl space-y-5 text-center">
            <img src={meal.strMealThumb} alt="Image of Meal" className="w-full lg:h-80 md:h-72 h-64 rounded-2xl"/>
            <div className="px-7 space-y-4">
            <h2 className="text-2xl font-extrabold">Meal: {meal.strMeal}</h2>
            <h3 className="text-xl text-gray-600 font-bold">Area: {meal.strArea}</h3>

            <p className="text-gray-500 font-medium">{meal.strInstructions}</p>

            <button onClick={handleBack} className="w-full btn bg-lime-400 px-6 font-bold">Go Back</button>
            </div>
        </div>
       </div>
    );
};

export default MealDetails;