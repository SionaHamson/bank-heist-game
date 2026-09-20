from flask import Flask, jsonify
from game_data import GAME_DATA

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({
        "message": "Bank Heist Game Backend is running"
    })


@app.route("/game-data")
def game_data():
    return jsonify(GAME_DATA)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
