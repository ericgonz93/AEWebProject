var WebApp = React.createClass({

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Testing"
      ),
      React.createElement(WebBox, null)
    );
  }
});