import React from "react";
import { Avatar } from "./Avatar";
import { AddButton } from "./AddButton";
import "./TradeCard.css";
import { Badge } from "./Badge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const TradeCard: React.FC<any> = (props) => {
  const { status, pictures, title, addedToWishList } = props;
  return (
    <div className="trade-card-container">
      <Badge badgeType={status}></Badge>
      <div className="trade-card-carousel-container">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="card-swiper"
        >
          {pictures.map((imgUrl: string) => {
            return (
              <SwiperSlide>
                <img className="slide-image" src={imgUrl} alt="Trade Image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="trade-card-content-container">
        <div className="trade-card-title">{title}</div>
        <div className="trade-card-bottom-container">
          <Avatar></Avatar>
          <AddButton clicked={addedToWishList}></AddButton>
        </div>
      </div>
    </div>
  );
};
