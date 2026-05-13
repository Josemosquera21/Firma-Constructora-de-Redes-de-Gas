from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite conexión con React

@app.route("/contacto", methods=["POST"])
def contacto():
    data = request.json

    nombre = data.get("nombre")
    telefono = data.get("telefono")
    mensaje = data.get("mensaje")

    print("Nuevo cliente:")
    print(nombre, telefono, mensaje)

    return jsonify({"mensaje": "Datos recibidos correctamente"})

if __name__ == "__main__":
    app.run(debug=True)