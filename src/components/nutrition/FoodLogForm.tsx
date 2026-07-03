import { useState } from "react";
import { Plus } from "lucide-react";
import { useAppStore } from "../../lib/appStore";
import { todayISO } from "../../lib/dateUtils";
import { Button } from "../ui/Button";

export function FoodLogForm() {
  const { addFoodLog } = useAppStore();
  const [foodName, setFoodName] = useState("");
  const [mealType, setMealType] = useState("Lunch");
  const [calories, setCalories] = useState(500);
  const [proteinG, setProteinG] = useState(35);
  const [carbsG, setCarbsG] = useState(60);
  const [fatG, setFatG] = useState(14);

  return (
    <form
      className="form-grid"
      onSubmit={(event) => {
        event.preventDefault();
        if (!foodName.trim()) return;
        addFoodLog({
          id: crypto.randomUUID(),
          date: todayISO(),
          mealType,
          timeEaten: new Date().toTimeString().slice(0, 5),
          foodName,
          servingSize: "Manual entry",
          calories,
          proteinG,
          carbsG,
          fatG,
          notes: "",
          wasAiRecommended: false
        });
        setFoodName("");
      }}
    >
      <label>Food<input value={foodName} onChange={(e) => setFoodName(e.target.value)} placeholder="Turkey sandwich" /></label>
      <label>Meal<select value={mealType} onChange={(e) => setMealType(e.target.value)}><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Snack</option></select></label>
      <label>Calories<input type="number" value={calories} onChange={(e) => setCalories(Number(e.target.value))} /></label>
      <label>Protein<input type="number" value={proteinG} onChange={(e) => setProteinG(Number(e.target.value))} /></label>
      <label>Carbs<input type="number" value={carbsG} onChange={(e) => setCarbsG(Number(e.target.value))} /></label>
      <label>Fat<input type="number" value={fatG} onChange={(e) => setFatG(Number(e.target.value))} /></label>
      <Button><Plus size={16} /> Log food</Button>
    </form>
  );
}
