import NavBar from '@/components/NavBarLayout'
import SelectCurrency from '@/components/selectCurrency';
import { fetcher } from '@/helpers/fetcher';
import { IData } from '@/types/types';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

const StyledConverter = styled.div`
margin: 15px auto;
padding: 15px;
background-color: #fff;
width: 800px;
border-radius: 6px;
box-shadow: 5px 5px 5px #626262;
  input, label, select {
    margin: 15px;
    width: 250px;
  }
  h1 {
    margin: 15px;
  }
`

export default function Home() {
  const [amount, setAmount] = useState<number>(1);
  const [selectCurrencyId, setSelectCurrencyId] = useState<number>(1);
  const [inUSD, setInUSD] = useState(true);
  const {data} = useSWR<IData>('https://api.cryptorank.io/v1/currencies?api_key=23b88741f9ca3ae0ffd9652f1e0a840fab4a5bb515b7ebe9b33350a37fc1', fetcher);

  const selectChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    setSelectCurrencyId(+e.target.value)
  }

  const selectCurrency = useMemo(() => {
    return data?.data.find(item => item.id === selectCurrencyId);
  }, [selectCurrencyId])

  const roundSum = (num:number) => {
    if (num > 999) {
      return Math.round(num);
    } else {
      return Math.round(num * 100) / 100;
    }
  }

  return (
    <NavBar headTitle='Converter'>
      <StyledConverter>
        <input type='number' onChange={(e) => setAmount(+e.target.value)} value={amount} id='amount' />
        <label htmlFor='amount' >Amount</label>
        <br/>
        {inUSD && data? (
          <SelectCurrency
          data={data?.data}
          onChangeHandler={selectChangeHandler}
          value={selectCurrencyId}
          />
        ) : (
          <select>
            <option>United States Dollar (USD)</option>
          </select>
        )}
        <button onClick={() => setInUSD(!inUSD)} >{'<>'}</button>
        {!inUSD && data? (
          <SelectCurrency
          data={data?.data}
          onChangeHandler={selectChangeHandler}
          value={selectCurrencyId}
          />
        ) : (
          <select>
            <option>United States Dollar (USD)</option>
          </select>
        )}
        <br/>
        {selectCurrency &&
        (inUSD ? (
          <h1>{amount} {selectCurrency?.symbol} = {roundSum(amount * selectCurrency?.values.USD.price)} USD</h1>
        ) : (
          <h1>{amount} USD = {(amount / +selectCurrency?.values.USD.price.toFixed(3)).toFixed(6)} {selectCurrency?.symbol}</h1>
        ))}
      </StyledConverter>
    </NavBar>
  )
}
