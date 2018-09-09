import Navigation from '../components/Techs'
import '../index.css'
import store from "../store/index";
import { addArticle } from "../actions/index";
import Router from 'next/router'
import '../constants/routes'
import * as routes from '../constants/routes'
export default class Result extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                
                <Navigation />
                Welcome to next.js!
            </div>
        )

    }
}