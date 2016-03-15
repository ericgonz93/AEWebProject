var WebApp = React.createClass({

render: function(){
return (
<div className= "container-fluid">
<h1>Programmers</h1>
<div className="container">
<div className = "col-sm-6 col-md-6 col-lg-6"><WebBox name= "Eric"/></div>
<div className = "col-sm-6 col-md-6 col-lg-6"><WebBox  name= "Andrew"/></div>
</div>
<div className="row">
<img className="col-sm-2 col-md-2 col-lg-2 col-xl-2" src = {"src/img/Stars.jpg"} />
</div>
</div>);
}
});