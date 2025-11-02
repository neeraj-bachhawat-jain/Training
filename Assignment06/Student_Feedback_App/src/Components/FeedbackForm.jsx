import "./FeedbackForm.css";
export default function FeedbackForm({handleChange, handleSubmit, formData }) {

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <p className="name">Student Name:</p>
      <div className="name-container">
        <div className="one">
            <input
            className="fname"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            id="fname"
            placeholder="First Name"
            required
            />
            <label className="size" for="fname">First Name<span>*</span></label>
        </div>
        <div className="two">
            <input
            className="fname"
            type="text"
            id="lname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            />
            <label className="size" for="lname">Last Name<span>*</span></label>
        </div>
      </div>
      <label for="stdId">Student Id<span>*</span></label>
      <input
        className="studentId"
        type="text"
        id="stdId"
        name="student_id"
        value={formData.student_id}
        onChange={handleChange}
        placeholder="Enter your student id"
        required
      />
      <label for="course">Course<span>*</span></label>
      <select className="studentId" name="course" id="course" value={formData.course} onChange={handleChange} required>
        <option className="op" value="">Select Course</option>
        <option className="op" value="B.Tech">B.Tech</option>
        <option className="op" value="MBA">MBA</option>
        <option className="op" value="BCA">BCA</option>
        <option className="op" value="MCA">MCA</option>
      </select>
      <p className="rate">Rate your overall experience at collage<span>*</span></p>
      <select className="studentId" name="rating" id="rate" value={formData.rating} onChange={handleChange} required>
        <option className="op" value="">Rate your collage</option>
        <option className="op" value="1">1</option>
        <option className="op" value="2">2</option>
        <option className="op" value="3">3</option>
        <option className="op" value="4">4</option>
        <option className="op" value="5">5</option>
      </select>
      <div className="btn-container">
        <button type="submit" className="btn">Submit</button>
      </div>
    </form>
    </>
  );
}
