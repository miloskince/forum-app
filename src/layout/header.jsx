import  React  from "react"
import { Link,withRouter } from 'react-router-dom'

const Header = ({ logedIn, setUser , history, user }) => {

    if(logedIn){
        return(
            <header>

                <nav>
                    <div className='nav-items'>
                    <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Log-out</button></Link>
                    </div>
                </nav>
                
            </header>
        )
    }
    else {
        return (
            <header className='header'>
                <nav>
                    <div className='nav-items'>
                    <Link to='/register'><button className='header-btn'>Register</button></Link>
                    <Link to='/login'><button className='header-btn'>Login</button></Link>
                    </div>
                </nav>
                
                
            </header>
        )
    }
}

export default withRouter(Header)