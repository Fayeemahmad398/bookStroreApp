const MoreBooks = (props) => {
  let TotalData = [];
  if (props.data1.length > 0 || props.data2.length > 0) {
    TotalData = [...props.data1, ...props.data2];
  }

  console.log(TotalData);
  // console.log(props);

  return (
    <>
      <h1>More Books</h1>
      <div className="morebooks">
        {!props.error && TotalData.length > 0 ? (
          TotalData.map((obj) => {
            return (
              <div
                className="img-more-books"
                onClick={() => {
                  props.setClicked(true);
                  props.setClickedBook(obj);
                }}
              >
                {console.log(obj)}
                {!props.error &&
                obj.volumeInfo.imageLinks &&
                obj.volumeInfo.imageLinks.thumbnail ? (
                  <div className="imgtitle">
                    <img
                      className="inclineimg"
                      src={obj.volumeInfo.imageLinks.thumbnail}
                      alt=""
                    />
                    <strong>{obj.volumeInfo.title}</strong>
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
};
export default MoreBooks;
