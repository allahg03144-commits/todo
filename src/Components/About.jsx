import React,{useState} from "react";

const About = () => {
  const [myStyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    btn: "Enable dark mode"
  })
  const [btn, setbtn] = useState("Enable dark mode")
  const  handle=()=>{
    if(myStyle.color==='white'){
      setmyStyle({
    color: 'black',
    backgroundColor: 'white',
  })
  setbtn("Enable dark mode")
}
  else{
   setmyStyle({
    color: 'white',
    backgroundColor: 'black',})
     setbtn("Disable dark mode")
  }
    }
  return (
    <div className="container" style={myStyle} >
    <div
      className="accordion h-100"
      id="accordionPanelsStayOpenExample"
      style={{ minHeight: "90vh" }} // 👈 poore container ki height
    >
      <h1 className="mb-6"> About Us</h1>
      <div className="accordion-item h-100">
        <h2 className="accordion-header">
          <button
            className="accordion-button"style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show h-100"style={myStyle}
        >
          <div
            className="accordion-body"
            style={{ minHeight: "20vh" }} // 👈 accordion body ki height
          >
            <strong>This is the first item’s accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions.When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes before the toggler in the document’s structure. We also recommend making sure that the toggler has the aria-controls attribute, pointing to the id of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

Offcanvas 
Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use our .navbar-expand-* classes to create a dynamic and flexible navigation sidebar.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"style={myStyle}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"style={myStyle}
        >
          <div
            className="accordion-body"
            style={{ minHeight: "20vh" }} // 👈 same height yahan bhi
          >
            <strong>This is the second item’s accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element.
            When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes before the toggler in the document’s structure. We also recommend making sure that the toggler has the aria-controls attribute, pointing to the id of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

Offcanvas 
Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use our .navbar-expand-* classes to create a dynamic and flexible navigation sidebar.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"style={myStyle}
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"style={myStyle}
        >
          <div
            className="accordion-body"
            style={{ minHeight: "20vh" }} // 👈 aur yahan bhi
          >
            <strong>This is the third item’s accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element.When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes before the toggler in the document’s structure. We also recommend making sure that the toggler has the aria-controls attribute, pointing to the id of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

Offcanvas 
Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. We extend both the offcanvas default styles and use our .navbar-expand-* classes to create a dynamic and flexible navigation sidebar.
          </div>
        </div>
      </div>
      <div className="container my-3">
  <button type="button"onClick={handle} className="btn btn-primary">{btn}</button>
      </div>
    </div>
    </div>
  );
};

export default About;
