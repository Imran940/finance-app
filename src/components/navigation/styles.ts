import styled from "styled-components";

const NavigationWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  padding: 5px 20px;
  .finance-logo {
    width: 80px;
    cursor: pointer;
  }
  .topbar-menu-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    .topbar-menu {
      display: flex;
      align-items: center;
      gap: 5%;
      font-size: 18px;
      cursor: pointer;
      .topbar-menu-icon {
        font-size: 21px;
      }
    }
    .topbar-menu:hover {
      color: #0373fc;
    }
  }
`;
export default NavigationWrapper;
