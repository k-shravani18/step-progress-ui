"use client";
import React from "react";


const Form = ({ onSubmit, isActive, formNumber }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const getFieldsByFormNumber = (formNumber) => {
    switch (formNumber) {
      case 1:
        return (
          <table class="table-auto">
          <thead>
            <tr>
              <th>Candidate name  </th>
              <th>Candidate email</th>
              <th>phone number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>jhon</td>
              <td>j@gmail.com</td>
              <td>196189766</td>
            </tr>
            <tr>
              <td>sam</td>
              <td>s@gmail.com</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>ram</td>
              <td>r@gmail.com</td>
              <td>909090900</td>
            </tr>
          </tbody>
        </table>
        );
      case 2:
        return (
          <table class="table-auto">
          <thead>
            <tr>
              <th>qualification</th>
              <th>passout year</th>
              <th>percentage/cgpa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>btech</td>
              <td>2020</td>
              <td>9.6</td>
            </tr>
            <tr>
            <td>btech</td>
              <td>2020</td>
              <td>9.6</td>
            </tr>
            <tr>
            <td>btech</td>
              <td>2020</td>
              <td>9.6</td>
            </tr>
          </tbody>
        </table>
        );
      case 3:
        return (
          <table class="table-auto">
          <thead>
            <tr>
              <th>Candidate country</th>
              <th>Candidate state</th>
              <th>Candidate city</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>india</td>
              <td>ts</td>
              <td>hyd</td>
            </tr>
            <tr>
              <td>india</td>
              <td>ts</td>
              <td>hyd</td>
            </tr>
            <tr>
              <td>india</td>
              <td>ts</td>
              <td>hyd</td>
            </tr>
          </tbody>
        </table>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: isActive ? 'block' : 'none' }}>
      <h1>{formNumber}</h1>
      {getFieldsByFormNumber(formNumber)}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;