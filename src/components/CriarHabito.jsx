import React, { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const CriarHabito = ({
  habitName,
  days,
  onSave,
  onCancel,
  onHabitNameChange,
  onDaysChange,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDayClick = (day) => {
    if (days.includes(day)) {
      onDaysChange(days.filter((d) => d !== day));
    } else {
      onDaysChange([...days, day]);
    }
  };

  const handleSave = () => {
    if (habitName.trim()) {
      setLoading(true);
      onSave(habitName);
    }
  };

  const daysOfWeek = [
    { label: "D", value: 0 },
    { label: "S", value: 1 },
    { label: "T", value: 2 },
    { label: "Q", value: 3 },
    { label: "Q", value: 4 },
    { label: "S", value: 5 },
    { label: "S", value: 6 },
  ];

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="Nome do hábito"
        value={habitName}
        onChange={(e) => onHabitNameChange(e.target.value)}
        disabled={loading}
      />
      <DaysContainer>
        {daysOfWeek.map((day) => (
          <DayButton
            key={day.value}
            selected={days.includes(day.value)}
            onClick={() => handleDayClick(day.value)}
            disabled={loading}
          >
            {day.label}
          </DayButton>
        ))}
      </DaysContainer>
      <ButtonContainer>
        <CancelButton onClick={onCancel} disabled={loading}>
          Cancelar
        </CancelButton>
        <SaveButton onClick={handleSave} disabled={loading}>
          {loading ? (
            <ThreeDots color="#FFFFFF" height={20} width={20} />
          ) : (
            "Salvar"
          )}
        </SaveButton>
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLogin};
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.unfocused};
  border-radius: 5px;
  color: ${(props) =>
    props.disabled ? props.theme.colors.disabledText : props.theme.colors.text};
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.disabledBox : "transparent"};

  &::placeholder {
    color: ${(props) =>
      props.disabled
        ? props.theme.colors.disabledText
        : props.theme.colors.unfocused};
  }
  font-size: 20px;
`;

const DaysContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.colors.unfocused};
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.disabledBox : "transparent"};
  color: ${(props) =>
    props.selected ? "white" : props.theme.colors.unfocused};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 23px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  font-weight: 400;
  line-height: 19.97px;
  text-align: center;
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  padding: 7px 17px;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const SaveButton = styled.button`
  padding: 7px 17px;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary};
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CriarHabito;
