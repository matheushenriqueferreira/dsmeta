import NotificationButton from "../NotificationButton";
import './styles.css'

const SalesCard = () => {
  return(
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <input type="text" className="dsmeta-form-control" />
        </div>
        <div className="dsmeta-form-control-container">
          <input type="text" className="dsmeta-form-control" />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">16/11/2022</td>
              <td className="show992">Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td className="show992">R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">16/11/2022</td>
              <td className="show992">Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td className="show992">R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">16/11/2022</td>
              <td className="show992">Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td className="show992">R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default SalesCard;