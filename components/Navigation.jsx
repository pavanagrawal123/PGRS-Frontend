import Router from 'next/router'

export default class Result extends React.Component {
    render() {
        return (
            <div>
                Click <span onClick={() => Router.push('/SignIn')}>here</span> to read more
          </div>
        )
    }

}