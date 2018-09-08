import Navigation from '../components/Navigation'
import * as actions from "../actions";
import Item from "../components/Item";
import { connect } from "react-redux";
import { itemsRef } from '../firebase';
export default class List extends React.Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            username: '',
            items: []
        }
    }
    componentDidMount() {
        //this.props.fetchItems();
    }
    componentWillMount() {
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    item: items[item]
                });
            }
            this.setState({
                items: newState
            });
        });
    }

    render() {
        return (
            <div>
                <Navigation> </Navigation>
                <section className='display-item'>
                    <div className="wrapper">
                        <ul>
                            {this.state.items.map((item) => {
                                return (
                                    <Item {...item.item} /> 
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}