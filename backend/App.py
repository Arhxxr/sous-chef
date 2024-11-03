# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests

load_dotenv()
app = Flask(__name__)
CORS(app)

# Your Spoonacular API key should be securely stored
SPOONACULAR_API_KEY = os.getenv("SPOONACULAR_API_KEY") # Make sure to set this environment variable

@app.route('/', methods=['GET'])
def hello():
    return f"Hello World your API Key is: {SPOONACULAR_API_KEY}", 200

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    # Placeholder response
    return jsonify({"reply": f"Received: {user_message}"})

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"}), 200

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    url = "https://api.spoonacular.com/recipes/complexSearch"
    headers = {"Content-Type": "application/json"}
    
    # Retrieve parameters from the request
    params = {
        "query": request.args.get("query"),
        "cuisine": request.args.get("cuisine"),
        "diet": request.args.get("diet"),
        "excludeCuisine": request.args.get("excludeCuisine"),
        "intolerances": request.args.get("intolerances"),
        "includeIngredients": request.args.get("includeIngredients"),
        "excludeIngredients": request.args.get("excludeIngredients"),
        "type": request.args.get("type"),
        "maxReadyTime": request.args.get("maxReadyTime"),
        "number": request.args.get("number", 1),  # default to 1 result for top recipe
        "sort": request.args.get("sort"),
        "sortDirection": request.args.get("sortDirection"),
        "apiKey": SPOONACULAR_API_KEY
    }
    
    try:
        response = requests.get(url, headers=headers, params=params)
        response.raise_for_status()
        data = response.json()
        
        recipes = []
        for recipe in data.get("results", []):
            recipes.append({
                "id": recipe.get("id"),
                "title": recipe.get("title")
            })

        return jsonify({"recipes": recipes})
    except requests.exceptions.RequestException as e:
        print(f"Error fetching recipes: {e}")
        return jsonify({"error": "Failed to fetch recipes"}), 500

@app.route('/api/recipe/instructions/<int:recipe_id>', methods=['GET'])
def get_analyzed_recipe_instructions(recipe_id):
    url = f"https://api.spoonacular.com/recipes/{recipe_id}/analyzedInstructions"
    
    params = {
        "apiKey": SPOONACULAR_API_KEY,
        "stepBreakdown": "true"
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        data = response.json()
        
        ingredients_set = set()
        formatted_steps = []

        if data:
            step_number = 1
            for instruction in data:
                for step in instruction["steps"]:
                    normalized_step = step['step'].replace('\r\n', '\n').replace('\r', '\n')
                    step_ingredients = [ing["name"] for ing in step.get("ingredients", [])]
                    ingredients_set.update(step_ingredients)
                    formatted_steps.append(f"{step_number}. {normalized_step}")
                    step_number += 1

        ingredients = sorted(list(ingredients_set))
        
        return jsonify({
            "ingredients": ingredients,
            "steps": formatted_steps
        })

    except requests.exceptions.RequestException as e:
        print(f"Error fetching recipe instructions: {e}")
        return jsonify({"error": "Failed to fetch recipe instructions"}), 500

@app.route('/api/recipe/details', methods=['POST'])
def get_recipe_details():
    data = request.json
    recipe_name = data.get("recipe_name")
    dietary_restrictions = data.get("dietary_restrictions")

    # Use get_recipes to find the top recipe ID
    recipe_query_params = {
        "query": recipe_name,
        "diet": dietary_restrictions
    }
    
    # Call the get_recipes function with the appropriate parameters
    response = requests.get("http://localhost:5000/api/recipes", params=recipe_query_params)
    
    if response.status_code == 200:
        recipes_data = response.json()
        if recipes_data["recipes"]:
            top_recipe_id = recipes_data["recipes"][0]["id"]
            # Now call get_analyzed_recipe_instructions with the obtained ID
            instructions_response = requests.get(f"http://localhost:5000/api/recipe/instructions/{top_recipe_id}")
            return instructions_response.json()  # Return the instructions and ingredients
        else:
            return jsonify({"error": "No recipes found for the given name and dietary restrictions."}), 404
    else:
        return jsonify({"error": "Failed to fetch recipes from the API."}), response.status_code

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
