
import useForm from './useForm';

function Form() {

  //Final submit function
  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const {handleChange, values,errors,handleSubmit} = useForm(formLogin);


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}   />
      {
        errors.email && <h3>{errors.email}</h3>
      }
      
      <input type="text" minLength='5' name="firstname" placeholder="firstname"  onChange={handleChange}   />
      {
        errors.firstname && <h3>{errors.firstname}</h3>

      }
      <input type="text" minLength='5' name="lastname" placeholder="lastname"  onChange={handleChange}   />
      {
        errors.lastname && <h3>{errors.lastname}</h3>

      }
      <input type="number" minLength='5' name="number" placeholder="number"  onChange={handleChange}   />
      {
        errors.number && <h3>{errors.number}</h3>

      }
      <input type="submit" value="Submit" className="submit"  />
      </form>

    </div>
  );
}

export default Form;

