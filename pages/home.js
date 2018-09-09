import Navigation from '../components/Navigation'
import Item from "../components/Item";
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
        itemsRef.orderByChild('upvoted').on('value', (snapshot) => {
            let newState = [];
            snapshot.forEach(function(child) {
                newState.push({
                    id: child,
                    item: child.val()
                });
            });
            newState = newState.reverse()
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
                                    <Item loc={item.id} {...item.item} />
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}