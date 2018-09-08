import Navigation from '../components/Navigation'
import '../index.css'
import store from "../store/index";
import { addArticle } from "../actions/index";
import { connect } from "react-redux";

export default class Result extends React.Component {
    componentDidMount() {
        window.store = store;
        window.addArticle = addArticle;
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