import connection from '../../DB/connection.js'
import executeQuery from '../../DB/dbHelper.js'


export async function addRelation(req,res){
    try {
    const {tag_id,post_id}=req.body
    const query = 'INSERT INTO Relation (tag_id,post_id) VALUES(? ,?)'
    const params=[tag_id , post_id]
    const result =await executeQuery(query,params)
    if(result.affectedRows)
    res.json({message:"Relation Added"})
    else
    res.json({message:"Failed to add Relation"})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}


export async function getPostsOfTag(req,res){
    try {
    const{post_id}=req.params
    const query='SELECT * FROM Relation Where post_id=?'
    const params=[post_id]
    const result =await executeQuery(query,params)
   // console.log(result);
   const Tags=result.map((Relation)=>Relation.tag_id)
   res.json({Tags})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}
export async function getTagsOfPost(req,res){
    try {
        const{tag_id}=req.params
        const query='SELECT * FROM Relation Where tag_id=?'
        const params=[tag_id]
        const result =await executeQuery(query,params)
       // console.log(result);
       const Posts=result.map((Relation)=>Relation.post_id)
       res.json({Posts})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}
