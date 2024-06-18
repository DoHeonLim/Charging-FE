import { useState, useCallback, Component } from 'react';
// import styled from 'styled-components';
import Modal from './Modal';
function Base() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Main>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <ModalTitle>
            <h1>모달 </h1>
          </ModalTitle>
          <ModalContents>
            <p>모달 내용입니다. 잘부탁드려요</p>
          </ModalContents>
          <CloseButton
            onClick={() => {
              setOpenModal(!isOpenModal);
            }}
          >
            Close
          </CloseButton>
        </Modal>
      )}
      <DialogButton onClick={onClickToggleModal}>Open Modal</DialogButton>
    </Main>
  );
}
class Main extends Component {
  render() {
    return <div className='w-full h-screen flex items-center flex-col'></div>;
  }
}
// const Main = styled.main`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
class ModalTitle extends Component {
  render() {
    return <div className='text-orange-600 mt-[30px] text-[32px] '></div>;
  }
}
class ModalContents extends Component {
  render() {
    return <div className='text-orange-600 mt-[30px] text-[32px] '></div>;
  }
}
// const ModalTitle = styled.div`
//   color: orange;
//   margin-top: 30px;
//   font-size: 32px;
// `;
// const ModalContents = styled.div`
//   color: orange;
//   margin-top: 10px;
//   font-size: 18px;
// `;
interface DialogButtonprops {
  children?: React.ReactNode;
  onClick?: Function;
}
function DialogButton(prop: DialogButtonprops) {
  return (
    <div className='w-[160px] h-[48px] bg-blue-600 text-white text-[1.2rem] rounded-[50px] border-none mt-[200px]'></div>
  );
}
// const DialogButton = styled.button`
//   width: 160px;
//   height: 48px;
//   background-color: cornflowerblue;
//   color: white;
//   font-size: 1.2rem;
//   font-weight: 400;
//   border-radius: 50px;
//   border: none;
//   margin-top: 200px;
//   cursor: pointer;
// `;
interface CloseButtonprops {
  children?: React.ReactNode;
  onClick?: Function;
}
function CloseButton(prop: CloseButtonprops) {
  return (
    <div className='r-[20px] b-[10px] absolute text-[18px]bg-blue-600 px-[5px] py-[20px] text-gray-600  border-solid'></div>
  );
}
// const CloseButton = styled.button`
//   background: none;
//   color: gray;
//   border: 2px solid;
//   padding: 5px 20px;
//   font-size: 18px;
//   transition:
//     color 0.2s,
//     border-color 1s,
//     transform 0.5s;
//   position: absolute;
//   bottom: 10px;
//   right: 20px;

//   cursor: pointer;

//   &:hover {
//     border-color: black;
//     color: black;
//     box-shadow: 0 0.5em 0.5em -0.4em;
//     transform: translateY(-5px);
//     cursor: pointer;
//   }
// `;

export default Base;
