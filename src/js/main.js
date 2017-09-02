//Test Line

var WebApp = React.createClass({


//HP, STR, MAG, SKL, SPD, LCK, DEF, RES


getInitialState: function(){
return({
classes: {"Wyvern Rider":[100, 20, 0, 15, 13, 10, 30, 10], "Mercenary" : [[80, 18, 0, 18, 16, 10, 15, 13]]}
});
},

componentDidMount: function(){
console.log(Object.keys(this.state.classes)[0]);
},

render: function(){
var classNames = Object.keys(this.state.classes);

var rider =  <p>
Name: {classNames[0]}
<br/>HP: {this.state.classes[classNames[0]][0]}
<br/>MAG: {this.state.classes[classNames[0]][1]}
<br/>SKL: {this.state.classes[classNames[0]][2]}
<br/>SPD: {this.state.classes[classNames[0]][3]}
<br/>LCK: {this.state.classes[classNames[0]][4]}
<br/>DEF: {this.state.classes[classNames[0]][5]}
<br/>RES: {this.state.classes[classNames[0]][6]}
</p>;

return (
<div className= "container-fluid">
<h1>Programmers</h1>
<div className="container">
<div className = "col-sm-12 col-md-12 col-lg-12 img"><img src={'src/img/Stars.jpg'}></img></div>
<div className = "col-sm-12 col-md-12 col-lg-12 title"><WebBox name= "Let's play some games."/></div>


<div className = "row">
{rider}
</div>



</div>
</div>);
}
});