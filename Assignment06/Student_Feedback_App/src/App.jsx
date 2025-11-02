import { useState } from "react";
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'
import FeedbackForm from './Components/FeedbackForm'

function App() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    student_id: "",
    course: "",
    rating: "",
  })
  const [card, setCard] = useState  (false);
  const [submittedData, setSubmittedData] = useState(null)
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((preData) =>({
      ...preData, 
      [name]: value 
  }))
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmittedData(formData)
    setCard(true);
    console.log("Form Data: ", formData);
    setFormData({
      firstName: "",
      lastName: "",
      student_id: "",
      course: "",
      rating: ""   
    })
  }

  return (
    <div className="outer">
      <div className="container">
        <Header />
        <FeedbackForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
      </div>
      {card ? <Card firstName={submittedData.firstName} lastName={submittedData.lastName} student_id={submittedData.student_id} course={submittedData.course} rating={submittedData.rating} />:''}
    </div>
  )
}

export default App
