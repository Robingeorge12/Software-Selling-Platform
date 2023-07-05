<div className="searchprod-container-div1">
{/* <SearchFilterSideBar /> */}
</div>

<div className="searchprod-container-div2">
<div className="searchprod_grid-container">
  {data.map((el, index) => (
    // <div className="searchprod_grid-item" key={index}>
    <div
      className="paidsoftware-container-div3-swiper-slide"
      key={index}
    >
      <div className="paidsoftware-container-div3-swiper-slide-children1">
        {" "}
        <img
          src="https://www.sovereignconsult.com/wp-content/uploads/2019/07/blockchain-development.gif"
          className="paidsoftware-container-div3-swiper-slide-children1-img"
          alt=""
        />
      </div>
      {/* <div className="paidsoftware-container-div3-swiper-slide-children2">
      <div className="paidsoftware-container-div3-swiper-slide-children2-icondiv">
          <BsHeart className="paidsoftware-container-div3-swiper-slide-children2-icon"/>
      </div>
      <p className="paidsoftware-container-div3-swiper-slide-children2-p1">
       Buy
      </p>
    </div> */}
      <div className="paidsoftware-container-div3-swiper-slide-children3">
        <p className="paidsoftware-container-div3-swiper-slide-children3-p1">
          {el.name}
          {/* <Trans i18nKey="userMessagesUnread"  > <strong title={t('nameTitle')}>{el.name}</strong></Trans> */}
        </p>
      </div>
      <div className="paidsoftware-container-div3-swiper-slide-children4">
        <p className="paidsoftware-container-div3-swiper-slide-children4-p1">
          {/* This is fully completed project built from Laravel framework VueJS.  */}
          {el.desc}
        </p>
      </div>

      <div className="paidsoftware-container-div3-swiper-slide-children5">
        <div className="paidsoftware-container-div3-swiper-slide-children5-icondiv">
          <FaLaptopCode className="paidsoftware-container-div3-swiper-slide-children5-icon" />
        </div>
        <div className="paidsoftware-container-div3-swiper-slide-children5-lang">
          <p className="paidsoftware-container-div3-swiper-slide-children5-lang-p1">
            {/* C#, Lite,Java */}
            {el.lan}
          </p>
        </div>
      </div>

      <div className="paidsoftware-container-div3-swiper-slide-children6">
        <div className="paidsoftware-container-div3-swiper-slide-children6-icondiv">
          <MdAccountTree className="paidsoftware-container-div3-swiper-slide-children6-icon" />
        </div>
        <div className="paidsoftware-container-div3-swiper-slide-children6-lang">
          <p className="paidsoftware-container-div3-swiper-slide-children6-lang-p1">
            {/* Blockchain,Criptocurrency */}
            {el.tech}
          </p>
        </div>
      </div>
      <div className="paidsoftware-container-div3-swiper-slide-children7">
        <div className="paidsoftware-container-div3-swiper-slide-children7-icondiv">
          <AiFillDatabase className="paidsoftware-container-div3-swiper-slide-children7-icon" />
        </div>
        <div className="paidsoftware-container-div3-swiper-slide-children7-lang">
          <p className="paidsoftware-container-div3-swiper-slide-children7-lang-p1">
            {/* Content,Data,Technology,Telecommunication,Tools */}
            {el.area}
          </p>
        </div>
      </div>
      <div className="paidsoftware-container-div3-swiper-slide-children8">
        <p className="paidsoftware-container-div3-swiper-slide-children8-p1">
          added by
        </p>
        <span className="paidsoftware-container-div3-swiper-slide-children8-p1-s1">
          {/* Hangsharaj1888 */}
          {el.add}
        </span>
      </div>
      <div className="paidsoftware-container-div3-swiper-slide-children9">
        <button className="paidsoftware-container-div3-swiper-slide-children9-btn">
          {" "}
          Download{" "}
        </button>
        <div className="paidsoftware-container-div3-swiper-slide-children9-box2">
          $ {el.price}
        </div>
      </div>
    </div>
    // </div>
  ))}
</div>
</div>