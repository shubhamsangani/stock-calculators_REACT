import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Helmet } from 'react-helmet';

function SipCal() {
    const [data, setData] = useState({
        amount: "25000",
        period: "10",
        return: "12",
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })

    }

    let ExpAmnt, AmntInv, TotalGain, monthlyperiod, monthlyreturn;

    monthlyperiod = Number(data.period) * 12
    monthlyreturn = (Number(data.return) / 12) / 100
    ExpAmnt = Math.round((data.amount) * ((Math.pow((1 + monthlyreturn), monthlyperiod) - 1) / monthlyreturn) * (1 + monthlyreturn))
    AmntInv = (Number(data.amount) * monthlyperiod)
    TotalGain = Math.round(ExpAmnt - AmntInv)

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

    const data02 = [
        { name: "Amount Invested", value: AmntInv },
        { name: "Total Gain", value: ExpAmnt - AmntInv }
    ];
    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div>
            <Helmet>
                <title>SIP Calculator</title>
                <meta name="description" content="Calculate the future value of your investments using our SIP (Systematic Investment Plan) Calculator. Plan your investments smartly and achieve your financial goals with ease." />
                <meta name="keywords" content="SIP calculator, Systematic Investment Plan calculator, investment calculator, future value calculator, SIP returns, SIP investment, mutual fund calculator, financial planning tool" />
            </Helmet>

            <div className="container">
                <h3 >SIP(Systematic Investment Plan) calculator</h3>
                <hr />

                <div className='mt-5'>
                    <h5>
                        Get Financial Clarity with Our SIP Calculator
                    </h5>
                    <p className='text-secondary'>
                        Welcome to our Website, your go-to destination for financial planning tools designed to empower your investment decisions. Our SIP (Systematic Investment Plan) calculator is a powerful resource tailored to help you visualize your investment journey and plan for a financially secure future.
                    </p>
                </div>
                <hr />

                <div className='row mt-5'>
                    <div className='col-lg-4'>
                        <div>
                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Monthly Investment</label>
                                <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' name='amount' value={data.amount} onChange={inputHandler} color='success' />
                                </FormControl>
                            </div>
                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='amount' value={data.amount} onChange={inputHandler} step={500} min={500} max={100000} />

                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Investment Period</label>
                                <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        endAdornment={<InputAdornment position="end">Year</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' min={1} max={40} value={data.period} name='period' onChange={inputHandler} />
                                </FormControl>
                            </div>

                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='period' value={data.period} onChange={inputHandler} min={1} max={40} />

                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Expected return rate (p.a)</label>
                                <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' min={1} max={30} name='return' value={data.return} onChange={inputHandler} />
                                </FormControl>
                            </div>

                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='return' value={data.return} onChange={inputHandler} min={1} max={30} />

                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='Sipcal sip_desktop_view'>
                            <h6>
                                Expected Amount : <span>₹ {comma(ExpAmnt)}</span>
                            </h6>
                            <hr />
                            <h6>
                                Amount invested :  <span>₹ {comma(AmntInv)}</span>
                            </h6>
                            <hr />
                            <h6>
                                Total Gain: <span>₹ {comma(TotalGain)}</span>
                            </h6>
                        </div>
                        <div className=' sip_mobile_view'>
                            <h6>
                                Expected Amount :
                            </h6>
                            <span>₹ {comma(ExpAmnt)}</span>
                            <hr />
                            <h6>
                                Amount invested :
                            </h6>
                            <span>₹ {comma(AmntInv)}</span>
                            <hr />
                            <h6>
                                Total Gain:
                            </h6>
                            <span>₹ {comma(TotalGain)}</span>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-lg-0 mt-4'>
                        <div className='text-center mt-3'>
                            <span className='AI'>Amount invested</span>
                            <span className='TG ms-5'>Total Gain</span>
                        </div>

                        <PieChart width={300} height={250} className='chart'>
                            <Pie
                                data={data02}
                                // cx={200}
                                // cy={180}
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={0}
                                dataKey="value">
                                {data02.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>

                    </div>
                </div>

                <hr />

                <div className='mt-5'>
                    <p className='text-secondary'>
                        Before we delve into the benefits of our SIP calculator, let's understand what SIP is all about. SIP is a disciplined approach to investing in mutual funds, where you invest a fixed amount regularly over a period of time. It not only cultivates a saving habit but also harnesses the power of compounding to help you achieve your financial goals.
                    </p>

                    <h5>
                        How Our SIP Calculator Works:
                    </h5>
                    <p className='text-secondary'>
                        Our SIP calculator simplifies the complex task of calculating potential returns on your investments. With just three simple inputs – monthly amount, investment period, and expected return – our tool provides you with a comprehensive breakdown of your investment journey.
                    </p>

                    <h5>
                        Key Features:
                    </h5>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Monthly Amount: </span> Input the amount you wish to invest every month.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Investment Period: </span> Specify the duration of your investment plan.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Expected Return: </span> Estimate the annual return rate on your investments.
                    </p>

                    <h5>
                        What Our SIP Calculator Offers:
                    </h5>
                    <p className='text-secondary'>
                        <span className='text-dark'>1. Expected Amount: </span> Our calculator instantly computes the expected amount you'll accumulate by the end of your investment period.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>2. Total Gain: </span> Get a clear picture of the total gain on your investments, allowing you to assess the potential profitability.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>3. Amount Invested: </span> Track the total amount you've invested over time.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>4. Visual Representation: </span> Visualize your investment journey with interactive pie charts showcasing the proportion of amount invested versus total gain.
                    </p>

                    <h5>
                        Why Use Our SIP Calculator?
                    </h5>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Accuracy: </span> Our calculator employs advanced algorithms to provide accurate projections tailored to your investment goals.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Ease of Use: </span> User-friendly interface makes it convenient for investors of all levels to utilize the tool effortlessly.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Empowerment: </span> Gain financial clarity and make informed decisions to optimize your investment strategy.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Planning: </span> Plan ahead and set realistic financial goals with confidence.
                    </p>

                    <h5>
                        Start Planning Your Financial Future Today:
                    </h5>
                    <p className='text-secondary'>
                        Ready to take control of your financial future? Explore the power of our SIP calculator and embark on a journey towards wealth creation and prosperity.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default SipCal