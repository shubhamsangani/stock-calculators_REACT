import React, { useState } from 'react'
import './StockAvg.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Helmet } from 'react-helmet';

function StockReturnCal() {
    const [data, setData] = useState({
        buying: "",
        qty: "",
        selling: "",
    })

    const [zero, setZero] = useState(true)
    const [error, setError] = useState(false)

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

    const avgResult = () => {
        if (data.buying.length == 0 || data.qty.length == 0 || data.selling.length == 0) {
            setError(true)
        }
        else {
            setZero(false)
            setError(false)
        }
    }
    const clearField = () => {
        setData({
            buying: "",
            qty: "",
            selling: "",
        })
        setZero(true)
        setError(false)
    }

    let amount, profit

    amount = Math.round(Number(data.qty) * Number(data.buying))
    profit = Number(data.selling) - Number(data.buying)

    function comma(num) {
        let x = num.toString();
        let lastThree = x.substring(x.length - 3);
        let otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '') {
            lastThree = ',' + lastThree;
        }
        let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }

    return (
        <div>
             <Helmet>
                <title>Stock Return Calculator</title>
                <meta name="description" content="Calculate the future value of your investments using our Stock return Calculator." />
                <meta name="keywords" content="Stock Return calculator, investment calculator, future value calculator, Stock returns, Stock investment, mutual fund calculator, financial planning tool" />
            </Helmet>
            <div className="container">
                <h3>Stock return calculator</h3>
                <hr />
                <div className='mt-5'>
                    <h5>
                    Easily calculate your stock returns with our convenient Stock Return Calculator.
                    </h5>

                    <p className='text-secondary'>
                    Seeking a dependable tool for calculating stock returns? Your search ends here! Our Stock Return Calculator streamlines the process, offering precise calculations swiftly. Whether you're an experienced investor or a novice, this tool delivers accurate results in mere seconds.
                    </p>
                </div>
                <hr />
                <div className='row mt-5 align-items-center'>
                    <div className='col-lg-6'>
                        <div>
                            {/* <h5 >First Purchase</h5> */}
                            {/* <hr /> */}
                            <TextField required sx={{ marginTop: "20px" }} color='success' id="outlined-required" fullWidth label="Buying Price" variant="outlined" type="number" name='buying' value={data.buying} onChange={inputHandler} />
                            {error && data.buying.length <= 0 ? <div style={{ color: "red" }}>Buying Price can't be Empty.</div> : ""
                            }

                            <TextField required sx={{ marginTop: "40px" }} color='success' id="outlined-required" fullWidth label="Qty of Shares" variant="outlined" type="number" name='qty' value={data.qty} onChange={inputHandler} className='first_purchase_price' />
                            {error && data.qty.length <= 0 ? <div style={{ color: "red" }}>Qty of Shares can't be Empty.</div> : ""}

                            <TextField required sx={{ marginTop: "40px" }} color='success' id="outlined-required" fullWidth label="Selling Price" variant="outlined" type="number" name='selling' value={data.selling} onChange={inputHandler} className='first_purchase_price' />
                            {error && data.selling.length <= 0 ? <div style={{ color: "red" }}>Selling Price can't be Empty.</div> : ""}
                        </div>
                    </div>



                    <div className='col-lg-6 mt-4 mt-lg-0 '>
                        <div className='stockavg_result desktop_view'>
                            <h6>
                                Amount invested: {zero ? <span> 0 </span> : <span>₹ {comma(amount)}</span>}
                            </h6>
                            <hr />
                            <h6>
                                Return on investment: {zero ? <span> 0 </span> : <span>{(((profit * data.qty)/amount)*100).toFixed(2)} %</span>}
                            </h6>
                            <hr />
                            <h6>
                                Profit/Loss: {zero ? <span> 0 </span> : <span>₹ {comma(profit * data.qty)}</span>}
                            </h6>
                        </div>
                    </div>

                    <div className=''>
                        <div className=' mobile_view'>
                            <h6>
                                Amount invested:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>₹ {comma(amount)}</span>}
                            </p>
                            <hr />
                            <h6>
                                Return on investment:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>{(((profit * data.qty)/amount)*100).toFixed(2)} %</span>}
                            </p>
                            <hr />
                            <h6>
                                Profit/Loss:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>₹ {comma(profit)}</span>}
                            </p>

                        </div>
                    </div>

                </div>
                <div>
                    <Button sx={{ marginTop: "30px" }} color='success' variant="contained" onClick={avgResult} className='calculate_btn'>Calculate Return</Button>
                    <Button sx={{ marginTop: "30px", marginLeft: "10px" }} color='error' variant="outlined" onClick={clearField} className='clearfield_btn'>Clear Fields</Button>
                </div>
                <hr />

                <div className='mt-5'>
                    <p className='text-secondary'>
                    Introducing our Stock Return Calculator – the ultimate solution for simplifying stock return computations. Whether you're an experienced trader or just stepping into the realm of investments, our tool makes the process seamless, empowering you to make well-informed decisions effortlessly.
                    </p>

                    <h5>
                        What is a Stock Return Calculator?
                    </h5>

                    <p className='text-secondary'>
                        A Stock Return Calculator is a tool designed to assist individuals in analyzing their investments in the stock market. It calculates the profit or loss incurred from buying and selling shares by comparing the purchase and sale prices. By utilizing this online tool, investors can make informed decisions about their trading activities and investment strategies. Additionally, the calculator aids in identifying potentially profitable stocks and evaluating their valuation in the market.
                    </p>

                    <h5>
                        How Does Stock Return Calculator Work?
                    </h5>

                    <p className='text-secondary'>
                        A stock return calculator is straightforward to utilize, requiring minimal input for a prompt outcome. You only need to provide the following details:
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>1. Purchase Price: </span> The price at which you intend to buy the shares.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>2. Investment Amount: </span> The total sum you wish to invest, or alternatively, the total number of shares you plan to purchase.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>3. Target Price: </span> The desired selling price for the stock to achieve investment returns.
                    </p>

                    <h5>
                        Advantages of Using Stock Return Calculator
                    </h5>

                    <p className='text-secondary'>
                        Using a stock calculator offers several benefits:
                    </p>
                    <ul>
                        <li className='text-secondary'> It aids in assessing the returns on your investments.</li>
                        <li className='text-secondary'>  It assists in calculating your net profits post-commission payment to your broker, enabling you to ascertain your net return for each trade, i.e., the amount gained or lost..</li>
                        <li className='text-secondary'> It helps in forecasting the future value of your investments.</li>
                        <li className='text-secondary'> Utilizing a stock calculator allows you to determine the optimal stop loss for your investments.</li>
                    </ul>

                    <h5>
                    Seize Control of Your Investment Portfolio Now!
                    </h5>
                    <p className='text-secondary'>
                    Utilizing a stock return calculator offers significant utility and convenience for investors. Many rely on this tool to strategize their investments and estimate potential returns. While exact returns are elusive due to market volatility, the calculator allows for analysis of various market scenarios, aiding in informed decision-making. This tool is invaluable for investors seeking to make prudent choices amidst market fluctuations.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default StockReturnCal