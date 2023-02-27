import { ICryptocurrency } from "@/types/types";
import { FC, ReactEventHandler } from "react";
import styled from "styled-components";

const StyledSelectCurrency = styled.select`
`
interface IProps {
    data: ICryptocurrency[],
    value: number,
    onChangeHandler: ReactEventHandler,
}

const SelectCurrency:FC<IProps> = ({ data, value, onChangeHandler }) => {
    return (
        <StyledSelectCurrency onChange={e => onChangeHandler(e)} value={value} >
            {data.map(currency => (
            <option
            key={currency.id}
            value={currency.id}
            >
              {currency.name}
            </option>
          ))}
        </StyledSelectCurrency>
    )
}

export default SelectCurrency;