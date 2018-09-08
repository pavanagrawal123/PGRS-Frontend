import Navigation from '../components/Navigation'
import '../index.css'
import store from "../store/index";
import { addArticle } from "../actions/index";
import Router from 'next/router'
import '../constants/routes'
import * as routes from '../constants/routes'
export default class Result extends React.Component {
    componentDidMount() {
        store.getState().auth ? 
        Router.push(routes.HOME) :
        Router.push(routes.SIGN_IN)
    }
    render() {
        return (
            <div>
                {store.getState().articles.toString()}
                <Navigation />
                Welcome to next.js!
            </div>
        )

    }
}