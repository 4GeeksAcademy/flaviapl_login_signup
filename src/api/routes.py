"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)




# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)         #valore = request.json.get("chiave" della richiesta HTTP che vuoi estrarre, valore_default, Se la chiave non esiste, restituisce questo valore invece di dare errore (di default è None )
    password = request.json.get("password", None)   
    user = User.query.filter_by(email = email).first()      #cerca un utente nel database che abbia l'email fornita
    print(user)
    if user is None :                                             #se l'email non esiste nel database, si verifica un errore con user.password.
        return jsonify({"msg": "Bad email or password"}), 401
    if password != user.password :                              #se la pwd inserita dall'utente è diversa dalla pwd nel database di User da errore(lo user deve essere giusto sennó non trova niente)
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)   #se l'email e la password ok, si genera un token JWT che conterrà l'identità dell'utente (l'email in questo caso)
    return jsonify(access_token=access_token)


@api.route("/private", methods=["GET"])
@jwt_required()                              #protegge la rotta, solo chi ha un token valido accede
def private_route():
    current_user = get_jwt_identity()       #recupera l'identità dell'utente che è stata salvata nel token JWT al momento del login
    return jsonify(logged_in_as = current_user), 200    #resituisce loggato come e la mail dell'utente



@api.route("/signup", methods=["POST"])
def signup():
    email = request.json.get ("email", None )          #accedo alla mail proveniente dalla richiesta 
    password = request.json.get ("password", None)      #accedo alla pwd proveniente dalla richiesta
    print(email and password)

    if not email or not password :
        return jsonify({"message": "email and password required"}), 400

    new_user = User(email = email, password = password, is_active = True )     # crea nuovo utente in User e l'email e = alla email inserita nel POST e la PWD anche, devo definite is_active perchè il modello User lo richiede.
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "user succesfully created"}), 201               #201 = Created