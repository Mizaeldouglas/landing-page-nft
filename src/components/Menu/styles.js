import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 23px;
`;
export const AreaMenu = styled.div`
  
`;
export const AreaMenuText = styled.div`
	display: flex;

	a{
		padding:0 30px 0 0;
		cursor: pointer;
	}
`;
export const Logo = styled.p`
	font-weight: 500;
	font-size: 25px;
	line-height: 32px;
	color: #E5E5E5;
`;
export const InputSearch = styled.input`

  width: 282px;
  height: 30px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  padding-left: 10px;
  color: #fff;
`;
export const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
  background: linear-gradient(85.76deg, rgba(191, 196, 238, 0.0945738) -105.02%, #C367E6 10.94%, rgba(190, 206, 239, 0) 121.57%);
  border: none ;
  cursor: pointer;
`;