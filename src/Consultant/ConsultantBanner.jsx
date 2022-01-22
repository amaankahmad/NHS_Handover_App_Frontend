import React, {Component} from 'react';
import DateTime from "../NewTask/DateTime";
import image from "../Asset/taskIcon.png";

class ConsultantBanner extends Component {
    render() {
        return (
            <section>
                <div id="welcomeBanner">
                    <div id="titleBanner">Hello {this.props.name}</div>
                    <div id="taskIconW">
                        <DateTime />
                        <img
                            src={image}
                            height={75}
                            alt="taskIcon"
                            id="taskIconImgW"
                        />
                    </div>
                </div>
                {/*<button onClick={this.props.login} style={{float: "right", marginTop: "20px", marginRight: "20px",*/}
                {/*    color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px" ,*/}
                {/*    padding: "10px"}}> Back to Login  </button>*/}
            </section>
        );
    }
}

export default ConsultantBanner;