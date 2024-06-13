import styled from "styled-components";
import logo from "../images/logo.png";
import { flexCenter } from "../styles/common.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navList = [
    { navName: "사업개요", navParam: "overview" },
    { navName: "입지환경", navParam: "environment" },
    { navName: "프리미엄6", navParam: "premium" },
    { navName: "관심고객등록", navParam: "registration" },
  ];

  const onGoHome = () => {
    navigate("/");
  };

  const onGoNavigate = (list) => {
    navigate(`/${list}`);
  };

  return (
    <Wrapper>
      <LogoImg src={logo} alt="logo" onClick={onGoHome} />
      <NavList>
        {navList.map((list, index) => (
          <NavItem key={index} onClick={() => onGoNavigate(list.navParam)}>
            {list.navName}
          </NavItem>
        ))}
      </NavList>
      <CallNumber href="tel:1800-7065">1800-7065</CallNumber>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${flexCenter}
  justify-content: space-around;
  width: 100%;
  height: 110px;
  background-color: ${({ theme }) => theme.COLORS.primary.basic};

  @media ${({ theme }) => theme.DEVICE.tablet} {
    height: auto;
    padding: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoImg = styled.img`
  width: 190px;
  height: 60px;
  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-bottom: 12px;
  }
`;

const NavList = styled.ul`
  ${flexCenter}
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  padding: 12px 16px;
  margin: 0 20px;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  transition: color 0.3s ease, border 0.3s ease;
  border: 2px solid transparent;
  border-radius: 12px;

  &:hover {
    color: ${({ theme }) => theme.COLORS.brown};
    border: 2px solid ${({ theme }) => theme.COLORS.brown};
    cursor: pointer;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin: 8px 0;
  }
`;

const CallNumber = styled.a`
  color: ${({ theme }) => theme.COLORS.brown};
  font-size: ${({ theme }) => theme.FONT_SIZE.extraLarge};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  border: 2px solid ${({ theme }) => theme.COLORS.brown};
  border-radius: 12px;
  padding: 12px 20px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin-top: 12px;
  }
`;
