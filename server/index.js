const express=require('express');
const app=express();
const port = process.env.PORT || 9000;
const cors=require('cors');

//middlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Server working');
})
// Mongo DB
const {MongoClient,ServerApiVersion,ObjectId}=require('mongodb');
const uri='mongodb+srv://kunalrawal78:bhanwarlal@cluster0.riipfbq.mongodb.net/HotelsCollections'
const client= new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
    deprecationErrors: true,
    },
})
async function run(){
    try{
        await client.connect();
        const Hotelscollections=client.db("HotelsCollections").collection("hotels");
       //inserting hotels
        app.post('/uploadhotels',async(req,res)=>{
            const data=req.body;
            const result= await Hotelscollections.insertOne(data); 
            res.send(result);
        })

        // get all hotels
        app.get('/allhotels',async(req,res)=>{
            const hotels=Hotelscollections.find({});
            const result=await hotels.toArray();
            res.send(result);
        })
        // update hotels
        app.patch('/hotels/:id',async(req,res)=>{
            const id=req.params.id;
            console.log(id);
            const updatehotelsdata=req.body;
            const filter={_id:new ObjectId(id)}
            const updateDoc={
                $set:{
                    ...updatehotelsdata
                },
            }
            const options={upsert:true}
            const result=await Hotelscollections.updateOne(filter,updateDoc,options);
            res.send(result);

        })
        // deleting specific hotel
        app.delete('/hotels/:id',async(req,res)=>{
            const id=req.params.id;
            const filter={_id:new ObjectId(id)};
            const result= Hotelscollections.deleteOne(filter)
            res.send(result);

        })
        //find hotels by Country
        app.get('/all-hotels/:country',async(req,res)=>{
            let query={};
            if(req.query?.country){
                query={country:req.query.country};
            }
            const result= await Hotelscollections.find(query).toArray();
            res.send(result);
        })
        // to get single / specific hotel data
        app.get('/hotel/:id',async(req,res)=>{
            const id=req.params.id;
            const filter={_id:new ObjectId(id)};
            const result=await Hotelscollections.findOne(filter);
            res.send(result);


        })
        
        await client.db("admin").command({ ping: 1 });
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
     
}
run().catch(console.dir);


app.listen(port,()=>{
  
    console.log(`Server is running on port ${port}`);
})