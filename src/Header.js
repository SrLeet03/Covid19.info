import React, { Component } from 'react'
import {Jumbotron , Button} from 'reactstrap'

export class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron> 
                <div className="row">
                    <div className="col-12 col-sm-8">
                <h1 class="display-4"><strong>Hey, are you eager to know about current panic corona situation !</strong></h1>
                </div>
                <div className="col-12 col-sm">
                    <img src="/assets/favicon.jpeg" alt="corona virus"></img></div>
                <hr className="my-2" />
                </div>

                <div className="row">
        <p  >Want to know more about this Virus                          -></p>
        <p className="lead">
        <a href="https://www.who.int/health-topics/coronavirus">
            <Button color="primary">Learn More</Button>
        </a>
        </p>
        </div>
                </Jumbotron>
                </div>

        )
    }
}

export default Header
