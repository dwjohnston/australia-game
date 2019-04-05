const {config} = require("./config.js");

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: config.projectId,
  keyFilename: './dbApi/secret.json', //Note that this file is .gitignored
});

const {collectionName} = config; 

function formatError(err) {
    console.error(err);
    return err;
}

async function getAllItems() {
    try {
        const snapshot = await db.collection(collectionName).get(); 
        return snapshot.docs.map(d => {
            return   {
                ...d.data(),
                id: d.id, 
            }
        }); 
        
    }
    catch (err) {
        throw formatError(err);
    }
}

async function addItem(item) {
    try {
        const response = await db.collection(collectionName).add(item); 
        return {
            ...item, 
            id: response.id, 
        }
    }
    catch(err) {
        throw formatError(err);
    }
}

async function updateItem(item) {
    try {
        const itemClone = {...item}; 
        delete itemClone.id;
        await db.doc(`${collectionName}/${item.id}`).update(itemClone); 
        return item; 
    }
    catch (err) {
        throw formatError(err);
    }
}

async function deleteItem(id) {
    try {
        return await db.doc(`${collectionName}/${id}`).delete(); 
    }
    catch (err) {
        throw formatError(err);
    }
}


module.exports = {
    getAllItems,
    updateItem,
    addItem, 
    deleteItem,

}