import Router from 'next/router'

export default class Result extends React.Component {
    render() {
        return (
            <div>
                Click <span onClick={() => Router.push('/signin')}>here</span> to signin
          </div>
        )
    }

}