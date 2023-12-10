// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyLogo, currencyName, euroValue, id, usdValue} = currencyItem

  return (
    <li className="list-item-container" key={id}>
      <div className="currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-log" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
