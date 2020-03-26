import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    font: 400 14px "Roboto", sans-serif;
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }
  input, button, textarea{
    font: 400 18px "Roboto", sans-serif;
  }
  button{
    cursor: pointer;
  }
  form input{
    width: 100%;
    height: 60px;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
  form textarea{
    width: 100%;
    min-height: 160px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: none;
  }
  .button{
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(90%);
    }
  }
  a{
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414D;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
    &:hover{
      opacity: 0.8;
    }
    svg{
      margin-right: 8px;
    }
  }
`;