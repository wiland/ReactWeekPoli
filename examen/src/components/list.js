import React from 'react'
import Grade from './grade';

export default function List(props) {
  return (
    <div className="mb-4 mt-4 w-100">
      <h4 className="text-center">LISTADO</h4>
      <table className="table table-hover w-100">
        <thead>
          <tr>
            <th scope="col">Alumno</th>
            <th scope="col">Nota</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {props.grades.map(grade => <Grade key={grade.userId} grade={grade} />)}
        </tbody>
      </table>
      </div>
  )
}
