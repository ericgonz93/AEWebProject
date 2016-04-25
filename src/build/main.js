//Test Line

var WebApp = React.createClass({

  //HP, STR, MAG, SKL, SPD, LCK, DEF, RES

  getInitialState: function () {
    return {
      classes: { "Wyvern Rider": [100, 20, 0, 15, 13, 10, 30, 10], "Mercenary": [[80, 18, 0, 18, 16, 10, 15, 13]] }
    };
  },

  componentDidMount: function () {
    console.log(Object.keys(this.state.classes)[0]);
  },

  render: function () {
    var classNames = Object.keys(this.state.classes);

    var rider = React.createElement(
      "p",
      null,
      "Name: ",
      classNames[0],
      React.createElement("br", null),
      "HP: ",
      this.state.classes[classNames[0]][0],
      React.createElement("br", null),
      "MAG: ",
      this.state.classes[classNames[0]][1],
      React.createElement("br", null),
      "SKL: ",
      this.state.classes[classNames[0]][2],
      React.createElement("br", null),
      "SPD: ",
      this.state.classes[classNames[0]][3],
      React.createElement("br", null),
      "LCK: ",
      this.state.classes[classNames[0]][4],
      React.createElement("br", null),
      "DEF: ",
      this.state.classes[classNames[0]][5],
      React.createElement("br", null),
      "RES: ",
      this.state.classes[classNames[0]][6]
    );

    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "h1",
        null,
        "Programmers"
      ),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "col-sm-12 col-md-12 col-lg-12" },
          React.createElement(WebBox, { name: "Let's play a game." })
        ),
        React.createElement(
          "div",
          { className: "row" },
          rider
        )
      )
    );
  }
});