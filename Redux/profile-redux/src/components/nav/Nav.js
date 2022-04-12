import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../../store/actions/AuthActions'
function Nav({dispatch}) {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/profile'>profile</Link>
            </li>
            <li>
                <Link to='/login'>login</Link>
            </li>
            <li>
                <button onClick={()=>handleLogout(dispatch)}>Deslogar</button>
            </li>
        </ul>
    </nav>
  )
}
const mapStateToProps = state => ({
    auth:state.authReducer.auth
})

export default connect(mapStateToProps)(Nav)  