import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Helmet } from 'react-helmet';

function Lumpsum() {
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

  let ExpAmnt, AmntInv, TotalGain, monthlyreturn;

  monthlyreturn = (Number(data.return)) / 100
  ExpAmnt = Math.round(Number(data.amount) * (Math.pow((1 + monthlyreturn), Number(data.period))))
  AmntInv = (Number(data.amount))
  TotalGain = Math.round(ExpAmnt - (Number(data.amount)))

  const data02 = [
    { name: "Amount Invested", value: AmntInv },
    { name: "Total Gain", value: ExpAmnt - AmntInv }
  ];
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div>
      <div>
        <Helmet>
          <title>Lumpsum Calculator</title>
          <meta name="description" content="Calculate the future value of your lump sum investment with our easy-to-use Lumpsum Calculator. Simply input your initial investment amount and expected interest rate to see how your money will grow over time." />
          <meta name="keywords" content="lump sum calculator, lump sum investment, investment calculator, future value calculator, lump sum growth, lump sum ROI" />
        </Helmet>

        <div className="container">
          <h3>Lumpsum calculator</h3>
          <hr />

          <div className='mt-5'>
            <h5>
              Welcome to Our Lumpsum Calculator Tool
            </h5>
            <p className='text-secondary'>
              Are you planning your investments and seeking clarity on the potential returns from a lump sum investment? Look no further! Our Lumpsum Calculator is designed to provide you with precise insights into your investment journey, empowering you to make informed financial decisions.
            </p>
          </div>
          <hr />

          <div className='row mt-5'>

            <div className='col-lg-4'>
              <div>
                <div className="d-flex justify-content-between mt-4">
                  <label htmlFor="" className='mt-1'>Total Investment</label>
                  <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                    <OutlinedInput
                      id="filled-adornment-weight"
                      startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                      aria-describedby="filled-weight-helper-text" type='number' name='amount' value={data.amount} onChange={inputHandler} />
                  </FormControl>
                </div>
                <Slider color='success' className='mt-3' aria-label="Default" valueLabelDisplay="auto" name='amount' value={data.amount} onChange={inputHandler} step={500} min={500} max={1000000} />


                <div className="d-flex justify-content-between mt-4">
                  <label htmlFor="" className='mt-1'>Investment Period</label>
                  <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                    <OutlinedInput
                      id="filled-adornment-weight"
                      endAdornment={<InputAdornment position="end">Year</InputAdornment>}
                      aria-describedby="filled-weight-helper-text" type='number' min={1} max={40} value={data.period} name='period' onChange={inputHandler} />
                  </FormControl>
                </div>
                <Slider color='success' className='mt-3' aria-label="Default" valueLabelDisplay="auto" name='period' value={data.period} onChange={inputHandler} min={1} max={40} />


                <div className="d-flex justify-content-between mt-4">
                  <label htmlFor="" className='mt-1'>Expected return rate (p.a)</label>
                  <FormControl sx={{ width: '120px' }} variant="outlined" color='success'>
                    <OutlinedInput
                      id="filled-adornment-weight"
                      endAdornment={<InputAdornment position="end">%</InputAdornment>}
                      aria-describedby="filled-weight-helper-text" type='number' min={1} max={30} name='return' value={data.return} onChange={inputHandler} />
                  </FormControl>
                </div>
                <Slider color='success' className='mt-3' aria-label="Default" valueLabelDisplay="auto" name='return' value={data.return} onChange={inputHandler} min={1} max={30} />

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

            <h5>
              Understanding Our Lumpsum Calculator:
            </h5>
            <p className='text-secondary'>
              Our Lumpsum Calculator simplifies the complexities of investment calculations into three straightforward input fields:
            </p>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Total Amount: </span> Enter the lump sum amount you intend to invest.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Investment Period: </span> Specify the duration of your investment horizon.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Expected Return: </span> Estimate the anticipated return rate on your investment.
            </p>

            <h5>
              How Our Calculator Works:
            </h5>
            <p className='text-secondary'>
              Once you input your data, our advanced algorithm swiftly processes the information to generate comprehensive results, including:
            </p>
            <p className='text-secondary'>
              <span className='text-dark'>1. Expected Amount: </span> Discover the projected value of your investment at the end of the specified period.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'>2. Total Gain: </span> Gain insights into the total profit accrued from your investment over the chosen period.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'>3. Amount Invested: </span>  Gain clarity on the total amount invested throughout the investment duration.
            </p>

            <h5>
              Visualize Your Investment Journey:
            </h5>
            <p className='text-secondary'>
              Our tool doesn't stop at numbers; it provides visual aids to enhance your understanding. With an intuitive pie chart representation, you can easily visualize the distribution of your investment amount versus your total gains, fostering a deeper comprehension of your financial landscape.
            </p>

            <h5>
              Why Choose Our Lumpsum Calculator:
            </h5>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Accuracy: </span> Our calculator employs robust algorithms to ensure precision in your investment projections.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> User-Friendly: </span> With a simple interface, our tool caters to users of all proficiency levels, making financial planning accessible to everyone.
            </p>
            <p className='text-secondary'>
              <span className='text-dark'><i className="fa-solid fa-circle fa-2xs"></i> Informative: </span> Gain valuable insights into your investment potential and make well-informed decisions to secure your financial future.
            </p>

            <h5>
              Optimize Your Financial Strategy Today:
            </h5>
            <p className='text-secondary'>
              Don't leave your investment decisions to chance. Use our Lumpsum Calculator to chart a path towards financial prosperity with confidence and clarity. Start exploring now and unlock the power of informed investing!
            </p>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Lumpsum