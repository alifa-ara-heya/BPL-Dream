# React Players
# Assignment-07: Cricket Team Player Selection App

## Project Name: **Cricket Team Player Manager**

Welcome to **Cricket Team Player Manager**, a React-based web application where users can select and manage cricket players to form their own team. The app allows users to manage their budget (coins), select players, and view/manage selected players with validation checks. The design and functionality are based on a Figma template, providing a user-friendly experience for managing players.

## Project Description

This application simulates a cricket player auction system where users can:
- Select available players based on their coin balance.
- Toggle between viewing available players and selected players.
- Add or remove players from their selected list.
- Validate selections based on budget and selection rules.

The app also features a responsive UI, toasts for user notifications, and proper data management using React state.

## Technologies Used

- **React**: The core framework for building the UI.
- **React Toastify**: For user notifications (e.g., success, warning, and error messages).
- **Tailwind CSS**: For styling the application and ensuring it follows the Figma design.
- **DaisyUI**: For reusable components.
- **PropTypes**: For validating props passed between components.
- **JavaScript**: Core logic for managing state and interactions.
- **Figma**: As the design reference.
- **JSON**: Used to store player data.

## Key Features

### 1. **Player Selection with Budget Management**
   - Users start with 0 coins and can increase their balance by clicking the button in the banner.
   - Players can only be selected if the user has enough coins.
   - Toast notifications are used to inform the user of successful player selection, insufficient coins, or if a player has already been selected.

### 2. **Player List Display and Validation**
   - All players are displayed in a card layout with relevant details like name, country, role, and bidding price.
   - The app ensures users can't select more than 6 players and prevents selecting the same player twice.

### 3. **Toggling Between Available and Selected Players**
   - Users can toggle between viewing available players and selected players using two buttons at the top-right of the main section.
   - An "Add More Players" button in the selected player view lets the user go back and choose additional players.


## Additional Features

- **React Toastify Notifications**: Toast notifications are used to alert the user instead of standard browser alerts.
- **Remove Selected Players**: Users can remove selected players using the "Remove" button in the selected players section.




Live Website Link: react-players-alifa.surge.sh

GiHub Repository Link (private): https://github.com/programming-hero-web-course1/b10a7-dream-11-alifa-ara-heya
