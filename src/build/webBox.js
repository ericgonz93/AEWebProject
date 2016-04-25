var WebBox = React.createClass({

  render: function () {
    return React.createElement(
      "div",
      { className: "Box" },
      React.createElement(
        "p",
        null,
        this.props.name
      )
    );
  }
});