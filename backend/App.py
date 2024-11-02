# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/', methods=['GET'])
def hello():
    return "Hello World", 200

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    # Placeholder response
    return jsonify({"reply": f"Received: {user_message}"})

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
