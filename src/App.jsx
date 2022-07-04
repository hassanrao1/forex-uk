import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { useState } from "react";

function App() {
  const [sideBar, setSideBar] = useState([
    {
      id: 0,
      title: "Evaluation Account",
      value:
        "Any 18 year+ old trader from any location in the world can join our instant funding program and will get instant funding on a live account from day one.",
    },
    {
      id: 1,
      title: "Target",
      value:
        "The milestone target is set for each funding level, once this target has been reached, please close all open trades and report the achievement to FTUK. We will increase your funding amount by 400% on hitting the first milestone and double the funding amount for every other milestone hit.",
    },
    {
      id: 2,
      title: "Absolute drawdown",
      value:
        "All our funded accounts come with a fixed equity stop out level. Once the account equity level gets below this fixed stop out bar, we will close all running trades and disable trading and access. The stop out level is a fixed value for each funding level, this means that any profit which has been made by the trader increases the loss allowance.",
    },
    {
      id: 3,
      title: "Leverage",
      value:
        "Leverage is the use of a smaller amount of capital to gain exposure to larger trading positions. The trader is allowed to utilize the full leverage applied for the account. Leverage is set up as 1:10 for low-risk traders and 1:30 for our aggressive traders.",
    },
    {
      id: 4,
      title: "Instruments",
      value:
        "Our offered instruments: You can trade forex, metals, indices and commodities with us. Forex: EUR/USD, GBP/USD, USD/JPY, USD/CAD, AUD/USD, NZD/USD, USD/CHF, AUD/CAD, AUD/CHF, AUD/JPY, AUD/NZD, CAD/CHF, CAD/JPY, CHF/JPY, EUR/AUD, EUR/CAD, EUR/CHF, EUR/GBP, EUR/JPY, EUR/NZD, GBP/AUD, GBP/CAD, GBP/CHF, GBP/JPY, GBP/NZD, NZD/CAD, NZD/CHF, NZD/JPY. Metals: XAU/USD, XAG/USD Indices: AUS200, E35EUR, 100GBP, F40EUR, D30EUR, JPN225, E50EUR, SP500, NAS100, DJI30 Commodities: UK/OIL, US/OIL",
    },
    {
      id: 5,
      title: "Maximum time",
      value:
        "We allow a limited timeframe to reach the profit target level. The maximum trading days will only be applied in the first level. In future funding levels, there will be no time limit.",
    },
    {
      id: 6,
      title: "Minimum trading days",
      value:
        "We don’t have minimum trading days on any of our programs. Move to the next level as soon as you hit your target!",
    },
    {
      id: 7,
      title: "Profit split",
      value:
        "FTUK issues the trading capital and you bring in the trading. We take full responsibility for any potential trading losses occurred by you and split any profits between the fund and the trader. The higher the level you’re trading on, the higher your share is. It’s also good to know that pay-outs are never being deducted from your forward progression towards the next milestone. Earn and grow at the same time with FTUK!",
    },
    {
      id: 8,
      title: "Maximum funding",
      value:
        "At FTUK, we guarantee maximum trading capital in the form of funding. Our maximum is currently £2,240,000 per trading account. A trader is allowed to have 3 active accounts simultaneously and therefore the maximum funding per trader is set at £6,720,000",
    },
    {
      id: 9,
      title: "One time payment",
      value:
        "We require a one-time payment and don't charge monthly payments or any other costs. This is the only fee the trader pays for the program. We take responsibility for the potential trading losses that may occur.",
    },
  ]);

  const [expend, setExpand] = useState(false);
  const [expend1, setExpand1] = useState(false);
  const [expend2, setExpand2] = useState(false);
  const [expend3, setExpand3] = useState(false);
  const [expend4, setExpand4] = useState(false);
  const [expend5, setExpand5] = useState(false);
  const [expend6, setExpand6] = useState(false);
  const [expend7, setExpand7] = useState(false);
  const [expend8, setExpand8] = useState(false);
  const [expend9, setExpand9] = useState(false);

  const [isAggressive, setIsAggressive] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currencyData, setCurrencyData] = useState({
    USD: {
      columnH1: "$14,000",
      columnH2: "$40,000",
      columnH3: "$60,000",
      columnH4: "$90,000",
      column1: "$3,500",
      column2: "$10,000",
      column3: "$15,000",
      column4: "$22,500",
      columnB1: "$896,000",
      columnB2: "$1,280,000",
      columnB3: "$1,920,000",
      columnB4: "$2,880,000",
      payment1: "£150",
      payment2: "£410",
      payment3: "£550",
      payment4: "£950",
      paymentA1: "£119",
      paymentA2: "£299",
      paymentA3: "£349",
      paymentA4: "£449",
      instantAggressive1: "12272",
      instantAggressive2: "12273",
      instantAggressive3: "12274",
      instantAggressive4: "12275",
      instantLowRisk1: "12268",
      instantLowRisk2: "12269",
      instantLowRisk3: "12270",
      instantLowRisk4: "12271",
      evaluationAggressive1: "12280",
      evaluationAggressive2: "12281",
      evaluationAggressive3: "12282",
      evaluationAggressive4: "12283",
      evaluationLowRisk1: "12276",
      evaluationLowRisk2: "12277",
      evaluationLowRisk3: "12278",
      evaluationLowRisk4: "12279",
    },
    EUR: {
      columnH1: "€12,000",
      columnH2: "€36,000",
      columnH3: "€50,000",
      columnH4: "€80,000",
      column1: "€3,000",
      column2: "€9,000",
      column3: "€12,500",
      column4: "€20,000",
      columnB1: "€768,000",
      columnB2: "€1,152,000",
      columnB3: "€1,600,000",
      columnB4: "€2,560,000",
      payment1: "£150",
      payment2: "£410",
      payment3: "£550",
      payment4: "£950",
      paymentA1: "£119",
      paymentA2: "£299",
      paymentA3: "£349",
      paymentA4: "£449",
      instantAggressive1: "12288",
      instantAggressive2: "12289",
      instantAggressive3: "12290",
      instantAggressive4: "12291",
      instantLowRisk1: "12284",
      instantLowRisk2: "12285",
      instantLowRisk3: "12286",
      instantLowRisk4: "12287",
      evaluationAggressive1: "12296",
      evaluationAggressive2: "12297",
      evaluationAggressive3: "12298",
      evaluationAggressive4: "12299",
      evaluationLowRisk1: "12292",
      evaluationLowRisk2: "12293",
      evaluationLowRisk3: "12294",
      evaluationLowRisk4: "12295",
    },
    GBP: {
      columnH1: "£10,000",
      columnH2: "£30,000",
      columnH3: "£40,000",
      columnH4: "£70,000",
      column1: "£2,500",
      column2: "£7,500",
      column3: "£10,000",
      column4: "£17,500",
      columnB1: "£640,000",
      columnB2: "£960,000",
      columnB3: "£1,280,000",
      columnB4: "£2,240,000",
      payment1: "£150",
      payment2: "£410",
      payment3: "£550",
      payment4: "£950",
      paymentA1: "£119",
      paymentA2: "£299",
      paymentA3: "£349",
      paymentA4: "£449",
      instantAggressive1: "2575",
      instantAggressive2: "2576",
      instantAggressive3: "2577",
      instantAggressive4: "2578",
      instantLowRisk1: "2587",
      instantLowRisk2: "2593",
      instantLowRisk3: "2594",
      instantLowRisk4: "2595",
      evaluationAggressive1: "10993",
      evaluationAggressive2: "10992",
      evaluationAggressive3: "10991",
      evaluationAggressive4: "10990",
      evaluationLowRisk1: "9051",
      evaluationLowRisk2: "9054",
      evaluationLowRisk3: "9055",
      evaluationLowRisk4: "9056",
    },
  });
  let cartUrl = "https://www.ftuk.com/basket/?add-to-cart=";
  const handleRedirect = (index) => {
    if (isInstant && isAggressive) {
      window.open(
        `${cartUrl}${
          currencyData[selectedCurrency][`instantAggressive${index}`]
        }`
      );
    } else if (isInstant && !isAggressive) {
      window.open(
        `${cartUrl}${currencyData[selectedCurrency][`instantLowRisk${index}`]}`
      );
    } else if (!isInstant && isAggressive) {
      window.open(
        `${cartUrl}${
          currencyData[selectedCurrency][`evaluationAggressive${index}`]
        }`
      );
    } else if (!isInstant && !isAggressive) {
      window.open(
        `${cartUrl}${
          currencyData[selectedCurrency][`evaluationLowRisk${index}`]
        }`
      );
    }
  };

  const handleAggressive = () => {
    setIsAggressive((preValue) => !preValue);
  };

  const handleInstant = () => {
    setIsInstant((preValue) => !preValue);
  };

  const handleCurrencyChange = (name) => {
    setSelectedCurrency(name);
  };
  const handleCarouselChange = (type) => {
    let indexCopy = currentIndex + 1;
    console.log(indexCopy);
    if (type === "next") {
      if (indexCopy === 5) return;
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (indexCopy <= 2) return;
      setCurrentIndex((prev) => prev - 1);
      return;
    }
  };

  return (
    <div className="main-class">
      <div className="header-cont mt-4">
        <div className="col-md-4 d-flex flex-column  for-mobile-screen ">
          <div className="h4">Program</div>
          <div className="d-flex ">
            <button
              onClick={(e) => {
                setIsInstant(false);
              }}
              className={`${
                isInstant
                  ? "btn shadow-none mx-1 btn-outline-info"
                  : "btn shadow-none mx-1 btn-outline-info-active"
              }`}
            >
              Evaluation
            </button>
            <button
              onClick={(e) => {
                handleInstant();
              }}
              // className="btn btn-outline-info mx-1"
              className={`${
                isInstant
                  ? "btn shadow-none mx-1  btn-outline-info-active"
                  : "btn shadow-none mx-1 btn-outline-info"
              }`}
            >
              Instant Funding
            </button>
          </div>
        </div>
        <div className="col-md-4 for-mobile-screen currency-cont ">
          <div className="h4">Currency</div>
          <div className="d-flex">
            <button
              onClick={(e) => handleCurrencyChange("USD")}
              className={`btn ${
                selectedCurrency === "USD"
                  ? "btn-outline-info-active"
                  : "btn-outline-info"
              } mx-1 w-90 d-flex align-items-center shadow-none`}
            >
              <img src="/images/usd.png" className="flag-icon" />
              USD
            </button>
            <button
              onClick={(e) => handleCurrencyChange("EUR")}
              className={`btn ${
                selectedCurrency === "EUR"
                  ? "btn-outline-info-active"
                  : "btn-outline-info"
              } mx-1 w-90 d-flex align-items-center shadow-none`}
              // className={`btn cleanbtn flex aic ${  btnSelect4 ? "btn-activ" : ""}`}
            >
              <img src="/images/ero.png" className="flag-icon" />
              EUR
            </button>
            <button
              onClick={(e) => handleCurrencyChange("GBP")}
              className={`btn ${
                selectedCurrency === "GBP"
                  ? "btn-outline-info-active"
                  : "btn-outline-info"
              } mx-1 w-90 d-flex align-items-center shadow-none`}

              // className={`btn cleanbtn flex aic ${  btnSelect2 ? "btn-activ" : ""}`}
            >
              <img src="/images/gbp.png" className="flag-icon" />
              GBP
            </button>
          </div>
        </div>
        <div className="col-md-4 for-mobile-screen">
          <div className="h4">Risk</div>
          <div className="d-flex">
            {/* <button
              onClick={() => {
                setIsAggressive(false);
              }}
              // className="btn btn-outline-info mx-1 w-100"
              // className="btn mx-1 w-100"
              className={`${
                isAggressive
                  ? "btn mx-1 w-100 btn-outline-info"
                  : "btn mx-1 w-100 btn-outline-info-active"
              }`}
            >
              Low Risk
            </button> */}
            <div className="mt-2">
              <input
                type="radio"
                id="lowRisk"
                name="fav_language"
                defaultChecked={true}
                value="low"
                onChange={(e) =>
                  e.target.value === "low" && setIsAggressive(false)
                }
              />
               {" "}
              <label htmlFor="lowRisk" className="fw-bold">
                Low Risk
              </label>
            </div>
            <div className="mx-2 mt-2">
              <input
                type="radio"
                id="aggressive"
                name="fav_language"
                value="aggressive"
                onChange={(e) => e.target.value === "aggressive" && handleAggressive()}
              />
               {" "}
              <label htmlFor="aggressive" className="fw-bold">
                Aggressive
              </label>
            </div>
            {/* <button
              onClick={handleAggressive}
              // className="btn btn-outline-info mx-1 w-100"
              className={`${
                isAggressive
                  ? "btn mx-1 w-100 btn-outline-info-active"
                  : "btn mx-1 w-100 btn-outline-info "
              }`}
            >
              Aggressive
            </button> */}
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="row mt-3 desktop">
        <div className="col-md-8 ms-auto">
          <div className="d-flex justify-content-between">
            <button className="btn btn-primaryy w-100 mx-2">
              {currencyData[selectedCurrency].columnH1}
            </button>
            <button className="btn btn-primaryy w-100 mx-2">
              {currencyData[selectedCurrency].columnH2}
            </button>
            <button className="btn btn-primaryy w-100 mx-2">
              {currencyData[selectedCurrency].columnH3}
            </button>
            <button className="btn btn-primaryy w-100 mx-2">
              {currencyData[selectedCurrency].columnH4}
            </button>
          </div>
        </div>
      </div>
      {/* MObile */}
      <div className="w-100">
        <div className="d-flex mt-3 mobile align-items-center justify-content-around ms-3 mobile">
          <i
            className="fa fa-chevron-left "
            style={{ cursor: "pointer", color: "#2c365d" }}
            aria-hidden="true"
            onClick={() => handleCarouselChange("prev")}
          ></i>

          <button className="btn btn-primaryy w-50 mx-2">
            {currencyData[selectedCurrency][`columnH${currentIndex}`]}
          </button>
          <i
            className="fa fa-chevron-right"
            style={{ cursor: "pointer", color: "#2c365d" }}
            aria-hidden="true"
            onClick={() => handleCarouselChange("next")}
          ></i>
        </div>
      </div>
      {/* desktop */}
      <div className="row mt-2 desktop">
        {/* first row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand((preValue) => !preValue);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">
                {isInstant ? "Instant funding" : "Evaluation Account"}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-3">
                {currencyData[selectedCurrency].column1}
              </div>
              <div className="col-md-3">
                {currencyData[selectedCurrency].column2}
              </div>
              <div className="col-md-3">
                {currencyData[selectedCurrency].column3}
              </div>
              <div className="col-md-3">
                {currencyData[selectedCurrency].column4}
              </div>
            </div>
          </div>
        </div>
        {expend ? (
          <div className="d-flex">
            <div className="col-md-12">
              Any 18 year+ old trader from any location in the world can join
              our instant funding program and will get instant funding on a live
              account from day one.
            </div>
          </div>
        ) : null}

        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1((preValue) => !preValue);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend1 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Target</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">
                {isAggressive ? "25%" : "10%"}{" "}
              </div>
            </div>
          </div>
        </div>
        {expend1 ? (
          <div className="d-flex">
            <div className="col-md-12">
              The milestone target is set for each funding level, once this
              target has been reached, please close all open trades and report
              the achievement to FTUK. We will increase your funding amount by
              400% on hitting the first milestone and double the funding amount
              for every other milestone hit.
            </div>
          </div>
        ) : null}
        {/* Third Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2((preValue) => !preValue);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend2 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Absolute drawdown</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">5%</div>
            </div>
          </div>
        </div>
        {expend2 ? (
          <div className="d-flex">
            <div className="col-md-12">
              All our funded accounts come with a fixed equity stop out level.
              Once the account equity level gets below this fixed stop out bar,
              we will close all running trades and disable trading and access.
              The stop out level is a fixed value for each funding level, this
              means that any profit which has been made by the trader increases
              the loss allowance.
            </div>
          </div>
        ) : null}
        {/* Fourth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3((preValue) => !preValue);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend3 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Leverage</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">
                {isAggressive ? "Up to 1:100" : "Up to 1:50"}
              </div>
            </div>
          </div>
        </div>
        {expend3 ? (
          <div className="d-flex">
            <div className="col-md-12">
            The trader is allowed to utilize the full leverage applied for the account. Leverage is set up as up to 1:50 for low-risk traders and up to 1:100 for our aggressive traders.
            </div>
          </div>
        ) : null}
        {/* Fifth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4((preValue) => !preValue);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend4 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Instruments</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">
                Forex + Indices + Commodities + Metals
              </div>
            </div>
          </div>
        </div>
        {expend4 ? (
          <div className="d-flex">
            <div className="col-md-12">
              You can trade forex, metals, indices and commodities with us.
            </div>
          </div>
        ) : null}
        {/* Sixth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5((preValue) => !preValue);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend5 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Maximum time</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">
                {isAggressive ? "90" : "180"} days{" "}
              </div>
            </div>
          </div>
        </div>
        {expend5 ? (
          <div className="d-flex">
            <div className="col-md-12">
              We allow a limited timeframe to reach the profit target level. The
              maximum trading days will only be applied in the first level. In
              future funding levels, there will be no time limit.
            </div>
          </div>
        ) : null}
        {/* Seventh Rown */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6((preValue) => !preValue);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend6 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Minimum trading days</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">0 days</div>
            </div>
          </div>
        </div>
        {expend6 ? (
          <div className="d-flex">
            <div className="col-md-12">
              We don’t have minimum trading days on any of our programs. Move to
              the next level as soon as you hit your target!
            </div>
          </div>
        ) : null}
        {/* Eight Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7((preValue) => !preValue);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend7 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Profit split</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-12 text-center">Up to 80%</div>
            </div>
          </div>
        </div>
        {expend7 ? (
          <div className="d-flex">
            <div className="col-md-12">
              FTUK issues the trading capital and you bring in the trading. We
              take full responsibility for any potential trading losses occurred
              by you and split any profits between the fund and the trader. The
              higher the level you’re trading on, the higher your share is. It’s
              also good to know that pay-outs are never being deducted from your
              forward progression towards the next milestone. Earn and grow at
              the same time with FTUK!
            </div>
          </div>
        ) : null}
        {/* Ninth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8((preValue) => !preValue);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend8 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Maximum funding</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100">
              <div className="col-md-3">
                {" "}
                {currencyData[selectedCurrency].columnB1}
              </div>
              <div className="col-md-3">
                {" "}
                {currencyData[selectedCurrency].columnB2}
              </div>
              <div className="col-md-3">
                {" "}
                {currencyData[selectedCurrency].columnB3}
              </div>
              <div className="col-md-3">
                {" "}
                {currencyData[selectedCurrency].columnB4}
              </div>
            </div>
          </div>
        </div>
        {expend8 ? (
          <div className="d-flex">
            <div className="col-md-12">
              At FTUK, we guarantee maximum trading capital in the form of
              funding. Our maximum is currently £2,240,000 per trading account.
              A trader is allowed to have 3 active accounts simultaneously and
              therefore the maximum funding per trader is set at £6,720,000
            </div>
          </div>
        ) : null}
        {/* Tenth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9((preValue) => !preValue);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs fa-chevron-${expend9 ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">One time payment</div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center h-100 mx-3">
              <div
                className="col-md-2 w-25 rounded text-center text-white fw-bold  bg-blue"
                onClick={() => handleRedirect(1)}
              >
                {isInstant
                  ? currencyData[selectedCurrency].payment1
                  : currencyData[selectedCurrency].paymentA1}
              </div>
              <div
                className="col-md-2 w-25 rounded text-center text-white fw-bold m-1 bg-blue"
                onClick={() => handleRedirect(2)}
              >
                {isInstant
                  ? currencyData[selectedCurrency].payment2
                  : currencyData[selectedCurrency].paymentA2}
              </div>
              <div
                className="col-md-2 w-25 rounded text-center text-white fw-bold bg-blue"
                style={{ marginRight: "5px" }}
                onClick={() => handleRedirect(3)}
              >
                {isInstant
                  ? currencyData[selectedCurrency].payment3
                  : currencyData[selectedCurrency].paymentA3}
              </div>
              <div
                className="col-md-2 w-25 rounded text-center text-white fw-bold bg-blue"
                onClick={() => handleRedirect(4)}
              >
                {isInstant
                  ? currencyData[selectedCurrency].payment4
                  : currencyData[selectedCurrency].paymentA4}
              </div>
            </div>
          </div>
        </div>
        {expend9 ? (
          <div className="d-flex">
            <div className="col-md-12">
              We require a one-time payment and don't charge monthly payments or
              any other costs. This is the only fee the trader pays for the
              program. We take responsibility for the potential trading losses
              that may occur.
            </div>
          </div>
        ) : null}
      </div>
      {/* mobile */}
      <div className="row mt-2  mobile justify-content-center">
        {/* first row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand((preValue) => !preValue);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              {/* <img src="/images/downicons.png" className="icon" alt="icon" />{" "} */}
              <i
                className={`fa fa-xs icon fa-chevron-${expend ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">
                {isInstant ? "Instant funding" : "Evaluation Account"}
              </div>
            </div>
          </div>
        </div>
        {expend ? (
          <div className="d-flex">
            <div className="col-md-12 text-center">
              Any 18 year+ old trader from any location in the world can join
              our instant funding program and will get instant funding on a live
              account from day one.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
              {currencyData[selectedCurrency][`column${currentIndex}`]}
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1((preValue) => !preValue);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend1 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Target</div>
            </div>
          </div>
        </div>
        {expend1 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              The milestone target is set for each funding level, once this
              target has been reached, please close all open trades and report
              the achievement to FTUK. We will increase your funding amount by
              400% on hitting the first milestone and double the funding amount
              for every other milestone hit.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
              {isAggressive ? "25%" : "10%"}{" "}
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2((preValue) => !preValue);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend2 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Absolute drawdown</div>
            </div>
          </div>
        </div>
        {expend2 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              All our funded accounts come with a fixed equity stop out level.
              Once the account equity level gets below this fixed stop out bar,
              we will close all running trades and disable trading and access.
              The stop out level is a fixed value for each funding level, this
              means that any profit which has been made by the trader increases
              the loss allowance.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">5%</div>
          </div>
        </div>
        {/* Fourth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3((preValue) => !preValue);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend3 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Leverage</div>
            </div>
          </div>
        </div>
        {expend3 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
            The trader is allowed to utilize the full leverage applied for the account. Leverage is set up as up to 1:50 for low-risk traders and up to 1:100 for our aggressive traders.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
            {isAggressive ? "Up to 1:100" : "Up to 1:50"}
            </div>
          </div>
        </div>
        {/* Fifth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4((preValue) => !preValue);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend4 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Instruments</div>
            </div>
          </div>
        </div>
        {expend4 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              You can trade forex, metals, indices and commodities with us.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
              Forex + Indices + Commodities + Metals
            </div>
          </div>
        </div>
        {/* Sixth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5((preValue) => !preValue);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend5 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Maximum time</div>
            </div>
          </div>
        </div>
        {expend5 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              We allow a limited timeframe to reach the profit target level. The
              maximum trading days will only be applied in the first level. In
              future funding levels, there will be no time limit.
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
              {isAggressive ? "90" : "180"} days{" "}
            </div>
          </div>
        </div>
        {/* Seventh Rown */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6((preValue) => !preValue);
              setExpand7(false);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend6 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Minimum trading days</div>
            </div>
          </div>
        </div>
        {expend6 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              We don’t have minimum trading days on any of our programs. Move to
              the next level as soon as you hit your target!
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">0 Days</div>
          </div>
        </div>
        {/* Eight Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7((preValue) => !preValue);
              setExpand8(false);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend7 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Profit split</div>
            </div>
          </div>
        </div>
        {expend7 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              FTUK issues the trading capital and you bring in the trading. We
              take full responsibility for any potential trading losses occurred
              by you and split any profits between the fund and the trader. The
              higher the level you’re trading on, the higher your share is. It’s
              also good to know that pay-outs are never being deducted from your
              forward progression towards the next milestone. Earn and grow at
              the same time with FTUK!
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">Up to 80%</div>
          </div>
        </div>
        {/* Ninth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8((preValue) => !preValue);
              setExpand9(false);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend8 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">Maximum funding</div>
            </div>
          </div>
        </div>
        {expend8 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              At FTUK, we guarantee maximum trading capital in the form of
              funding. Our maximum is currently £2,240,000 per trading account.
              A trader is allowed to have 3 active accounts simultaneously and
              therefore the maximum funding per trader is set at £6,720,000
            </div>
          </div>
        ) : null}
        <div className="col-md-12 ">
          <div className="d-flex justify-content-center w-100 m-2">
            <div className="text-center fw-bold">
              {" "}
              {currencyData[selectedCurrency][`columnB${currentIndex}`]}
            </div>
          </div>
        </div>
        {/* Tenth Row */}
        <div className="d-flex border mt-1 row">
          <div
            className="left-side col-md-4 "
            onClick={() => {
              setExpand(false);
              setExpand1(false);
              setExpand2(false);
              setExpand3(false);
              setExpand4(false);
              setExpand5(false);
              setExpand6(false);
              setExpand7(false);
              setExpand8(false);
              setExpand9((preValue) => !preValue);
            }}
          >
            <div className="d-flex align-items-center ms-2">
              <i
                className={`fa fa-xs icon fa-chevron-${
                  expend9 ? "up" : "down"
                }`}
                aria-hidden="true"
              ></i>
              <div className="inside-left-side">One time payment</div>
            </div>
          </div>
        </div>
        {expend9 ? (
          <div className="d-flex">
            <div className="col-md-12  text-center">
              We require a one-time payment and don't charge monthly payments or
              any other costs. This is the only fee the trader pays for the
              program. We take responsibility for the potential trading losses
              that may occur.
            </div>
          </div>
        ) : null}
        <div className="col-md-8">
          <div className="d-flex align-items-center h-100 mx-3">
            <div
              className="col-md-2 w-100 rounded text-center text-white fw-bold m-2 bg-blue"
              onClick={() => handleRedirect(currentIndex)}
            >
              {isInstant
                ? currencyData[selectedCurrency][`payment${currentIndex}`]
                : currencyData[selectedCurrency][`paymentA${currentIndex}`]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
