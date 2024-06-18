import React, { PropsWithChildren, Component } from 'react';
// import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}
class ModalContainer extends Component {
  render() {
    return <div className='w-full h-full flex items-center justify-center fixed'></div>;
  }
}
// const ModalContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
// `;
class DialogBox extends Component {
  render() {
    return (
      <div className='z-1000 w-[400px] h-[200] flex flex-col border-0.5 border-solid border-black rounded-[3px] box-border bg-white fixed'></div>
    );
  }
}
// const DialogBox = styled.dialog`
//   width: 400px;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   border: none;
//   border-radius: 3px;
//   box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
//   box-sizing: border-box;
//   background-color: white;
//   border: 0.5px solid black;
//   z-index: 10000;
// `;
interface Backdropprops {
  onClick?: (e: React.MouseEvent) => void;
}
function Backdrop(prop: Backdropprops) {
  return <div className='z-999 w-screen h-screen top-0 bg-black fixed'></div>;
}
// const Backdrop = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
//   background-color: rgba(0, 0, 0, 0.2);
// `;

export default Modal;
