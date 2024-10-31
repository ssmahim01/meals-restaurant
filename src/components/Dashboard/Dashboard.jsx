import { useNavigate } from "react-router-dom";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const Dashboard = () => {
    const navigate = useNavigate();

    const mealsData = [
          {
            "cafeName": "MZ Cafe",
            "cost": 65000,
            "profit": 85000
          },
          {
            "cafeName": "Grill House",
            "cost": 30000,
            "profit": 50000
          },
          {
            "cafeName": "Stir Fry Central",
            "cost": 35000,
            "profit": 70000
          },
          {
            "cafeName": "Burrito Palace",
            "cost": 28000,
            "profit": 50000
          },
          {
            "cafeName": "Kebab King",
            "cost": 30000,
            "profit": 55000
          }
        ];

        const handleGoHome = () => {
            navigate('/');
        }

    return (
        <div className="lg:w-4/5 w-11/12 mx-auto md:py-12 pb-10">
            <div className="lg:w-3/5 w-11/12 mx-auto md:mb-12 flex justify-between items-center">
                <button onClick={handleGoHome} className="btn btn-primary font-bold">Home</button>

                <h2 className="text-gray-700 md:text-3xl text-2xl font-bold">Profit Comparison</h2>

            </div>

           <div className="md:w-4/5 w-11/12 mx-auto text-center space-y-4 my-6">
           <h2 className="text-gray-800 lg:text-3xl text-2xl font-extrabold">Comparison between Different Cafes</h2>
           <p className="lg:w-3/5 mx-auto text-gray-500 font-medium">In here, you can see costs and profits of the different Cafes.Among of them, the profits of the MZ Cafe is lower than the costs.Although, we gets lower profits.But, we are provides best services for our customers.</p>
           </div>

            <LineChart width={350} height={300} className="mx-auto" data={mealsData}>
                <XAxis dataKey="cafeName"></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="cost" stroke="yellow"></Line>
                <Line type="monotone" dataKey="profit" stroke="purple"></Line>
            </LineChart>
            </div>
    )
}
        

export default Dashboard;