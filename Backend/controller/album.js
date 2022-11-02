const album = require('../model/album')

exports.getAlldata = async (req,res)=>{
    try {
        const album = await album.find()
        res.json(album)
        
    } catch (error) {
        res.send('Error'+ error)
    }
};

exports.getOneData = async (req,res)=>{
    try {
        const album = await album.findById(req.params.id)
        res.json(album)
        
    } catch (error) {
        res.send('Error'+ error)
    }
};