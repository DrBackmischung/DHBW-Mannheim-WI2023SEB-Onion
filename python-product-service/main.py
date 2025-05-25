from flask import Flask, jsonify

app = Flask(__name__)

products = [
    {"id": 1, "name": "Python Product 1", "price": 49.99},
    {"id": 2, "name": "Python Product 2", "price": 79.99}
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    return jsonify(product or {"error": "Product not found"}), 200

if __name__ == '__main__':
    app.run(port=3001)
