import { useEffect, useState } from "react";
import axios from "axios";
import MoreBooks from "./Morebooks";
import Navbar from "./Navbar";

const apiIst = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
const api2nd = "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes";

const MainContent = (props) => {
  const [threeObj, setThreeObj] = useState([]);
  const [isBookClicked, setClicked] = useState(false);
  const [clickedBook, setClickedBook] = useState({});
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(apiIst)
      .then((response) => {
        setData1(response.data.items);
        setThreeObj(response.data.items.splice(0, 3));
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });

    axios
      .get(api2nd)
      .then((response) => {
        setData2(response.data.items);
        setThreeObj(response.data.items.splice(0, 3));
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  function ApiCallThroughSearchTerm() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => {
        console.log(response);
        if (response.data.totalItems > 0) {
          const newData = response.data.items;
          setData1([]);
          setData2([]);

          setData1(newData);
          setThreeObj(newData.splice(0, 3));
          setClickedBook({});
          setClicked(false);
          setError("");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }

  return (
    <>
      <Navbar
        setSearchTerm={setSearchTerm}
        ApiCallThroughSearchTerm={ApiCallThroughSearchTerm}
      />
      <main>
        <div className="boxOftheeobjandOnebook">
          <div className="threeobjs">
            {!error && threeObj.length > 0 && !isBookClicked ? (
              threeObj.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="threeobj"
                    onClick={(event) => {
                      setClicked(true);
                      setClickedBook(obj);
                    }}
                  >
                    <div>
                      {obj.volumeInfo &&
                        obj.volumeInfo.imageLinks &&
                        obj.volumeInfo.imageLinks.thumbnail && (
                          <img
                            className="topimginline"
                            src={obj.volumeInfo.imageLinks.thumbnail}
                            alt=""
                          />
                        )}
                    </div>
                    <div>
                      <h3>Title:{obj.volumeInfo.title}</h3>
                      {obj.volumeInfo.description && (
                        <p>{obj.volumeInfo.description.slice(0, 120)}</p>
                      )}
                      <button id="nowread">Now Read !</button>
                    </div>
                  </div>
                );
              })
            ) : !error &&
              Object.keys(clickedBook).length > 0 &&
              clickedBook.volumeInfo ? (
              <div className="detailsOfClickedBook">
                {clickedBook.volumeInfo.imageLinks &&
                clickedBook.volumeInfo.imageLinks.thumbnail ? (
                  <img
                    src={clickedBook.volumeInfo.imageLinks.thumbnail}
                    alt=""
                    className="singleimgdetails"
                  />
                ) : null}

                <div>
                  <h2>{clickedBook.volumeInfo.title}</h2>
                  {console.log(clickedBook.volumeInfo)}
                  <div>
                    <strong>{clickedBook.volumeInfo.authors[0]}</strong>
                    <strong>
                      PublishedTime :{clickedBook.volumeInfo.publishedDate}
                    </strong>
                  </div>
                  <p>{clickedBook.volumeInfo.description}</p>
                  <div>
                    <div>
                      <strong>
                        Average Rating:
                        {clickedBook.volumeInfo.averageRating}
                      </strong>
                      <strong>
                        Rating Count:{clickedBook.volumeInfo.ratingsCount}
                      </strong>
                      <strong>
                        Publisher:{clickedBook.volumeInfo.publisher}
                      </strong>
                      <strong>
                        Language:{clickedBook.volumeInfo.language}
                      </strong>
                    </div>
                    <div>
                      <button>
                        <a
                          href={clickedBook.volumeInfo.previewLink}
                          target="blank"
                        >
                          Read more
                        </a>
                      </button>
                      <button>
                        <a
                          href={clickedBook.volumeInfo.infoLink}
                          target="blank"
                        >
                          Info more
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1>{error}</h1>
            )}
          </div>

          <div>
            <MoreBooks
              data1={data1}
              data2={data2}
              setClicked={setClicked}
              setClickedBook={setClickedBook}
              error={error}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainContent;
