var WebApp = React.createClass({

  render: function () {
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
          { className: "col-sm-6 col-md-6 col-lg-6" },
          React.createElement(WebBox, { name: "Eric" })
        ),
        React.createElement(
          "div",
          { className: "col-sm-6 col-md-6 col-lg-6" },
          React.createElement(WebBox, { name: "Andrew" })
        )
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("img", { className: "col-sm-2 col-md-2 col-lg-2 col-xl-2", src: "src/img/Stars.jpg" })
      )
    );
  }
});