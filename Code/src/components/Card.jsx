// Packages & Frameworks
import styled from "styled-components";

// Files
import mainImage from "../images/illustration-hero.png";
import musicIcon from "../images/icon-music.png";

// Styles
const Parent = styled.article`
  border-radius: 20px;
  overflow: hidden;
  border: none;
  max-width: 350px !important;

  img {
    max-width: 100%;
  }

  .card-body {
    padding: 30px;

    h4 {
      color: #1b2848;
      font-weight: bold;
      padding-bottom: 10px;
      padding-top: 10px;
    }

    p {
      font-size: 0.9rem;
      color: #777;
      line-height: 1.3rem;
    }

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: #f8f9fe;
      padding: 20px;
      border-radius: 15px;

      .part-1 {
        display: flex;
        align-items: center;

        img {
          width: 30px;
          height: 30px;
        }

        .text {
          padding-left: 20px;

          h5 {
            font-size: 0.9rem;
            margin: 0;
            font-weight: bold;
            color: #1b2848;
          }

          span {
            font-size: 0.8rem;
            color: #777;
          }
        }
      }

      a {
        font-weight: bold;
        color: #6720ad;
        font-size: 0.9rem;
      }
    }

    .main-btn {
      width: 100%;
      background-color: #382ae1;
      margin-top: 30px;
      margin-bottom: 20px;
      border-radius: 10px;
      height: 40px;
      font-weight: 600;
      box-shadow: 3px 5px 15px 0 #8f87e8;
    }

    .cancel-btn {
      font-weight: bold;
      color: #7b7f8a;
      font-size: 0.9rem;
      text-decoration: none;
    }
  }
`;

// JSX
const Card = () => {
  return (
    <div className="container">
      <Parent className="card my-3">
        <img src={mainImage} className="card-img-top" alt="Main Image" />
        <div className="card-body">
          <h4 className="card-title">Order Summary</h4>
          <p className="card-text">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="price">
            <div className="part-1">
              <img src={musicIcon} alt="Music Icon" />
              <div className="text">
                <h5>Annual Plan</h5>
                <span>$59.99/year</span>
              </div>
            </div>
            <a href="#" title="Change Link">
              Change
            </a>
          </div>
          <a
            href="#"
            className="btn btn-primary main-btn"
            title="Proceed to Payment Button"
          >
            Proceed to Payment
          </a>
          <a href="#" className="cancel-btn" title="Cnacel Order Button">
            Cancel Order
          </a>
        </div>
      </Parent>
    </div>
  );
};

export default Card;
