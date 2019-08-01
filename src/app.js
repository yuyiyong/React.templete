/*
const app = () => {
    return(<h1>表白任素汐！</h1>)
}
export default app;*/
import React from "react";
import styles from './app.css'
// import './app.css'

class  App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // className='title'
        return (
            <div className={styles.title}>表白任素汐！</div>
        )
    }
}
export default App;