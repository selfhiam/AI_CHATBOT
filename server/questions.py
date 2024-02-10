from pymongo import MongoClient
from random import sample
import certifi
import json
def mongoDB():
    tlsCAFile=certifi.where()
    client = MongoClient("mongodb+srv://jimini0920:JW4qxzzylk41IZe1@cluster0.kngcohp.mongodb.net/?retryWrites=true&w=majority",tlsCAFile=certifi.where())

    db = client["chat"]
    collection = db["test"]

    cursor = collection.find()

    docli = {}
    i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    li = sample(i, 10)

    k = 0
    for document in cursor:
        if '_id' in document:
            del document['_id']
        docstr = str(document)
        docstr = docstr.replace("'", "\"")
        docstr = docstr.replace('""', '"')
        docli[li[k]] = docstr
        k += 1
    print(docli)
    return(docli) 