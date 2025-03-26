import ExpenseTracker from "./services/ExpenseTracker";
import { Category } from "./models/Category";

const tracker = new ExpenseTracker();
tracker.addExpense("Кава", 50, Category.Food);
tracker.addExpense("Метро", 20, Category.Transport);
tracker.viewExpenses();
console.log("Загальна сума витрат:", tracker.totalExpenses());
console.log("Витрати на транспорт:", tracker.filterByCategory(Category.Transport));