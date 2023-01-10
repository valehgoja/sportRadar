import React, { Component } from "react";
import schedules from "./schedules.json";

class About extends Component {
  render() {
    const id = window.location.href.split("/")[4];
    return (
      <div className="App">
        <div className="main">
          {schedules.schedules.map((e) => {
            if (e.sport_event.id == id) {
              return (
                <div key={e.sport_event.id}>
                  <h2>
                    {e.sport_event.competitors[0].name}{" "}
                    <span className="num" >{e.sport_event_status.home_score} </span> -{" "}
                    <span className="num">{e.sport_event_status.away_score} </span>
                    {e.sport_event.competitors[1].name}
                  </h2>
                  <h3>Match Date : {e.sport_event.sport_event_context.stage.start_date}</h3>
                  <h3>Stadium : {e.sport_event.venue.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default About;
