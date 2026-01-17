import { useWorkoutContext } from "../hook/useWorkoutContext";
import '../index.css'
function WorkoutsDetails({workout}) {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {   
   const response = await fetch('http://localhost:5000/api/workouts/' + workout._id, {
    method: 'DELETE' })
    const json = await response.json();

    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json});
    }
  }

  return (
    <>
     <div className="workoutsdetails">
        <h4>{workout.title}</h4>
        <p><strong>Load:</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>Delete</span>
      </div>
    </>
    
  )
}

export default WorkoutsDetails