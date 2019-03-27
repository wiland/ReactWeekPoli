import React, {Fragment, useState} from 'react'

const ExpenseInput = (props) => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "value":
        setValue(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      default:
        break;
    }
    
  }

  return (
    <Fragment>
      <h4>Add expense/income</h4>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="exp-inc" className="form-control" id="name" placeholder="Expense/Income Name" name="name" onChange={handleInputChange} value={name} />
        </div>
        <div className="form-group">
          <label htmlFor="expense-income">Value</label>
          <input type="exp-inc" className="form-control" id="expense-income" placeholder="Value" name="value" onChange={handleInputChange} value={value} />
        </div>
        <div className="btn-group w-100" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-danger">Add expense</button>
          <button type="button" className="btn btn-success">Add income</button>
        </div>
      </form>
    </Fragment>
  )
}

export default ExpenseInput
