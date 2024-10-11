const CartCourses = ({ course }) => {
  //Tính khoảng thời gian đã update lại hoặc thêm mới course
  const updateTimed = (Date.now() - course.updateTime.getTime()) / 1000; // Tính ra số giây đã update
  let displayTime; //thời gian hiển thị lên trang
  let textTime = "";
  if (updateTimed < 60) {
    displayTime = updateTimed;
    textTime = "Seconds";
  } else if (updateTimed < 3600) {
    displayTime = Math.floor(updateTimed / 60);
    textTime = "Minutes";
  } else if (updateTimed < 86400) {
    displayTime = Math.floor(updateTimed / 3600);
    textTime = "Hours";
  } else if (updateTimed < 604800) {
    displayTime = Math.floor(updateTimed / 86400);
    textTime = "Days";
  } else if (updateTimed < 2592000) {
    displayTime = Math.floor(updateTimed / 604800);
    textTime = "Weeks";
  } else {
    displayTime = Math.floor(updateTimed / 2592000);
    textTime = "Month";
  }

  //Tính giá của course
  const displayPrice = ((course.price * (100 - course.sale)) / 100).toFixed(1);

  return (
    <div className="cart_course">
      <img src={course.img} alt="" />
      <div className="content">
        <p className="desc_gray">
          by <span className="desc_black">Determined-Poitras</span>
        </p>
        <p className="title_h4">{course.name}</p>
        <div className="info">
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <p className="desc_gray">
              {displayTime} {textTime}
            </p>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <p className="desc_gray">{course.students}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="price">
            <p className={`old ${course.sale !== 0 ? "sale" : ""}`}>
              ${course.price}
            </p>
            {course.sale !== 0 && (
              <p className={`new ${displayPrice == 0 ? "free" : ""}`}>
                {displayPrice == 0 ? "Free" : `$${displayPrice}`}
              </p>
            )}
          </div>
          <button className="view">View More</button>
        </div>
      </div>
    </div>
  );
};

export default CartCourses;
