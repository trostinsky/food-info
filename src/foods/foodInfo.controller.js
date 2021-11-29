import {FoodInfo} from "./foods.view";
import {Input} from "../common/input";
import {useState} from "react";
import {getCalories} from "../utils/getCalories";

const CCAL_NORM = 1500;
const PROTEINS_NORM = 92;
const FATS_NORM = 67;
const CARBS_NORM = 140;

const Line = ({value, normValue, weight, label, point = ''}) => {
    const percentage = +(value * weight / normValue).toFixed(2);
    return (
        <FoodInfo.LineWrapper>
            <FoodInfo.Calories.Wrapper>
                <FoodInfo.Calories.Title>
                    {label}
                </FoodInfo.Calories.Title>
                <FoodInfo.Calories.Value>
                    {value.toFixed(2)} {point}
                </FoodInfo.Calories.Value>
            </FoodInfo.Calories.Wrapper>
            <FoodInfo.Line percentage={percentage} />
            <FoodInfo.Percentage>
                {percentage}%
            </FoodInfo.Percentage>
        </FoodInfo.LineWrapper>
    )
}

const FoodInfoController = ({proteins, fats, carbs, title}) => {
    const [weight, setWeight] = useState(100);
    const ccal = getCalories({proteins, fats, carbs}) * weight / 100;
    return (
        <FoodInfo.Wrapper>
            <FoodInfo.Title>
                {title}
            </FoodInfo.Title>
            <Input label={"Количество"}
                   value={weight}
                   points={'г'}
                   onChange={(event) => setWeight(event.target.value)}
            />
            <FoodInfo.Title>
                Макронутриенты
            </FoodInfo.Title>
            <Line label="Калории"
                  value={ccal}
                  normValue={CCAL_NORM}
                  weight={weight}
            />
            <Line label="Белки"
                  value={proteins}
                  normValue={PROTEINS_NORM}
                  weight={weight}
                  point={'г'}
            />
            <Line label="Жиры"
                  value={fats}
                  normValue={FATS_NORM}
                  weight={weight}
                  point={'г'}
            />
            <Line label="Углеводы"
                  value={carbs}
                  normValue={CARBS_NORM}
                  weight={weight}
                  point={'г'}
            />
        </FoodInfo.Wrapper>
    )
};
export default FoodInfoController;
