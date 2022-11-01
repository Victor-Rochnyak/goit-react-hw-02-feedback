import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: 10px;
border-radius: 5px;
border: 1px solid rgba(14, 185, 190, 0.925);
transition: all 250ms ease 0s;
width: 60px;
height: 30px;
background-color: rgb(223 145 31);
&:first-of-type{
  background-color: #45d358;
}
&:last-child{
  background-color: red;
}
 
&:hover{
  color: rgb(255, 255, 255);
    background: linear-gradient( 281deg, rgb(225 180 19) 0%, rgb(209 170 31) 100% );
    box-shadow: rgb(0 0 0) 0px 2px 7px;
}
&:hover:first-of-type{
  color: rgb(255, 255, 255);
    background: linear-gradient( 281deg, rgb(23 145 128) 0%, rgb(59 207 70) 100% );
    box-shadow: rgb(0 0 0 / 2) 0px 2px 7px;
}
&:hover:last-child{
  color: rgb(255, 255, 255);
    background: linear-gradient( 281deg, rgb(225 14 14) 0%, rgb(231 14 14) 100% );
    box-shadow: rgb(0 0 0) 0px 2px 7px;
}
`