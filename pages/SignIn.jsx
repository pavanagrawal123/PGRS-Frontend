import { SignInForm } from '../components/SignIn'
import '../index.css'
import store from "../store/index";
import { addArticle } from "../actions/index";
import { firebase } from '../firebase';
import { setAuth } from "../actions/index";
export default class Result extends React.Component {
    componentDidMount() {
        window.store = store;
        window.addArticle = addArticle;
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
              ? store.dispatch( setAuth(authUser))
              : store.dispatch( setAuth(null));
          });
    }
    render() {
        return (
            <div class="container signin">
                <div className="row">
                    <div className="col-centered">

                        <SignInForm />
                    </div>
                </div>
            </div>
        )
    }
}
