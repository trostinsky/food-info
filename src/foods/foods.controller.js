import {Link} from "react-router-dom";
import {getCalories} from "../utils/getCalories";
import {FoodItem, Foods} from "./foods.view";
import {useState} from "react";
import FoodInfoController from "./foodInfo.controller";
import {RenderIf} from "../common/renderIf";

const FoodItemController = ({ proteins, fats, carbs, title, onClick, selected }) => (
    <FoodItem.Wrapper onClick={onClick} selected={selected}>
        <FoodItem.Title>{title}</FoodItem.Title>
        <FoodItem.Details>
            {getCalories({ proteins, fats, carbs })} ккал,
            Б {proteins.toFixed(2)} г,
            Ж {fats.toFixed(2)} г,
            У {carbs.toFixed(2)} г
        </FoodItem.Details>
    </FoodItem.Wrapper>
);

const FoodsList = ({ foods }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const onSelectFood = (index, event) => setSelectedIndex(index);
    const selectedFood = foods.find((food, index) => selectedIndex === index)
    return (
        <Foods.Wrapper>
            <Foods.InnerWrapper>
                {foods.map((food, index) => (
                    <FoodItemController {...food}
                                        selected={selectedIndex === index}
                                        onClick={onSelectFood.bind(this, index)}
                    />
                ))}
            </Foods.InnerWrapper>
            <Foods.InnerWrapper>
                <RenderIf condition={selectedFood}>
                    <FoodInfoController {...selectedFood} />
                </RenderIf>
            </Foods.InnerWrapper>
        </Foods.Wrapper>
    )
};
export default FoodsList;
