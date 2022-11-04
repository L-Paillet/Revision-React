import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
          <p>
            <Link to="/TestJSX">Film</Link>
            <Link to="/AffichageBoucle">Fruits</Link>
            <Link to="/Condition">Condition</Link>
          </p>
      </div>
    )
}

export default Navbar;