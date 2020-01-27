import React from 'react';
import QuestionList from './Questions/QuestionsList';
import './Questions/Questions-style.css'
import { Link } from 'react-router-dom';



class AirBnbPage extends React.Component{
    constructor(){
        super()

        this.state = {
            questions: ['Question 1', 'Question 2', 'Question 3']
            //answers:[]
        }
    }
    
    render(){
        return(
           
            <div className="container">
                <h1 className="title">Lost and Found game</h1>
                
                <div className="ui list container">
                    <QuestionList questions={this.state.questions} url={'/airbnb_questions/'}/>
                    <div className="ui grid">
                        <div className=" eight column centered row ">
                            <div className="column center">
                                <Link to="/mflix_questions">
                                    <button className="ui button">Prev Page</button>
                                </Link>
                            </div>
                            <div className="column">
                                <Link to="/training_questions">
                                    <button className="ui button">Next Page</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AirBnbPage