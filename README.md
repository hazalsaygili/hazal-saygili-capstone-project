# CRYSTALSILVER COSMIC APP

## Overview

CRYSTALSILVER COSMIC APP is a JavaScript React-based front-end web application designed for CRYSTALSILVER, an e-commerce platform that sales crystals, their accessories, and decorations. The Cosmic App aims to transcend the typical shopping experience by providing enriched astrological and numerological calculations and insights, delivering personalized reports that guide users on their cosmic journeys and offering an extensive repository of information on crystals, chakras, and their combinations, therefore empowering users in their spiritual journey by deepening their understanding of their roles in the universe and discovering their matching attributes and crystals, to equip the users to unlock their fullest potential.

### Problem

Currently there are not many numerology websites that are working accurately and as someone who has been interested in numerology for a considerably long time and has been enrolled in numerology certificate, I have been feeling the need to create a numerology application that works effectively and covers edge cases more than the current websites do in a more user friendly way. Also, I believe that astrology websites are not very user friendly and mostly outdated in UI/UX and similarly for crystals and chakras too, leaving users feeling that they cannot access reliable and clear information on related subjects. Having realized these pain points for a while as a spiritual individual, I also have a start-up named CRYSTALSILVER that is selling crystals and crystal based accessories and decorations. My goal is to develop a holistic spiritual journey guide that also functions as an e-commerce platform and this capstone project is the first epic of this CRYSTALSILVER COSMIC APP

### User Profile

The CRYSTALSILVER COSMIC APP is designed for spiritually inclined individuals interested in astrology, numerology, crystals, and chakras. These users who seek personalized astrological and numerological reports, detailed information on crystals and chakras, and an intuitive e-commerce platform for purchasing crystal related products. The aim for this app is to be user-friendly, visually appealing, and provide accurate, comprehensive insights to support their spiritual journeys and enhance their overall experience.


### Features

### Main Page
The Main Page will include a form for user input and a navigation bar.
The navigation bar will contain links to the Analysis, Crystals and Chakras pages.
The form will have a field for users to enter their full name and birth date.
There will be a "Show My Analysis" button that triggers the calculation of numerology and astrology insights.
After clicking the "Show My Analysis" button, the numerology report will be displayed in the page and astrology report 
will be linked in another subpage.

### The Numerology Report Page
Numerology Report will include Life Path Number, Destiny Number, Soul Urge Number, and Character Number sections.
The Numerology Report Page will display the analysis result of the Life Path Number first and Destiny Number, Soul Urge Number, and Character Number sections will be able to followed with next buttons or will be chosen from the numerology bar.
The Life Path Number analysis page will include detailed description and insights, associated chakra, and color.
The Life Path Number analysis page will include relevant crystals with links to relative crystal's images and pages.
The Destiny Number analysis page will include detailed description and insights, associated chakra, and color.
The Destiny Number analysis page will include relevant crystals with links to relative crystal's images and pages.
The Soul Urge Number analysis page will include detailed description and insights, associated chakra, and color.
The Soul Urge Number analysis page will include relevant crystals with links to relative crystal's images and pages.
The Character Number analysis will include detailed description and insights, associated chakra, and color.
The Character Number analysis will include relevant crystals with links to relative crystal's images and pages.
Users will be able to switch to the astrology page from the numerology report page.

### Astrology Report Page
The Astrology Report Page will calculate and display the user’s sun sign based on their birthdate.
The sun sign display will include a detailed description of its traits and attributes with special insights.
NASA images of the ruling planets associated with the sun sign will be displayed to user along with the planet's 
scientific and spiritual attributes.
The page will list the crystals that are associated with the user’s sun sign.
The page will provide images and links for the crystals listed.

### Chakra Information Page
The Chakra Information Page will provide detailed descriptions of each of the seven chakras.
Each chakra description will include its location, function, and attributes.
The page will offer various methods for balancing and aligning each chakra.
The balancing methods will include meditation practices, affirmations and mudras.
The page will provide images and links for the crystals listed.
Each chakra's positive and negative working energies will be listed.

### Crystal Information Page
The Crystal Information Page will include detailed descriptions of widely known and commonly used crystals.
The page will detail the healing properties and benefits of each crystal, along with their associated chakras.
The page will have links to the chakras associated with each crystal.
The page will include pictures of the chosen crystal.


## Implementation

### Tech Stack

JavaScript
SCSS
React (axios, router, useState, useEffect)

### APIs
Following APIs are in consideration
NASA API 
Planets API
Planet API
Crystal APIs (still searching)

### Sitemap

Main Page

Numerology Analysis Page 
- Life Path number subpage
- Destiny number subpage
- Soul Urge number subpage
- Character number subpage

Astrology Analysis Page

Crystals Page
- Subpage for each crystal (10 approx)

Chakras Page
- Subpage for each chakra (7 chakras)


### Data

Astrology data will have Sun Sign Name, Description, Ruling Planet names and Associated Crystals
Ruling Planet Data will have Name, Images, Scientific Information and Spiritual Information 
Crystals will have Name, Description, Images and Associated Chakra properties
Numerology data will have id, description, associated color, chakra and crystal properties. 

### Endpoints

My project will not include server side as it will be a frontend application that will not hold data from user.


### Auth

My project will not need any log in or user profile functionality.

## Roadmap

Tasks:

Project Initialization:
- Set up the project structure using Create React App.
- Install necessary dependencies including axios, React Router, and SCSS.
- Configure SCSS for global and modular styling.

Main Page Layout:
- Create a form component for user inputs, including fields for full name and birthdate.
- Implement form validation to ensure all fields are filled.
- Create the "Show My Analysis" button with an onClick handler to trigger analysis calculations.
- Develop a navigation bar component with links to the Analysis, Crystals, and Chakras pages.
- Ensure responsive design for mobile and desktop views.

Numerology Calculations:
- Implement functions to calculate Life Path Number, Destiny Number, Soul Urge Number, and Character Number based on user input.
(Life Path number is calculated from birthdate and Destiny number, Soul Urge number, Character number are calculated from the full name)

Report Display:
- Develop a component to display the Life Path Number analysis including detailed descriptions and insights.
- Integrate associated chakra and chakra color for the Life Path Number.
- Add relevant crystals with descriptions and links to the crystal information pages.
- Develop components for Destiny Number, Soul Urge Number, and Character Number analyses, including detailed descriptions, associated chakra, color, and relevant crystals.
- Implement navigation (e.g., next buttons) within the Numerology Report Page to switch between Life Path, Destiny, Soul Urge, and Character sections.

Sun Sign Calculation:
- Implement function to calculate the user's sun sign based on birthdate.

Report Display:
- Design the Astrology Report Page layout using wireframes.
- Develop a component to display the user's sun sign with detailed traits and attributes.
- Add special insights for each sun sign.
- Integrate NASA/API images of ruling planets and provide scientific and spiritual descriptions for the ruling planets.
- List crystals associated with the sun sign, including descriptions and images.
- Ensure all links to crystal information pages are functional.

Chakra Descriptions:
- Provide detailed descriptions for each of the seven chakras including location, function, and attributes.
- Research the resources and gather content for each chakra’s balancing and alignment methods.
- Develop sections for meditation practices, affirmations, and mudras for each chakra.
- List crystals associated with each chakra and provide detailed descriptions.
- Include images and links for each listed crystal.
- Describe the positive and negative working energies for each chakra.


Crystal Descriptions:
- Research and write detailed descriptions for commonly used and widely known crystals.
- Include information on healing properties and benefits.
- List chakras associated with each crystal 


## Nice-to-haves

Including ascendant sign and moon sign in the astrology report
Having more pages related to other spiritual healing content that I have information about and would like to share.
