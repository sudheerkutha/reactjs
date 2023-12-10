// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {dataList: [], isLoading: true}

  componentDidMount() {
    this.getListData()
  }

  getListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(item => ({
      currencyLogo: item.currency_logo,
      currencyName: item.currency_name,
      euroValue: item.euro_value,
      id: item.id,
      usdValue: item.usd_value,
    }))

    this.setState({dataList: formattedData, isLoading: false})
  }

  render() {
    const {dataList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="app-body">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <div className="convertor-box-container">
              <div className="box-nav-container">
                <p className="nav-name">Coin Type</p>
                <div className="nav-name-container">
                  <p className="nav-name">USD</p>
                  <p className="nav-name">EURO</p>
                </div>
              </div>
              <ul className="data-list-item">
                {dataList.map(eachItem => (
                  <CryptocurrencyItem
                    currencyItem={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
