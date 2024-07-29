import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ThreeDots } from "react-loader-spinner";
import CheckIcon from "@mui/icons-material/Check";

const Hoje = () => {
  const [habits, setHabits] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHabits();
  }, [user.token]);

  const fetchHabits = () => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
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
        console.error("Erro ao buscar hábitos de hoje:", error);
        setLoading(false);
      });
  };

  const getCurrentDate = () => {
    const today = new Date();
    const formattedDate = format(today, "EEEE, dd/MM", { locale: ptBR });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const toggleHabit = (habitId, done) => {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/${
      done ? "uncheck" : "check"
    }`;
    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        fetchHabits();
      })
      .catch((error) => {
        console.error("Erro ao atualizar hábito:", error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Title>{getCurrentDate()}</Title>
        {loading ? (
          <LoadingContainer>
            <ThreeDots color="#52B6FF" height={80} width={80} />
          </LoadingContainer>
        ) : habits.length === 0 ? (
          <NoHabitsMessage>
            Você não tem nenhum hábito para hoje. Adicione um hábito para
            começar a trackear!
          </NoHabitsMessage>
        ) : (
          <HabitList>
            {habits.map((habit) => (
              <HabitItem key={habit.id}>
                <HabitDetails>
                  <HabitName>{habit.name}</HabitName>
                  <HabitSequences>
                    <Sequence>
                      Sequência atual: {habit.currentSequence} dias
                    </Sequence>
                    <Record>Seu recorde: {habit.highestSequence} dias</Record>
                  </HabitSequences>
                </HabitDetails>
                <CheckButton
                  done={habit.done}
                  onClick={() => toggleHabit(habit.id, habit.done)}
                >
                  <CheckIcon fontSize="large" />
                </CheckButton>
              </HabitItem>
            ))}
          </HabitList>
        )}
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  padding-top: 115px;
  background-color: ${(props) => props.theme.colors.background};
  padding-left: 20px;
  padding-right: 20px;
  height: calc(
    100vh - 115px - 65px
  ); /* Ajustar a altura considerando o header e o footer */
  overflow-y: auto; /* Permitir scroll se o conteúdo for maior que a altura disponível */
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-family: "Lexend Deca", sans-serif;
  font-size: 22.98px;
  font-weight: 400;
  line-height: 28.72px;
  margin-bottom: 20px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HabitDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const HabitName = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

const HabitSequences = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 12.98px;
  font-weight: 400;
  line-height: 16.22px;
  text-align: left;
  margin-top: 5px;
`;

const Sequence = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

const Record = styled.div`
  color: ${(props) => props.theme.colors.text};
`;

const CheckButton = styled.button`
  width: 68px;
  height: 68px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.done ? "rgba(143, 197, 73, 1)" : props.theme.colors.disabled};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

export default Hoje;
