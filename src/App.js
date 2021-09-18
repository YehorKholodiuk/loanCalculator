import { useState } from 'react';

function App() {

  const [report, setReport] = useState([])

  const [totalAmount, setTotalAmount] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [years, setYears] = useState(0)

  const onChangeTotalAmount = (e) => {
    setTotalAmount(e.target.value)
  };

  const onChangeDownPayment = (e) => {
    setDownPayment(e.target.value)
  };

  const onChangeYears = (e) => {
    const updatedYear = e.target.value
    setYears(updatedYear)

    const amountYear = (totalAmount - downPayment) / updatedYear;

    const newReport = [];
    let initialRestAmount = totalAmount - downPayment;
    for( let i = 1; i <= updatedYear; i++){
      initialRestAmount -= amountYear;
      newReport.push({ year: i, amountYear, rest: initialRestAmount })
    }
    setReport(newReport)
  };

  return (
      <div className="App">

        <label htmlFor="totalAmount">Total amount
          <input id="totalAmount" type="number" value={totalAmount} onChange={onChangeTotalAmount} />
        </label>

        <label htmlFor="downPayment">Down Payment
          <input id="downPayment" type="number" value={downPayment} onChange={onChangeDownPayment} />
        </label>

        <label htmlFor="years">Years
          <input id="years" type="number" value={years} onChange={onChangeYears} />
        </label>

        <hr />

        Total Amount: {totalAmount} <br/>
        Down Payment: {downPayment} <br/>
        Credit: {totalAmount - downPayment} <br/>
        Down payment in percent: {(downPayment / totalAmount * 100).toFixed(2)} <br/>


        <table border={1}>
          <thead>
          <tr>
            <th>Year</th>
            <th>Amount</th>
            <th>Rest amount</th>
          </tr>
          </thead>

          <tbody>

          {
            report.map(el =>
                <tr key={el.year}>
                  <td>{el.year}</td>
                  <td>{el.amountYear}</td>
                  <td>{el.rest}</td>
                </tr>
            )
          }


          </tbody>
        </table>

      </div>
  );
}

export default App;