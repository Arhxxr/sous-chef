# Sous-Chef
_Eating healthy can feel like a chore - tracking calories, finding nutritious recipes, and accommodating dietary restrictions can be overwhelming. Our aim is to provide users with a seamless cooking experience while promoting better nutrition and food management. So we created Sous-Chef to empower individuals to make smarter cooking and dietary choices without sacrificing convenience._

---
Sous-Chef is an intelligent kitchen assistant designed to simplify meal preparation. It helps users meet their nutritional goals. The app uses the Spoonacular-API to access a detailed database of nutritional values of ingredients and formulates recipes based on individual preferences such as calorie requirements, time to cook, meal and cuisine type.

Users input their dietary goals, and Sous-Chef provides tailored recipes, ensuring they stay on track. For popular recipes, Sous-Chef suggests healthier ingredient alternatives, helping users maintain a balanced diet. It takes into account users’ dietary preferences and restrictions, ensuring safe and enjoyable meal options. Users receive step-by-step cooking instructions, enhancing the overall cooking experience.

[Try it out](https://sous-chef.tech/)

---

## Tech Stack
- Frontend: React.js, Bootstrap.
- Backend: Docker, Flask, Spoonacular-API, AWS, lightsail, nginx, AI & NLP: GPT 4o

## Process
We started by outlining what users would need, from calorie tracking and personal preferences to recipe customization. Then we set up the backend using Docker and Flask to fetch nutrition info and analyze ingredients from an incredibly large and nuanced dataset through Spoonacular-API. After which we used Figma to draft a frontend design and built it using React and hosted our webapp using AWS-Lightsail which can be accessed through the .tech domain: sous-chef.tech.

## Challenges
We had initially planned to use one of Intel's AI PCs to run the backend of our AI driven cooking assistant but we weren't able to do so, it just wouldn't work. We also tried to use Intersystem's IRIS Vector Search as our database after converting Spoonacular's datasets into vector embeddings but the limited query limit of the api as well as its ease of use without having to convert it into our own database proved that option to be more complex than we could handle. Integrating the api to our backend proved to be more difficult than we hoped and going from a Figma frontend mockup to a functional frontend took much longer than we hoped. Moreover, having the backend and frontend talk to each other the way we expected it to proved to be very difficult. We had a scrap a lot of our initial plans with the webapp early on due to the challenges we faced but we definitely learned a lot stumbling over them and even overcoming some.

## Learning Outcomes
We learned a lot about backend dataset api and AI integration, visual draft to frontend code conversion workflow, backend and frontend integration, and that 25 hours isn't really a whole lot of time when you're inexperienced and trying to build something unknown.
