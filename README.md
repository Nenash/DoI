# Bones on Ice - Project Documentation

**Version:** 1.0 (Web Edition)
**Status:** Pre-Development (All core specifications complete)

---

## 1. Project Vision

Welcome to the "Bones on Ice" project. Our mission is to create a web-based, 2-player tactical hockey board game.

Our guiding principle is to deliver **"the intellectual satisfaction of having tactically outmaneuvered an opponent, combined with the thrill of dice rolls—a game where a cold mind and hot dice team up for the win."**

---

## 2. How to Navigate This Documentation

This repository contains all official planning, design, and technical documents for the project. The documentation is organized into five main folders. Please refer to the folder that best matches your role or query.

---

## 3. Table of Contents & Document Structure

Below is a hyperlinked guide to the complete project documentation.

### **[01_Vision_and_Planning/](./01_Vision_and_Planning/)**
*This folder contains the high-level strategic documents that guide the project.*
*   **[1.1_Creative_Vision_Brief.md](./01_Vision_and_Planning/1.1_Creative_Vision_Brief.md)**: Defines the "Cyber-Slavic Fantasy Sport" aesthetic and overall creative direction.
*   **[1.2_Project_Roadmap_and_Timeline.md](./01_Vision_and_Planning/1.2_Project_Roadmap_and_Timeline.md)**: Details the 7-8 week project plan from design to deployment.

### **[02_Game_Design/](./02_Game_Design/)**
*This folder defines WHAT the game is—its rules and content, independent of implementation.*
*   **[2.1_Game_Rules_v7.8_Final.md](./02_Game_Design/2.1_Game_Rules_v7.8_Final.md)**: The complete, official rulebook for players.
*   **[2.2_Team_Specifications.md](./02_Game_Design/2.2_Team_Specifications.md)**: A structured list of all 6 teams and their unique abilities.
*   **[2.3_Sample_Match_Walkthrough.md](./02_Game_Design/2.3_Sample_Match_Walkthrough.md)**: A 3-round narrative example of gameplay.

### **[03_UX_UI_Design/](./03_UX_UI_Design/)**
*This folder contains the blueprints for the application's look, feel, and user flow.*
*   **[3.1_Wireframes_v0.2_(Approved).md](./03_UX_UI_Design/3.1_Wireframes_v0.2_(Approved).md)**: The approved low-fidelity layouts for all screens.
*   **[3.2_UI_UX_Design_Specification.md](./03_UX_UI_Design/3.2_UI_UX_Design_Specification.md)**: The detailed brief for the UI/UX Designer, covering the style guide, components, and micro-interactions.
*   **[3.3_Final_Mockups_and_Style_Guide/](./03_UX_UI_Design/3.3_Final_Mockups_and_Style_Guide/)**: (Placeholder) This folder will contain the final high-fidelity visual assets from the design team.

### **[04_Technical_Specifications/](./04_Technical_Specifications/)**
*This folder contains the core technical blueprints for the development team, defining HOW the game is built.*
*   **[4.1_Engine_and_Logic/](./04_Technical_Specifications/4.1_Engine_and_Logic/)**:
    *   **[4.1.1_Game_Rules_Technical_Spec.md](./04_Technical_Specifications/4.1_Engine_and_Logic/4.1.1_Game_Rules_Technical_Spec.md)**: The "developer's rulebook," defining data structures and the main state machine.
    *   **[4.1.2_Chaos_Table_Event_Logic.md](./04_Technical_Specifications/4.1_Engine_and_Logic/4.1.2_Chaos_Table_Event_Logic.md)**: The precise logic for handling all Chaos Table events.
*   **[4.2_Graphics_and_Rendering/](./04_Technical_Specifications/4.2_Graphics_and_Rendering/)**:
    *   **[4.2.1_Graphics_Engine_Technical_Spec.md](./04_Technical_Specifications/4.2_Graphics_and_Rendering/4.2.1_Graphics_Engine_Technical_Spec.md)**: The spec for the PixiJS developer, detailing rendering layers, component APIs, and animations.
*   **[4.3_Frontend_and_Application/](./04_Technical_Specifications/4.3_Frontend_and_Application/)**:
    *   **[4.3.1_UI_Application_Flow_Spec.md](./04_Technical_Specifications/4.3_Frontend_and_Application/4.3.1_UI_Application_Flow_Spec.md)**: The spec for the UI developer, detailing screen components, state, and events.
    *   **[4.3.2_Asset_Loading_Strategy.md](./04_Technical_Specifications/4.3_Frontend_and_Application/4.3.2_Asset_Loading_Strategy.md)**: The phased strategy for loading all game assets.
    *   **[4.3.3_LocalStorage_Manager_Spec.md](./04_Technical_Specifications/4.3_Frontend_and_Application/4.3.3_LocalStorage_Manager_Spec.md)**: The spec for safely managing versioned player stats.

### **[05_Assets/](./05_Assets/)**
*(Placeholder)* This directory will house all final, game-ready assets, including images, audio, fonts, and spritesheets.