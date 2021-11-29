export const getCalories = ({fats, proteins, carbs}) => {
    return +(4 * proteins + 9 * fats + 4 * carbs).toFixed(2);
}
