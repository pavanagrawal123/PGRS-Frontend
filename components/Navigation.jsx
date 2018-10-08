import Router from 'next/router'
import * as routes from '../constants/routes'
import store from "../store/index";
export default class Result extends React.Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo left" style={{paddingLeft: '10px'}}>Bombay Municipal Corporation Admin Dashboard</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>{
                            store.getState().auth ?
                                <a> Sign Out </a> :
                                <a href={routes.SIGN_IN}>Login</a>
                        }</li>
                        {/* <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
        )
    }

}