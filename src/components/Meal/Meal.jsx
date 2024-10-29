import { useNavigate } from "react-router-dom";

const Meal = ({meal}) => {
    const {strCategory, idMeal, strMeal, strMealThumb, strInstructions, strArea, strYouTube} = meal;

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/meal/${idMeal}`);
    }

    return (
        <div className="my-5">
            <div className="h-full card p-5 bg-base-100 border-2 border-gray-200 rounded-xl">
            <figure className="w-full h-56">
                <img src={strMealThumb} className="w-full h-full rounded-xl"/>
            </figure>
            <div className="card-body space-y-3">
                <h1 className="text-xl font-extrabold">{strCategory}</h1>
                <h2 className="text-lg font-bold text-gray-700">{strMeal}</h2>
                <h3 className="text-gray-600 font-bold">Area: {strArea}</h3>
                <p className="text-gray-500 font-medium">{strInstructions.slice(0, 150)}...</p>


                <div className="card-actions">
                <button onClick={handleViewDetails} className="btn btn-info w-full font-bold">View Details</button>
                </div>
             </div>
            </div>
          </div>
    );
};

export default Meal;