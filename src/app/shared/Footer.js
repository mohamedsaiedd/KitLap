import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="az-footer ht-40">
          <div className="container ht-100p pd-t-0-f">
            <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.splendux.com" target="_blank" rel="noopener noreferrer">CURVD.com </a>2022</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Main <a href="https://www.splendux.com" target="_blank" rel="noopener noreferrer"> Splendux </a> Products from Splendux.com.  </span>
            </div>
          </div>{/* container */}
        </div>{/* az-footer */}
      </div>
    )
  }
}

export default Footer
