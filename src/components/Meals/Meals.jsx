import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData();

    return (
        <div className="my-5">
            <h2 className="text-center text-2xl font-bold">Here are meals: {meals.meals.length}</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cold-1 gap-5">
            {
                meals.meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;