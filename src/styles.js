import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';

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

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    display: inline-flex;
    border-radius: 5px;
    border: 2px solid rgba(173, 173, 173, 0.4);
    padding: 11px 164px 11px 20px;
    align-items: center;
    margin-right: 20px;
    width: 200px;

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

export const ListItem = styled.div`
    color: #000;
    border-radius: 5px;
    background: ${ props => props.isFinished ? '#E8FF8B' : '#e4e4e4'};
    box-shadow: 1px 4px 10px 0 rgba(0, 0, 0, 0.20);
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 20px;
    width: 500px;


    li {
        list-style: none;
    }


`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    transition: 300ms all ease;

    &:hover {
        transform: scale(1.3);
    }

    &:active {
        transform: scale(1.8);
    }
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
    transition: 300ms all ease;

    &:hover {
        transform: scale(1.3);
    }

    &:active {
        transform: scale(1.7);
    }
`