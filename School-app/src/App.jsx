import { useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
	return (
		<div className='App'>
			<Table striped>
				<thead>
					{data.map((item) => (
						<tr>
							<th>{item.name}</th>
							<th>{item.age}</th>
						</tr>
					))}
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default App;
