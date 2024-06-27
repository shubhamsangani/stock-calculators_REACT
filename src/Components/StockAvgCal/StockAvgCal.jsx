import React, { useState } from 'react'
import './StockAvg.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function StockAvgCal() {
    const [data, setData] = useState({
        firstunit: "",
        firstprice: "",
        secondunit: "",
        secondprice: "",
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
        if (data.firstunit.length == 0 || data.firstprice.length == 0 || data.secondprice.length == 0 || data.secondunit.length == 0) {
            setError(true)
        }
        else {
            setZero(false)
            setError(false)
        }
    }
    const clearField = () => {
        setData({
            firstunit: "",
            firstprice: "",
            secondunit: "",
            secondprice: "",
        })
        setZero(true)
        setError(false)
    }

    let Amount1, Amount2, TotalUnit, TotalAmount, AvgPrice;

    Amount1 = Math.round(Number(data.firstprice) * Number(data.firstunit))
    Amount2 = Math.round(Number(data.secondprice) * Number(data.secondunit))
    TotalUnit = Number(data.firstunit) + Number(data.secondunit)
    TotalAmount = Amount1 + Amount2
    AvgPrice = (TotalAmount / TotalUnit).toFixed(2)

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
            <div className="container">
                <h3>Stock average calculator</h3>
                <hr />
                <div className='mt-5'>
                    <h5>
                        Calculate Your Stock Average Easily with Our Stock Average Calculator
                    </h5>

                    <p className='text-secondary'>
                        Are you looking for a reliable tool to help you calculate the average price of your stocks? Look no further! Our Stock Average Calculator is here to simplify the process for you. Whether you're a seasoned investor or just starting out, this tool provides you with accurate calculations in a matter of seconds.
                    </p>
                </div>
                <hr />
                <div className='row mt-5'>
                    <div className='col-lg-3'>
                        <div>
                            <h5 >First Purchase</h5>
                            <hr />
                            <TextField required sx={{ marginTop: "20px" }} color='success' id="outlined-required" fullWidth label="Qty of Shares" variant="outlined" type="number" name='firstunit' value={data.firstunit} onChange={inputHandler} />
                            {error && data.firstunit.length <= 0 ? <div style={{ color: "red" }}>Qty can't be Empty.</div> : ""
                            }

                            <TextField required sx={{ marginTop: "40px" }} color='success' id="outlined-required" fullWidth label="Price Per Share" variant="outlined" type="number" name='firstprice' value={data.firstprice} onChange={inputHandler} className='first_purchase_price' />
                            {error && data.firstprice.length <= 0 ? <div style={{ color: "red" }}>Price can't be Empty.</div> : ""}
                        </div>
                    </div>

                    <div className='col-lg-3 mt-4 mt-lg-0'>
                        <div>
                            <h5>Second Purchase</h5>
                            <hr />
                            <TextField required sx={{ marginTop: "20px" }} color='success' id="outlined-required" fullWidth label="Qty of Shares" variant="outlined" type="number" name='secondunit' value={data.secondunit} onChange={inputHandler} />
                            {error && data.secondunit.length <= 0 ? <div style={{ color: "red" }}>Qty can't be Empty.</div> : ""}

                            <TextField required sx={{ marginTop: "40px" }} color='success' id="outlined-required" fullWidth label="Price Per Share" variant="outlined" type="number" name='secondprice' value={data.secondprice} onChange={inputHandler} className='second_purchase_price' />
                            {error && data.secondprice.length <= 0 ? <div style={{ color: "red" }}>Price can't be Empty.</div> : ""}
                        </div>
                    </div>

                    <div className='col-lg-6 mt-4 mt-lg-0'>
                        <div className='stockavg_result desktop_view'>
                            <h6>
                                Amount invested on 1<sup>st</sup> Buy: {zero ? <span> 0 </span> : <span>₹ {comma(Amount1)}</span>}
                            </h6>
                            <hr />
                            <h6>
                                Amount invested on 2<sup>nd</sup> Buy: {zero ? <span> 0 </span> : <span>₹ {comma(Amount2)}</span>}
                            </h6>
                            <hr />
                            <h6>
                                Total Units: {zero ? <span> 0 </span> : <span> {TotalUnit}</span>}
                            </h6>
                            <hr />
                            <h6>
                                Average Price: {zero ? <span> 0 </span> : <span>{AvgPrice}</span>}
                            </h6>
                            <hr />
                            <h6>
                                Total Amount: {zero ? <span> 0 </span> : <span>₹ {comma(TotalAmount)}</span>}
                            </h6>
                        </div>
                    </div>

                    <div className=''>
                        <div className=' mobile_view'>
                            <h6>
                                Amount invested on 1<sup>st</sup> Buy:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>₹ {comma(Amount1)}</span>}
                            </p>
                            <hr />
                            <h6>
                                Amount invested on 2<sup>nd</sup> Buy:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>₹ {comma(Amount2)}</span>}
                            </p>
                            <hr />
                            <h6>
                                Total Units:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span> {TotalUnit}</span>}
                            </p>
                            <hr />
                            <h6>
                                Average Price:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>{AvgPrice}</span>}
                            </p>
                            <hr />
                            <h6>
                                Total Amount:
                            </h6>
                            <p>
                                {zero ? <span> 0 </span> : <span>₹ {comma(TotalAmount)}</span>}
                            </p>
                        </div>
                    </div>

                </div>
                <div>
                    <Button sx={{ marginTop: "30px" }} color='success' variant="contained" onClick={avgResult} className='calculate_btn'>Calculate Average</Button>
                    <Button sx={{ marginTop: "30px", marginLeft: "10px" }} color='error' variant="outlined" onClick={clearField} className='clearfield_btn'>Clear Fields</Button>
                </div>
                <hr />

                <div className='mt-5'>
                    <p className='text-secondary'>
                        Welcome to our Stock Average Calculator – your go-to solution for effortless stock average calculations. Whether you're a seasoned trader or new to the world of investments, our tool streamlines the process, allowing you to make informed decisions with ease.
                    </p>

                    <h5>
                        What is a Stock Average Calculator?
                    </h5>

                    <p className='text-secondary'>
                        A Stock Average Calculator is a valuable tool for investors seeking to manage their stock portfolios effectively. It simplifies the process of determining the average price per share of a particular stock based on multiple purchase transactions. By inputting the quantity of stocks purchased and their corresponding prices, investors can swiftly compute the average cost of their investments.
                    </p>

                    <h5>
                        How Does It Work?
                    </h5>

                    <p className='text-secondary'>
                        Our Stock Average Calculator features two primary input fields for your first and second stock purchases. Simply input the quantity of stocks and the price per share for each transaction. Our tool then performs the following calculations:
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>1. Average Price: </span> Instantly computes the average price per share based on your inputted purchase data.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>2. Total Quantity of Stocks: </span> Provides the total number of stocks you currently hold across both purchases.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>3. First Purchase Amount: </span> Calculates the total amount spent on your initial stock purchase.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>4. Second Purchase Amount: </span> Determines the total amount spent on your subsequent stock acquisition.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>5. Total Amount: </span> Summarizes the total investment amount across all purchases.
                    </p>

                    <h5>
                        Why Choose Our Stock Average Calculator?
                    </h5>

                    <p className='text-secondary'>
                        <span className='text-dark'>1. Efficiency: </span> Say goodbye to manual calculations and spreadsheet headaches. Our intuitive tool delivers accurate results in seconds, saving you valuable time.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>2. Precision: </span> Rest assured that your calculations are accurate and reliable, empowering you to make well-informed investment decisions.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>3. User-Friendly Interface: </span> With straightforward input fields and clear, concise results, our calculator is designed for ease of use, catering to investors of all levels.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>4. Versatility: </span> Whether you're managing a diverse portfolio or focusing on specific stocks, our calculator adapts to your unique investment needs.
                    </p>

                    <h5>
                        Take Charge of Your Investments Today!
                    </h5>
                        <p className='text-secondary'>
                            Harness the power of data-driven decision-making with our Stock Average Calculator. Empower yourself to optimize your investment strategy and maximize returns. Start using our tool today and unlock a world of financial possibilities!

                        </p>
                </div>
            </div>
        </div>
    )
}

export default StockAvgCal