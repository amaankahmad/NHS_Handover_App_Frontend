import React, {Component} from 'react';
import PersonService from "./PersonService";

class ListPersonsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        PersonService.getPersons().then((res) => {
           this.setState({persons: res.data})
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Persons List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Person Name</th>
                                <th> Person DOB</th>
                                <th> Person Sex</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.persons.map(
                                    person =>
                                        <tr key = {person.name}>
                                            <td> {person.name}</td>
                                            <td> {person.dob}</td>
                                            <td> {person.sex}</td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListPersonsComponent;