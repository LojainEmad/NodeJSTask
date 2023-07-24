import connection from '../../DB/connection.js'
import executeQuery from '../../DB/dbHelper.js'

export async function getAllPosts(req,res){
    try {
        const query='SELECT * FROM Posts'
        const params=[]
        const result= await executeQuery( query , params );
        res.json({result})
        
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function addPost(req,res){
    try {
        const{title,content,user_id}=req.body
        const query='INSERT INTO Posts (title,content,user_id) VALUES(?,?,?)'
        const params = [title,content,user_id]
        const result =await executeQuery(query,params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
   
}

export async function getPostById(req,res){
    try {
        const {id}=req.params
        const query='SELECT * FROM Posts WHERE id=?'
        const params=[id]
        const result=await executeQuery(query,params)
        res.json({result})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function deletePost(req,res){
    try {
        const {id} = req.params;
        const query='DELETE FROM Posts WHERE id=? '
        const params=[id];
        const result =await executeQuery(query,params);
        if(result.affectedRows)
        res.json({message:"Post Deleted"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

export async function updatePost(req,res){
    try {
        const{title,content,user_id}=req.body
        const{id}=req.params;
        const query='UPDATE Posts SET  title=? , content=?  WHERE id=?' 
        const params=[title , content,user_id]
        const result=await executeQuery(query,params)
        if(result.affectedRows)
        res.json({message:"Post Updated"})
        else
        res.json({message:"Invalid ID"})
    } catch (error) {
        res.json({message:error.message, error})
    }
}

