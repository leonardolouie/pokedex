import React from 'react';
import Modal from 'react-modal';

interface Props {
    modalIsOpen: boolean;
    onCloseModal?: () => void;
    contentLabel?: string;
    children?: React.ReactNode;
}

const ModalComp: React.FC<Props> = ({ modalIsOpen, onCloseModal, contentLabel, children }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onCloseModal}
            contentLabel={contentLabel}
        >
            {children}
        </Modal>
    )
}

export default ModalComp
