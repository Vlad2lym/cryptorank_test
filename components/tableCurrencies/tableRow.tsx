import { FC } from 'react';
import { ICryptocurrency } from "@/types/types";
import styled from "styled-components";

const StyledTableRow = styled.div`
align-self: center;
width: 100%;
display: flex;
flex-direction: column;
    .row {
        align-self: center;
        width: 95%;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        p {
            width: 245px;
        }
    }
    hr {
        margin: 15px 0;
        border: 1px solid #d6dbdc;
    }
`
interface IProps {
    data: ICryptocurrency,
}

const TableRow:FC<IProps> = ({ data }) => {
    function marketCapSupplyRound (num:number) {
        if (num > 1e12) {
            return (Math.round(num / 1e10)) / 100 + 'T';
        } else if (num > 1e9) {
            return (Math.round(num / 1e7)) / 100 + 'B';
        } else if (num > 1e6) {
            return (Math.round(num / 1e4)) / 100 + 'M';
        } else if (num > 1e3) {
            return (Math.round(num / 1e1)) / 100 + 'K';
        } else {
            return num;
        }
    }

    function priceRound (price:number) {
        if (price > 100) {
            return Math.round(price);
        } else {
            const result = Math.round(price * 100) / 100;
            return result === 0 ? price.toFixed(6) : result;
        }
    }

    return (
        <StyledTableRow>
            <div className="row">
                <p><span style={{color: '#2185d0'}}>{data.name}</span> {data.symbol}</p>
                <p>$ {priceRound(data.values.USD.price)}</p>
                <p>{data.symbol}  {marketCapSupplyRound(data.circulatingSupply)}</p>
                <p>$  {marketCapSupplyRound(data.values.USD.marketCap)}</p>
                <p>{data.category}</p>
            </div>
            <hr/>
        </StyledTableRow>
    )
}

export default TableRow;