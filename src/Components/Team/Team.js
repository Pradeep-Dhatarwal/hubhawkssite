import React from 'react'
import kevin from "../../images/team/kevin.png"
import vishwara from "../../images/team/vishwara.png"
import abhijeet from "../../images/team/abhijeet.png"


function Team() {
  return (
    <div>
        <div className="team">
          <div className="teamGrid">
            <img src={kevin} alt="kevin"  width="400px"/>
            <div className="description">
              <p>Kevin</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team
