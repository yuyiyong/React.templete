/*
const app = () => {
    return(<h1>表白任素汐！</h1>)
}
export default app;*/
import React from "react";
//import styles from './app11.css'
import './app.css';
import Demo from './demo.js'
import './app11.less'


class  App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        this.haha();
        // className='title'
        return (
            <div className='title'><p>表白任素汐！!!</p>
            <Demo/>
            </div>
        )
    }
   /* fn = () => {
        console.log("haha");
    }*/
}
export default App;