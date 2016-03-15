var WebBox = React.createClass({

  render: function () {
    return React.createElement(
      "div",
      { className: "Box" },
      React.createElement(
        "p",
        null,
        "My name is ",
        this.props.name
      )
    );
  }
});