# Athlete Nutrition AI Web App — Product Spec & Build Instructions

## 1. Product Overview

### Working Name
**FuelIQ Athlete**  
Alternative names: **FuelForm**, **AthleteFuel AI**, **MacroCoach AI**, **Performance Plate**

### Core Concept
Build a web-based AI nutrition platform designed primarily for high-level athletes. The app analyzes user data such as body weight, nutrition logs, hydration, training schedule, sleep, soreness, recovery, and performance metrics to determine whether the athlete is progressing toward their stated goal.

The app should not simply track food. Its primary value is helping athletes understand whether their current nutrition, hydration, recovery, and training habits are supporting their performance goals.

### Main Product Win
The app’s biggest win is:

> **AI analyzes an athlete’s body metrics, schedule, nutrition habits, training demands, and progress data to determine whether the athlete is on track toward their goal, then recommends what to eat, when to eat, how much to hydrate, and how to adjust recovery in real time.**

This should feel like a personal sports nutrition assistant, not a generic calorie tracker.

---

## 2. Primary Target User

### Primary Audience
The first version should be directed mainly at **high-level athletes**.

Examples:
- College athletes
- High school athletes pursuing college opportunities
- Competitive travel/team athletes
- Strength athletes
- Endurance athletes
- Athletes balancing practice, lifts, class, travel, games, and recovery

### Secondary Audience
A future version may serve general users who want to lose weight or get healthier, but V1 should focus on athletes first.

### Athlete User Goals
The app should support athletes who want to:
- Gain lean muscle
- Lose fat while maintaining performance
- Maintain weight during season
- Improve recovery
- Improve energy levels
- Improve hydration
- Fuel properly before and after training
- Avoid under-eating during high-volume training
- Track body weight trends
- Track performance-related nutrition habits
- Better understand what nutrition choices are helping or hurting progress

---

## 3. Product Positioning

### Differentiation
Most nutrition apps focus on calorie counting. This app should focus on **performance-aware nutrition coaching**.

The app should answer questions like:
- Am I eating enough to support my training?
- Am I gaining or losing weight at the right rate?
- Should I increase or decrease calories?
- Am I getting enough protein?
- Am I timing carbs correctly around training?
- Am I hydrating enough for my training load?
- What should I eat before a lift, class, practice, or game?
- What should I eat if my schedule changes?
- What should I do if I missed a meal?
- What foods should I swap if I dislike something?
- Am I recovering well enough?

### Tone
The app should feel:
- Smart
- Fast
- Organized
- Athlete-focused
- Encouraging
- Practical
- Educational
- Clean and premium

Avoid making the app feel medical, overly clinical, or like a basic calorie tracker.

---

## 4. V1 Scope

### Must-Have V1 Features

#### Account System
- User registration
- User login
- User profile
- Persistent user data
- Secure account-based access

Recommended backend: **Supabase free tier**.

#### Onboarding Survey
When a user creates an account, they should complete a survey that helps the AI understand their goals and preferences.

Onboarding should collect:
- Name
- Age
- Height
- Weight
- Sex
- Sport
- Position/event, if applicable
- Training level
- Main goal
- Goal weight, if applicable
- Desired rate of weight change
- Current training schedule
- Typical daily schedule
- Meal frequency preference
- Food allergies
- Dietary restrictions
- Foods liked
- Foods disliked
- Foods the user wants to avoid
- Budget level
- Cooking ability
- Access to dining hall, kitchen, meal prep, restaurants, etc.
- Supplements currently used
- Sleep habits
- Hydration habits
- Injury/recovery notes, optional

The onboarding should be broken into multiple clean steps instead of one long form.

#### Dashboard
The dashboard should show the athlete’s current status at a glance.

Dashboard cards should include:
- Today’s goal status
- Current body weight trend
- Calories target vs actual
- Protein target vs actual
- Carbs target vs actual
- Fat target vs actual
- Hydration target vs actual
- Training schedule for the day
- AI performance nutrition insight
- Recommended next meal
- Recovery recommendation

#### Schedule-Based Nutrition Planning
The user should be able to enter their schedule for the day.

Schedule item examples:
- Lift
- Practice
- Game
- Class
- Work
- Travel
- Sleep
- Recovery session
- Study hall
- Meal window

The app should recommend:
- Best times to eat
- What type of meal/snack to eat
- Pre-workout fueling
- Post-workout recovery nutrition
- Hydration timing
- Carb timing
- Protein distribution throughout the day

#### Food Recommendations
The AI should recommend meals and snacks based on:
- User goal
- Training schedule
- Macro targets
- Food preferences
- Foods disliked
- Foods previously rejected
- Allergies
- Dietary restrictions
- Budget
- Cooking ability
- Available meal prep situation
- Time of day
- Upcoming training demands

#### Macro Breakdown
For each meal recommendation, show:
- Estimated calories
- Protein
- Carbs
- Fat
- Fiber, if available
- Sodium, if available
- Hydration relevance, if applicable
- Why the meal was recommended

#### Food Logging
Users should be able to log food manually.

Food log fields:
- Food name
- Meal type
- Time eaten
- Calories
- Protein
- Carbs
- Fat
- Serving size
- Notes
- Whether this was recommended by the app

The first version can use a simple built-in food database plus manual entry.

#### AI Nutrition Coach
The app should include a chat or assistant panel where users can ask questions such as:
- What should I eat before my lift?
- I missed breakfast. What should I do?
- I feel low energy today. What should I change?
- Am I eating enough protein?
- Why am I not gaining weight?
- What should I eat after practice?
- Give me a dining hall-friendly meal.
- Replace this meal because I do not like eggs.

#### Food Preference Memory
The app should remember food dislikes.

If a user removes a food from their meal plan because they do not like it, the app should:
- Ask whether they want to avoid this food in the future
- Save that food to the user’s dislike/avoid list if confirmed
- Avoid recommending that food again
- Suggest alternatives with similar nutritional value

Example:
If the app recommends Greek yogurt and the user removes it, the app should learn that the user may dislike Greek yogurt and suggest alternatives such as cottage cheese, protein smoothie, eggs, turkey, or a protein bar depending on user preferences.

#### Progress Tracking
The app should track:
- Body weight
- Calories consumed
- Protein consumed
- Carbs consumed
- Fat consumed
- Hydration
- Sleep hours
- Training intensity
- Soreness
- Energy level
- Recovery score
- Notes

The AI should use this data to determine whether the user is progressing toward their goal.

#### AI Progress Analysis
The AI should provide regular insights such as:
- “Your weight has been flat for 10 days while your goal is to gain weight. You may need to increase calories by 250–350 per day.”
- “You are consistently under your carb target on lift days. This may be hurting energy and recovery.”
- “Your protein intake is strong, but hydration has been low three days in a row.”
- “Your weight loss is faster than planned. Consider increasing calories slightly to protect performance.”

#### Education Layer
The app should educate users on:
- Why calories matter
- Why protein matters
- Why carbs are important for athletes
- Why fats matter
- Hydration needs
- Electrolytes
- Meal timing
- Pre-workout fueling
- Post-workout recovery
- Sleep and recovery
- Weight gain/loss rate
- Performance tradeoffs

The educational tone should be concise and practical.

#### Medical Disclaimer
Include a clear disclaimer:

> This app provides general nutrition and performance guidance. It is not medical advice and should not replace guidance from a doctor, registered dietitian, athletic trainer, or qualified healthcare professional.

---

## 5. Features to Avoid in V1

Do not build these in the first version:
- Paid subscription system
- Team/coach dashboard
- Native mobile app
- Wearable integrations
- Barcode scanning
- Restaurant API integrations
- Complex computer vision meal scanning
- Insurance/medical features
- HIPAA-level workflows
- Advanced supplement protocols
- Social feed
- Public profiles

These can be future roadmap items.

---

## 6. Recommended Tech Stack

### Frontend
Use:
- **React**
- **Vite**
- **TypeScript**
- **React Router**
- **Tailwind CSS**
- **shadcn/ui** or a custom component system
- **Recharts** for charts
- **Lucide React** for icons

### Backend
Use:
- **Supabase free tier**
  - Authentication
  - Postgres database
  - Row Level Security
  - API access

### AI Integration
Use:
- **OpenAI API**
- Store API key securely in environment variables
- Do not expose API keys on the frontend
- All AI requests should go through a backend route, Supabase Edge Function, or serverless function

For V1, if a backend server is not created yet, structure the code so the AI service can easily be connected later. However, the target implementation should support real OpenAI API integration.

### Deployment
Recommended free/low-cost deployment:
- **Vercel** for frontend
- **Supabase** for backend/database/auth

---

## 7. App Architecture

### High-Level Architecture

```txt
React/Vite Frontend
        |
        | Supabase client
        v
Supabase Auth + Postgres
        |
        | secure serverless call
        v
AI Service / Edge Function
        |
        v
OpenAI API
```

### Frontend Structure

Recommended folder structure:

```txt
src/
  app/
    App.tsx
    routes.tsx
  components/
    layout/
    dashboard/
    onboarding/
    nutrition/
    schedule/
    ai/
    charts/
    ui/
  pages/
    LandingPage.tsx
    LoginPage.tsx
    SignupPage.tsx
    OnboardingPage.tsx
    DashboardPage.tsx
    SchedulePage.tsx
    MealPlanPage.tsx
    FoodLogPage.tsx
    ProgressPage.tsx
    AIChatPage.tsx
    SettingsPage.tsx
  lib/
    supabaseClient.ts
    aiClient.ts
    nutritionCalculations.ts
    macroTargets.ts
    dateUtils.ts
  types/
    user.ts
    nutrition.ts
    schedule.ts
    ai.ts
  data/
    starterFoods.ts
    educationCards.ts
  styles/
    globals.css
```

---

## 8. Database Design

Use Supabase Postgres.

### Tables

#### profiles
Stores core user information.

Fields:
- id uuid primary key, references auth.users
- full_name text
- age integer
- sex text
- height_inches numeric
- current_weight_lbs numeric
- sport text
- position text
- training_level text
- primary_goal text
- goal_weight_lbs numeric
- desired_weight_change_rate text
- created_at timestamp
- updated_at timestamp

#### user_preferences
Stores food, diet, and lifestyle preferences.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- dietary_restrictions text[]
- allergies text[]
- liked_foods text[]
- disliked_foods text[]
- avoided_foods text[]
- meal_frequency_preference text
- cooking_access text
- budget_level text
- dining_hall_access boolean
- supplements text[]
- created_at timestamp
- updated_at timestamp

#### goals
Stores detailed athlete goals.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- goal_type text
- goal_description text
- start_date date
- target_date date
- starting_weight_lbs numeric
- target_weight_lbs numeric
- target_calories integer
- target_protein_g integer
- target_carbs_g integer
- target_fat_g integer
- target_water_oz integer
- is_active boolean
- created_at timestamp
- updated_at timestamp

#### daily_metrics
Stores daily tracking data.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- date date
- body_weight_lbs numeric
- calories_consumed integer
- protein_g integer
- carbs_g integer
- fat_g integer
- water_oz integer
- sleep_hours numeric
- soreness_score integer
- energy_score integer
- recovery_score integer
- training_intensity integer
- notes text
- created_at timestamp
- updated_at timestamp

#### schedule_items
Stores daily schedule information.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- date date
- title text
- item_type text
- start_time timestamp
- end_time timestamp
- intensity integer
- location text
- notes text
- created_at timestamp
- updated_at timestamp

item_type examples:
- lift
- practice
- game
- class
- work
- travel
- recovery
- meal
- sleep
- other

#### food_logs
Stores foods the user actually ate.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- date date
- meal_type text
- time_eaten timestamp
- food_name text
- serving_size text
- calories integer
- protein_g integer
- carbs_g integer
- fat_g integer
- fiber_g numeric
- sodium_mg numeric
- notes text
- was_ai_recommended boolean
- created_at timestamp
- updated_at timestamp

#### meal_recommendations
Stores AI-generated meal suggestions.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- date date
- meal_type text
- recommended_time timestamp
- title text
- description text
- calories integer
- protein_g integer
- carbs_g integer
- fat_g integer
- hydration_note text
- reasoning text
- status text
- created_at timestamp
- updated_at timestamp

status examples:
- pending
- accepted
- rejected
- replaced
- completed

#### rejected_foods
Tracks foods removed from recommendations.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- food_name text
- reason text
- should_avoid_future boolean
- replacement_requested boolean
- created_at timestamp

#### ai_messages
Stores AI chat history.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- role text
- content text
- context_type text
- created_at timestamp

role examples:
- user
- assistant
- system

#### ai_insights
Stores AI-generated progress insights.

Fields:
- id uuid primary key
- user_id uuid references profiles(id)
- date date
- insight_type text
- title text
- summary text
- recommendation text
- severity text
- created_at timestamp

insight_type examples:
- progress
- hydration
- recovery
- calories
- protein
- carbs
- weight_trend
- meal_timing

---

## 9. Row Level Security

Enable Row Level Security on all user-owned tables.

Every user-owned table should have policies that ensure:
- Users can only select their own records
- Users can only insert records with their own user_id
- Users can only update their own records
- Users can only delete their own records

Example policy concept:

```sql
user_id = auth.uid()
```

For profiles:

```sql
id = auth.uid()
```

---

## 10. AI System Behavior

### AI Role
The AI should act as an athlete-focused nutrition and recovery coach.

It should:
- Analyze user data
- Explain nutrition decisions
- Recommend meal timing
- Recommend food substitutions
- Help users understand progress
- Avoid foods the user dislikes
- Ask smart follow-up questions when needed
- Encourage consistency
- Avoid medical diagnosis
- Avoid unsafe nutrition advice
- Recommend professional help when needed

### AI Should Consider
When giving advice, the AI should consider:
- User goal
- Body weight trend
- Current body weight
- Target weight
- Sport
- Training schedule
- Training intensity
- Calories consumed
- Macro intake
- Hydration
- Sleep
- Recovery
- Soreness
- Food likes/dislikes
- Allergies
- Dietary restrictions
- Upcoming events
- Missed meals
- User budget
- Cooking access

### AI Should Not
The AI should not:
- Diagnose medical conditions
- Encourage extreme calorie restriction
- Recommend dehydration
- Recommend dangerous weight-cutting
- Make supplement claims that are not clearly general and cautious
- Ignore allergies or dietary restrictions
- Keep recommending foods the user has rejected
- Shame the user

### Example System Prompt

```txt
You are an AI sports nutrition assistant for high-level athletes. Your job is to help the user fuel training, recover well, and make progress toward their stated goal. Use the user's profile, schedule, nutrition logs, progress metrics, food preferences, disliked foods, allergies, and dietary restrictions to give practical recommendations.

Prioritize athlete performance, adequate fueling, hydration, recovery, and sustainable progress. Explain recommendations clearly and briefly. Avoid medical diagnosis or extreme nutrition advice. If the user's request involves medical conditions, eating disorders, rapid weight cuts, dehydration, or unsafe behavior, recommend they speak with a qualified healthcare professional, registered dietitian, athletic trainer, or doctor.

Never recommend foods listed in the user's allergies, dietary restrictions, avoided foods, or disliked foods unless the user explicitly asks for them. If a user rejects a meal or removes a food, suggest nutritionally similar alternatives.
```

---

## 11. AI Workflows

### Onboarding Goal Analysis
After onboarding, AI should generate:
- Initial macro estimate
- Initial hydration target
- Meal timing guidance
- Key focus areas
- Suggested next steps

Example output:
- Daily calorie target: 3,050
- Protein target: 180g
- Carb target: 375g
- Fat target: 85g
- Hydration target: 120 oz
- Focus: increase carbs around lifts and improve post-practice recovery meals

### Daily Plan Generation
Input:
- Today’s schedule
- User goals
- Food preferences
- Recent food logs
- Current macro targets
- Training load

Output:
- Suggested meal times
- Meal recommendations
- Snack recommendations
- Hydration reminders
- Pre-training fuel
- Post-training recovery meal

### Real-Time Adjustment
If a user changes schedule or misses a meal, AI should adjust recommendations.

Example:
User says: “I missed lunch and have practice in 90 minutes.”
AI should recommend a quick carb-forward meal/snack that digests easily and adjusts the rest of the day.

### Food Rejection Replacement
If a user removes a food:
1. Ask if the app should avoid that food in the future.
2. Save to avoided_foods if yes.
3. Generate alternatives with similar macros.

### Progress Review
AI should review trends every few days.

For example:
- If goal is weight gain and weight is flat for 7–14 days, recommend increasing calories.
- If goal is fat loss and weight is dropping too fast, recommend increasing calories or reducing deficit.
- If protein is consistently low, recommend practical protein additions.
- If hydration is low on training days, increase hydration emphasis.
- If recovery scores are low, suggest sleep, carbs, hydration, and lighter recovery options.

---

## 12. Nutrition Logic

### Macro Calculation Approach
V1 can use estimated formulas, then allow AI adjustment based on progress.

Suggested starting points:

#### Protein
- General athlete range: 0.7–1.0g per pound of body weight
- Muscle gain or fat loss: closer to 0.8–1.0g/lb

#### Carbs
Carbs should scale with training load.

Suggested ranges:
- Light day: moderate carbs
- Lift/practice day: higher carbs
- Game/competition day: high carbs
- Rest day: lower than intense training days, but not extremely low

#### Fat
Generally fill remaining calories with healthy fats after protein and carb targets.

#### Calories
Calories should depend on:
- Current body weight
- Goal
- Training load
- Weight trend
- User feedback

V1 does not need perfect sports dietitian-level precision. It should be practical, adjustable, and transparent that targets are estimates.

### Progress-Based Adjustment Rules
Use these as simple rule-based checks before or alongside AI:

#### Goal: Gain Weight / Muscle
If 7–14 day average body weight is not increasing:
- Recommend +200 to +350 calories/day
- Prioritize carbs around training and protein consistency

If weight is increasing too fast:
- Recommend reducing calories slightly
- Explain lean gain vs excess fat gain

#### Goal: Lose Fat While Maintaining Performance
If weight is dropping too quickly:
- Recommend +150 to +300 calories/day
- Warn about performance/recovery risk

If weight is not changing after 14 days:
- Recommend reducing calories slightly or increasing activity

#### Goal: Maintain / In-Season Performance
If weight is stable but energy/recovery is poor:
- Review carb timing, hydration, sleep, and total calories

#### Hydration
If water intake is below target or training intensity is high:
- Recommend increasing water
- Suggest electrolytes around long/hot/high-sweat sessions

---

## 13. UI/UX Requirements

### Design Theme
Use a **mid-century modern** visual style.

### Visual Direction
The design should use:
- Warm cream backgrounds
- Walnut brown accents
- Muted orange
- Olive green
- Deep navy or charcoal text
- Rounded cards
- Clean geometric shapes
- Subtle shadows
- Friendly spacing
- Minimal clutter
- Large readable numbers
- Dashboard-style layouts

### Suggested Color Palette
Use CSS variables.

```css
--background: #F6EFE3;
--surface: #FFF9EF;
--primary: #C46A2B;
--primary-dark: #8F4420;
--secondary: #6F7F4E;
--accent: #D9A441;
--text: #23313D;
--muted-text: #6E6A61;
--border: #E1D3BE;
--danger: #B94A48;
--success: #4F7C59;
```

### Layout Principles
- Web-first, responsive design
- Should work well on laptop and desktop
- Should also be usable on mobile browser
- Keep navigation simple
- Use cards and sections
- Do not overload the user with too much text
- Make the AI recommendations easy to act on

### Navigation
Main authenticated navigation:
- Dashboard
- Schedule
- Meal Plan
- Food Log
- Progress
- AI Coach
- Settings

### Dashboard UX
The dashboard should answer:
- What do I need to do next?
- Am I on track today?
- Am I on track overall?
- What should I eat next?
- What is the AI noticing?

---

## 14. Page Requirements

### Landing Page
Should include:
- Hero section
- Clear value proposition
- Athlete-focused messaging
- Feature highlights
- Call to action to sign up
- Mid-century modern visuals

Hero copy example:

> Fuel your training with an AI nutrition coach built for athletes.

Subtext:

> Track meals, schedule training, monitor progress, and get real-time nutrition recommendations based on your goals, body metrics, and daily demands.

### Signup/Login Pages
Use Supabase auth.

### Onboarding Page
Use multi-step form.

Steps:
1. Basic profile
2. Sport and training
3. Goals
4. Food preferences
5. Schedule/lifestyle
6. Review and create plan

### Dashboard Page
Show today’s summary and AI insights.

### Schedule Page
Allow users to add/edit/delete daily schedule items.

### Meal Plan Page
Show AI recommended meals and snacks.

Each recommendation card should include:
- Meal name
- Recommended time
- Macros
- Reasoning
- Accept button
- Replace button
- Remove food button
- Log as eaten button

### Food Log Page
Allow users to log food manually and view daily totals.

### Progress Page
Show charts for:
- Body weight
- Calories
- Protein
- Carbs
- Fat
- Hydration
- Sleep
- Energy
- Recovery

Use Recharts.

### AI Coach Page
Chat-style interface.

Include suggested prompts:
- What should I eat before my lift?
- Am I on track for my goal?
- Replace my next meal.
- Help me recover after practice.
- How much water should I drink today?

### Settings Page
Allow editing:
- Profile
- Goal
- Food preferences
- Avoided foods
- Allergies
- Dietary restrictions
- Macro targets

---

## 15. Component Requirements

Create reusable components:

```txt
MetricCard
MacroProgressBar
MealRecommendationCard
ScheduleItemCard
AIInsightCard
FoodLogForm
ProgressChart
OnboardingStep
PreferenceTagInput
HydrationTracker
RecoveryScoreCard
ChatMessageBubble
```

---

## 16. Data Visualization

Use charts for:
- Weight trend
- Macro intake over time
- Calories target vs actual
- Hydration trend
- Recovery score trend
- Sleep trend

Charts should be simple and readable.

Do not overcomplicate analytics in V1.

---

## 17. OpenAI Integration Instructions

### Security
Never call OpenAI directly from the browser with the API key.

Use one of:
- Supabase Edge Function
- Vercel Serverless Function
- Express backend endpoint

### Environment Variables
Use:

```txt
OPENAI_API_KEY=your_key_here
```

Do not commit `.env` files.

### AI Endpoint Examples

Create AI service functions for:

```txt
POST /api/ai/onboarding-analysis
POST /api/ai/daily-plan
POST /api/ai/chat
POST /api/ai/progress-review
POST /api/ai/replace-meal
```

### AI Request Context
Each AI request should include relevant user data:

```json
{
  "profile": {},
  "goal": {},
  "preferences": {},
  "avoidedFoods": [],
  "recentMetrics": [],
  "todaySchedule": [],
  "todayFoodLogs": [],
  "recentInsights": []
}
```

### AI Output Format
Whenever possible, request structured JSON from the AI.

Example daily plan response:

```json
{
  "summary": "Today is a high-fuel day because you have a lift and practice.",
  "calorieTarget": 3200,
  "proteinTarget": 185,
  "carbTarget": 410,
  "fatTarget": 85,
  "hydrationTargetOz": 130,
  "meals": [
    {
      "mealType": "Breakfast",
      "recommendedTime": "08:00",
      "title": "Egg, potato, and turkey bowl",
      "description": "A high-protein breakfast with carbs to support your morning lift.",
      "calories": 720,
      "protein": 42,
      "carbs": 82,
      "fat": 24,
      "reasoning": "This gives you protein early and enough carbs before training."
    }
  ],
  "hydrationPlan": [
    {
      "time": "10:00",
      "recommendation": "Drink 20 oz water before lift."
    }
  ],
  "recoveryFocus": "Prioritize post-practice carbs, protein, and 8+ hours of sleep."
}
```

---

## 18. Starter Food Database

For V1, include a small starter food database in `src/data/starterFoods.ts`.

Include common athlete-friendly foods:
- Chicken breast
- Ground turkey
- Eggs
- Greek yogurt
- Oats
- Rice
- Pasta
- Potatoes
- Sweet potatoes
- Bananas
- Berries
- Peanut butter
- Avocado
- Salmon
- Tuna
- Turkey sandwich
- Protein shake
- Protein bar
- Bagel
- Granola
- Chocolate milk
- Trail mix
- Olive oil
- Whole milk
- Cottage cheese
- Beans
- Burrito bowl
- Smoothie

Each food should include estimated macros per common serving.

---

## 19. Build Phases

### Phase 1: Foundation
- Create React/Vite/TypeScript app
- Add Tailwind
- Add routing
- Create layout
- Add mid-century modern theme
- Create landing page
- Create auth pages
- Connect Supabase

### Phase 2: Database/Auth
- Create Supabase tables
- Enable RLS
- Add profile creation flow
- Add protected routes

### Phase 3: Onboarding
- Build multi-step onboarding
- Save profile, preferences, and goals
- Generate initial targets

### Phase 4: Core Dashboard
- Build dashboard cards
- Show today’s schedule
- Show macro/hydration progress
- Show AI insight placeholder or real AI insight

### Phase 5: Schedule + Food Logging
- Add schedule CRUD
- Add food logging CRUD
- Calculate daily totals

### Phase 6: Meal Recommendations
- Create meal recommendation UI
- Generate AI daily plan
- Save recommendations
- Allow accept/reject/replace

### Phase 7: AI Coach
- Build chat UI
- Connect AI endpoint
- Save chat history
- Use user context in AI responses

### Phase 8: Progress Analytics
- Add progress charts
- Add trend summaries
- Add AI progress review

### Phase 9: Polish
- Improve loading states
- Improve mobile responsiveness
- Add empty states
- Add error handling
- Add demo data mode
- Add disclaimers

---

## 20. Important Implementation Instructions for Codex/Copilot

### General Build Instructions
Build this as a production-quality MVP, not a throwaway demo.

Use:
- React
- Vite
- TypeScript
- Tailwind CSS
- Supabase
- OpenAI API through a secure backend/serverless function

Prioritize:
- Clean architecture
- Reusable components
- Strong typing
- Fast loading
- Responsive design
- Simple UX
- Clear data flow
- Secure user data access

### Do Not
Do not:
- Expose API keys in frontend code
- Hardcode user data
- Build a native mobile app
- Add paid subscriptions
- Add overly complex features before the MVP is working
- Ignore Row Level Security
- Make the UI feel generic

### Code Quality Requirements
- Use TypeScript interfaces for all major data models
- Keep components small and reusable
- Keep API logic out of UI components
- Use service files for Supabase and AI calls
- Use clear loading/error/success states
- Use accessible form labels
- Use responsive layouts
- Use environment variables
- Add comments only where helpful

### UX Requirements
- The app should feel fast
- The dashboard should be immediately useful
- The user should always know what action to take next
- AI suggestions should be actionable, not vague
- Avoid long walls of text
- Use cards, progress bars, charts, and tags

### AI Requirements
- AI must use user context
- AI must respect disliked foods, avoided foods, allergies, and restrictions
- AI must explain recommendations briefly
- AI must avoid medical claims
- AI must use structured JSON for meal plans and progress reviews where possible
- AI should update recommendations when schedule or logs change

---

## 21. Example User Flow

1. User lands on site.
2. User signs up.
3. User completes onboarding survey.
4. App creates initial nutrition targets.
5. User enters today’s schedule.
6. AI generates a daily fueling plan.
7. User accepts or modifies meals.
8. User logs food, water, sleep, energy, soreness, and weight.
9. App compares actual data to target data.
10. AI gives feedback on whether the user is on track.
11. If user rejects a food, app remembers and avoids it in future plans.
12. Over time, AI adjusts guidance based on progress trends.

---

## 22. Example AI Insight Cards

### Weight Gain Goal
Title: **You may need more fuel**

Summary:
Your 10-day average weight has not increased, but your goal is to gain lean mass.

Recommendation:
Increase daily calories by 250–350, mostly from carbs around training and an extra protein-rich snack before bed.

### Hydration
Title: **Hydration is limiting recovery**

Summary:
You were under your hydration target on 4 of the last 5 training days.

Recommendation:
Add 20 oz water before training, 20–30 oz during training, and electrolytes after high-sweat sessions.

### Carb Timing
Title: **Carbs are low before training**

Summary:
You are often eating most of your carbs late in the day instead of around lifts and practices.

Recommendation:
Add a bagel, banana, rice bowl, or smoothie 60–120 minutes before training.

---

## 23. Future Roadmap

After V1, consider:
- Coach/team dashboard
- Athlete sharing reports with coaches
- Wearable integrations
- Apple Health integration
- Mobile app
- Barcode scanner
- Dining hall mode
- Restaurant recommendation mode
- Grocery list generation
- Meal prep planning
- Team nutrition plans
- Rapsodo/Trackman-style performance data integrations for athletes
- Subscription model
- Push notifications
- SMS reminders
- Computer vision meal estimation

---

## 24. Final MVP Definition

The MVP is successful if an athlete can:

1. Create an account
2. Complete onboarding
3. Enter goals and preferences
4. Enter schedule
5. Receive AI meal timing and food recommendations
6. Log food and body metrics
7. Track macros, hydration, sleep, energy, soreness, and recovery
8. See whether they are on track toward their goal
9. Ask AI for real-time nutrition advice
10. Replace disliked foods and have the app remember preferences

The app should feel like a serious athlete performance tool with a clean, modern, mid-century design.

---

## 25. One-Sentence Build Prompt

Build a React/Vite/TypeScript web app using Supabase and secure OpenAI API integration that acts as an AI-powered athlete nutrition coach, helping users track body metrics, food, macros, hydration, schedule, training, recovery, and progress while generating real-time meal timing, food recommendations, and goal-based nutrition adjustments in a clean mid-century modern interface.
