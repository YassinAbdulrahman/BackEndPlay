import { useEffect } from "react";
import WorkoutsDetails from "../components/WorkoutsDetails";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutContext } from "../hook/useWorkoutContext";

function Home() {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fatchData = async () => {
      const response = await fetch("http://localhost:5000/api/workouts");
      const json = await response.json();
      console.log(json.workouts);
       if (response.ok) {
      dispatch({ type: "SET_WORKOUTS", payload: json.workouts });
    }
    };
   
    fatchData();
  }, []);

  return (
    <>
      <div className="home">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => {
              return <WorkoutsDetails key={workout._id} workout={workout} />;
            })}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
}

export default Home;
