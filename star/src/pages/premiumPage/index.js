import styled from "styled-components";
import premium1 from "../../images/premium1.jpg";
import premium2 from "../../images/premium2.jpg";
import premium3 from "../../images/premium3.jpg";
import premium4 from "../../images/premium4.jpg";
import premium5 from "../../images/premium5.jpg";
import premium6 from "../../images/premium6.jpg";

const PremiumPage = () => {
  return (
    <Wrapper>
      <Title>PREMIUM6</Title>
      <Img src={premium1} alt="premium1" />
      <Img src={premium2} alt="premium2" />
      <Img src={premium3} alt="premium3" />
      <Img src={premium4} alt="premium4" />
      <Img src={premium5} alt="premium5" />
      <Img src={premium6} alt="premium6" />
      <TextBox>
        <Text>
          ※ 본 홈페이지의 위치도 등은 소비자의 이해를 돕기 위해 제작된 것으로,
          실제와 차이가 날 수 있습니다.
        </Text>
        <Text>
          ※ 위치도 등 상기 개발 및 교통 배정 등의 계획에 대한 사항은 추후 관계
          기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을
          알려드립니다.
        </Text>
        <Text>
          ※ 계약 전에 반드시 입주자 모집공고, 견본주택, 현장, 관계 기관에
          확인하시기 바랍니다.
        </Text>
        <Text>
          ※ 상기 이미지와 내용의 각종 시설(학교, 도로망 등)은 지구단위계획의
          변경, 허가관청 및 국가시책에 따라 변경될 수 있습니다.
        </Text>
        <Text>
          ※ 청라국제도시역 9호선 직결 관련 내용은 '인천광역시 2023년 11월 17일
          보도자료'를 참고하였습니다.
        </Text>
        <Text>
          ※ 하나금융타운 관련 내용은 '인천경제자유구역 2022년 2월 16일
          보도자료'를 참고하였습니다.
        </Text>
        <Text>
          ※ 청라돔구장역 및 청라국제업무지구역 관련 내용은
          '대도시권광역교통위원회고시 제2024-04호'를 참고하였습니다.
        </Text>
        <Text>
          ※ 스타필드 청라 관련 내용은 '인천광역시 2022년 8월 24일 보도자료'를
          참고하였습니다.
        </Text>
        <Text>
          ※ 의료복합타운 및 통합 초중교 신설 관련 내용은 '산업통상자원부고시
          제2022-212호'를 참고하였습니다.
        </Text>
        <Text>
          ※ 코스트코 청라 관련 내용은 '인천경제자유구역 2023년 6월 21일
          보도자료'를 참고하였습니다.
        </Text>
      </TextBox>
    </Wrapper>
  );
};

export default PremiumPage;

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.brown};
  font-size: 40px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin: 40px;
`;

const Img = styled.img`
  margin: 40px;
`;

const TextBox = styled.div`
  margin: 0 auto;
  width: 1200px;
  text-align: left;
  background-color: #f5f5f5;
`;

const Text = styled.p`
  margin-bottom: 24px;
  color: #696969;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
`;
