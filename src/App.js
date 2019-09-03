import React from "react";
import CardGen from "./components/Card/CardGen";
import { ThemeProvider } from "styled-components";

const theme = {
  border: "white",
  primary: {
    gradient: "green"
  },
  secondary: {
    gradient: "blue"
  }
};

const title = "Lorem ipsum dolor sit amet consectetur";
const desc =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae esse sed voluptas minima optio amet recusandae, earum necessitatibus perferendis soluta a aut pariatur rerum quia ab inventore et! Est ratione impedit ducimus, expedita veniam rem tempore cupiditate placeat doloribus suscipit accusamus! Perferendis reprehenderit dolorem ea doloribus est facilis molestias exercitationem.";
const img =
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CardGen title={title} desc={desc} image={img} />
      </ThemeProvider>
    </div>
  );
}

export default App;
