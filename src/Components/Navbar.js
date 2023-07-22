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
        <strong>Books</strong>
      </div>

      <div id="rightBox">
        <input
          type="text"
          onChange={(event) => {
            props.setSearchTerm(event.target.value.trim());
          }}
          placeholder="search"
        />

        <button
          onClick={() => {
            props.ApiCallThroughSearchTerm();
          }}
        >
          Search
        </button>
        <img className="imgnav" src={bx_bx} alt="" />
        <img className="imgnav" src={fluent} alt="" />
        <img className="imgnav" src={ic} alt="" />
        <img className="imgnav" src={rightimg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
