import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


class EditappointmentDetails extends Component {

  constructor(props) {
    super(props);

    this.onChangeid = this.onChangeid.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangegender = this.onChangegender.bind(this);
    this.onChangDOB = this.onChangeDOB.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: "",
      name: "",
      age: "",
      gender: "",
      DOB: "",
      address: "",
      
      records: [],
    };
    this.props.navigate("/Manegeappointments")
  }

  componentDidMount() {

    axios
      .get("http://localhost:8070/item/get/" + this.props.params.id)
      .then((response) => {
        console.log(response);
        this.setState({
          id: response.data.id,
          name: response.data.name,
          age: response.data.age,
          gender: response.data.gender,
          DOB: response.data.DOB,
          address: response.data.address,
          
    
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  onChangeid(e) {
    this.setState({
      id: e.target.value,
    });
  }



  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeage(e) {
    this.setState({
      age: e.target.value,
    });
  }
  onChangegender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeDOB(e) {
    this.setState({
      DOB: e.target.value,
    });
  }
  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();
    const newEditedappointment = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      DOB: this.state.DOB,
      address: this.state.address,
    };
    console.log(newEditedappointment);
    this.props.navigate("/Manegeappointments")

    axios
      .put(
        "http://localhost:8070/appointment/update/" + this.props.params.id,
        newEditedappointment
      )
      .then((res) => console.log(res.data));


    
  }
  render() {
    return (




      <div>
        <div className=" display-table mt-5 ">
          <div className="row display-table-row mt-5">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="logo">


              </div>
              
              
            </div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">

              <div className="row mb-4">
                <header>
                  
                </header>


              </div>

              <div>

                <header class="bg-dark py-5">
                  <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                      <h1 class="display-4 fw-bolder">Update appointment Details</h1>
                      <p class="lead fw-normal text-white-50 mb-0">appointment Details</p>
                    </div>
                  </div>
                </header>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a href="http://localhost:8070/Manegeappointment" class="btn btn-primary btn-lg active" role="button" aria-pressed="true"> Go Back</a>


                </div>
                <div className="container">

                  <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-row">


                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">id </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="input"
                                  value={this.state.id}
                                  onChange={this.onChangeid}
                                />
                              </div>
                            </div>



                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">name: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="input"
                                  value={this.state.name}
                                  onChange={this.onChangename}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">age: </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="input"
                                  value={this.state.age}
                                  onChange={this.onChangeage}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">gender: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="input"
                                  value={this.state.gender}
                                  onChange={this.onChangegender}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-form-label">DOB: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.DOB}
                                  onChange={this.onChangeDOB}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label"> address: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="input"
                                  value={this.state.address}
                                  onChange={this.onChangeaddress}
                                />
                              </div>
                            </div>

                            <br />

                            <div className="form-group row">
                              <input
                                type="submit"
                                value="Update Record"
                                className="btn btn-primary"

                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* our code */}

            </div>
          </div>

        </div>

      </div>

    );
  }

}

export default withRouter(EditappointmentDetails);