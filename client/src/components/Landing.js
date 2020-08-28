import React from 'react';

const Landing = () => {
  return (
          <div className="card-panel grey lighten-5 z-depth-1">
              <div className="row valign-wrapper">
                  <div className="col s2">
                      <img src={require('../images/yanghe.jpg')} alt="" className="circle responsive-img" />
                      <div style={{ textAlign: 'center' }}><br/>
                          <button className="waves-effect waves-light" ><a href="https://www.linkedin.com/in/yang-he-905a321b0/">developer</a>
                              <i className="material-icons right">send</i>
                          </button> </div>
                  </div>
                  <div className="col s10">
              <span className="black-text">
                <div style={{ textAlign: 'center' }}>
                  <h2>
                    Emaily!
                  </h2>
                  Collect feedback form your users
                </div>
              </span>
           </div>
          </div>
      </div>
  );
};

export default Landing;
