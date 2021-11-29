import FoodsList from "./foods/foods.controller";
import FoodInfo from "./foods/foodInfo.controller";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
`

const FOODS = [{
    title: "Гречневая каша",
    proteins: 4.182,
    fats: 1.095,
    carbs: 18.567
}, {
    title: "Куриная грудка",
    proteins: 23.6,
    fats: 1.9,
    carbs: 0.4
}, {
    title: "Авокадо",
    proteins: 2,
    fats: 14.66,
    carbs: 1.83
}];

const App = () => {
    return (
        <>
            <FoodsList foods={FOODS}/>}/>
            <GlobalStyle/>
        </>
    );
}

export default App;
