import { FC } from "react";
import styled from "styled-components";

const StyledTableTitle = styled.div`
align-self: center;
width: 100%;
display: flex;
flex-direction: column;
    .title {
        align-self: center;
        width: 95%;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        h3 {
            width: 245px;
        }
    }
    hr {
        margin: 5px 0;
        border: 1px solid #d6dbdc;
    }
`
interface IProps {}

const TableTitle:FC<IProps> = () => {
    return (
        <StyledTableTitle>
            <div className="title">
                <h3>Name</h3>
                <h3>Price USD</h3>
                <h3>Circulating Supply</h3>
                <h3>Market Cap</h3>
                <h3>Category</h3>
                {/* <h3>From ATH</h3> */}
                {/* <h3>To ATH</h3> */}
            </div>
            <hr/>
        </StyledTableTitle>
    )
}

export default TableTitle;