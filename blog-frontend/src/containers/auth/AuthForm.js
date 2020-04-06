import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { palette } from "../../lib/styles/palette";
import Button from "../common/Button";

const ErrorMessege= styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top:1rem;
`;

const AuthForm=({type, form, onChange, onSubmit})=>{
    const text= textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete="username" name="username" placeholder={onChange} value={form.username}/>
                <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password} />
                {type ==='register'&&<StyledInput autoComplete="new-password" name="passwordConfirm" type="password" onChange={onChange} value={form.passwordConfirm} />}
                <ErrorMessege>에러</ErrorMessege>
                <ButtonWithMarginTop cyan fullWidth style={{marginTop:'1rem'}}>{text}</ButtonWithMarginTop>

            </form>
            <Footer>
                {type==='login'?(
                    <Link to ="/register">회원가입</Link>
                    
                ):(<Link to="/login">로그인</Link>)}

            </Footer>
        </AuthFormBlock>
    )
}
export default AuthForm;