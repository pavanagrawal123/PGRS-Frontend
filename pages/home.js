import Navigation from '../components/Navigation'
import * as actions from "../actions";
import Item from "../components/Item";
import { connect } from "react-redux";
import _ from "lodash";
class List extends React.Component {
    componentDidMount() {
        this.props.fetchItems();
    }
    componentWillMount() {
        
    }
    renderItems() {
        const { data } = this.props;
        const items = _.map(data, (value, key) => {
          return <Item key={key} todoId={key} item={value} />;
        });
        if (!_.isEmpty(items)) {
          return items;
        }
        return (
          <div className="col s10 offset-s1 center-align">
            <img
              alt="Nothing was found"
              id="nothing-was-found"
              src="/img/nothing.png"
            />
            <h4>You have completed all the tasks</h4>
            <p>Start by clicking add button in the bottom of the screen</p>
          </div>
        );
      }
    
    render() {
        return (
            <div>
                <Navigation> </Navigation>
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = ({ data }) => {
    return {
      data
    };
  };

export default connect(mapStateToProps, actions)(List);
