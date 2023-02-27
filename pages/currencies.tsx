import NavBar from "@/components/NavBarLayout";
import TableRow from "@/components/tableCurrencies/tableRow";
import TableTitle from "@/components/tableCurrencies/tableTitle";
import { fetcher } from "@/helpers/fetcher";
import { ICryptocurrency, IData } from "@/types/types";
import styled from "styled-components";
import useSWR from 'swr';

const StyledTableCurrencies = styled.div`
margin: 30px auto;
display: flex;
flex-direction: column;
background-color: #fff;
box-shadow: 5px 5px 5px #626262;
border-radius: 6px;
width: 1300px;
`

export default function Currencies () {
    const {data} = useSWR<IData>('https://api.cryptorank.io/v1/currencies?api_key=23b88741f9ca3ae0ffd9652f1e0a840fab4a5bb515b7ebe9b33350a37fc1', fetcher);

    function fromATH (ATH:number, price:number) {
        const change = price - ATH;
        const result = change / ATH * 100;
        return Math.round(result * 100) / 100;
    }

    function toATH (ATH:number, price:number) {
        const change = ATH - price;
        const result = change / price * 100;
        return Math.round(result * 100) / 100;
    } 

    return (
        <NavBar>
            <StyledTableCurrencies>
                <TableTitle />
                {data?.data.map(currencie => <TableRow key={currencie.id} data={currencie} /> )}
            </StyledTableCurrencies>
        </NavBar>
    )
}