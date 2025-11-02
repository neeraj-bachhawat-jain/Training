import './Card.css'
export default function Card({firstName, lastName, student_id, course, rating}){
    return(
        <div className="card">
            <p>Name: {firstName} {lastName}</p>
            <p>Student_id: {student_id}</p>
            <p>Course: {course}</p>
            <p>Rating: {rating} out of 5</p>
        </div>
    )
}