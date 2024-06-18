import styled, { keyframes } from "styled-components";
import popupImg from "../images/popupImg.jpg";
import { ReactComponent as XIcon } from "../images/icons/x.svg";

const Popup = ({ setIsPopup }) => {
  const onClosePopup = () => {
    setIsPopup(false);
  };

  return (
    <Wrapper>
      <PopupCloseDiv onClick={onClosePopup}>
        <XIcon width={"25px"} height={"25px"} />
      </PopupCloseDiv>
      <Img src={popupImg} alt="popupImg" />
    </Wrapper>
  );
};

export default Popup;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
  animation: ${slideIn} 0.6s ease-out forwards;
`;

const Img = styled.img`
  width: 450px;
  height: auto;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    width: 400px;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    width: 350px;
  }
`;

const PopupCloseDiv = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.COLORS.tan};
  padding: 6px;
  height: auto;

  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.COLORS.brown};

  cursor: pointer;

  @media ${({ theme }) => theme.DEVICE.tablet} {
    padding: 4px;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    padding: 2px;
  }
`;
