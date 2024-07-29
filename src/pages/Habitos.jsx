import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import Header from "../components/Header";
import CriarHabito from "../components/CriarHabito";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import { ThreeDots } from "react-loader-spinner";

const Habitos = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [habitName, setHabitName] = useState("");
  const [days, setDays] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        setHabits(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar hábitos:", error);
        setLoading(false);
      });
  }, [user.token]);

  const handleAddHabitClick = () => {
    setIsCreating(true);
  };

  const handleSaveHabit = (habitName, days) => {
    console.log(`Hábito criado: ${habitName} com dias: ${days}`);
    setIsCreating(false);
    setLoading(true);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { name: habitName, days: days },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then(() => {
        axios
          .get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          )
          .then((response) => {
            setHabits(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Erro ao buscar hábitos:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Erro ao criar hábito:", error);
        alert("Erro ao criar hábito. Tente novamente.");
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setIsCreating(false);
  };

  const handleHabitNameChange = (name) => {
    setHabitName(name);
  };

  const handleDaysChange = (selectedDays) => {
    setDays(selectedDays);
  };

  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <>
      <Header />
      <HabitContainer>
        <AddHabit>
          <Title>Meus hábitos</Title>
          <AddButton onClick={handleAddHabitClick}>
            <AddIcon />
          </AddButton>
        </AddHabit>
        {isCreating && (
          <CriarHabito
            habitName={habitName}
            days={days}
            onSave={(habitName) => handleSaveHabit(habitName, days)}
            onCancel={handleCancel}
            onHabitNameChange={handleHabitNameChange}
            onDaysChange={handleDaysChange}
          />
        )}
        {loading ? (
          <LoadingContainer>
            <ThreeDots color="#52B6FF" height={80} width={80} />
          </LoadingContainer>
        ) : habits.length === 0 ? (
          <NoHabitsMessage>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoHabitsMessage>
        ) : (
          <HabitList>
            {habits.map((habit) => (
              <HabitItem key={habit.id}>
                <HabitName>{habit.name}</HabitName>
                <HabitDays>
                  {daysOfWeek.map((day, index) => (
                    <HabitDay key={index} selected={habit.days.includes(index)}>
                      {day}
                    </HabitDay>
                  ))}
                </HabitDays>
              </HabitItem>
            ))}
          </HabitList>
        )}
      </HabitContainer>
      <Footer />
    </>
  );
};

const HabitContainer = styled.div`
  padding-top: 115px;
  background-color: ${(props) => props.theme.colors.background};
  padding-left: 20px;
  padding-right: 20px;
  height: calc(
    100vh - 115px - 65px
  ); /* Ajustar a altura considerando o header e o footer */
  overflow-y: auto; /* Permitir scroll se o conteúdo for maior que a altura disponível */
`;

const AddHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: "Lexend Deca", sans-serif;
  font-size: 22.98px;
  font-weight: 400;
  line-height: 28.72px;
  text-align: left;
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NoHabitsMessage = styled.div`
  color: rgba(102, 102, 102, 1);
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.98px;
  font-weight: 400;
  line-height: 22.47px;
  text-align: left;
  margin-top: 20px;
`;

const HabitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HabitItem = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundLogin};
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const HabitName = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

const HabitDays = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

const HabitDay = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.colors.unfocused};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.disabledBox : "transparent"};
  color: ${(props) =>
    props.selected ? "white" : props.theme.colors.unfocused};
  font-family: "Lexend Deca", sans-serif;
`;

export default Habitos;
