import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../reducers/index"

//import store from "../store/index";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }
    render() {
        const { Component, pageProps } = this.props
        return <Provider store={store}>
            <Container>
                <Component {...pageProps} />
            </Container>
        </Provider>
    }
}