import './googleAuth.scss'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function GoogoleAuth({othersPara , othersLink , othersLinkName}) {

  const googleAuthentic=()=>{
    
  }
  return (
    <>
       <form action="" onSubmit={googleAuthentic}>
        <fieldset className="other_container">
          <legend>or</legend>
          <p>
            {othersPara}
            <br />
            <Link to={othersLink} className="login">
             {othersLinkName}
            </Link>
          </p>
          <button type='submit'>
            {" "}
            <span>Contineu With</span>{" "}
            <FcGoogle className='google_icon'/>
          </button>
        </fieldset>
      </form> 
    </>
  )
}

export default GoogoleAuth