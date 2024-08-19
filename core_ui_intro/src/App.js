import React, { useState } from "react";
import {
  CForm,
  CFormInput,
  CButton,
  CCard,
  CCardBody,
  CFormLabel,
  CFormCheck,
  CFormSwitch,
} from "@coreui/react";
import "./App.css";

const App = () => {
  const [isAdult, setIsAdult] = useState(false);

  return (
    <div className="page-container">
      <CCard className="card">
        <CCardBody>
          <CForm>
            <h3 className="title">Person Infomation</h3>

            <div className="form-group">
              <CFormLabel className="form-label" htmlFor="firstNameInput">
                First Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="firstNameInput"
                placeholder="Enter your first name"
                required
                className="input"
              />
            </div>

            <div className="form-group">
              <CFormLabel className="form-label" htmlFor="lastNameInput">
                Last Name
              </CFormLabel>
              <CFormInput
                type="text"
                id="lastNameInput"
                placeholder="Enter your last name"
                required
                className="input"
              />
            </div>

            <div className="form-group">
              <CFormLabel className="form-label" htmlFor="dobInput">
                Date of Birth
              </CFormLabel>
              <CFormInput
                type="date"
                id="dobInput"
                required
                className="input"
              />
            </div>

            <div className="form-group">
              <CFormLabel className="form-label">Gender</CFormLabel>
              <div className="gender-options">
                <CFormCheck type="radio" name="gender" id="genderMale" label="Male" />
                <CFormCheck type="radio" name="gender" id="genderFemale" label="Female" />
                <CFormCheck type="radio" name="gender" id="genderOther" label="Other" />
              </div>
            </div>

            <div className="form-group">
              <CFormLabel className="form-label" htmlFor="emailInput">
                Email
              </CFormLabel>
              <CFormInput
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                required
                className="input"
              />
            </div>

            <div className="toggle-container">
              <span className="toggle-label">Are you an Adult?</span>
              <CFormSwitch
                color="primary"
                checked={isAdult}
                onChange={() => setIsAdult(!isAdult)}
              />
            </div>

            <div className="button-container">
              <CButton className="yes-button">Yes</CButton>
              <CButton className="cancel-button">Cancel</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default App;
