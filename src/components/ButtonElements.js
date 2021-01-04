import styled from 'styled-components'
export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary})=>(primary ? "#0D74E7" : "#010606")};
    white-space: nowrap;
    padding: ${({big})=>(big ? "14px 48px" : "12px 30px")};
    color: ${({dark})=>(dark ? "#010606" : "#fff")};
    font-size: ${({fontBig})=>(fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: ${({primary})=>(primary ? "#fff" :"#0D74E7")}; 

    }
`;