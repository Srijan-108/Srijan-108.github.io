# app.py
import os
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, 'vehicles.db')

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS vehicles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            carNumber TEXT NOT NULL UNIQUE,
            carModel TEXT NOT NULL,
            chargingSpecs TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route("/register", methods=["POST"])
def register_vehicle():
    try:
        data = request.get_json()
        required_fields = ["name", "carModel", "chargingSpecs", "carNumber"]
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute(
            "INSERT INTO vehicles (name, carNumber, carModel, chargingSpecs) VALUES (?, ?, ?, ?)",
            (data["name"], data["carNumber"], data["carModel"], data["chargingSpecs"])
        )
        conn.commit()
        conn.close()

        return jsonify({"message": "Vehicle registered and saved to DB!"}), 200

    except Exception as e:
        print("❌ Registration error:", e)
        return jsonify({"error": str(e)}), 500

@app.route("/vehicles", methods=["GET"])
def get_vehicles():
    try:
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("SELECT name, carNumber, carModel, chargingSpecs FROM vehicles")
        rows = c.fetchall()
        conn.close()
        vehicles = [{"name": row[0], "carNumber": row[1], "carModel": row[2], "chargingSpecs": row[3]} for row in rows]
        return jsonify(vehicles), 200
    except Exception as e:
        return jsonify({"error": "Could not retrieve vehicles"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
