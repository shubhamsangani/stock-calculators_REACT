import React, { useState, useCallback } from 'react'
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Tooltip, PieChart, Pie, Cell, Sector } from 'recharts';
import { Helmet } from 'react-helmet';


function ReverseCAGR() {
    const [data, setData] = useState({
        initialAmount: 100000,
        CAGR: 10,
        duration: 10,
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

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

    let FV = Math.round(data.initialAmount * Math.pow((data.CAGR / 100) + 1, (data.duration)))

    const data02 = [
        { name: "Initial Value", value: data.initialAmount },
        { name: "Final Value", value: FV }
    ];
    const COLORS = ["#0088FE", "#00C49F"];

    return (
        <div>
            <div>
                <Helmet>
                    <title>Reverse CAGR Calculator</title>
                    <meta name="description" content="Calculate the future value of your investments with our Reverse CAGR Calculator. Input your initial investment, Compound Annual Growth Rate (CAGR), and investment duration to see projected returns." />
                    <meta name="keywords" content="Reverse CAGR Calculator, CAGR calculator, Compound Annual Growth Rate calculator, investment calculator, future value calculator, financial planning tool, investment tool, calculate investment returns" />
                </Helmet>

                <div className="container">
                    <h3 >Reverse CAGR calculator</h3>
                    <hr />

                    <div className='mt-5'>
                        <h5>
                            Welcome to Our Reverse CAGR Calculator Tool
                        </h5>
                        <p className='text-secondary'>
                            Welcome to our Website, your go-to destination for financial planning tools! Our Reverse CAGR Calculator is designed to empower you with valuable insights into your investments. Whether you're a seasoned investor or just starting out, understanding the Compound Annual Growth Rate (CAGR) and its implications on your investments is crucial. With our user-friendly tool, you can effortlessly calculate the future value of your investments based on your initial investment, CAGR, and investment duration.
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
                                    <label htmlFor="" className='mt-1'>CAGR</label>
                                    <FormControl sx={{ width: '125px' }} variant="outlined" color='success'>
                                        <OutlinedInput
                                            id="filled-adornment-weight"
                                            endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                            aria-describedby="filled-weight-helper-text" type='number' min={1} max={100} value={data.CAGR} name='CAGR' onChange={inputHandler} />
                                    </FormControl>
                                </div>
                                <Slider className='mt-3' color='success' aria-label="Default" valueLabelDisplay="auto" name='CAGR' value={data.CAGR} onChange={inputHandler} step={1} min={1} max={100} />

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
                                    Future Value is <span>₹ {comma(FV)}</span>
                                </h5>
                            </div>
                        </div>

                        <div className='col-md-6 mt-4 mt-md-0'>
                            <div className='text-center mt-3'>
                                <span className='AI'>Initial Value</span>
                                <span className='TG ms-5'>Final Value</span>
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

                        <h5>
                            How Does It Work?
                        </h5>
                        <p className='text-secondary'>
                            Using our Reverse CAGR Calculator is simple and intuitive. Just input your initial investment amount, the Compound Annual Growth Rate (CAGR), and the duration of your investment. Our tool will instantly crunch the numbers and provide you with the future value of your investment. It's that easy!
                        </p>
                        <h5>
                            Why Use Our Reverse CAGR Calculator?
                        </h5>

                        <p className='text-secondary'>
                            <span className='text-dark'>1. Accuracy: </span> Our calculator employs advanced algorithms to ensure accurate calculations, giving you confidence in your financial decisions.
                        </p>
                        <p className='text-secondary'>
                            <span className='text-dark'>2. Time-Saving: </span> Say goodbye to manual calculations and complex spreadsheets. With just a few clicks, you'll have all the information you need at your fingertips.
                        </p>
                        <p className='text-secondary'>
                            <span className='text-dark'>3. Visualization: </span>  Visualizing your investment journey is key to understanding its growth trajectory. Our tool generates a comprehensive pie chart illustrating the breakdown of your initial investment versus the final value, providing valuable insights at a glance.
                        </p>

                        <h5>
                            Empower Your Financial Planning
                        </h5>
                        <p className='text-secondary'>
                            Whether you're planning for retirement, saving for a major purchase, or evaluating investment opportunities, our Reverse CAGR Calculator is your trusted companion. Armed with precise data and clear visualizations, you can make informed decisions to achieve your financial goals.
                        </p>
                        <h5>
                            Get Started Today
                        </h5>
                        <p className='text-secondary'>
                            Ready to unlock the power of compounding growth? Try our Reverse CAGR Calculator now and take control of your financial future. Have questions or feedback? Feel free to reach out to our team—we're here to help you every step of the way.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReverseCAGR