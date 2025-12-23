import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background-color: white;
    padding: 30px 20px;
    border-radius: 5px;
`

export const Input = styled.input`
    display: inline-flex;
    border-radius: 5px;
    border: 2px solid rgba(173, 173, 173, 0.4);
    padding: 11px 164px 11px 20px;
    align-items: center;
    margin-right: 20px;

    &:hover{
        border: 2px solid rgba(132, 132, 132, 0.4);
    }
`

export const Button = styled.button`
    color: white;
    height: 40px;
    width: 130px;
    padding: 10px 0;
    gap: 23px;
    border-radius: 5px;
    background: #8052EC;
    border: none;
    cursor: pointer;
    transition: 300ms all ease;
    font-weight: 900;
    font-size: 17px;


    &:hover{
        background: #6e3be4ff;
        transform: scale(1.05);
    }

`

