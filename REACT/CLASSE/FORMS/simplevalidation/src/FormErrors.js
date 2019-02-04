import React, { Component } from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}><b>{fieldName} {formErrors[fieldName]}</b></p>
        )        
      } else {
        return '';
      }
    })}
  </div>