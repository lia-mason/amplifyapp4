import React, { useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from "styled-components"
import { Button, TextField, Container, Grid, Card, CardContent, Typography, Slider } from '@material-ui/core'
import { StylesProvider, makeStyles  } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Editable from '../editable'
import Link from 'next/link'



const useStyles = makeStyles((theme) => ({
  todoList: {
    textAlign:'left',
  backgroundColor: 'transparent',
    color:'#8673FF',
  borderRadius: '4px',
  maxWidth: '400px',
  padding: '5px'
  },
    todo :{
      textAlign:'left',
  alignItems: 'left',
  background: '#fff', 
  color:'#8673FF',
  backgroundColor:'8673FF',
  borderRadius: '3px',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  fontSize: '12px',
  justifySontent: 'space-between',
  marginBottom: '6px',
  padding: '3px 10px'
}
    }
))

const Content = styled.div`
  && {
    margin: 0 3% 0 3%;
  }
`
const Name = styled.h2`
  && {
    font-size: 20px;
    position: absolute;
    left: 0;
    color: black;
  }
`
const Next = styled(Button)`
  && {
    margin-top: 15px;
    font-size: 20px;
    text-transform: none;
    position: absolute;
    right: 0;
    color: black;
  }
`
const Subtitle = styled.p`
  && {
    font-size: 10px;
    position: absolute;
    left: 0;
    padding-top: 35px;
    color: black;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 10px;
`
const Headerline = styled.hr`
  && {
    //width: 100%;
    margin-bottom: 20px;
    border: 1px solid #F2F2F2;
  }
`
const Widget1 = styled(Card)`
  && {
    //width: 100%;
    text-align: center;
    //margin: 3px 0px 3px 0px;
    //padding-right: 10px;
    //padding-left: 10px;
    //padding: 0 5px 0 5px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const Widget2 = styled(Card)`
  && {
    width: 100%;
    min-height: 60vh;
    text-align: center;
    margin: 3px 0px 3px 0px;
    //padding: 0 5px 0 5px;
    margin-top: 15px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const Widget3 = styled(Card)`
  && {
    min-height: 55vh;
    text-align: center;
    margin-top: 15px;
    margin: 3px 8px 3px 8px;
    padding: 0 5px 0 5px;
    h3 {
      margin-top: 0px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    h4 {
      margin-top: 0px;
      font-size: 11px;
      color: #8A8A8A;
    }
    p {
      font-size: 18px;
      color: #8A8A8A;
    }
  }
`
const FiveYearGoal = styled.div`
  && {
    text-align: left;
    background-color: white;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    ul {
      list-style-type: disc;
      padding-left: 25px;
    }
    li {
      color: black;
      font-size: 11px;
      margin: 5px 0 5px 0;
    }
  }
`
const ProgressDiv = styled.div`
  && {
    text-align: left;
    background-color: white;
    padding: 10px 10px 10px 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
`
const Progress = styled(LinearProgress)`
  && {
    width: 80%;
    display: inline-block;
    //margin-left: 10px;
    margin-right: 10px;
    background-color: #F2F2F2;
    color: white;
    bar-root: {
      background-color: white,
    }
  }
`
const SliderBar = styled(Slider)`
  && {
    display: inline-block;
    value-label-display: auto;
    margin-right: 10px;
    background-color: #F2F2F2;
    track: white;
    :&MuiSlider: {
        thumb:{
        color: "yellow",
        },
        track: {
          color: 'red'
        },
        rail: {
          color: 'black'
        }
      }
  }
`
const PrimaryGoal = styled.text`
  && {
    color: #FF9900;
    font-size: 12px;
    margin-bottom: 2px;
  }
`
const SecondaryGoal = styled.text`
  && {
    color: #8673FF;
    font-size: 12px;
    margin-bottom: 2px;
  }
`
const InputField = styled(TextField)`
  && {
      &.focused fieldset {
        border: 2px solid #6EB257;
      }
      .MuiOutlinedInput-root.Mui-focused fieldset {
        border: 2px solid #8A8A8A;
      }
  }
`



function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
      <div
          className="todo"
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text} 
       
        <div style={{marginTop:'5px',marginBottom:'5px'}}>
          <button onClick={() => completeTodo(index)}>Done</button><button style={{color:'8673FF'}} onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            style={{marginTop:'20px'}}
        />
      </form>
  );
}


const Home = () => {

  const classes = useStyles();
  
  const [task, setTask] = useState("");

  
  const [todos, setTodos] = React.useState([
    {
      text: "Drink Water :)",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    }
  ]);
  
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const [value1, setValue1] = React.useState(30);
  const [value2, setValue2] = React.useState(10);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);
  const [value5, setValue5] = React.useState(100);
  const [value6, setValue6] = React.useState(0);
  const [value7, setValue7] = React.useState(50);
  const [value8, setValue8] = React.useState(0);
  const [value9, setValue9] = React.useState(20);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  const handleChange3 = (event, newValue) => {
    setValue3(newValue);
  };

  const handleChange4 = (event, newValue) => {
    setValue4(newValue);
  };

  const handleChange5 = (event, newValue) => {
    setValue5(newValue);
  };

  const handleChange6 = (event, newValue) => {
    setValue6(newValue);
  };

  const handleChange7 = (event, newValue) => {
    setValue7(newValue);
  };

  const handleChange8 = (event, newValue) => {
    setValue8(newValue);
  };

  const handleChange9 = (event, newValue) => {
    setValue9(newValue);
  };

  const events = [{ title: "today's event", date: new Date() }];

  return (
    <Content>
      <StylesProvider injectFirst>
      <Head>
        <title>lifemapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header> 
        <span>
          <Name>john smith</Name>
          <Subtitle>week's productivity: 85%</Subtitle>
        </span>
        <h1>lifemapp</h1>
        <span>
        <Link href="/">
          <Next>&#8594;</Next>
        </Link>
        </span>
      </Header>
      <Headerline></Headerline>
        <div>
          <Grid container direction="row" justify="center" alignItems="baseline" spacing={2}>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#FFECD0"}}>
                <CardContent>
                  <h3>personal mission</h3>
                  {/* <p>brief powerful statement that inspires and guides you on your path through life.</p> */}
                  <Editable
                    style={{color: "#8A8A8A", fontSize: "18px", paddingTop:"10px"}}
                    text={task}
                    placeholder="brief powerful statement that inspires and guides you on your path through life."
                    type="input"
                    >
                    <input
                        style={{borderRadius:"5px", color: "#8A8A8A", fontSize: "18px", paddingTop:"5px", paddingBottom:"5px"}}
                        type="text"
                        name="task"
                        placeholder="Your personal mission"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        onclick="this.style.color='white'"
                        InputProps={{
                            style: {
                                ":focus": "white",
                                color: "white",
                                borderRadius: "30px"
                            }
                        }}
                    />
                </Editable>
                </CardContent>
              </Widget1>
              <Widget2 style={{ backgroundColor: "#FFECD0" }}>
                  <CardContent>
                    <h3>5 year goals</h3>
                    <div style={{paddingTop:"10px"}}>
                      <FiveYearGoal>
                        <h4>MOST IMPORTANT</h4>
                        <ul>
                          <li>a very important goal</li>
                          <li>another very important goal</li>
                          <li>something you really want</li>
                        </ul>
                      </FiveYearGoal>
                      <FiveYearGoal>
                        <h4>IMPORTANT</h4>
                        <ul>
                          <li>a important goal</li>
                          <li>another important goal</li>
                          <li>something you want</li>
                        </ul>
                      </FiveYearGoal>
                      <FiveYearGoal>
                        <h4>LESS IMPORTANT</h4>
                        <ul>
                          <li>something nice to achieve</li>
                          <li>another nice-to-have</li>
                          <li>something you kinda want</li>
                        </ul>
                      </FiveYearGoal>
                    </div>
                  </CardContent>
                </Widget2>
            </Grid>
            <Grid item xs={3}>
              <Widget1 style={{ backgroundColor: "#FFECD0" }}>
                <CardContent>
                  <h3>2021 goals</h3>
                  <h4>YEARLY GOALS</h4>
                  <ProgressDiv>
                    <PrimaryGoal>goal number 1</PrimaryGoal>
                    <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value1} onChange={handleChange1} aria-labelledby="continuous-slider" />
                  </ProgressDiv>
                  <ProgressDiv>
                    <SecondaryGoal>goal number 2</SecondaryGoal>
                    <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value2} onChange={handleChange2} aria-labelledby="continuous-slider" valueLabelDisplay="auto"/>
                  </ProgressDiv>
                  <ProgressDiv>
                    <SecondaryGoal>goal number 3</SecondaryGoal>
                    <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value3} onChange={handleChange3} aria-labelledby="continuous-slider" />
                  </ProgressDiv>
                </CardContent>
              </Widget1>
              <Widget2 style={{ backgroundColor: "#FFECD0" }}>
                <CardContent>
                  <h3>today's tasks</h3>
                  <h4>DAILY TO-DO'S</h4>
                    <div className="app">
                    <div className={classes.todoList}>
                      {todos.map((todo, index) => (
                          <Todo
                              key={index}
                              index={index}
                              todo={todo}
                              completeTodo={completeTodo}
                              removeTodo={removeTodo}
                              className={classes.todo}
                          />
                      ))}
                      <TodoForm addTodo={addTodo} />
                    </div>
                  </div>
                </CardContent>
              </Widget2>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row" justify="center" alignItems="baseline" spacing={2}>
                <Grid item xs={6}>
                  <Widget1 style={{ backgroundColor: "#FFECD0" }}>
                    <CardContent>
                      <h3>Q1 (jan-mar)</h3>
                      <h4>QUARTERLY GOALS</h4>
                      <ProgressDiv>
                        <PrimaryGoal>goal number 1</PrimaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value4} onChange={handleChange4} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 2</SecondaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value5} onChange={handleChange5} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 3</SecondaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value6} onChange={handleChange6} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                    </CardContent>
                  </Widget1>
                </Grid>
                <Grid item xs={6}>
                  <Widget1 style={{ backgroundColor: "#FFECD0" }}>
                    <CardContent>
                      <h3>january</h3>
                      <h4>MONTHLY GOALS</h4>
                      <ProgressDiv>                    
                        <PrimaryGoal>goal number 1</PrimaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value7} onChange={handleChange7} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 2</SecondaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value8} onChange={handleChange8} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                      <ProgressDiv>
                        <SecondaryGoal>goal number 3</SecondaryGoal>
                        <Slider valueLabelDisplay="auto" style={{color: "#8A8A8A"}} value={value9} onChange={handleChange9} aria-labelledby="continuous-slider" />
                      </ProgressDiv>
                    </CardContent>
                  </Widget1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="baseline" spacing={2} style={{paddingTop:"5px"}}>
                  <Grid item xs={12}>
                    <Widget3 style={{ backgroundColor: "#FFECD0" }}>
                      <CardContent>
                        <h3>week's schedule</h3>
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=MmFtOXV0Z2g4ZXIzN2NndThrb2hrdHB2MmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26" styles={{border:"solid 1px #777", paddingTop:"10px"}} width="100%" height="400" scrolling="no"></iframe>
                      </CardContent>
                    </Widget3>
                  </Grid>
                </Grid>
              </Grid>
              </Grid>
          </Grid>
        </div>
      </StylesProvider>
    </Content>
  )
}

export default Home
