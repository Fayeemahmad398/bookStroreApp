import grouplogo from "./Grouplogo.jpg";
import fluent from "./fluent_premium-person-20-regular.png";
import bx_bx from "./bx_bx-book-heart.png";
import ic from "./ic_round-notifications-none.jpg";
import rightimg from "./rightimg.png";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <div id="leftBox">
        <img src={grouplogo} id="grouplogo" alt="" />
        <h1>KeazoNBOOKS</h1>
        <strong id="strong">Books</strong>
      </div>

      <input
        type="text"
        onChange={(event) => {
          props.setSearchTerm(event.target.value.trim());
        }}
        placeholder="search the books here"
      />
      <div id="rightBox">
        <button
          onClick={() => {
            props.ApiCallThroughSearchTerm();
          }}
          className="search"
        >
          Search
        </button>
        <img className="imgnav disappearimg" src={bx_bx} alt="" />
        <img className="imgnav disappearimg" src={fluent} alt="" />
        <img className="imgnav" src={ic} alt="" />
        <img className="imgnav" src={rightimg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
