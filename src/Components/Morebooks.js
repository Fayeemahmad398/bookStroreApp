const MoreBooks = (props) => {
  const TotalData = [...props.data1, ...props.data2];

  console.log(TotalData);
  console.log(props);

  return (
    <>
      <h1>More Books</h1>
      <div className="morebooks">
        {TotalData.length > 0 ? (
          TotalData.map((obj) => {
            return (
              <div
                className="img-more-books"
                onClick={() => {
                  props.setClicked(true);
                  props.setClickedBook(obj);
                }}
              >
                {obj.volumeInfo.imageLinks.thumbnail && (
                  <img
                    className="inclineimg"
                    src={obj.volumeInfo.imageLinks.thumbnail}
                    alt=""
                  />
                )}
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
