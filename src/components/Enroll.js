import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-date-picker";
// import emailjs from 'emailjs-com';
// import Modal from "reactjs-popup";

export default class Enroll extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      childname: "",
      childage: "",
      startdate: new Date(),
      enddate: new Date(),
      question: "",
      consent: false,
      modal: false,
      typeofday: "",
    };
  }

//  sendEmail = async (e) => {
//     e.preventDefault();
//     const template_params = {
//       "email":  `${this.state.email}`,
//       "childname": `${this.state.childname}`,
//       "firstname": `${this.state.firstname}`,
//       "startdate": `${this.state.startdate}`,
//     }
//     var service_id = "gmail";
//     var template_id = "enrollment";
//     await emailjs.send(service_id, template_id, template_params)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//  }

  onstartChange = (date) => {
    this.setState({ startdate: date });
  };

  onendChange = (date) => {
    this.setState({ enddate: date });
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  // handleSubmit(e) {
  //   e.preventDefault()
  //   const { name, email, subject, message } = this.state
  //   let templateParams = {
  //     from_name: email,
  //     to_name: '<YOUR_EMAIL_ID>',
  //     subject: subject,
  //     message_html: message,
  //    }
  //    emailjs.send(
  //     'gmail',
  //     'template_XXXXXXXX',
  //      templateParams,
  //     'user_XXXXXXXXXXXXXXXXXXXX'
  //    )
  //    this.resetForm()
  // }
  
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  
  render() {
    const { addEnroll } = this.props;
    return (
      <div class="enroll-page">
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
          rel="stylesheet"
        ></link>
        <h1>Enroll</h1>
        <form class="form"
          onSubmit="return confirm('We recieved your enrollment!');"
          method="post"
        >
          First Name:
          <input
            class="input"
            type="text"
            name="firstname"
            onChange={this.handleChange}
          />
          Last Name:
          <input
            class="input"
            type="text"
            name="lastname"
            onChange={this.handleChange}
          />
          Phone Number:
          <input
            class="input"
            type="text"
            name="phone"
            onChange={this.handleChange}
          />
          Email:
          <input
            class="input"
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          Child's Name:
          <input
            class="input"
            type="text"
            name="childname"
            onChange={this.handleChange}
          />
          Child's Age:
          <input
            class="input"
            type="text"
            name="childage"
            onChange={this.handleChange}
          />
          <div class="checkbox">
            <h2>Times</h2>
            <h3>
            Summer Camp (9-12):
              <input
                type="checkbox"
                onClick={() => this.setState({ typeofday: "half day morning" })}
              />
            </h3>
            <h1>-</h1>
            <h3>Fall Enrollment </h3>
            <h3>
              Prospect Park (3:30-5):
              <input
                type="checkbox"
                onClick={() => this.setState({ typeofday: "Prospect Park: fall enrollment" })}
              />
            </h3> 
            <h3>
              Fort Greene (3:30-5):
              <input
                type="checkbox"
                onClick={() => this.setState({ typeofday: "Ft Greene: fall enrollment" })}
              />
            </h3> 
          </div>
          <h2 class="dates-title">Dates</h2>
          <div class="input-dates">
            <h4>Start:</h4>
            <DatePicker
              class="input-date"
              name="startdate"
              onChange={this.onstartChange}
              value={this.state.startdate}
            />
            <h4>End:</h4>
            <DatePicker
              class="input-date"
              name="date"
              onChange={this.onendChange}
              value={this.state.enddate}
            />
          </div>
          <div class="questions">
            Have any questions?
            <input
              class="input"
              type="text"
              name="question"
              onChange={this.handleChange}
            />
          </div>
          
          <div class="consent-container">
            <input
              type="checkbox"
              onClick={() => {
                this.setState({ consent: !this.state.consent });
              }}
            />
            <h4 class="consent">
              I agree to{" "}
              <a
                onClick={() => {
                  this.setState({ modal: !this.state.modal });
                }}
                href="#a"
              >
                terms and conditions
              </a>
            </h4>
          </div>
          {this.state.modal ? (
            <div
              handleClose={() => {
                this.setState({ modal: !this.state.modal });
              }}
            >
              <h2>{`Hello, ${
                this.state.firstname + ` ` + this.state.lastname
              }`}</h2>
              <h4>By Agreeing to</h4>
              <div>
                <p class="waiver">
                  Liability Release and Parental Consent Form In consideration
                  of the acceptance of my application for the summer recreation
                  program, I hereby waive, release, and discharge any and all
                  claims for damages for personal injury, property damages or
                  which may hereafter occur to my child as a result of their
                  participation in said summer program. This release is intended
                  to discharge in advance the Town of Clinton, its officials,
                  officers, employees, volunteers, and agents from liability,
                  even though that liability may arise out of perceived
                  negligence on the part of persons mentioned above. It is
                  understood that some recreational activities involve an
                  element of risk or danger of accidents, and knowing those
                  risks, I hereby assume those risks. It is further understood
                  and agreed that this waiver, release, and assumption of risk
                  is to be binding on my heirs and assignees.
                </p>
                <h3>Consent for Treatment</h3>
                <p class="waiver">
                  I hereby give my consent to have the above applicant treated
                  by emergency medical personnel or a physician in the case of
                  sudden illness or injury while participating in any Prospect
                  Park Tennis Camp activities. It is understood that Prospect
                  Park Tennis Camp will provide no medical insurance for such
                  treatment, and that the cost thereof will be at my expense. I
                  have read and understood the foregoing registration liability
                  release and parental consent form, and agree to all of its
                  terms and conditions.{" "}
                </p>
                <h3>COVID Protocals</h3>
                <p class="waiver">
                  I acknowledge the contagious nature of the
                  Coronavirus/COVID-19 and that the CDC and many other public
                  health authorities still recommend practicing social
                  distancing. I further acknowledge that Prospect Park Tennis
                  Camp, nor its instructors and/or coaches, cannot guarantee
                  that I will not become infected with the Coronavirus/COVID-19.
                  I understand that the risk of becoming exposed to and/or
                  infected by the Coronavirus/COVID-19 may result from the
                  actions, omissions, or negligence of myself and others,
                  including, but not limited to, salon staff, and other salon
                  clients and their families. I voluntarily seek services
                  provided by Prospect Park Tennis Camp and acknowledge that I
                  am increasing my risk to exposure to the Coronavirus/COVID-19.
                  I acknowledge that I must comply with all set procedures to
                  reduce the spread while attending my appointment. I attest
                  that: * I am not experiencing any symptom of illness such as
                  cough, shortness of breath or difficulty breathing, fever,
                  chills, repeated shaking with chills, muscle pain, headache,
                  sore throat, or new loss of taste or smell. * I have not
                  traveled internationally within the last 14 days. * I have not
                  traveled to a highly impacted area within the United States of
                  America in the last 14 days. * I do not believe I have been
                  exposed to someone with a suspected and/or confirmed case of
                  the Coronavirus/COVID-19. * I have not been diagnosed with
                  Coronavirus/COVID-19 and not yet cleared as non-contagious by
                  state or local public health authorities. * I am following all
                  CDC recommended guidelines as much as possible and limiting my
                  exposure to the Coronavirus/COVID-19. I hereby release and
                  agree to hold Prospect Park Tennis Camp harmless from, and
                  waive on behalf of myself, my heirs, and any personal
                  representatives any and all causes of action, claims, demands,
                  damages, costs, expenses and compensation for damage or loss
                  to myself and/or property that may be caused by any act, or
                  failure to act of the camp, or that may otherwise arise in any
                  way in connection with any services received from Prospect
                  Park Tennis Camp. I understand that this release discharges
                  Prospect Park Tennis Camp from any liability or claim that I,
                  my heirs, or any personal representatives may have against the
                  salon with respect to any bodily injury, illness, death,
                  medical treatment, or property damage that may arise from, or
                  in connection to, any services received from Prospect Park
                  Tennis Camp. This liability waiver and release extends to the
                  salon together with all owners, partners, and employees.
                </p>
              </div>
            </div>
          ) : null}
          <Link class="link-payment" to="/payment">
            <div class="continue-payment">
              <button
                class="submit"
                
                onClick={(e) => {
                 
                  addEnroll(
                    this.state.firstname,
                    this.state.lastname,
                    this.state.phone,
                    this.state.email,
                    this.state.childname,
                    this.state.childage,
                    this.state.question,
                    this.state.consent,
                    this.state.startdate,
                    this.state.enddate,
                    this.state.typeofday
                  );
                 
                  window.alert(`We have recieved you enrollment for ${this.state.childname}!`);
                }}
              >
                Continue to payment
              </button>
            </div>
          </Link>
        </form>
        
      </div>
    );
  }
}