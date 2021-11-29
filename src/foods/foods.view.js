import styled from "styled-components";

const COLORS_MAP = {
    success: "#58d66a",
    fail: "#ed6963",
    default: "#cebe2b"
}
const HEIGHT_MAP = {
    default: 30,
    small: 14
}
export const Line = styled.div`
  height: ${(props) => HEIGHT_MAP[props.size] || HEIGHT_MAP.default}px;
  background-color: #f1f2f3;
  width: 300px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 10px;
  ${(props) => `
    &::after{
        border-radius: 5px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${props.percentage * 100}%;
        background-color: ${COLORS_MAP[props.type] || COLORS_MAP.default};
    }
  `}
`;

export const Foods = {
    Wrapper: styled.div`
      height: 100vh;
      display: flex;
      width: 100%;
    `,
    InnerWrapper: styled.div`
      height: 100%;
      padding: 4px 8px;
      width: 50%;
      flex: 1;

      &:first-child {
        border-right: 1px solid #d6d9dc;
      }
    `
}

export const FoodItem = {
    Wrapper: styled.div`
      border-bottom: 1px solid #d6d9dc;
      padding-top: 8px;
      padding-bottom: 8px;
      cursor: pointer;
      background-color: ${(props) => props.selected ? '#f3f3f3' : '#fff'};

      &:hover {
        background-color: #F1F2F3;
      }
    `,
    Title: styled.p`
      font-weight: bold;

    `,
    Details: styled.p`
      color: #a7acb1;
      font-size: 13px;
      line-height: 16px;
      margin-top: 2px;
    `
}

export const FoodInfo = {
    Wrapper: styled.div``,
    Title: styled.p`
      font-weight: 600;
      font-size: 16px;
      line-height: 21.8px;
      margin-bottom: 20px;
      margin-top: 20px;
    `,
    LineWrapper: styled.div`
      display: flex;
      align-items:center;
      height: 30px;
      margin-bottom: 20px;
    `,
    Calories: {
        Wrapper: styled.div`
          font-size: 13px;
          line-height: 13px;
          text-align: right;
          width: 90px;
          height: 30px;
          padding-right: 5px;
        `,
        Title: styled.p`

        `,
        Value: styled.p`
          color: #36467e;
          font-size: 14px;
          line-height: 15px;
          font-weight: 600;
        `
    },
    Line: styled.div`
      background-color: #f1f2f3;
      width: 100%;
      border-radius: 5px;
      position:relative;
      height: 100%;
      &::after{
        max-width: 100%;
        border-radius: 5px;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${(props) => 80 * (props.percentage / 100)}%;
        background-color: ${(props) => {
            return (props.percentage < 100 &&
                  props.percentage > 50) ? `#14de7e` : '#ff7676'
        }};
      }
    `,
    Percentage: styled.span`
      width: 80px;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      padding-left: 5px;
      text-align: right;
      color: #36467e;
    `
}
