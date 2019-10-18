import React from 'react';
import { withRouter } from 'react-router-dom';

class Highscore extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log(this.props.fetch);
        this.props.fetchHighscores();
     
    }


    render() {
        // let top = function()=>{
        //     <div>
        //         <ul>
                    
        //         </ul>
        //     </div>
        // }
        console.log(this.props)
        let scores = this.props.scores.map((data, i) => {
                return (
                    <tbody key={i}>
                    <tr>
                        <td>{i + 1}: </td>
                       
                        <td>{data.username}</td>
                        <td>{data.highScore}  kills</td>
                        
                    </tr>
                    </tbody>
                 
                )
            })
        
        return (
            <div>
                <div className="test-button">
                    <table>
                      
                        {scores}
                        </table>
                </div>
                {/* {this.props.scores.map((data) => {
                    data.highScore
                })} */}
                {/* {this.props.posts && this.props.posts.map(score =>
               
                    
                )} */}
                {/* <div className="test-button">
                    {/* <button onClick={this.fetchHighscores}>View High Scores</button> */}
                {/* </div> */ }
            </div>
        )
    }

}

export default Highscore;