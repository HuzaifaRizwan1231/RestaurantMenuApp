import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Body(props) {
  //sql query to generate products from database
  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.setProgress(30);
    //fetching data
    axios
      .get(`https://${props.ip}/products`)
      .then(
        (response) => setProducts(response.data.data),
        setTimeout(() => {
          props.setProgress(100);
        }, 300)
      )
      .catch((error) => console.log(error));

      if (!props.islogin && !props.isAdminlogin) {
        props.setUserEmail("");
        props.setPassword("");
        props.setUserName("");
        props.setUserAddress("");
      }
      


      props.KeepLoggedIn();
      props.setExploreDeal(false);
      props.setExploreFast(false);
      props.setExploreDesi(false);
      props.setExploreDrinks(false);
      props.setNavigateTo("")
  }, []);




  const [scrollToTop, setscrollToTop] = useState();

  const HandleScroll = () => {
    setscrollToTop(window.scrollTo(0, 0));
  };

  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExample"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/6024960.jpg"
              className="d-block w-100 carouselImage"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/Food-Facebook-Cover-Banner-18.jpg"
              className="d-block w-100 carouselImage"
              alt="..."
            />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* MainSection */}

      

      {/* Explore Menu Section */}

      <div className="container mb-1">
        <div className="row">
          <div className="col-6">
            <h3 className="Heading">
              <b>Explore Menu</b>
            </h3>
          </div>
          <div className="col-6 rightHeadingLink m-auto">
            <h5>
              <Link onClick={HandleScroll} to="/exploreMenu" className="buttonBody">
                View All
              </Link>
            </h5>
          </div>
        </div>
      </div>

      <div className="container  mb-4 ">
        <div className="row ">
          <div className="col-6 underLine"></div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="row ">
          <div className="col-6">
            <div className="row">
              {/* FirstImage */}
              <div className="col-12 col-md-6 my-1">
                <Link
                  to="/exploreMenu"
                  onClick={() => {
                    props.setExploreDeal(true);
                  }}
                >
                  <div className="card exploreMenuImage ">
                    <div className="card-body ">
                      <img
                        src="/images/beef-burger-deal.png"
                        className="cardImage card-img-top"
                        alt="..."
                      />
                      <p className="foodPriceHistory text-center mb-3">
                        <b>DEALS</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* SecondImage */}
              <div className="col-12 col-md-6 my-1">
                <Link
                  to="/exploreMenu"
                  onClick={() => {
                    props.setExploreFast(true);
                  }}
                >
                  <div className="card exploreMenuImage ">
                    <div className="card-body ">
                      <img
                        src="/images/Beef_Burger.png"
                        className=" cardImage card-img-top"
                        alt="..."
                      />
                      <p className="foodPriceHistory text-center mb-3">
                        <b>FAST FOOD</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row">
              {/* ThirdImage */}
              <div className="col-12 col-md-6 my-1">
                <Link
                  to="/exploreMenu"
                  onClick={() => {
                    props.setExploreDesi(true);
                  }}
                >
                  <div className="card exploreMenuImage ">
                    <div className="card-body">
                      <img
                        src="/images/biryani.png"
                        className=" cardImage card-img-top "
                        alt="..."
                      />
                      <p className="foodPriceHistory text-center mb-3">
                        <b>DESI</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Fourth Image */}
              <div className="col-12 col-md-6 my-1">
                <Link
                  to="/exploreMenu"
                  onClick={() => {
                    props.setExploreDrinks(true);
                  }}
                >
                  <div className="card exploreMenuImage ">
                    <div className="card-body">
                      <img
                        src="/images/ColaNext.png"
                        className="cardImage card-img-top "
                        alt="..."
                      />
                       <p className="foodPriceHistory text-center mb-3">
                        <b>DRINKS</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Deals */}

      <div className="container menuSection mb-1">
        <div className="row">
          <div className="col-md-6 col-6">
            <h3 className="Heading">
              <b>Top Deals</b>
            </h3>
          </div>
        </div>
      </div>

      <div className="container  mb-4 ">
        <div className="row ">
          <div className="col-6 underLine"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.product_id} className="col-12 col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 col-md-5 text-center m-auto">
                      <img
                        src={product.product_image}
                        className="card-img-top foodImage"
                        alt="food"
                      />
                    </div>
                    <div className="col-6 col-md-7 my-3 TopDealsCard">
                      <h1 className="foodName mb-3">
                        <b>{product.product_name}</b>
                      </h1>

                      <h1 className="foodPrice mb-3">
                        <b>
                          {"Rs. "}
                          {product.product_price}
                        </b>
                      </h1>

                      <Link
                        onClick={HandleScroll}
                        to={`/order/${product.product_id}`}
                      >
                        <button className="button m-0">Order Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
