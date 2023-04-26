const {platillosModel} = require("../../Models");

module.exports = {
    getAll: (req, res)=>{
        res.send("getAll is Working")
    },
    CreateOne: async (req, res)=>{

        res.send("CreateOne is working")
        

    },
    UpdateOne: (req, res)=>{
        res.send("UpdateOne is working")
    },
    DeleteOne: (req, res)=>{
        res.send("DeleteOne is working")
    }
}

module.exports = {
    getAll:(req, res) => {
        res.send("working");
    },
    createOne:(req, res) =>{
        res.send("working");
    },
    updateOne:(req, res) => {
        res.send("working");
    },
    deleteOne:(req, res) => {
        res.send("working");
    }
}
