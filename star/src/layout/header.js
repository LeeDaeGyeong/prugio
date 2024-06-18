import styled from "styled-components";
import logo from "../images/logo.png";
import { ReactComponent as MenuIcon } from "../images/icons/menu.svg";
import { ReactComponent as XIcon } from "../images/icons/x.svg";
import { flexCenter } from "../styles/common.style";
import { useNavigate } from "react-router-dom";
import { usePrugio } from "../context";

const Header = () => {
  const navigate = useNavigate();

  const { isMobileMenuBar, setIsMobileMenuBar } = usePrugio();

  const navList = [
    { navName: "사업개요", navParam: "overview" },
    { navName: "입지환경", navParam: "environment" },
    { navName: "프리미엄6", navParam: "premium" },
    { navName: "관심고객등록", navParam: "registration" },
  ];

  const onMenuBarOpen = () => {
    setIsMobileMenuBar((prev) => !prev);
  };

  const onGoHome = () => {
    navigate("/");
  };

  const onGoNavigate = (list) => {
    navigate(`/${list}`);
  };

  const onGoMobileNavigate = (list) => {
    navigate(`/${list}`);
    setIsMobileMenuBar((prev) => !prev);
  };

  return (
    <>
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
        <MenuBar onClick={onMenuBarOpen}>
          {!isMobileMenuBar ? <MenuIcon /> : <XIcon />}
        </MenuBar>
      </Wrapper>
      <MenuBarListWrapper>
        {isMobileMenuBar && (
          <MobileNavList>
            {navList.map((list, index) => (
              <MobileNavItem
                key={index}
                onClick={() => onGoMobileNavigate(list.navParam)}
              >
                {list.navName}
              </MobileNavItem>
            ))}
          </MobileNavList>
        )}
      </MenuBarListWrapper>
    </>
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

  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 120px;
    height: auto;
  }
`;

const NavList = styled.ul`
  ${flexCenter}
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: none;
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
  @media ${({ theme }) => theme.DEVICE.mobile} {
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
  }
`;

// ---- 모바일 메뉴바 스타일
const MenuBar = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.DEVICE.mobile} {
    display: block;
  }
`;

const MenuBarListWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.primary.basic};
`;

const MobileNavList = styled.ul`
  ${flexCenter}
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

const MobileNavItem = styled.li`
  width: 100%;
  padding: 12px 16px;
  margin: 0 20px;
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  border: 2px solid transparent;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.brown};

  &:hover {
    color: ${({ theme }) => theme.COLORS.brown};
    cursor: pointer;
  }

  @media ${({ theme }) => theme.DEVICE.tablet} {
    margin: 8px 0;
  }
`;
