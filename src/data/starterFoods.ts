import type { FoodItem } from "../types/nutrition";

export const starterFoods: FoodItem[] = [
  { id: "chicken", name: "Chicken breast", servingSize: "6 oz cooked", calories: 280, proteinG: 52, carbsG: 0, fatG: 6, tags: ["lean protein"] },
  { id: "turkey", name: "Ground turkey", servingSize: "6 oz cooked", calories: 340, proteinG: 42, carbsG: 0, fatG: 18, tags: ["protein"] },
  { id: "eggs", name: "Eggs", servingSize: "3 large", calories: 210, proteinG: 18, carbsG: 1, fatG: 15, tags: ["breakfast"] },
  { id: "yogurt", name: "Greek yogurt", servingSize: "1 cup", calories: 160, proteinG: 23, carbsG: 9, fatG: 4, tags: ["snack", "protein"] },
  { id: "oats", name: "Oats", servingSize: "1 cup cooked", calories: 300, proteinG: 10, carbsG: 54, fatG: 6, fiberG: 8, tags: ["carbs"] },
  { id: "rice", name: "Rice", servingSize: "1.5 cups cooked", calories: 310, proteinG: 6, carbsG: 68, fatG: 1, tags: ["carbs"] },
  { id: "pasta", name: "Pasta", servingSize: "2 cups cooked", calories: 420, proteinG: 15, carbsG: 84, fatG: 2, tags: ["carbs"] },
  { id: "potatoes", name: "Potatoes", servingSize: "12 oz", calories: 290, proteinG: 8, carbsG: 66, fatG: 0, tags: ["carbs"] },
  { id: "banana", name: "Banana", servingSize: "1 large", calories: 120, proteinG: 1, carbsG: 31, fatG: 0, tags: ["pre-workout"] },
  { id: "pb", name: "Peanut butter", servingSize: "2 tbsp", calories: 190, proteinG: 8, carbsG: 7, fatG: 16, tags: ["fat"] },
  { id: "salmon", name: "Salmon", servingSize: "6 oz", calories: 360, proteinG: 39, carbsG: 0, fatG: 22, tags: ["protein"] },
  { id: "sandwich", name: "Turkey sandwich", servingSize: "1 sandwich", calories: 520, proteinG: 38, carbsG: 58, fatG: 15, tags: ["portable"] },
  { id: "shake", name: "Protein shake", servingSize: "1 shake", calories: 260, proteinG: 32, carbsG: 22, fatG: 5, tags: ["recovery"] },
  { id: "bar", name: "Protein bar", servingSize: "1 bar", calories: 240, proteinG: 20, carbsG: 25, fatG: 7, tags: ["portable"] },
  { id: "bagel", name: "Bagel", servingSize: "1 bagel", calories: 290, proteinG: 10, carbsG: 58, fatG: 2, tags: ["pre-workout"] },
  { id: "milk", name: "Chocolate milk", servingSize: "16 oz", calories: 360, proteinG: 18, carbsG: 58, fatG: 8, sodiumMg: 300, tags: ["recovery"] },
  { id: "trail", name: "Trail mix", servingSize: "1/2 cup", calories: 350, proteinG: 10, carbsG: 35, fatG: 21, tags: ["snack"] },
  { id: "bowl", name: "Burrito bowl", servingSize: "1 bowl", calories: 760, proteinG: 45, carbsG: 92, fatG: 22, fiberG: 14, sodiumMg: 980, tags: ["dining hall"] },
  { id: "smoothie", name: "Smoothie", servingSize: "24 oz", calories: 520, proteinG: 35, carbsG: 76, fatG: 10, tags: ["recovery"] }
];
