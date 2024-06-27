import React, { useState, useCallback } from 'react'
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Helmet } from 'react-helmet';

function CAGRcal() {
    const [data, setData] = useState({
        initialAmount: 100000,
        fianlAmount: 500000,
        duration: 10,
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

    let CAGR = ((Math.pow((data.fianlAmount / data.initialAmount), (1 / data.duration)) - 1) * 100).toFixed(2)

    const data02 = [
        { name: "Initial Value", value: data.initialAmount },
        { name: "Final Value", value: data.fianlAmount }
    ];
    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div>
            <Helmet>
                <title>CAGR Calculator</title>
                <meta name="description" content="Calculate the Compound Annual Growth Rate (CAGR) of your investments with our user-friendly CAGR Calculator. Simply input your initial investment, CAGR, and investment duration to predict future returns. Visualize your investment growth and make informed financial decisions today!" />
                <meta name="keywords" content="CAGR calculator, Compound Annual Growth Rate calculator, reverse CAGR calculator, investment calculator, financial planning, investment growth, future value calculator, investment analysis" />
            </Helmet>
            <div className="container">
                <h3 >CAGR (Compounded Annual Growth Rate) calculator</h3>
                <hr />

                <div className='mt-5'>
                    <h5>
                        Calculate Compound Annual Growth Rate (CAGR) Online
                    </h5>
                    <p className='text-secondary'>
                        Calculate Compound Annual Growth Rate (CAGR) effortlessly with our online tool. Input your initial investment, final investment, and duration to get accurate CAGR results instantly. Visualize your investment growth with our interactive pie chart feature.
                    </p>
                </div>
                <hr />

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div>
                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Initial Investment</label>
                                <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' step='1000' min={1000} max={1000000} name='initialAmount' value={data.initialAmount} onChange={inputHandler} color='success' />
                                </FormControl>
                            </div>
                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='initialAmount' value={data.initialAmount} onChange={inputHandler} step={1000} min={1000} max={1000000} />

                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Final Investment</label>
                                <FormControl sx={{ width: '125px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' step={1000} min={1000} max={1000000} value={data.fianlAmount} name='fianlAmount' onChange={inputHandler} />
                                </FormControl>
                            </div>
                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='fianlAmount' value={data.fianlAmount} onChange={inputHandler} step={1000} min={1000} max={1000000} />

                            <div className="d-flex justify-content-between mt-4">
                                <label htmlFor="" className='mt-1'>Duration of investment</label>
                                <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                                    <OutlinedInput
                                        id="filled-adornment-weight"
                                        endAdornment={<InputAdornment position="end">Year</InputAdornment>}
                                        aria-describedby="filled-weight-helper-text" type='number' min={1} max={40} name='duration' value={data.duration} onChange={inputHandler} />
                                </FormControl>
                            </div>
                            <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='duration' value={data.duration} onChange={inputHandler} min={1} max={40} />
                        </div>

                        <div className="mt-4 CAGR">
                            <h5>
                                CAGR is <span>{CAGR} %</span>
                            </h5>
                        </div>
                    </div>


                    <div className='col-md-6 mt-md-0 mt-4'>
                        <div className='text-center mt-3'>
                            <span className='AI'>Initial Value</span>
                            <span className='TG ms-5'>Final Value</span>
                        </div>
                        <PieChart width={300} height={250} className='chart'>
                            <Pie
                                data={data02}
                                // cx={190}
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
                        Welcome to YourWebsiteName's CAGR Calculator, the convenient tool designed to help you determine the Compound Annual Growth Rate of your investments. Whether you're an investor, business owner, or financial analyst, understanding CAGR is essential for assessing investment performance over time. With our user-friendly interface and intuitive design, calculating CAGR has never been simpler.
                    </p>
                    <h5>
                        How Our CAGR Calculator Works:
                    </h5>
                    <p className='text-secondary'>
                        Our CAGR calculator requires three simple inputs:
                    </p>

                    <p className='text-secondary'>
                        <span className='text-dark'>1. Initial Investment: </span> Enter the amount you initially invested.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>2. Final Investment: </span> Input the value of your investment at the end of the specified period.
                    </p>
                    <p className='text-secondary'>
                        <span className='text-dark'>3. Duration of Investment: </span>  Specify the duration of your investment in years.
                    </p>

                    <h5>
                        Get Instant Results:
                    </h5>
                    <p className='text-secondary'>
                        Once you've entered your data, our tool instantly calculates the Compound Annual Growth Rate, providing you with valuable insights into your investment's performance. No complex equations or manual calculations required – it's quick, accurate, and hassle-free.
                    </p>
                    <h5>
                        Visualize Your Investment Growth:
                    </h5>
                    <p className='text-secondary'>
                        In addition to CAGR results, our tool also generates a visually appealing pie chart that illustrates the proportion of your initial investment compared to the final investment. This graphical representation enhances your understanding of how your investment has grown over time.
                    </p>
                    <h5>
                        Why CAGR Matters:
                    </h5>
                    <p className='text-secondary'>
                        Compound Annual Growth Rate (CAGR) is a crucial metric for evaluating investment performance as it accounts for the effects of compounding. Unlike simple annual growth rates, CAGR provides a more accurate representation of the investment's true growth rate over multiple periods.
                    </p>
                    <h5>
                        Optimize Your Investment Strategy:
                    </h5>
                    <p className='text-secondary'>
                        By knowing your investment's CAGR, you can make informed decisions about your portfolio and adjust your investment strategy accordingly. Whether you're planning for retirement, analyzing business growth, or comparing investment options, CAGR empowers you to make smarter financial choices.
                    </p>

                    <h5>
                        Start Calculating Your CAGR Today:
                    </h5>
                    <p className='text-secondary'>
                        Ready to unlock the power of Compound Annual Growth Rate? Try our CAGR Calculator now and gain valuable insights into your investment's performance. Simply input your data, and let our tool do the rest. It's the ultimate solution for effortless CAGR calculations.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CAGRcal