import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function StyledCarousel() {
  return (
    <div className="bg-red-100 w-full ">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        centerMode={true}
        renderThumbs={() => null}
      >
        <div>
          <img src="https://hpmgenerators.com/wp-content/uploads/2023/11/3-2.png" />
        </div>
        <div>
          <img src="https://hpmgenerators.com/wp-content/uploads/2023/11/HPM-website-1600-x-900-px-1366-x-500-px-1600-x-900-px-1366-x-500-px.png" />
        </div>
        <div>
          <img src="https://hpmgenerators.com/wp-content/uploads/2023/11/3-2.png" />
        </div>
        <div>
          <img src="https://hpmgenerators.com/wp-content/uploads/2023/11/HPM-website-1600-x-900-px-1366-x-500-px-1600-x-900-px-1366-x-500-px.png" />
        </div>
      </Carousel>
    </div>
  );
}

export default StyledCarousel;
