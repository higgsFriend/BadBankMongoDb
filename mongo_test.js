const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useUnifiedTopology: true },
    function (err, client) {
        console.log('Connected.');

        // db name
        const dbName = 'bill';
        const db = client.db(dbName);

        // New user
        var name = 'user' + Math.floor(Math.random() * 10000);
        var email = name + '@mit.edu';

        // Insert into table
        var collection = db.collection('bill_table');
        var doc = { name, email }
        collection.insertOne(doc, { w: 1 }, function (err, result) {
            console.log('Inserted to table.');
        });

        //Retrieve
        var bill_table = db
        .collection('bill_table')
        .find()
        .toArray( function(err, docs) {
            console.log(docs);

            client.close();
        })
    });


