const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const total = course.parts.map(item => item.exercises)
    console.log(total.reduce(reducer));
      
      
    return(
      <p><strong>Number of exercises {total.reduce(reducer)}</strong></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
      console.log(course.parts)
    return (
      <div>
          {course.parts.map((individual_course) => (
              <div><Part part={individual_course} /></div>
          ))}
      </div>
    )
  }

  const Course = ({course}) => {
    return (
        <div>
            <Header course={course[0]}></Header>
            <Content course={course[0]}></Content>
            <Total course={course[0]}></Total>
            <Header course={course[1]}></Header>
            <Content course={course[1]}></Content>
            <Total course={course[1]}></Total>
        </div>
    )
  }

  export default Course;

