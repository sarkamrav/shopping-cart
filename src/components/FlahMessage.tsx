import React, { useEffect } from 'react';
import styled from 'styled-components';

interface FlashMessageProps {
  message: string;
  duration?: number;
  onClose: () => void;
  index: number;
}

const FlashMessageContainer = styled.div<{ index: number }>`
  position: fixed;
  top: ${(props) => 10 + props.index * 60}px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

const FlashMessage: React.FC<FlashMessageProps> = ({ message, duration = 1500, onClose, index }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <FlashMessageContainer index={index}>
      {message}
      <CloseButton onClick={onClose}>×</CloseButton>
    </FlashMessageContainer>
  );
};

export default FlashMessage;
