import React from "react";
import styled from "styled-components";
import background from "../../../assets/img/bg.png";

const StyledHeader = styled.div`
  background-image: url(${background});
`;

function Header(props) {
  return (
    <StyledHeader>
      <div>
        <div className="img">
          <img
            src="https://s.dou.ua/img/avatars/200x200_dscn0093-2.jpg"
            alt="Avatar of user"
          />
        </div>
        <div className="text">
          <h3>Шестопалов Владимир</h3>
          <h4>
            Sales Manager <span>28</span>
          </h4>
        </div>
      </div>
      <div>
        <button>Скачать резюме</button>
        <button>Редактировать профиль</button>
      </div>
    </StyledHeader>
  );
}

export default Header;
