import "./App.css";
import schedules from "./schedules.json";
import React, { Component } from "react";

class App extends Component {
  state = {
    start_time: 2020,
  };

  changeTime21 = () => {
    this.setState({
      start_time: 2021,
    });
  };
  changeTime20 = () => {
    this.setState({
      start_time: 2020,
    });
  };

  render() {
    return (
      <div className="App">
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Team Names</th>
              <th>
                <div className="ui compact menu">
                  <div className="ui simple dropdown item">
                    Results
                    <i className="dropdown icon"></i>
                    <div className="menu">
                      <div className="item" onClick={this.changeTime20}>
                        Ekstraklasa 20/21
                      </div>
                      <div className="item" onClick={this.changeTime21}>
                        Ekstraklasa 21/22
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th>Match Date </th>
              <th>Half Time Score</th>
              <th>Stadium</th>
            </tr>
          </thead>
          <tbody>
            {schedules.schedules.map((e) => {
              if (
                e.sport_event.start_time.slice(0, 4) == this.state.start_time
              ) {
                return (
                  <tr key={e.sport_event.id}>
                    <td>
                      <tr data-label="Name">
                        <td
                          className={
                            e.sport_event_status.home_score ===
                            e.sport_event_status.away_score
                              ? " first equal"
                              : e.sport_event_status.home_score >
                                e.sport_event_status.away_score
                              ? "first win"
                              : "first lose"
                          }
                        >
                          {" "}
                          {e.sport_event.competitors[0].name}
                        </td>
                        <td
                          className={
                            e.sport_event_status.home_score ===
                            e.sport_event_status.away_score
                              ? " second equal"
                              : e.sport_event_status.home_score <
                                e.sport_event_status.away_score
                              ? "second win"
                              : "second lose"
                          }
                        >
                          {" "}
                          {e.sport_event.competitors[1].name}
                        </td>
                      </tr>
                    </td>

                    <td data-label="Result">
                      {e.sport_event_status.home_score} -{" "}
                      {e.sport_event_status.away_score}{" "}
                    </td>
                    <td data-label="Match_Date">
                      {e.sport_event.sport_event_context.stage.start_date}
                    </td>
                    <td data-label="HalfTimeScore">
                      <tr>
                        <td>
                          1-st time :{" "}
                          {e.sport_event_status.match_status !== "postponed"
                            ? e.sport_event_status.period_scores[0].home_score +
                              "-" +
                              e.sport_event_status.period_scores[0].away_score
                            : "Postponed"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          2-cd time :{" "}
                          {e.sport_event_status.match_status !== "postponed"
                            ? e.sport_event_status.period_scores[1].home_score +
                              "-" +
                              e.sport_event_status.period_scores[1].away_score
                            : "Postponed"}
                        </td>
                      </tr>
                    </td>
                    <td data-label="Stadium">
                      {e.sport_event.venue.name}
                      <a href={`./about/${e.sport_event.id}`} target={"_blank"}>
                        <i className="caret right icon"></i>
                      </a>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
