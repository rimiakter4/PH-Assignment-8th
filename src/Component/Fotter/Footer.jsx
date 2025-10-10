import React from 'react';

const Footer = () => {
    return (
        <div>
          <footer className="footer footer-horizontal bg-neutral text-neutral-content p-10 gap-6">
  <nav>
    <h6 className="footer-title text-lg mb-1">Services</h6>
    <a className="link link-hover text-sm">App Installation Support</a>
    <a className="link link-hover text-sm">App Updates & Maintenance</a>
    <a className="link link-hover text-sm">Developer Collaboration</a>
    <a className="link link-hover text-sm">App Analytics Dashboard</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg mb-1">Company</h6>
    <a className="link link-hover text-sm">About us</a>
    <a className="link link-hover text-sm">Contact</a>
    <a className="link link-hover text-sm">Jobs</a>
    <a className="link link-hover text-sm">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-lg mb-1">Legal</h6>
    <a className="link link-hover text-sm">Terms of use</a>
    <a className="link link-hover text-sm">Privacy policy</a>
    <a className="link link-hover text-sm">Cookie policy</a>
  </nav>
</footer>

        
 
        </div>
    );
};

export default Footer;