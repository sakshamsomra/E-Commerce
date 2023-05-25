import React from 'react';
import { CDBFooter, CDBContainer, CDBRow, CDBCol, a, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

import logo from './photos/home.png'
import { Link, useNavigate } from "react-router-dom";



export default function Footer() {
  return (
    <div bgColor='light' className='text-center text-lg-start text-muted' id='footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className=''>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <CDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      
    </div>
  );
};
